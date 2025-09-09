import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Focus <span className="text-gym-red">Gym</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Transformă-ți corpul, mintea și spiritul alături de noi.
              Alătură-te comunității noastre și eliberează-ți potențialul.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Linkuri rapide</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-gym-red transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="hover:text-gym-red transition-colors"
                >
                  Trainers
                </a>
              </li>
              <li>
                <a
                  href="#pictures"
                  className="hover:text-gym-red transition-colors"
                >
                  Pictures
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-gym-red transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#app" className="hover:text-gym-red transition-colors">
                  App
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-gym-red transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gym-red transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: ANPC Images */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/anpc-sal.png"
              alt="ANPC SAL"
              className="h-[62px] w-auto object-contain"
            />
            <img
              src="/assets/anpc-sol.png"
              alt="ANPC SOL"
              className="h-[65px] w-auto object-contain"
            />
          </div>

          {/* Column 4: Social Links and Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Urmăriți-ne</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064196705579"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gym-red hover:bg-gym-red/80 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/focusgymsepsi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gym-red hover:bg-gym-red/80 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Terms and Conditions */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Termeni și condiții
              </h4>
              <p className="text-gray-400 text-sm">
                Prin utilizarea serviciilor noastre, sunteți de acord cu{" "}
                <Link
                  to="/terms"
                  className="text-gym-red hover:text-gym-red/80 transition-colors"
                >
                  Termenii și condițiile
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-gym-red hover:text-gym-red/80 transition-colors"
                >
                  Politica de confidențialitate.
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Focus Gym. All rights reserved. Designed with passion
            for fitness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
