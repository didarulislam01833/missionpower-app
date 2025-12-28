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

        <Script id="tawk-chat" strategy="afterInteractive">
          {`
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    // ১. চ্যাট ওপেন হওয়ার সাথে সাথে সব পপআপ এবং নোটিফিকেশন বন্ধ করে দেওয়া
    Tawk_API.onChatMaximized = function(){
        Tawk_API.setAttributes({
            'attention-grabber-enabled' : false,
            'greetings-enabled' : false
        }, function(error){});
    };

    Tawk_API.onLoad = function(){
        Tawk_API.showWidget();
        Tawk_API.minimize();
    };

    // ২. ডিফল্ট পপআপগুলো যাতে শুরুতেই না আসে তার জন্য সেটিংস
    Tawk_API.onAppInit = function(){
        Tawk_API.setAttributes({
            'attention-grabber-enabled' : false, // কালো 'n' চিহ্ন বন্ধ করবে
            'greetings-enabled' : false          // "Hi! How can we help?" বাবল বন্ধ করবে
        }, function(error){});
    };

    Tawk_API.customStyle = {
        visibility : {
            desktop : { position : 'bl', xOffset : 25, yOffset : 25 },
            mobile : { position : 'bl', xOffset : 15, yOffset : 85 }
        }
    };

    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/694f7406096840197e575277/1jdf5qegp';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
        </Script>
      </body>
    </html>
  );
}