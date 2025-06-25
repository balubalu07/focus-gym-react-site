
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gym-dark mb-6">
            About <span className="text-gym-red">Focus Gym</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a gym - we're your partners in transformation. Our mission is to create a supportive community where everyone can achieve their fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gym-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gym-dark mb-4">Expert Training</h3>
              <p className="text-gray-600">
                Certified trainers with years of experience to guide your fitness journey
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gym-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gym-dark mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Thousands of success stories from members who achieved their goals
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gym-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gym-dark mb-4">Community</h3>
              <p className="text-gray-600">
                Join a supportive community that motivates and inspires each other
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
