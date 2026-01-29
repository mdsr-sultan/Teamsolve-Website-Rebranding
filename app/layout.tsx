import type { Metadata } from "next";
import { Ubuntu, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teamsolve.com"),
  title: {
    default: "TeamSolve - Knowledge Twin for Operational Excellence",
    template: "%s | TeamSolve",
  },
  description: "Transform the complexity of infrastructure operations into actionable insights that teams can trust. Efficient Asset Maintenance and Field Operations powered by AI.",
  keywords: ["Knowledge Twin", "AI", "Asset Management", "Field Operations", "Utilities", "Infrastructure", "CMMS", "Predictive Maintenance"],
  authors: [{ name: "TeamSolve" }],
  creator: "TeamSolve",
  publisher: "TeamSolve",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.teamsolve.com",
    title: "TeamSolve - Knowledge Twin for Operational Excellence",
    description: "Transform infrastructure operations into actionable insights with AI-powered Knowledge Twin.",
    siteName: "TeamSolve",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeamSolve - Knowledge Twin",
    description: "AI-powered operational excellence for utilities and infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.variable} ${poppins.variable} font-ubuntu antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
