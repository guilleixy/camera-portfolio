import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
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

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guillermo Bernal",
  description: "Portfolio de Guillermo Bernal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${clashDisplayFont.variable} ${robotoMono.variable}`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
