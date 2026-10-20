import type { Metadata } from "next";
import { Anton, Lora, Montserrat, Sacramento } from "next/font/google";
import { site } from "@/content/site";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

const display = Lora({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const script = Sacramento({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: "400",
});

// Section titles, all caps (from the mood board).
const title = Anton({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Collabs with Shadé | ${site.tagline}`,
  description: site.hero.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${title.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
