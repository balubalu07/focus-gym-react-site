import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileApp from "@/components/MobileApp";
import GymShowcase from "@/components/GymShowcase";
import { useLocation } from "react-router-dom";
const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToApp) {
      const appSection = document.getElementById("app");
      if (appSection) {
        const yOffset = -window.innerHeight / 4;
        const y =
          appSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Trainers />
      <GymShowcase />
      <Testimonials />
      <MobileApp />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
