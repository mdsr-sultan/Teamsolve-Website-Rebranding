import { NextResponse } from "next/server";
import { CONTACT_PAGE } from "@/lib/contact-config";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Email content
    const emailContent = `
New Contact Form Submission from TeamSolve Website

Contact Information:
--------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Job Title: ${data.jobTitle || "Not provided"}
Company: ${data.company}
Country: ${data.country || "Not provided"}

Message:
--------
${data.message}

GDPR Consent:
-------------
Marketing Communications: ${data.marketingConsent ? "Yes" : "No"}

Submitted at: ${new Date().toLocaleString()}
    `.trim();

    console.log("=== Contact Form Submission ===");
    console.log(emailContent);
    console.log("===============================");

    // TODO: Implement actual email sending service
    // Options:
    // 1. Resend (recommended): https://resend.com
    // 2. SendGrid: https://sendgrid.com
    // 3. AWS SES: https://aws.amazon.com/ses/
    // 4. Nodemailer with SMTP
    
    // Example with Resend (install: npm install resend):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@teamsolve.com',
      to: CONTACT_PAGE.email.recipient,
      subject: CONTACT_PAGE.email.subject,
      text: emailContent,
    });
    */

    // For now, simulate success
    // In production, replace this with actual email service
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully",
        // Remove this in production - only for development
        devNote: `Email would be sent to: ${CONTACT_PAGE.email.recipient}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
