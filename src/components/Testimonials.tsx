
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Walsh",
      text: "Focus Gym transformed my life! I've never felt stronger or more confident. The trainers are amazing and the community is so supportive.",
      rating: 5,
      achievement: "Lost 30 lbs in 6 months"
    },
    {
      name: "Marcus Johnson",
      text: "The best investment I've made for my health. The variety of classes keeps me motivated and the results speak for themselves.",
      rating: 5,
      achievement: "Gained 15 lbs of muscle"
    },
    {
      name: "Amanda Rodriguez",
      text: "I love the energy at Focus Gym. Every workout is challenging yet fun. The trainers push you to be your best self.",
      rating: 5,
      achievement: "Completed first marathon"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gym-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="text-gym-red">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our members who have transformed their lives at Focus Gym.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-gym-red/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gym-red text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gym-red/20 pt-4">
                  <h4 className="font-bold text-white mb-2">{testimonial.name}</h4>
                  <p className="text-gym-red text-sm font-semibold">{testimonial.achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
