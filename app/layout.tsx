import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { WhatsAppFloat } from "@/app/components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI for Operators | Practical AI for Operations & Execution Teams",
    template: "%s | AI for Operators",
  },
  description:
    "AI for Operators delivers practical AI workflows for operations managers, sales leads, CXOs, and execution teams who need better reporting, SOPs, delegation, and team systems.",
  metadataBase: new URL("https://www.aiforoperators.org"),
  alternates: { canonical: "/" },
  keywords: [
    "AI for operators",
    "AI for operations managers",
    "AI operations India",
    "AI for business operations",
    "AI reporting SOPs",
    "AI team management",
    "operations AI training",
    "AI for execution teams",
    "practical AI operations",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI for Operators | Practical AI for Operations & Execution Teams",
    description:
      "Practical AI for operations, reporting, SOPs, delegation, and team execution. India first.",
    url: "https://www.aiforoperators.org",
    siteName: "AI for Operators",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Operators",
    description: "Practical AI for the people running the business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
