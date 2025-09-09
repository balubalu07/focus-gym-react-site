import React from "react";
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
const Index = () => {
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
