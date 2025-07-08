// 'use client'

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CustomFonts } from "./fonts/custom-fonts";
import { getSettings } from "@/lib/api";
import Script from "next/script";

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
      <head>
        <link
          rel="preload"
          href="/assets/images/banner.webp"
          as="image"
          type="image/webp"
        />
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z67MFBT9H0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z67MFBT9H0');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBXFJRV5');
          `}
        </Script>
      </head>
      <body
        className={`${outfit.variable} ${CustomFonts.variable} antialiased bg-white font-outfit`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBXFJRV5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar settings={settings.data} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer settings={settings.data} />
      </body>
    </html>
  );
}
