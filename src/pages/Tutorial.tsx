import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import phone1 from "@/assets/tutorial1.png";
import phone2 from "@/assets/tutorial2.png";
import phone3 from "@/assets/tutorial3.png";

const STEP_IMAGES = [phone1, phone2, phone3];

const Tutorial = () => {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-ink text-bone">
      <Navigation />
      <div ref={scope} key={lang} className="pt-32 pb-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <button
            onClick={() => navigate("/")}
            className="link-grow inline-flex items-center gap-2 text-bone/70 hover:text-bone mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.tutorial.back}
          </button>

          <h1
            data-reveal
            className="font-display text-4xl md:text-6xl leading-[0.95] mb-16 md:mb-24"
          >
            {t.tutorial.title}
          </h1>

          <div className="space-y-16 md:space-y-32">
            {t.tutorial.steps.map((step, index) => (
              <section
                key={index}
                data-reveal
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                <div
                  className={`relative border border-line bg-surface p-4 md:p-6 mt-8 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <span className="absolute -top-8 left-3 md:-top-9 md:left-4 font-display text-6xl md:text-7xl text-ghost-red select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <img
                    src={STEP_IMAGES[index]}
                    alt={step.title}
                    loading="lazy"
                    className="mx-auto w-auto max-h-[55vh] md:max-h-[70vh] object-contain"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display text-3xl md:text-4xl mb-6">
                    {step.title}
                  </h2>
                  <p className="text-bone/70 text-lg leading-relaxed max-w-xl">
                    {step.text}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorial;
