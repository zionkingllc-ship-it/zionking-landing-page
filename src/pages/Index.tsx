import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundationSection from "@/components/FoundationSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ZionaSection from "@/components/ZionaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FoundationSection />
      <WhatWeDoSection />
      <ZionaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
