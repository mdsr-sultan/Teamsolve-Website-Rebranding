export const CONTACT_PAGE = {
  hero: {
    title: "Contact Us",
    description: "Interested in solving your problems with TeamSolve?",
  },
  form: {
    title: "Send Us a Message",
    description: "Use our contact form to reach out with your questions or feedback inquiries.",
    submitText: "Send Message",
    successTitle: "Thank you! Your submission has been received!",
    errorTitle: "Oops! Something went wrong while submitting the form.",
  },
  fields: {
    firstName: {
      label: "First name",
      required: true,
    },
    lastName: {
      label: "Last name",
      required: true,
    },
    email: {
      label: "Business Email Address",
      required: true,
    },
    phone: {
      label: "Phone number",
      required: false,
    },
    jobTitle: {
      label: "Job Title",
      required: false,
    },
    company: {
      label: "Company/Institution",
      required: true,
    },
    country: {
      label: "Country",
      required: false,
    },
    message: {
      label: "Tell us about your project",
      required: true,
    },
  },
  gdpr: {
    marketingCheckbox: "Yes, I would like to receive marketing communication regarding TeamSolve's products, services, and events from TeamSolve and its regional partners.",
    privacyText: "By submitting this form, you agree to the processing of personal data according to our",
    privacyLink: "privacy policy",
  },
  trustedBy: {
    title: "Trusted by Global Industry Leaders",
  },
  email: {
    recipient: "m.sultan@teamsolve.com",
    subject: "New Contact Form Submission - TeamSolve",
  },
} as const;
