import Link from "next/link";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ServicesGrid from "./components/ServicesGrid";
import SolarSection from "./components/SolarSection";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutSection from "./components/AboutSection";
import TrustLogos from "./components/TrustLogos";
import Certifications from "./components/Certifications";
import BoardOfDirectors from "./components/BoardOfDirectors";
import TransformerHotspots from "./components/TransformerHotspots";
import ProcessTimeline from "./components/ProcessTimeline";

const TITLE =
  "Mission Power Land Limited | Class-A Power Infrastructure & Transformer Manufacturer";
const DESCRIPTION =
  "Premier Class-A Government Contractor & Transformer Manufacturer in Bangladesh specializing in 33/11kV Substation, Distribution Transformers, and Solar EPC Solutions.";

export const metadata = {
  metadataBase: new URL("https://www.missionpowerland.com"),
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // হোয়াটসঅ্যাপ/ফেসবুকে লিংক শেয়ার করলে সুন্দর প্রিভিউ দেখাবে
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Mission Power Land Limited",
    type: "website",
    images: [
      {
        url: "/assets/banner/banner-img-1.jpg",
        alt: "Mission Power Land transformer factory",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-[#070A11] text-slate-100 min-h-screen overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* ১. হিরো */}
      <Hero />

      {/* ২. Stats Strip (নিজেই হিরোর ওপর ওঠার মার্জিন ধারণ করে) */}
      <StatsSection />

      {/* ৩. সরকারি তালিকাভুক্তি ও অংশীদার */}
      <TrustLogos />

      {/* ৪. Core Divisions (বাইরে আর কোনো মোড়ক নেই) */}
      <ServicesGrid />

      {/* ৫. ভেতরের গঠন ও উৎপাদন প্রক্রিয়া */}
      <TransformerHotspots />
      <ProcessTimeline />

      {/* ৬. প্রজেক্ট */}
      <FeaturedProjects />

      {/* ৭. সোলার */}
      <SolarSection />

      {/* ৮. কোম্পানি পরিচিতি */}
      <AboutSection />

      {/* ৯. ISO সার্টিফিকেট */}
      <Certifications />

      {/* ১০. পরিচালনা পর্ষদ */}
      <BoardOfDirectors />

      {/* ১১. শেষের কল-টু-অ্যাকশন */}
      <section className="py-14 md:py-20 px-5 bg-gradient-to-b from-[#070A11] to-[#0A0F1D] border-t border-amber-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Need a transformer or substation quotation?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Tell us the capacity and quantity. Our engineers will reply with a
            technical offer.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact?type=quote"
              className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 font-extrabold rounded-xl text-sm shadow-[0_0_20px_rgba(245,158,11,0.25)] active:scale-95 transition-all"
            >
              Request a quote
            </Link>
            <a
              href="tel:+8801810098909"
              className="px-7 py-3.5 bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-white font-bold rounded-xl text-sm active:scale-95 transition-all"
            >
              Call +880 1810-098909
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}