import React from "react";
import { Button } from "@/components/ui/button";
import bgImage from "@/assets/4.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gym-dark flex items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 bg-[length:400%_400%] animate-gradient-bg bg-gradient-to-r from-gym-dark via-gym-red to-gym-dark opacity-90" /> */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          ELIBEREAȚI-VĂ
          <span className="block text-gym-red">POTENȚIALUL</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transformați-vă corpul, mintea și spiritul la Focus Gym. Unde
          dedicarea se întâlnește cu rezultatele.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() =>
              document
                .getElementById("app")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gym-red hover:bg-gym-red/80 text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            ÎNSCRIE-TE ACUM
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
