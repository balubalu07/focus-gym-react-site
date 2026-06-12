import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** Shared easing curves for a consistent motion language. */
export const EASE_OUT = "power4.out";
export const EASE_INOUT = "power3.inOut";
