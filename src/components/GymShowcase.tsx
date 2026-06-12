import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";

const GYM_IMAGES = [
  { src: img1, alt: "Modern Gym Equipment" },
  { src: img2, alt: "Gym Interior" },
  { src: img6, alt: "Group Training" },
  { src: img3, alt: "Cardio Area" },
  { src: img7, alt: "Cardio Area" },
  { src: img8, alt: "Cardio Area" },
  { src: img9, alt: "Cardio Area" },
  { src: img10, alt: "Cardio Area" },
  { src: img11, alt: "Cardio Area" },
];

/**
 * Signature section: the gallery is pinned and scrolls horizontally
 * as the user scrolls vertically (desktop). On touch/small screens it
 * falls back to a native horizontal snap scroller.
 */
const GymShowcase = () => {
  const { t, lang } = useLanguage();
  const scope = useReveal<HTMLElement>();
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const track = trackRef.current;
    if (!gallery || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const getDistance = () => track.scrollWidth - gallery.clientWidth;
      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: gallery,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // images settle after load → recalc pin distance
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      mm.revert();
      window.removeEventListener("load", refresh);
    };
  }, [lang]);

  return (
    <section
      id="pictures"
      ref={scope}
      key={lang}
      className="relative bg-bone text-ink overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-28 md:pt-40 pb-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p
              data-reveal
              className="text-blood font-bold text-xs tracking-[0.45em] uppercase mb-6"
            >
              03 — {t.nav.pictures}
            </p>
            <h2
              data-reveal
              className="font-display text-5xl md:text-7xl leading-[0.95]"
            >
              {t.showcase.headingPre}{" "}
              <span className="text-blood">{t.showcase.headingAccent}</span>
            </h2>
          </div>
          <p
            data-reveal
            className="lg:col-span-7 text-ink/70 text-lg leading-relaxed self-end"
          >
            {t.showcase.text}
          </p>
        </div>
      </div>

      <div
        ref={galleryRef}
        className="relative flex items-center lg:h-screen pb-20 lg:pb-0"
      >
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-8 px-5 md:px-10 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none"
        >
          {GYM_IMAGES.map((image, index) => (
            <figure
              key={index}
              className="group relative flex-none w-[78vw] sm:w-[46vw] lg:w-[30vw] snap-center overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden bg-ink/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
              </div>
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className="bg-ink/80 text-bone font-display text-sm px-3 py-1">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(GYM_IMAGES.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}

          {/* end card */}
          <div className="flex-none w-[78vw] sm:w-[46vw] lg:w-[30vw] flex items-center justify-center border border-ink/15">
            <span className="font-display text-4xl md:text-5xl text-center px-8 leading-tight">
              FOCUS<span className="text-blood">GYM</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymShowcase;
