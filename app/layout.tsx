import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: "IIT BHU Varanasi: E-Summit'26",
  description: "E-Summit has a range of events, competitions, panel discussions, networking opportunities for every vertical of our entrepreneurial society.",
  
  icons: {
    icon: [
      {
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/E-Cell-White[1].png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  
  openGraph: {
    title: "IIT BHU Varanasi: E-Summit'26",
    description: "E-Summit has a range of events, competitions, panel discussions, networking opportunities for every vertical of our entrepreneurial society.",
    url: "https://esummit.ecelliitbhu.com",
    siteName: "E-Cell IIT BHU",
    images: [
      {
        url: "/logos/ecell-search-logo-blackbg.jpeg", // CHANGE THIS TO YOUR PREFERRED IMAGE
        width: 1200,
        height: 630,
        alt: "E-Summit 26 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "IIT BHU Varanasi: E-Summit'26",
    description: "E-Summit has a range of events, competitions, panel discussions, networking opportunities for every vertical of our entrepreneurial society.",
    images: ["/logos/ecell-search-logo-blackbg.jpeg"], // CHANGE THIS TOO
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}