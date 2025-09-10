import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dulanyi-balogh Anamaria",
      text: "Dacă cauți o sală de fitness care îmbină facilități moderne, o atmosferă prietenoasă și antrenori cu experiență, atunci FocusGym este locul potrivit. Este mai mult decât o sală de sport; este o comunitate care își sprijină și încurajează membrii pe drumul lor în fitness. Dotările sunt de top și oferă o varietate de echipamente pentru orice tip de exercițiu. Fie că este vorba de antrenament de forță, cardio sau exerciții de flexibilitate, aici găsești tot ce ai nevoie.",
      rating: 5,
    },
    {
      name: "Gheorghita Eusebiu",
      text: "Pentru mine, aceasta este cea mai comodă sală de fitness din Sfântu Gheorghe. Îmi place că este curată, are echipamente noi, plata se face doar cu cardul, iar accesul în sală se face pe bază de cod QR. Trebuie menționat că nu există aer condiționat! ...dar asta „ajută” la topirea grăsimilor! :-) Voi reveni cu informații dacă se mai schimbă ceva.",
      rating: 4,
    },
    {
      name: "Ákos Sz.",
      text: "O sală excelentă – spațioasă, cu aparate de calitate și o atmosferă plăcută. Îmi place că nu este aglomerată și te poți antrena în liniște.",
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
