import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-6 text-white hover:text-gym-red hover:bg-white/10 p-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>

          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                Focus Gym collects personal information including name, contact
                details, emergency contact information, and health-related data
                necessary for safe facility use and membership management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Membership management and billing</li>
                <li>Safety and emergency contact purposes</li>
                <li>Program recommendations and scheduling</li>
                <li>Marketing communications (with consent)</li>
                <li>Facility access and security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or transfer your personal information to
                third parties without your consent, except as required by law or
                for emergency medical situations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Security
              </h2>
              <p className="mb-4">
                Focus Gym implements appropriate security measures to protect
                your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Health Information
              </h2>
              <p className="mb-4">
                Health and fitness data collected during assessments or training
                sessions is kept confidential and used solely for program
                development and safety purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Cookies and Website Data
              </h2>
              <p className="mb-4">
                Our website may use cookies to enhance user experience and
                analyze site usage. You can disable cookies in your browser
                settings if preferred.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Your Rights
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Opt-out of marketing communications</li>
                <li>
                  Request deletion of your data (subject to legal requirements)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Contact Us
              </h2>
              <p className="mb-4">
                For privacy-related questions or to exercise your rights,
                contact us at privacy@focusgym.com or speak with our management
                team.
              </p>
            </section>

            <p className="text-sm text-gray-400 mt-8">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
