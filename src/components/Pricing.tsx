
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal training session (1/month)",
        "Nutrition consultation",
        "Guest passes (2/month)"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Meal planning service",
        "Recovery services",
        "Priority booking",
        "24/7 gym access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gym-dark mb-6">
            Choose Your <span className="text-gym-red">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'border-gym-red border-2 shadow-lg' : 'border-none'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gym-red text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="text-center p-8">
                <CardTitle className="text-2xl font-bold text-gym-dark">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gym-red">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-gym-red mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 font-bold ${
                    plan.popular 
                      ? 'bg-gym-red hover:bg-gym-red/80 text-white' 
                      : 'bg-gym-dark hover:bg-gym-dark/80 text-white'
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
