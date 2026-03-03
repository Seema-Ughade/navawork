import { AboutUs } from "./components/landing/about-us/about-us";
import { FAQSection } from "./components/landing/faq-section/faq-section";
import { Hero } from "./components/landing/hero-section/hero-section";
import Service from "./components/landing/service-card/service";
import { IndustryScroll } from "./components/landing/IndustryScroll/IndustryScroll";
import OurWorkCard from "./components/landing/our-work/our-work-showcase";
import ServicesShowcase from "./components/landing/our-service-section/our-service-section-showcase";
import { GTMStrategyContainer } from "./components/landing/strategy-section/gtm-strategy-container";
import RoadmapSection from "./components/landing/roadmap-section/roadmap-section";
import AnnouncementBar from "./components/landing/AnnouncementBar";
import HeroCTA from "./components/landing/HeroCTA";
import Footer from "./components/landing/footer/Footer";
import Navbar from "./components/landing/navbar/Navbar";


export default function Page() {
  return (
    <>      
      <Hero />
      <Service />
      <IndustryScroll />
      <ServicesShowcase />
      <GTMStrategyContainer />
      <RoadmapSection />  
      <OurWorkCard />
      <AboutUs />
      <FAQSection />
      <HeroCTA /> 
      <Footer />
    </>
  );
}