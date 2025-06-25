
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Focus <span className="text-gym-red">Gym</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Transform your body, mind, and spirit with us. Join our community and unleash your potential.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-gym-red transition-colors">About Us</a></li>
              <li><a href="#classes" className="hover:text-gym-red transition-colors">Classes</a></li>
              <li><a href="#trainers" className="hover:text-gym-red transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-gym-red transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Coaching</li>
              <li>Recovery Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gym-red hover:bg-gym-red/80 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gym-red hover:bg-gym-red/80 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">@</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gym-red hover:bg-gym-red/80 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gym-red hover:bg-gym-red/80 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">yt</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Focus Gym. All rights reserved. Designed with passion for fitness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
