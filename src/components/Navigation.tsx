import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gym-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/redLogoWithoutBg.jpg" 
              alt="Focus Gym Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-white">
              Focus <span className="text-gym-red">Gym</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Classes', 'Trainers', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-gym-red transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gym-red hover:bg-gym-red/80 text-white font-bold px-6 py-2"
            >
              Join Now
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gym-red transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gym-dark/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Classes', 'Trainers', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-white hover:text-gym-red transition-colors duration-200 font-medium px-3 py-2 w-full text-left"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gym-red hover:bg-gym-red/80 text-white font-bold px-6 py-2 mt-4 w-full"
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
