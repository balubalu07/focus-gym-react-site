import React from "react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

export const scrollToApp = () => {
  const appSection = document.getElementById("app");
  if (!appSection) return;
  const yOffset = -window.innerHeight / 4;
  const y =
    appSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Pricing = () => {
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLElement>();

  return (
    <section
      id="pricing"
      ref={scope}
      key={lang}
      className="relative bg-ink text-bone py-28 md:py-40 overflow-hidden"
    >
      <span
        aria-hidden
        className="font-display text-ghost absolute top-12 left-0 text-[18vw] leading-none select-none pointer-events-none"
      >
        PLANS
      </span>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p
            data-reveal
            className="text-blood font-bold text-xs tracking-[0.45em] uppercase mb-6"
          >
            06 — {t.nav.pricing}
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-7xl leading-[0.95] mb-6"
          >
            {t.pricing.headingPre}{" "}
            <span className="text-blood">{t.pricing.headingAccent}</span>
          </h2>
          <p data-reveal className="text-bone/60 text-lg md:text-xl">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
          {t.pricing.plans.map((plan, index) => (
            <article
              key={index}
              data-reveal
              className={`relative flex flex-col border p-8 md:p-10 transition-transform duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-blood bg-surface shadow-[0_0_60px_rgba(224,43,61,0.18)]"
                  : "border-line bg-surface/60"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-8 bg-blood text-bone text-xs font-bold tracking-[0.2em] px-4 py-2">
                  {t.pricing.popularBadge}
                </span>
              )}

              <h3 className="font-display text-2xl md:text-3xl mb-6">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-3 mb-8">
                <span
                  className={`font-display text-5xl md:text-6xl ${
                    plan.popular ? "text-blood" : "text-bone"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-bone/50 text-sm">/ {plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-bone/75"
                  >
                    <span className="text-blood mt-[2px]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToApp}
                className={`${
                  plan.popular ? "btn-blood" : "btn-ghost-line"
                } font-display text-lg tracking-[0.12em] px-8 py-4 w-full`}
              >
                {t.pricing.cta}
              </button>
            </article>
          ))}
        </div>

        <div data-reveal className="text-center mt-16 md:mt-20">
          <Link
            to="/all-plans"
            className="btn-ghost-line font-display text-lg tracking-[0.12em] px-10 py-5"
          >
            {t.pricing.seeAll}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
