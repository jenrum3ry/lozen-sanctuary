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

export const metadata: Metadata = {
  title: {
    default: "Sacred Space Animal Sanctuary & Rescue",
    template: "%s | Sacred Space Animal Sanctuary",
  },
  description:
    "A sanctuary of healing where wounded bodies are nurtured, fearful hearts are restored, and spirits are given the opportunity to shine once again. Join us in saving lives.",
  openGraph: {
    title: "Sacred Space Animal Sanctuary & Rescue",
    description: "join us in saving lives",
    url: "https://sacredspaceanimalrescue.com",
    siteName: "Sacred Space Animal Sanctuary & Rescue",
    images: [{ url: "/logo-light.jpg" }],
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
