import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AllPlans = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const plans = [
    {
      name: "Morning Pass",
      price: "120 lei",
      period: "/month",
      features: [
        "Acces la sală de la 07:00-12:00",
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Acces la aplicația mobilă",
      ],
      popular: false,
    },
    {
      name: "Abonament full fittness",
      price: "130 lei",
      period: "/month",
      features: [
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Acces la aplicația mobilă",
      ],
      popular: true,
    },
    {
      name: "Abonament studenti",
      price: "110 lei",
      period: "/month",
      features: [
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Acces la aplicația mobilă",
      ],
      popular: false,
    },
    {
      name: "Abonament 3 luni",
      price: "350 lei",
      period: "/3 months",
      features: [
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Acces la aplicația mobilă",
      ],
      popular: false,
    },
    {
      name: "One day Pass",
      price: "25 lei",
      period: "/day",
      features: [
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Acces la aplicația mobilă",
      ],
      popular: false,
    },
  ];

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
            Toate Planurile de Abonament
          </h1>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-16 items-start">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 transform ${
                  plan.popular
                    ? "bg-white/20 backdrop-blur-md border-gym-red border-4 shadow-lg md:scale-105 hover:scale-110"
                    : "bg-white/10 backdrop-blur-sm border-gray-700 border hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-2">
                    <span className="bg-gym-red text-white px-4 py-2 rounded-full text-sm font-bold text-center shadow-md">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardHeader className="text-center p-10">
                  <CardTitle
                    className={`${
                      plan.popular
                        ? "text-3xl font-extrabold text-white"
                        : "text-2xl font-bold text-white"
                    }`}
                  >
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? "text-gym-red" : "text-gray-300"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3 mb-8 text-gray-200">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-gym-red mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 font-bold ${
                      plan.popular
                        ? "bg-gym-red hover:bg-gym-red/80 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                    onClick={() => {
                      navigate("/", { state: { scrollToApp: true } });
                    }}
                  >
                    Începeți
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllPlans;
