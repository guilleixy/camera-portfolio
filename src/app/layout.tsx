import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const clashDisplayFont = localFont({
  src: [
    {
      path: "../../public/fonts/clash_display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash_display/ClashDisplay-Medium.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  title: "Guillermo Bernal",
  description: "Portfolio de Guillermo Bernal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplayFont.variable}`}>{children}</body>
    </html>
  );
}
