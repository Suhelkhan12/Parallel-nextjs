import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
import { LenisScroll } from "@/component/LenisScroll/LenisScroll";

const j_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
      <body className={j_sans.className}>
        <Navbar />
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
