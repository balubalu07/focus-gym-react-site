
import React from 'react';

const MobileApp = () => {
  return (
    <section id="app" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gym-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Big picture with enhanced styling */}
          <div className="order-2 lg:order-1 relative group">
            <div className="relative">
              {/* Phone mockup background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gym-red/20 to-blue-500/20 rounded-3xl blur-xl transform rotate-3 scale-105 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform group-hover:-rotate-1 transition-transform duration-500">
                <img
                  src="assets/GMAApp.png"
                  alt="Focus Gym Mobile App"
                  className="w-full h-[500px] object-contain animate-fade-in transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right side - Download links with enhanced design */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gym-red to-gray-900 bg-clip-text text-transparent">
                  Download Our <span className="text-gym-red animate-pulse">App</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gym-red to-blue-500 rounded-full mx-auto"></div>
              </div>
              
              <p className="text-gray-600 text-xl max-w-md leading-relaxed">
                Take your fitness journey with you. Track workouts, book
                classes, and stay motivated wherever you are.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center animate-fade-in">
              {/* Google Play Store with enhanced styling */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.companyname.gma"
                  className="relative block transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src="/assets/GooglePlay.jpeg"
                      alt="Google Play Store"
                      className="w-48 h-auto"
                    />
                  </div>
                </a>
              </div>

              {/* App Store with enhanced styling */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <a
                  href="https://apps.apple.com/ro/app/gma-gym-management-app/id1496040256"
                  className="relative block transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src="/assets/AppStore.jpeg"
                      alt="App Store"
                      className="w-48 h-auto"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Enhanced tutorial link */}
            <div className="text-center animate-fade-in">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gym-red/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                <a
                  href="#tutorial"
                  className="relative inline-flex items-center space-x-2 bg-white text-gym-red font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gym-red hover:text-white border-2 border-gym-red/20 hover:border-gym-red"
                >
                  <span>Need help? Follow our step-by-step tutorial</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-16 space-x-4 animate-fade-in">
          <div className="w-16 h-1 bg-gradient-to-r from-gym-red to-transparent rounded-full animate-pulse"></div>
          <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
