import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { LinkedInFeed } from "@/components/sections/linkedin-feed";
import { CTASection } from "@/components/sections/cta-section";
import { PAGE_HEROES } from "@/lib/page-config";
import { FALLBACK_LINKEDIN_POSTS } from "@/lib/linkedin-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & News | TeamSolve",
  description: "Innovation in Action. For the latest news and updates, follow us on LinkedIn",
};

export const revalidate = 3600; // Revalidate every hour

async function getLinkedInPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/linkedin-posts`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Failed to fetch LinkedIn posts, using fallback data");
      return FALLBACK_LINKEDIN_POSTS;
    }

    const data = await response.json();
    
    // If API returns empty posts or error, use fallback
    if (!data.posts || data.posts.length === 0) {
      console.log("No posts from API, using fallback data");
      return FALLBACK_LINKEDIN_POSTS;
    }

    return data.posts;
  } catch (error) {
    console.error("Error loading LinkedIn posts:", error);
    return FALLBACK_LINKEDIN_POSTS;
  }
}

export default async function MediaPage() {
  const posts = await getLinkedInPosts();

  return (
    <>
      <PageHeader />
      <PageHero {...PAGE_HEROES.media} />
      <LinkedInFeed posts={posts} />
      <CTASection title="Ready to Experience TeamSolve?" />
    </>
  );
}
