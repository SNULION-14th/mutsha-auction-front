import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsapSetup";

export function useHomeworkMotion(home: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const topButton =
        home.current?.querySelector<HTMLButtonElement>(".home-to-top");
      if (!topButton) return;

      const media = gsap.matchMedia();
      media.add(
        "all",
        () => {
          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

          gsap.set(topButton, {
            autoAlpha: 0,
            y: reduceMotion ? 0 : 12,
            pointerEvents: "none",
          });
          const showTop = () => {
            gsap.to(topButton, {
              autoAlpha: 1,
              y: 0,
              duration: reduceMotion ? 0 : 0.22,
              overwrite: true,
              onStart: () => {
                topButton.style.pointerEvents = "auto";
              },
            });
          };

          const hideTop = () => {
            gsap.to(topButton, {
              autoAlpha: 0,
              y: reduceMotion ? 0 : 12,
              duration: reduceMotion ? 0 : 0.18,
              overwrite: true,
              onComplete: () => {
                topButton.style.pointerEvents = "none";
              },
            });
          };

          ScrollTrigger.create({
            trigger: ".market-hero",
            start: "bottom top",
            onEnter: showTop,
            onLeaveBack: hideTop,
          });
        },
        home,
      );

      return () => media.revert();
    },
    { scope: home },
  );
}
