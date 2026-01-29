import { PageHeader } from "@/components/layout/page-header";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/shared/contact-form";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { CTASection } from "@/components/sections/cta-section";
import { CONTACT_PAGE } from "@/lib/contact-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TeamSolve",
  description: "Interested in solving your problems with TeamSolve? Get in touch with our team to learn how Knowledge Twin can transform your operations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      
      <PageHero
        title={CONTACT_PAGE.hero.title}
        description={CONTACT_PAGE.hero.description}
      />

      {/* Contact Form Section */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto w-11/12 max-w-4xl">
          <ContactForm />
        </div>
      </section>

      {/* Trusted By Carousel */}
      <TrustedBySection />

      {/* CTA Section */}
      <CTASection title="Ready to Experience the Power of Knowledge Twin™?" />
    </>
  );
}
