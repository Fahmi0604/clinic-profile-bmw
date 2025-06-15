'use client'

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { CustomFonts } from "./fonts/custom-fonts";
// import { PageWrapper } from "@/components";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${CustomFonts.variable} antialiased bg-white font-outfit`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
