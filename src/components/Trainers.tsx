
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      bio: "Former competitive athlete specializing in strength training and athletic performance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      specialty: "CrossFit & HIIT",
      experience: "6 years",
      bio: "CrossFit Level 3 trainer passionate about functional fitness and metabolic conditioning.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Chen",
      specialty: "Yoga & Wellness",
      experience: "10 years",
      bio: "Certified yoga instructor focusing on mind-body connection and holistic wellness.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      specialty: "Boxing & Combat",
      experience: "12 years",
      bio: "Former professional boxer bringing authentic combat training to fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gym-dark mb-6">
            Meet Your <span className="text-gym-red">Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified trainers are here to guide, motivate, and help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none"
            >
              <CardContent className="p-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gym-dark mb-2">{trainer.name}</h3>
                <p className="text-gym-red font-semibold mb-2">{trainer.specialty}</p>
                <p className="text-gray-500 text-sm mb-4">{trainer.experience} experience</p>
                <p className="text-gray-600 text-sm">{trainer.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
