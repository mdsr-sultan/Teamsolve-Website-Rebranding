import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { PAGE_HEROES } from "@/lib/page-config";
import { ABOUT_CONTENT, TEAM_IMAGES } from "@/lib/about-config";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import siteData from "@/content/site-data.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TeamSolve | Meet the team behind Knowledge Twin",
  description: "TeamSolve was founded to help utility and industrial teams make better use of the work they already do and the data they already have.",
};

export default function AboutPage() {
  const { story, mission, vision, leadership, tagline, teamSection } = ABOUT_CONTENT;

  return (
    <>
      <PageHeader />
      <PageHero {...PAGE_HEROES.about} />

      {/* About Content */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto w-11/12 max-w-7xl">
          
          {/* Company Story */}
          <div className="pb-10 sm:pb-12 lg:pb-16">
            <p className="font-poppins font-light text-center text-sm sm:text-base leading-relaxed text-text-secondary lg:text-lg">
              {story.text}
            </p>
          </div>

          {/* Two-Column Sections with Dividers */}
          <div className="divide-y divide-divider">
            
            {/* Our Mission */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
              <div className="lg:col-span-3">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {mission.title}
                </h2>
              </div>
              <div className="lg:col-span-9">
                <p className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-secondary lg:text-lg">
                  {mission.description}
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
              <div className="lg:col-span-3">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {vision.title}
                </h2>
              </div>
              <div className="lg:col-span-9">
                <p className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-secondary lg:text-lg">
                  {vision.description}
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
              <div className="lg:col-span-3">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {leadership.title}
                </h2>
              </div>
              <div className="lg:col-span-9">
                <p className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-secondary lg:text-lg">
                  {leadership.description}
                </p>
              </div>
            </div>

            {/* Built for Operators */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
              <div className="lg:col-span-3">
                <h2 className="whitespace-pre-line text-xl sm:text-2xl font-bold text-text-primary lg:text-3xl">
                  {tagline.title}
                </h2>
              </div>
              <div className="lg:col-span-9">
                <p className="font-poppins font-light text-sm sm:text-base leading-relaxed text-text-secondary lg:text-lg">
                  {tagline.description}
                </p>
              </div>
            </div>

          </div>

          {/* Team Images Grid */}
          <div className="mt-2 md:mt-4 lg:mt-6">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src={TEAM_IMAGES.image1}
                alt="TeamSolve team presentation"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="w-full bg-bg-light py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto w-11/12 max-w-7xl">
          <div className="mb-10 sm:mb-12 text-center lg:mb-16">
            <div className="mb-3 sm:mb-4 inline-flex items-center justify-center rounded-full border border-[--color-pill-border] bg-[--color-pill-bg] px-4 sm:px-6 py-1.5 sm:py-2">
              <span className="text-xs sm:text-sm font-medium text-text-primary">
                {teamSection.eyebrow}
              </span>
            </div>
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-bold text-text-primary lg:text-[2.5rem]">
              {teamSection.title}
            </h2>
            <p className="text-sm sm:text-base text-[--color-text-gray] lg:text-lg">
              {teamSection.subtitle}
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {siteData.team.map((member) => (
              <Card key={member.name} className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[--color-card-border] bg-white shadow-none">
                <CardContent className="flex flex-col items-center text-center p-3 sm:p-4">
                  {/* Team Member Photo with Background Circle */}
                  <div className="mb-4 sm:mb-5 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full p-2 lg:h-48 lg:w-48">
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={192}
                        height={192}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-xl sm:text-2xl font-bold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="mb-4 sm:mb-5 text-sm sm:text-base font-normal leading-snug text-text-secondary">
                    {member.title}
                  </p>
                  <p className="mb-auto font-poppins text-sm sm:text-base font-light leading-relaxed text-text-secondary">
                    {member.bio}
                  </p>
                  
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 sm:mt-6 text-text-primary transition-colors hover:text-brand-teal"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" fill="currentColor" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
