import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
const Trainers = () => {
  const trainers = [
    {
      name: "Mihail Panait",
      experience: "3 years",
      bio: "Misiunea mea este să te ajut să îți atingi obiectivele – fie că vrei să slăbești, să pui masă musculară sau pur și simplu să îți menții un stil de viață activ și sănătos.",
      image: trainer1,
    },
    {
      name: "Sandu Alexandru",
      experience: "13 years",
      bio: "Sunt pasionat de bodybuilding și am concurat la nivel competițional. Știu ce înseamnă să-ți transformi corpul, iar eu te pot ghida pas cu pas să-ți atingi obiectivele. Fără scurtături, doar rezultate reale – și un corp de care să fii mândru.",
      image: trainer2,
    },
    {
      name: "Antal Petre",
      experience: "7 years",
      bio: "Îmi place să ajut oamenii să devină mai flexibili și să se simtă bine în corpul lor prin antrenamente personalizate și tehnici moderne.",
      image: "hey",
    },
    {
      name: "Miklos Ciocîrlan",
      experience: "4 years",
      bio: "Sunt aici să te ajut să îți crești rezistența și să îți atingi obiectivele cardio prin antrenamente eficiente și distractive.",
      image: "beey",
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-gym-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Faceți cunoștință cu <span className="text-gym-red">Antrenori</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Antrenorii noștri certificați sunt aici pentru a vă ghida, motiva și
            ajuta să vă atingeți obiectivele de fitness.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="flex-none w-64 md:w-72 lg:w-80 bg-white/10 backdrop-blur-sm text-white border-gym-red/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 snap-center"
            >
              <CardContent className="p-6 text-center flex flex-col">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                {/* <p className="text-gym-red font-semibold mb-2">
                  {trainer.specialty}
                </p> */}
                <p className="text-gym-red font-semibold mb-2">
                  {trainer.experience} experience
                </p>
                <p className="text-gray-300 text-sm">{trainer.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
