import React, { Suspense, lazy, useEffect, useRef } from "react";
import { gsap, EASE_OUT } from "@/lib/gsap";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const Hero = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from("[data-hero-line] > span", {
        yPercent: 110,
        duration: 1.2,
        ease: EASE_OUT,
        stagger: 0.12,
      })
        .from(
          "[data-hero-sub]",
          { y: 30, opacity: 0, duration: 0.9, ease: EASE_OUT },
          "-=0.6"
        )
        .from(
          "[data-hero-cta]",
          { y: 24, opacity: 0, duration: 0.8, ease: EASE_OUT },
          "-=0.6"
        )
        .from(
          "[data-hero-meta]",
          { opacity: 0, duration: 1 },
          "-=0.4"
        );

      // headline drifts up slightly as you scroll away
      gsap.to("[data-hero-content]", {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
    // re-run the intro when the language flips so the new headline reveals
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ink flex items-center overflow-hidden"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* vignette so type stays readable over the 3D scene */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,12,0.85)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink via-transparent to-ink/60 pointer-events-none" />

      <div
        data-hero-content
        className="relative z-10 w-full mx-auto max-w-[1600px] px-5 md:px-10 pt-24"
      >
        <p
          data-hero-meta
          className="text-blood font-bold text-xs md:text-sm tracking-[0.45em] uppercase mb-6"
        >
          Focus Gym — Sfântu Gheorghe
        </p>

        <h1 className="font-display text-bone leading-[0.92] text-[16vw] md:text-[10.5vw] xl:text-[150px]">
          <span data-hero-line className="reveal-line">
            <span>{t.hero.titleLine1}</span>
          </span>
          <span data-hero-line className="reveal-line text-blood">
            <span>{t.hero.titleLine2}</span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <p
            data-hero-sub
            className="text-bone/70 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            {t.hero.subtitle}
          </p>

          <div data-hero-cta>
            <button
              onClick={() =>
                document
                  .getElementById("app")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-blood font-display text-lg md:text-xl tracking-[0.12em] px-10 py-5"
            >
              {t.hero.cta}
              <span aria-hidden>↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div
        data-hero-meta
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-bone/50 text-[10px] tracking-[0.4em] uppercase">
          {t.hero.scroll}
        </span>
        <span className="block h-12 w-[1px] bg-gradient-to-b from-blood to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
