
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const GymShowcase = () => {
  const gymImages = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern Gym Equipment",
      title: "State-of-the-Art Equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Gym Interior",
      title: "Spacious Training Areas"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Group Training",
      title: "Group Fitness Classes"
    },
    {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Cardio Area",
      title: "Premium Cardio Zone"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gym-dark via-gray-900 to-gym-dark overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-gym-red">Facility</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Step into a world-class fitness facility designed to inspire and motivate. 
            Every corner of our gym is crafted to elevate your workout experience.
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
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white font-bold text-xl mb-2">
                          {image.title}
                        </h3>
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
          <div className="w-8 h-1 bg-gray-600 rounded-full" />
          <div className="w-20 h-1 bg-gym-red rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default GymShowcase;
