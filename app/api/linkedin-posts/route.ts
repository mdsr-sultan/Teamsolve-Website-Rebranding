import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Cache for 1 hour

interface LinkedInPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  timestamp: number;
  linkedinUrl: string;
  image: string;
}

export async function GET() {
  try {
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    const orgId = process.env.LINKEDIN_ORG_ID;

    if (!accessToken || !orgId) {
      return NextResponse.json(
        { error: "Missing LinkedIn credentials" },
        { status: 500 }
      );
    }

    // Check if access token is placeholder
    if (accessToken === "YOUR_ACCESS_TOKEN_HERE") {
      console.warn("LinkedIn Access Token not configured - using fallback data");
      return NextResponse.json({ 
        posts: [],
        message: "Access token not configured" 
      });
    }

    // Fetch organization posts using LinkedIn API v2
    const response = await fetch(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=urn:li:organization:${orgId}&count=10&sortBy=LAST_MODIFIED`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Restli-Protocol-Version": "2.0.0",
          "LinkedIn-Version": "202304",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("LinkedIn API Error:", error);
      return NextResponse.json(
        { error: "Failed to fetch LinkedIn posts", details: error },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform LinkedIn data to simpler format
    const posts: LinkedInPost[] = data.elements.map((post: any) => {
      const shareContent = post.specificContent?.["com.linkedin.ugc.ShareContent"];
      const commentary = shareContent?.shareCommentary?.text || "";
      const media = shareContent?.media?.[0];
      
      return {
        id: post.id,
        title: commentary.length > 100 ? commentary.substring(0, 100) + "..." : commentary || "Untitled Post",
        excerpt: commentary,
        date: new Date(post.created.time).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        timestamp: post.created.time,
        linkedinUrl: `https://www.linkedin.com/feed/update/${post.id}`,
        image: media?.url || "/images/media/placeholder.jpg",
      };
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching LinkedIn posts:", error);
    return NextResponse.json(
      { error: "Internal server error", message: String(error) },
      { status: 500 }
    );
  }
}
