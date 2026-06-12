import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={scope}
      key={lang}
      className="relative bg-bone text-ink py-28 md:py-40 overflow-hidden"
    >
      {/* oversized ghost word in the background */}
      <span
        aria-hidden
        className="font-display text-ghost-dark absolute -top-6 left-0 text-[26vw] leading-none select-none pointer-events-none"
      >
        FOCUS
      </span>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="lg:col-span-7">
            <p
              data-reveal
              className="text-blood font-bold text-xs tracking-[0.45em] uppercase mb-6"
            >
              01 — {t.nav.about}
            </p>
            <h2
              data-reveal
              className="font-display text-5xl md:text-7xl leading-[0.95]"
            >
              {t.about.headingPre}{" "}
              <span className="text-blood">{t.about.headingAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p
              data-reveal
              className="text-ink/70 text-lg md:text-xl leading-relaxed"
            >
              {t.about.intro}
            </p>
          </div>
        </div>

        {/* numbered editorial rows instead of cards */}
        <div className="border-t border-ink/15">
          {t.about.cards.map((card, i) => (
            <div
              key={i}
              data-reveal
              className="group grid md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-14 border-b border-ink/15 transition-colors duration-500 hover:bg-ink hover:text-bone px-2 md:px-6"
            >
              <span className="md:col-span-2 font-display text-3xl md:text-4xl text-blood">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4 font-display text-2xl md:text-3xl leading-tight">
                {card.title}
              </h3>
              <p className="md:col-span-6 text-base md:text-lg leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity duration-500">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
