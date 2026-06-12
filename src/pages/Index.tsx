import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Trainers from "@/components/Trainers";
import GymShowcase from "@/components/GymShowcase";
import Testimonials from "@/components/Testimonials";
import MobileApp from "@/components/MobileApp";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollToApp
      ? "app"
      : location.state?.scrollTo;
    if (!targetId) return;
    // wait for sections (and pinned galleries) to mount before measuring
    const timeout = window.setTimeout(() => {
      const section = document.getElementById(targetId);
      if (!section) return;
      const yOffset = targetId === "app" ? -window.innerHeight / 4 : -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(timeout);
  }, [location]);

  return (
    <div className="min-h-screen bg-ink">
      <Navigation />
      <Hero />
      <Marquee />
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
