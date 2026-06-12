import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={scope}
      key={lang}
      className="relative bg-ink text-bone py-28 md:py-40 border-t border-line overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p
            data-reveal
            className="text-blood font-bold text-xs tracking-[0.45em] uppercase mb-6"
          >
            07 — {t.nav.contact}
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-7xl leading-[0.95] mb-6"
          >
            {t.contact.headingPre}{" "}
            <span className="text-blood">{t.contact.headingAccent}</span>
          </h2>
          <p data-reveal className="text-bone/60 text-lg md:text-xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          <div
            data-reveal
            className="border border-line overflow-hidden min-h-[360px]"
          >
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.3524118468295!2d25.79938587695038!3d45.86425850665645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b4a51627379679%3A0x733797801759e084!2sFocusGym!5e0!3m2!1shu!2sro!4v1750888154008!5m2!1shu!2sro"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0 w-full h-full grayscale invert-[0.9] contrast-[0.9] hover:grayscale-0 hover:invert-0 hover:contrast-100 transition-all duration-700"
            ></iframe>
          </div>

          <div className="flex flex-col gap-8">
            <div data-reveal className="border border-line bg-surface p-8 md:p-10">
              <h3 className="font-display text-2xl mb-6">
                {t.contact.visitTitle}
              </h3>
              <ul className="space-y-4 text-bone/75">
                <li className="flex gap-4">
                  <span className="text-blood font-display">A</span>
                  {t.contact.address}
                </li>
                <li className="flex gap-4">
                  <span className="text-blood font-display">T</span>
                  <a
                    href={`tel:${t.contact.phone}`}
                    className="hover:text-blood transition-colors"
                  >
                    {t.contact.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <span className="text-blood font-display">E</span>
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="hover:text-blood transition-colors"
                  >
                    {t.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div data-reveal className="border border-line bg-surface p-8 md:p-10 flex-1">
              <h3 className="font-display text-2xl mb-6">
                {t.contact.hoursTitle}
              </h3>
              <ul className="space-y-4">
                {t.contact.hours.map((row, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-6 border-b border-line pb-3 last:border-0"
                  >
                    <span className="text-bone/75">{row.days}</span>
                    <span className="font-display text-lg text-blood">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
