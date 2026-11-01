import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";
import ChatWrapper from "./components/ChatWrapper";
// ১. নতুন তৈরি করা ChatWrapper ইম্পোর্ট করুন


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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <Navbar />
        {children}
        <WhatsAppButton />

        {/* ২. চ্যাটবট এখন নিরাপদে লোড হবে */}
        <ChatWrapper />

        <Footer />

        {process.env.NEXT_PUBLIC_ENABLE_HUBSPOT === 'true' && (
          <Script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            strategy="lazyOnload"
            src="//js-na2.hs-scripts.com/244746262.js"
          />
        )}
      </body>
    </html>
  );
}