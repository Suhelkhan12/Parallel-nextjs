import type { Metadata } from "next";
import "./globals.css";
import { LenisScroll } from "@/component/LenisScroll/LenisScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/component/Navbar/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Case Studies | UX Design Agency | Parallel",
  description:
    "Parallel is a UX design studio in Bangalore, India. We specialise in creating User Experiences for B2B SAAS, Fintech User Experience, Edutech UX, and eCommerce user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Navbar />
        <LenisScroll>{children}</LenisScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
