
import Banner from "./components/Banner";
import StatsSection from "./components/StatsSection";
import ServicesGrid from "./components/ServicesGrid";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutSection from "./components/AboutSection";
import TrustLogos from "./components/TrustLogos";
import EidGreetingsModal from "./components/EidGreetingsModal";


export default function Home() {
  return (
    <div>
      <EidGreetingsModal></EidGreetingsModal>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <ServicesGrid></ServicesGrid>
      <FeaturedProjects></FeaturedProjects>
      <AboutSection></AboutSection>
      <TrustLogos></TrustLogos>

    </div>
  );
}
