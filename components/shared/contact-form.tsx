"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { CONTACT_PAGE } from "@/lib/contact-config";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email"),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  company: z.string().min(2, "Company name is required"),
  country: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your project"),
  marketingConsent: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketingConsent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsError(false);

    try {
      // Send email via API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form
      reset();
      setValue("marketingConsent", false);

      // Auto-hide modal after 5 seconds
      setTimeout(() => setShowSuccessModal(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
        {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div 
            className="mx-auto flex max-w-md flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-white px-6 py-10 sm:px-8 sm:py-12 text-center shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
            </div>
            <h3 className="font-ubuntu mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
              {CONTACT_PAGE.form.successTitle}
            </h3>
            <p className="font-ubuntu mb-5 sm:mb-6 text-sm sm:text-base text-[var(--color-text-secondary)]">
              We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="font-ubuntu rounded-lg bg-[var(--color-text-primary)] px-6 py-2.5 sm:px-8 sm:py-3 text-sm font-bold text-white transition-all hover:bg-[var(--color-text-primary)]/90"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl">
        {/* Form Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center px-4">
          <h2 className="font-ubuntu mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            {CONTACT_PAGE.form.title}
          </h2>
          <p className="font-poppins font-light text-base sm:text-lg text-[var(--color-text-secondary)]">
            {CONTACT_PAGE.form.description}
          </p>
        </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 sm:space-y-6 rounded-xl sm:rounded-2xl border border-[var(--color-border-light)] bg-white p-6 sm:p-8 shadow-sm md:p-12"
      >
        {/* Name Fields - Side by Side */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* First Name */}
          <div className="space-y-2">
            <Label
              htmlFor="firstName"
              className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
            >
              {CONTACT_PAGE.fields.firstName.label}
            </Label>
            <Input
              id="firstName"
              {...register("firstName")}
              disabled={isSubmitting}
              className="h-12 rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
            />
            {errors.firstName && (
              <p className="font-ubuntu text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label
              htmlFor="lastName"
              className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
            >
              {CONTACT_PAGE.fields.lastName.label}
            </Label>
            <Input
              id="lastName"
              {...register("lastName")}
              disabled={isSubmitting}
              className="h-12 rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
            />
            {errors.lastName && (
              <p className="font-ubuntu text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
          >
            {CONTACT_PAGE.fields.email.label}
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            disabled={isSubmitting}
            className="h-12 rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
          />
          {errors.email && (
            <p className="font-ubuntu text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
          >
            {CONTACT_PAGE.fields.phone.label}
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            disabled={isSubmitting}
            className="h-12 rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
          />
        </div>

        {/* Job Title and Company - Side by Side */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Job Title */}
          <div className="space-y-2">
            <Label
              htmlFor="jobTitle"
              className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
            >
              {CONTACT_PAGE.fields.jobTitle.label}
            </Label>
            <Input
              id="jobTitle"
              {...register("jobTitle")}
              disabled={isSubmitting}
              className="h-12 rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label
              htmlFor="company"
              className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
            >
              {CONTACT_PAGE.fields.company.label}
            </Label>
            <Input
              id="company"
              {...register("company")}
              disabled={isSubmitting}
              className="h-12 rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
            />
            {errors.company && (
              <p className="font-ubuntu text-sm text-red-600">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label
            htmlFor="country"
            className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
          >
            {CONTACT_PAGE.fields.country.label}
          </Label>
          <Input
            id="country"
            {...register("country")}
            disabled={isSubmitting}
            className="h-12 rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="font-ubuntu text-sm font-medium text-[var(--color-text-primary)]"
          >
            {CONTACT_PAGE.fields.message.label}
          </Label>
          <Textarea
            id="message"
            rows={6}
            {...register("message")}
            disabled={isSubmitting}
            className="rounded-lg border-[var(--color-border-light)] font-ubuntu focus:border-[var(--brand-teal)] focus:ring-[var(--brand-teal)]"
          />
          {errors.message && (
            <p className="font-ubuntu text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* GDPR Compliance - Marketing Consent */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="marketingConsent"
            {...register("marketingConsent")}
            disabled={isSubmitting}
            className="mt-1"
          />
          <Label
            htmlFor="marketingConsent"
            className="font-poppins font-light text-sm font-normal leading-relaxed text-[var(--color-text-primary)] cursor-pointer"
          >
            {CONTACT_PAGE.gdpr.marketingCheckbox}
          </Label>
        </div>

        {/* Privacy Policy Text (No Checkbox) */}
        <p className="font-poppins font-light text-sm font-normal leading-relaxed text-[var(--color-text-primary)]">
          {CONTACT_PAGE.gdpr.privacyText}{" "}
          <Link 
            href="/privacy-policy"
            className="underline hover:text-[var(--brand-teal)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT_PAGE.gdpr.privacyLink}
          </Link>
        </p>

        {/* Error Message */}
        {isError && (
          <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
            <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
            <p className="font-ubuntu text-sm text-red-600">
              {CONTACT_PAGE.form.errorTitle}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group h-12 sm:h-14 w-full rounded-lg bg-[var(--color-text-primary)] font-ubuntu text-sm sm:text-base font-bold text-white transition-all hover:bg-[var(--color-text-primary)]/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
              <span className="animate-pulse text-sm sm:text-base">Sending message...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center">
              {CONTACT_PAGE.form.submitText}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
        </Button>
      </form>
    </div>
    </>
  );
}
