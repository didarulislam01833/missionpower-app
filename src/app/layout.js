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
  description: "This is Mission Power Land Limited Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />

        {/* HubSpot Live Chat - Replaced Tawk.to */}
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          strategy="afterInteractive"
          src="//js-na2.hs-scripts.com/244746262.js"
        />
      </body>
    </html>
  );
}