
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gym-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gym-dark via-gym-dark/90 to-gym-red/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          UNLEASH YOUR
          <span className="block text-gym-red">POTENTIAL</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transform your body, mind, and spirit at Focus Gym. Where dedication meets results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gym-red hover:bg-gym-red/80 text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            JOIN NOW
          </Button>
          <Button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gym-dark font-bold px-8 py-4 text-lg transition-all duration-300"
          >
            LEARN MORE
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
