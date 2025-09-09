import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Terms = () => {
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

          <h1 className="text-4xl font-bold text-white mb-8">
            Terms and Conditions
          </h1>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Membership Agreement
              </h2>
              <p className="mb-4">
                By joining Focus Gym, you agree to abide by all gym rules and
                regulations. Your membership grants you access to our facilities
                during operating hours and participation in group classes as
                availability permits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Payment Terms
              </h2>
              <p className="mb-4">
                Membership fees are due monthly in advance. All payments must be
                made by the due date to maintain active membership status. Late
                fees may apply for overdue payments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Facility Rules
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Members must check in at the front desk upon arrival</li>
                <li>
                  Proper athletic attire and closed-toe shoes are required
                </li>
                <li>Equipment must be wiped down after use</li>
                <li>No outside food or beverages except water</li>
                <li>Respect other members and maintain appropriate behavior</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Liability Waiver
              </h2>
              <p className="mb-4">
                Members participate in fitness activities at their own risk.
                Focus Gym is not liable for injuries sustained during workout
                sessions. All members must sign a liability waiver before using
                the facilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Cancellation Policy
              </h2>
              <p className="mb-4">
                Membership cancellations require 30 days written notice. Annual
                memberships may be subject to early termination fees as outlined
                in your membership agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Code of Conduct
              </h2>
              <p className="mb-4">
                Focus Gym maintains a zero-tolerance policy for harassment,
                discrimination, or inappropriate behavior. Violations may result
                in immediate membership termination without refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Contact Information
              </h2>
              <p className="mb-4">
                For questions regarding these terms and conditions, please
                contact us at info@focusgym.com or visit our front desk during
                operating hours.
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

export default Terms;
