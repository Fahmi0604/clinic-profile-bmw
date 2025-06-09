// app/fonts/my-font.ts
import localFont from "next/font/local";

export const CustomFonts = localFont({
  src: "./GothamBlack.otf",
  variable: "--font-gotham",
  display: "swap", // optional, for font loading strategy
});
