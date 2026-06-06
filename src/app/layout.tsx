import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Update siteUrl to sacredspaceanimalrescue.com once the custom domain is live.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jenrum3ry.github.io/lozen-sanctuary";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sacred Space Animal Sanctuary & Rescue",
    template: "%s | Sacred Space Animal Sanctuary",
  },
  description:
    "A sanctuary of healing where wounded bodies are nurtured, fearful hearts are restored, and spirits are given the opportunity to shine once again. Join us in saving lives.",
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "Sacred Space Animal Sanctuary & Rescue",
    description:
      "join us in saving lives — a sanctuary of healing for animals who have been abandoned, neglected, and forgotten. Every soul is honored. Every life matters.",
    url: siteUrl,
    siteName: "Sacred Space Animal Sanctuary & Rescue",
    images: [
      {
        url: "/og-image.jpg",
        width: 959,
        height: 958,
        alt: "Sacred Space Animal Sanctuary and Rescue — join us in saving lives",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Space Animal Sanctuary & Rescue",
    description: "join us in saving lives",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
