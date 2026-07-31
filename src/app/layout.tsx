import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { AIAssistant } from "@/components/layout/AIAssistant";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Databytes Pty Ltd — Innovating Today. Empowering Tomorrow.",
    template: "%s | Databytes Pty Ltd",
  },
  description:
    "Databytes Pty Ltd delivers innovative, secure IT solutions for government, education, and private-sector organizations across Seychelles.",
  openGraph: {
    title: "Databytes Pty Ltd",
    description:
      "Innovating today. Empowering tomorrow. IT solutions across Seychelles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-body">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <AIAssistant />
        <ScrollToTop />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
