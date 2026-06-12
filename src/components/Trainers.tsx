import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import trainer1 from "@/assets/trainer1.jpeg";
import trainer4 from "@/assets/trainer4.jpeg";

const TRAINER_IMAGES = [trainer1, trainer4];

const Trainers = () => {
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLElement>();

  return (
    <section
      id="trainers"
      ref={scope}
      key={lang}
      className="relative bg-ink text-bone py-28 md:py-40 overflow-hidden"
    >
      <span
        aria-hidden
        className="font-display text-ghost absolute top-10 right-0 text-[20vw] leading-none select-none pointer-events-none"
      >
        TEAM
      </span>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p
            data-reveal
            className="text-blood font-bold text-xs tracking-[0.45em] uppercase mb-6"
          >
            02 — {t.nav.trainers}
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-7xl leading-[0.95] mb-6"
          >
            {t.trainers.headingPre}{" "}
            <span className="text-blood">{t.trainers.headingAccent}</span>
          </h2>
          <p data-reveal className="text-bone/60 text-lg md:text-xl">
            {t.trainers.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {t.trainers.list.map((trainer, index) => (
            <article
              key={index}
              data-reveal
              className="group relative border border-line bg-surface overflow-hidden"
            >
              <div className="relative aspect-[4/4.6] overflow-hidden">
                <img
                  src={TRAINER_IMAGES[index]}
                  alt={trainer.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between gap-4">
                  <h3 className="font-display text-3xl md:text-4xl leading-none">
                    {trainer.name}
                  </h3>
                  <span className="shrink-0 bg-blood text-bone text-xs font-bold tracking-[0.15em] uppercase px-3 py-2">
                    {trainer.experience} {t.trainers.experienceSuffix}
                  </span>
                </div>
              </div>
              <p className="p-6 md:p-8 text-bone/60 leading-relaxed border-t border-line">
                {trainer.bio}
              </p>
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-blood scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
