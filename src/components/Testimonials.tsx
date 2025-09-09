import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Andrei Popescu",
      text: "Focus Gym mi-a transformat viața! Nu m-am simțit niciodată mai puternică și mai încrezătoare. Antrenorii sunt extraordinari, iar comunitatea este foarte solidară.",
      rating: 5,
      achievement: "A slăbit 13,6 kg în 6 luni",
    },
    {
      name: "Mihai Dumitrescu",
      text: "Cea mai bună investiție pe care am făcut-o pentru sănătatea mea. Varietatea cursurilor mă menține motivată, iar rezultatele vorbesc de la sine.",
      rating: 5,
      achievement: "A câștigat 7 kg de masă musculară",
    },
    {
      name: "Ioana Marinescu",
      text: "Îmi place energia de la Focus Gym. Fiecare antrenament este provocator, dar distractiv. Antrenorii te motivează să dai tot ce ai mai bun.",
      rating: 4,
      achievement: "Fundul meu s-a mărit",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gym-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Povești de <span className="text-gym-red">Succes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Află poveștile membrilor noștri care și-au transformat viața la
            Focus Gym.
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
                    <span key={i} className="text-gym-red text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gym-red/20 pt-4">
                  <h4 className="font-bold text-white mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-gym-red text-sm font-semibold">
                    {testimonial.achievement}
                  </p>
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
