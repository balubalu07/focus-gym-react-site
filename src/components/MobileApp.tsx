import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import phone from "@/assets/GMAApp.png";
import googlePlay from "@/assets/GooglePlay.jpeg";
import ios from "@/assets/AppStore.jpeg";

const MobileApp = () => {
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLElement>();
  const phoneRef = useRef<HTMLDivElement>(null);

  // phone floats with a slow parallax as the section scrolls through
  useEffect(() => {
    const el = phoneRef.current;
    const section = scope.current;
    if (!el || !section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 80, rotate: -4 },
        {
          y: -80,
          rotate: 3,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, section);
    return () => ctx.revert();
  }, [lang, scope]);

  return (
    <section
      id="app"
      ref={scope}
      key={lang}
      className="relative bg-bone text-ink py-28 md:py-40 overflow-hidden"
    >
      <span
        aria-hidden
        className="font-display text-ghost-dark absolute top-8 right-0 text-[18vw] leading-none select-none pointer-events-none"
      >
        APP
      </span>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={phoneRef} className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(224,43,61,0.18),transparent_65%)]" />
              <img
                src={phone}
                alt="Focus Gym Mobile App"
                loading="lazy"
                className="relative w-full max-w-[380px] h-[500px] object-contain drop-shadow-[0_40px_60px_rgba(10,10,12,0.35)]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p
              data-reveal
              className="text-blood font-bold text-xs tracking-[0.45em] uppercase mb-6"
            >
              05 — {t.nav.app}
            </p>
            <h2
              data-reveal
              className="font-display text-5xl md:text-7xl leading-[0.95] mb-8"
            >
              {t.app.headingPre}{" "}
              <span className="text-blood">{t.app.headingAccent}</span>
            </h2>
            <p
              data-reveal
              className="text-ink/70 text-lg md:text-xl leading-relaxed max-w-xl mb-12"
            >
              {t.app.subtitle}
            </p>

            <div data-reveal className="flex flex-wrap items-center gap-5 mb-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.companyname.gma"
                className="group block border border-ink/15 hover:border-blood transition-colors duration-300"
              >
                <img
                  src={googlePlay}
                  alt="Google Play Store"
                  className="w-44 h-auto group-hover:opacity-90"
                />
              </a>
              <a
                href="https://apps.apple.com/ro/app/gma-gym-management-app/id1496040256"
                className="group block border border-ink/15 hover:border-blood transition-colors duration-300"
              >
                <img
                  src={ios}
                  alt="App Store"
                  className="w-44 h-auto group-hover:opacity-90"
                />
              </a>
            </div>

            <div data-reveal>
              <Link
                to="/tutorial"
                className="link-grow inline-flex items-center gap-3 text-blood font-semibold"
              >
                {t.app.tutorialLink}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
