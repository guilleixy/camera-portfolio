import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../globals.css";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { LocaleProvider, useLanguage } from "../../context/LocaleContext";
const clashDisplayFont = localFont({
  src: [
    {
      path: "../../../public/fonts/clash_display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/clash_display/ClashDisplay-Medium.woff2",
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
  metadataBase: new URL("https://www.guille.be/"),
  title: "Guillermo Bernal",
  description: "Guillermo Bernal",
  openGraph: {
    title: "Guillermo Bernal",
    description: "Guillermo Bernal - Developer Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guillermo Bernal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo Bernal",
    description: "Guillermo Bernal - Developer Portfolio",
    images: ["/images/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html>
      <body className={`${clashDisplayFont.variable} ${robotoMono.variable}`}>
        <NextIntlClientProvider>
          <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
