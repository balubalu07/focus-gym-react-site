import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Morning Pass",
      price: "25 lei",
      period: "/day",
      features: [
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Evaluare de bază a condiției fizice",
        "Acces la aplicația mobilă",
      ],
      popular: false,
    },
    {
      name: "One Month Pass",
      price: "130 lei",
      period: "/month",
      features: [
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Evaluare de bază a condiției fizice",
        "Acces la aplicația mobilă",
      ],
      popular: true,
    },
    {
      name: "Student Pass",
      price: "110 lei",
      period: "/month",
      features: [
        "Acces la echipamente de sală",
        "Acces la vestiare",
        "Evaluare de bază a condiției fizice",
        "Acces la aplicația mobilă",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-28 bg-gym-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center pb-16 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Alegeți-vă <span className="text-gym-red">Planul</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Opțiuni flexibile de abonament, concepute pentru a se potrivi
            stilului tău de viață și obiectivelor tale de fitness.
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-0">
          <div className="grid md:grid-cols-3 gap-16 items-start">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 transform ${
                  plan.popular
                    ? "bg-white/20 backdrop-blur-md border-gym-red border-4 shadow-lg md:scale-110 md:-translate-y-4 hover:scale-115"
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
                <CardHeader
                  className={`text-center p-10 ${
                    plan.popular ? "min-h-[200px]" : "min-h-[160px]"
                  }`}
                >
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
                <CardContent
                  className={`p-8 ${
                    plan.popular ? "min-h-[350px]" : "min-h-[300px]"
                  }`}
                >
                  <ul
                    className={`space-y-3 mb-8 text-gray-200 ${
                      plan.popular ? "text-lg" : "text-base"
                    }`}
                  >
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
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
