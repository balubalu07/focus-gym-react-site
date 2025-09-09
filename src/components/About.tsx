import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gym-dark mb-6">
            Despre noi -{" "}
            <span className="text-gym-red">Povestea Focus Gym</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {/* Totul a început cu o întrebare simplă, dar puternică:
„Dacă nu găsim o sală în care să ne simțim în siguranță și acceptați, de ce să nu o construim chiar noi?”
Ani de zile, eu și fratele meu, Bogdan, am trecut pragul a nenumărate săli de sport.
Și, de fiecare dată, simțeam că lipsește ceva esențial: respectul reciproc, atmosfera relaxată, sentimentul că aparții acelui loc.
Prea des, sala devenea un spațiu intimidant, nu o încurajare.
Unii renunțau nu pentru că nu puteau… ci pentru că nu se simțeau bineveniți.
Așa s-a născut ideea Focus Gym – un loc fără presiune, fără bariere, unde fiecare om este binevenit exact așa cum este. */}
            Am creat Focus Gym dintr-o nevoie simplă: un loc unde să te simți
            binevenit, respectat și în siguranță. Nu presiune, nu bariere – doar
            o comunitate în care fiecare aparține.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gym-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gym-dark mb-4">
                Dual Strength Fitness
              </h3>
              <p className="text-gray-600">
                Firma noastră se numește Dual Strength Fitness dintr-un motiv
                simplu, dar profund: Credem că puterea adevărată vine din
                echilibrul între corp și minte.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gym-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gym-dark mb-4">
                Valorile noastre
              </h3>
              <p className="text-gray-600">
                Incluziune – Fiecare persoană este binevenită, indiferent de
                vârstă, greutate, formă fizică sau experiență. Pozitivitate –
                Promovăm o atmosferă caldă, fără presiune, unde ești încurajat,
                nu comparat. Respect și autenticitate – Ne pasă. Ne uităm în
                ochii oamenilor și îi vedem așa cum sunt, nu prin filtre sau
                standarde false.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gym-red rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gym-dark mb-4">
                Ce înseamnă Focus Gym pentru noi?
              </h3>
              <p className="text-gray-600">
                Este comunitatea pe care ne-am dorit-o dintotdeauna, dar nu am
                găsit-o. Este spațiul sigur unde vii nu doar să te antrenezi, ci
                să respiri, să te regăsești, să crești. Este vocea care îți
                spune „poți”, atunci când toți ceilalți spun „nu ești pregătit”.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
