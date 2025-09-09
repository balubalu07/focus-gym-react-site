import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Tutorial = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-6 text-white hover:text-gym-red hover:bg-white/10 p-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>

          <h1 className="text-4xl font-bold text-white mb-12 text-center">
            Tutorial – Cum să folosești aplicația
          </h1>

          <div className="space-y-20">
            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="../../assets/tutorial1.png"
                  alt="Step 1"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="text-gray-300">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  1. Descărcați și instalați aplicația
                </h2>
                <p className="leading-relaxed">
                  Găsiți aplicația în App Store sau Google Play. După instalare,
                  deschideți aplicația și creați un cont pentru a începe
                  călătoria voastră fitness.
                </p>
              </div>
            </section>

            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 text-gray-300">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. Găsiți sala noastră de sport
                </h2>
                <p className="leading-relaxed">
                  Introduceți codul focusgym în câmpul de text și apăsați
                  butonul „DEVINO MEMBRU”.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="../../assets/tutorial2.png"
                  alt="Step 2"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </section>

            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="../../assets/tutorial3.png"
                  alt="Step 3"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="text-gray-300">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  3. Informații personale
                </h2>
                <p className="leading-relaxed">
                  Completați informațiile personale și setați obiectivele de
                  fitness. Acest lucru ne ajută să vă oferim recomandări
                  personalizate.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorial;
