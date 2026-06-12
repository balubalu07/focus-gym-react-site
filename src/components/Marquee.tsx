import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useLanguage } from "@/i18n/LanguageContext";

/** Infinite slogan ticker dividing the hero from the page body. */
const Marquee = () => {
  const { t, lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [lang]);

  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="relative z-10 border-y border-line bg-ink py-5 overflow-hidden">
      <div ref={trackRef} className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0" aria-hidden={half === 1}>
            {items.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center font-display text-2xl md:text-3xl whitespace-nowrap"
              >
                <span className={i % 2 ? "text-bone" : "text-ghost"}>
                  {item}
                </span>
                <span className="mx-8 text-blood text-xl" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
