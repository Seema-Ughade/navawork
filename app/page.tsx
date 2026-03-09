import { AboutUs } from "./components/landing/about-us/about-us";
import { FAQSection } from "./components/landing/faq-section/faq-section";
import { Hero } from "./components/landing/hero-section/hero-section";
import Service from "./components/landing/service-card/service";
import { IndustryScroll } from "./components/landing/IndustryScroll/IndustryScroll";
import OurWorkCard from "./components/landing/our-work/our-work-showcase";
import ServicesShowcase from "./components/landing/our-service-section/our-service-section-showcase";
import { GTMStrategyContainer } from "./components/landing/strategy-section/gtm-strategy-container";
import RoadmapSection from "./components/landing/roadmap-section/roadmap-section";
import HeroCTA from "./components/landing/HeroCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Service />
      <IndustryScroll />
      <section id="services" className="scroll-mt-[150px]">
        <ServicesShowcase />
      </section>
      <GTMStrategyContainer />
      <section id="our-process" className="scroll-mt-[150px]">
        <RoadmapSection />
      </section>
      <section id="about-us" className="scroll-mt-[150px]">
      {/* Mobile About Us */}
      <div className="block lg:hidden">
        <AboutUs />
      </div>
      </section>
      <section id="our-works" className="scroll-mt-[150px]">
        <OurWorkCard />
      </section>
      <section id="about-us" className="scroll-mt-[150px]">
        {/* Desktop About Us */}
        <div className="hidden lg:block">
          <AboutUs />
        </div>
      </section>
      <FAQSection />
      <HeroCTA />
    </>
  );
}
