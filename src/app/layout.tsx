import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "NovaEdge — AI-ready landing page template",
  description:
    "NovaEdge is a modern landing page template for AI, SaaS, and professional services teams ready to launch fast.",
  openGraph: {
    title: "NovaEdge — AI-ready landing page template",
    description:
      "Launch a polished AI/SaaS landing page with clear value props, social proof, and conversion-ready sections.",
    url: "/",
    siteName: "NovaEdge",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NovaEdge landing page preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaEdge — AI-ready landing page template",
    description:
      "Launch a polished AI/SaaS landing page with clear value props, social proof, and conversion-ready sections.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-text-main antialiased">{children}</body>
    </html>
  );
}
