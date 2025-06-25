
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Classes = () => {
  const classes = [
    {
      name: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weight training programs.",
      duration: "60 min",
      level: "All Levels"
    },
    {
      name: "HIIT Cardio",
      description: "High-intensity interval training to burn calories and improve cardiovascular health.",
      duration: "45 min",
      level: "Intermediate"
    },
    {
      name: "Yoga & Flexibility",
      description: "Improve flexibility, balance, and mindfulness with our yoga classes.",
      duration: "75 min",
      level: "All Levels"
    },
    {
      name: "CrossFit",
      description: "Varied functional movements performed at high intensity for total fitness.",
      duration: "60 min",
      level: "Advanced"
    },
    {
      name: "Boxing",
      description: "Learn boxing techniques while getting an incredible full-body workout.",
      duration: "50 min",
      level: "All Levels"
    },
    {
      name: "Spin Classes",
      description: "High-energy cycling classes with music to keep you motivated.",
      duration: "45 min",
      level: "All Levels"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gym-dark mb-6">
            Our <span className="text-gym-red">Classes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of fitness classes designed to challenge and inspire you at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
            >
              <CardHeader className="bg-gym-dark text-white">
                <CardTitle className="text-xl">{classItem.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{classItem.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gym-red font-semibold">{classItem.duration}</span>
                  <span className="bg-gym-red/10 text-gym-red px-3 py-1 rounded-full text-sm font-medium">
                    {classItem.level}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
