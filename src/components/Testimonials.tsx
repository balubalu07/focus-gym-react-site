import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={scope}
      key={lang}
      className="relative bg-ink text-bone py-28 md:py-40 overflow-hidden"
    >
      <span
        aria-hidden
        className="font-display text-ghost-red absolute -bottom-10 left-0 text-[22vw] leading-none select-none pointer-events-none"
      >
        FOCUS
      </span>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p
            data-reveal
            className="text-blood font-bold text-xs tracking-[0.45em] uppercase mb-6"
          >
            04 — {t.nav.testimonials}
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-7xl leading-[0.95] mb-6"
          >
            {t.testimonials.headingPre}{" "}
            <span className="text-blood">{t.testimonials.headingAccent}</span>
          </h2>
          <p data-reveal className="text-bone/60 text-lg md:text-xl">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 items-start">
          {t.testimonials.list.map((testimonial, index) => (
            <blockquote
              key={index}
              data-reveal
              className={`group relative border border-line bg-surface p-8 md:p-10 transition-colors duration-500 hover:border-blood/60 ${
                index === 1 ? "md:-mt-10" : ""
              }`}
            >
              <span
                aria-hidden
                className="font-display text-7xl text-blood/80 leading-none block mb-4 select-none"
              >
                “
              </span>
              <p className="text-bone/80 leading-relaxed mb-8">
                {testimonial.text}
              </p>
              <footer className="flex items-center justify-between border-t border-line pt-5">
                <cite className="not-italic font-display text-xl">
                  {testimonial.name}
                </cite>
                <span className="text-blood tracking-[0.2em]">
                  {"★".repeat(testimonial.rating)}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
