import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://opsorch.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpsOrch | Unified Ops Platform",
    template: "%s | OpsOrch",
  },
  applicationName: "OpsOrch",
  description:
    "OpsOrch stitches together telemetry, incident response, and automation so teams can see, decide, and act with confidence.",
  keywords: [
    "opsorch",
    "operations",
    "orchestration",
    "incident response",
    "devops",
    "sre",
    "platform engineering",
    "automation",
    "pagerduty",
    "jira",
    "github",
    "prometheus",
    "slack",
    "elasticsearch",
  ],
  authors: [{ name: "OpsOrch Team", url: "https://github.com/OpsOrch" }],
  creator: "OpsOrch",
  publisher: "OpsOrch",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "OpsOrch | Unified Ops Platform",
    description:
      "OpsOrch stitches together telemetry, incident response, and automation so teams can see, decide, and act with confidence.",
    siteName: "OpsOrch",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "OpsOrch Unified Ops Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsOrch | Unified Ops Platform",
    description:
      "OpsOrch stitches together telemetry, incident response, and automation so teams can see, decide, and act with confidence.",
    creator: "@OpsOrch", // Placeholder if no handle exists yet
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
