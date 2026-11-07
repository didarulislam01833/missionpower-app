import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ServicesGrid from "./components/ServicesGrid";
import SolarSection from "./components/SolarSection";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutSection from "./components/AboutSection";
import TrustLogos from "./components/TrustLogos";
import BoardOfDirectors from "./components/BoardOfDirectors";

export const metadata = {
  title: "Mission Power Land Limited | Class-A Power Infrastructure & Transformer Manufacturer",
  description: "Premier Class-A Government Contractor & Transformer Manufacturer in Bangladesh specializing in 33/11kV Substation, Distribution Transformers, and Solar EPC Solutions.",
};

export default function Home() {
  return (
    <main className="bg-[#070A11] text-slate-100 min-h-screen overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* Dynamic Hero Carousel Section */}
      <Banner />

      {/* Trust & Live Operational Stats Strip */}
      <div className="relative z-20 -mt-6 px-4 max-w-7xl mx-auto">
        <StatsSection />
      </div>

      {/* Core Manufacturing & Engineering Capabilities */}
      <section className="py-12 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none" />
        <ServicesGrid />
      </section>

      {/* Solar Systems & Renewable Energy Works */}
      <section className="relative">
        <SolarSection />
      </section>

      {/* Class-A Government Approvals & Enlistments */}
      <section className="py-8 bg-slate-900/80 border-y border-amber-500/20 backdrop-blur-md">
        <TrustLogos />
      </section>

      {/* Technical Excellence & Infrastructure Showcase */}
      <section className="py-12 md:py-20 px-4">
        <FeaturedProjects />
      </section>

      {/* Corporate Legacy & Factory Overview */}
      <section className="py-12 md:py-20 bg-[#0A0F1D] border-t border-slate-800">
        <AboutSection />
      </section>

      {/* Board of Directors Section */}
      <BoardOfDirectors />

      {/* Floating Quick Action Launcher for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
        <a
          href="https://wa.me/8801810098909"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 active:scale-95 transition-transform"
          aria-label="WhatsApp Chat"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.097-4.996c1.517.9 3.27 1.378 5.068 1.379 5.297 0 9.607-4.31 9.609-9.608 0-2.567-1-4.98-2.813-6.793-1.813-1.813-4.227-2.813-6.794-2.813-5.297 0-9.608 4.311-9.609 9.609 0 1.9.544 3.755 1.572 5.345l-1.03 3.762 3.996-1.046z" />
          </svg>
        </a>
      </div>
    </main>
  );
}