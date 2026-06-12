import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const AllPlans = () => {
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
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <button
            onClick={() => navigate("/")}
            className="link-grow inline-flex items-center gap-2 text-bone/70 hover:text-bone mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.allPlans.back}
          </button>

          <h1
            data-reveal
            className="font-display text-5xl md:text-7xl leading-[0.95] mb-16 md:mb-24"
          >
            {t.allPlans.title}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch">
            {t.allPlans.plans.map((plan, index) => (
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
                    className={`font-display text-5xl ${
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
                  onClick={() => navigate("/", { state: { scrollToApp: true } })}
                  className={`${
                    plan.popular ? "btn-blood" : "btn-ghost-line"
                  } font-display text-lg tracking-[0.12em] px-8 py-4 w-full`}
                >
                  {t.pricing.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllPlans;
