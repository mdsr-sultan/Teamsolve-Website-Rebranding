"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  linkedinUrl: string;
  image: string;
}

interface LinkedInFeedProps {
  posts: Post[];
}

export function LinkedInFeed({ posts }: LinkedInFeedProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto w-11/12 max-w-7xl text-center">
          <p className="font-poppins font-light text-base sm:text-lg text-text-secondary">
            No posts available at the moment. Follow us on LinkedIn for updates!
          </p>
        </div>
      </section>
    );
  }

  const [featuredPost, ...allOtherPosts] = posts;
  const relatedPosts = allOtherPosts.slice(0, 3); // First 3 for "Related Posts"
  const regularPosts = allOtherPosts.slice(3); // Remaining for grid

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto w-11/12 max-w-7xl">
        {/* Featured Post + Related Posts Section */}
        {featuredPost && (
          <div className="mb-12 sm:mb-16 lg:mb-32">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
              {/* Left: Featured Post */}
              <div className="flex-1 lg:w-[60%]">
                <div className="group relative flex flex-col">
                  {/* Featured Post Image */}
                  <div className="relative h-64 sm:h-80 lg:h-[350px] overflow-hidden rounded-lg">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Featured Post Content */}
                  <div className="flex flex-col pt-3">
                    {/* Badges */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      <div className="rounded-sm bg-[#1F2937] px-3 py-0.5">
                        <span className="font-ubuntu text-xs uppercase tracking-wider text-white">
                          Featured
                        </span>
                      </div>
                      <div className="rounded-sm bg-[#3434343D] px-3 py-0.5">
                        <span className="font-ubuntu text-xs  uppercase tracking-wider text-black">
                          New
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-ubuntu mb-auto text-base sm:text-lg lg:text-xl font-bold leading-tight text-text-primary">
                      {featuredPost.title}
                    </h2>

                    {/* Date and LinkedIn Link */}
                    <div className="mt-6 flex items-center justify-between">
                      <p className="font-poppins text-sm text-[var(--color-text-muted)]">
                        {featuredPost.date}
                      </p>
                      <a
                        href={featuredPost.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-ubuntu text-base font-bold text-[var(--brand-linkedin-blue)] transition-opacity hover:opacity-80"
                      >
                        Linkedin
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="lg:w-[40%]">
                  <h3 className="font-ubuntu mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-text-primary">
                    Related Posts
                  </h3>
                  <div className="flex flex-col gap-2">
                    {relatedPosts.map((post) => (
                      <div
                        key={post.id}
                        className="group flex gap-6"
                      >
                        {/* Image - Left Side */}
                        <div className="relative h-24 w-24 sm:h-36 sm:w-36 flex-shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Content - Right Side */}
                        <div className="flex flex-1 flex-col justify-between py-2">
                          <div>
                            <p className="font-poppins mb-2 text-sm text-[var(--color-text-muted)]">
                              {post.date}
                            </p>
                            <h4 className="font-ubuntu text-sm sm:text-base font-bold leading-snug text-text-primary line-clamp-2">
                              {post.title}
                            </h4>
                          </div>
                          <a
                            href={post.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1.5 font-ubuntu text-base font-bold text-[var(--brand-linkedin-blue)] transition-opacity hover:opacity-80"
                          >
                            Linkedin
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Regular Posts Grid - 3 Columns (Remaining posts) */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="group flex flex-col overflow-hidden border border-[var(--color-border-light)] rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-5 sm:p-6 flex-1">
                  {/* Title */}
                  <h3 className="font-ubuntu mb-auto text-lg sm:text-xl font-bold leading-snug text-text-primary line-clamp-2 pb-3 sm:pb-6">
                    {post.title}
                  </h3>

                  {/* Date and LinkedIn Link */}
                  <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-[var(--color-border-light)]">
                    <p className="font-poppins text-sm text-[var(--color-text-muted)]">
                      {post.date}
                    </p>
                    <a
                      href={post.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-ubuntu text-base font-bold text-[var(--brand-linkedin-blue)] transition-opacity hover:opacity-80"
                    >
                      Linkedin
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
