import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";

const GymShowcase = () => {
  const gymImages = [
    {
      src: img1,
      alt: "Modern Gym Equipment",
    },
    {
      src: img2,
      alt: "Gym Interior",
    },
    {
      src: img6,
      alt: "Group Training",
    },
    {
      src: img3,
      alt: "Cardio Area",
    },
    {
      src: img7,
      alt: "Cardio Area",
    },
    {
      src: img8,
      alt: "Cardio Area",
    },
    {
      src: img9,
      alt: "Cardio Area",
    },
    {
      src: img10,
      alt: "Cardio Area",
    },
    {
      src: img11,
      alt: "Cardio Area",
    },
  ];

  return (
    <section id="pictures" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gym-dark mb-6">
            Sala <span className="text-gym-red">Noastră</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Misiunea noastră e simplă și neschimbată: Să construim cea mai
            prietenoasă, incluzivă și motivantă sală de sport din Sfântu
            Gheorghe. Un loc unde progresul e personal, și fiecare pas înainte e
            sărbătorit. Te așteptăm. Nu ca să fii altcineva, ci ca să devii cea
            mai bună versiune a ta. Hai să ne cunoști. Promitem că vei simți
            diferența de la prima vizită. Focus Gym – Putere fizică, Echilibru
            mental. Nimic fără FOCUS.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto animate-slide-in-left">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {gymImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-1 bg-gym-red rounded-full" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-gym-red hover:bg-gym-red/80 border-none text-white shadow-lg hover:scale-110 transition-all duration-300" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-gym-red hover:bg-gym-red/80 border-none text-white shadow-lg hover:scale-110 transition-all duration-300" />
          </Carousel>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-16 space-x-4 animate-fade-in">
          <div className="w-20 h-1 bg-gym-red rounded-full animate-pulse" />
          <div className="w-8 h-1 bg-gray-400 rounded-full" />
          <div className="w-20 h-1 bg-gym-red rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default GymShowcase;
