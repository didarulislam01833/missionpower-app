import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";
import ChatWrapper from "./components/ChatWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.missionpowerland.com"),
  title: {
    default: "Mission Power Land Ltd | Transformer Manufacturer & Class-A Contractor, Bangladesh",
    template: "%s | Mission Power Land Ltd",
  },
  description:
    "Distribution transformers, 33/11kV substations and solar EPC for BREB, BPDB, DESCO and DPDC. Factory in Gazipur.",
  openGraph: {
    type: "website",
    siteName: "Mission Power Land Limited",
    locale: "en_BD",
    images: ["/assets/og-image.jpg"], // 1200x630, public/assets/ ফোল্ডারে রাখুন
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <Navbar />
        {children}
        <WhatsAppButton />

        {/* চ্যাটবট ChatWrapper-এর মাধ্যমে লোড হয় */}
        <ChatWrapper />

        <Footer />

        {process.env.NEXT_PUBLIC_ENABLE_HUBSPOT === "true" && (
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