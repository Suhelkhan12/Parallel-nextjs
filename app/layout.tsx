import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar/Navbar";

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
      <body>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
