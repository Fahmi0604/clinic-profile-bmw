// 'use client'

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CustomFonts } from "./fonts/custom-fonts";
import { getSettings } from "@/lib/api";
// import { PageWrapper } from "@/components";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const settings = await getSettings()

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${CustomFonts.variable} antialiased bg-white font-outfit`}
      >
        <Navbar settings={settings.data} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer settings={settings.data} />
      </body>
    </html>
  );
}
