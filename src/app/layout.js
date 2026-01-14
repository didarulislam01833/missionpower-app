import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mission Power Land Limited",
  description: "Engineering Excellence Since 2014 - Power Grids and Land Development.",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning ব্রাউজার এক্সটেনশন জনিত এরর বন্ধ করবে
    // data-scroll-behavior="smooth" নেক্সট জেএস এর স্ক্রল ওয়ার্নিং দূর করবে
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      {/* 'relative' ক্লাসটি স্ক্রল অফসেট ক্যালকুলেশন ঠিক করবে */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />

        {/* HubSpot স্ক্রিপ্ট strategy="lazyOnload" দিলে পেজ লোড হওয়ার পর শান্তভাবে রান করবে */}
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          strategy="lazyOnload"
          src="//js-na2.hs-scripts.com/244746262.js"
        />
      </body>
    </html>
  );
}