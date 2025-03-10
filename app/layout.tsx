import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import localFont from "next/font/local"

import { Providers } from "../providers/providers";

import Container from "./(home)/_components/ui/container";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
const GreatVibes = localFont({src:"../font/GreatVibes-Regular.ttf", variable:"--GreatVibes-Regular"})
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 600,
        alt: siteConfig.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#000000" name="theme-color" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans md:comic-neue antialiased",
          fontSans.variable, GreatVibes.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
