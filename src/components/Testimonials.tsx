import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "István",
      text: "O sală de sport mică, dar excelentă, aproape fără aglomerație, ideală pentru începători sau persoane timide care doresc să înceapă să facă sport.",
      rating: 5,
    },
    {
      name: "Zsolt",
      text: "Echipată la fel de bine ca și alte săli de sport de dimensiuni medii. Nu este perfectă, dar este perfect adecvată pentru ceea ce vrei să faci acolo. Nu are personal, intrarea se face printr-o aplicație, ceea ce este excelent. Managerul mi-a permis o intrare gratuită, deoarece inițial eram doar în trecere. Acest lucru îmi spune multe despre mentalitatea lor și mă face să revin cu orice altă ocazie pe care o am.",
      rating: 5,
    },
    {
      name: "Attila",
      text: "Echipament bun, personal prietenos și flexibil, program de lucru prelungit, recomandat cu căldură.",
      rating: 5,
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
