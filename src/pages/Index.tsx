
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GymShowcase from '@/components/GymShowcase';
import Classes from '@/components/Classes';
import Trainers from '@/components/Trainers';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import MobileApp from '@/components/MobileApp';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <GymShowcase />
      <Classes />
      <Trainers />
      <Testimonials />
      <Pricing />
      <MobileApp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
