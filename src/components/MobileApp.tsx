
import React from 'react';
import { Button } from '@/components/ui/button';

const MobileApp = () => {
  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Big picture */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Focus Gym Mobile App"
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Right side - Download links */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white mb-4">
                Download Our <span className="text-gym-red">App</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-md">
                Take your fitness journey with you. Track workouts, book classes, and stay motivated wherever you are.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Google Play Store Button */}
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 h-auto rounded-lg transition-all duration-300 hover:scale-105"
              >
                <a href="#" className="flex items-center space-x-3">
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </Button>

              {/* App Store Button */}
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 h-auto rounded-lg transition-all duration-300 hover:scale-105"
              >
                <a href="#" className="flex items-center space-x-3">
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
