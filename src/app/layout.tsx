// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Newsreader } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "CashBidPrices.com",
  description:
    "CashBidPrices.com - The best way to get the latest bidding prices in your area for corn, soybeans, and wheat.",
};

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
});
const space_mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space_mono",
  weight: "400",
  style: "normal",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={newsreader.variable + " " + space_mono.variable}>
        {children}
      </body>
    </html>
  );
}
