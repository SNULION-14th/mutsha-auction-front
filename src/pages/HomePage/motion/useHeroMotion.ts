import type { RefObject } from "react";
import { gsap, useGSAP } from "./gsapSetup";

export function useHeroMotion(home: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(".hero-track", { visibility: "visible" });

          const timeline = gsap.timeline({
            defaults: { duration: 1, ease: "none" },
            scrollTrigger: {
              trigger: ".market-hero",
              start: "top 88px",
              end: "bottom 88px",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(".hero-photo", { scale: 1.32, yPercent: 5 }, 0)
            .to(".hero-mark", { y: -360 }, "<")
            .to(".hero-great", { y: -260 }, "<")
            .to(".hero-market", { y: -176 }, "<")
            .to(".hero-copy p", { y: -96 }, "<")
            .fromTo(".hero-track i", { scaleX: 0 }, { scaleX: 1 }, "<");
        },
        home,
      );

      return () => media.revert();
    },
    { scope: home },
  );
}
