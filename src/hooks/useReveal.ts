import { useEffect, useRef } from "react";
import { gsap, EASE_OUT } from "@/lib/gsap";

/**
 * Scroll-triggered reveal: every element inside the returned ref
 * marked with [data-reveal] fades and slides up with a stagger when
 * the section enters the viewport.
 */
export const useReveal = <T extends HTMLElement>() => {
  const scope = useRef<T>(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll("[data-reveal]");
      if (!targets.length) return;
      gsap.from(targets, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: EASE_OUT,
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return scope;
};
