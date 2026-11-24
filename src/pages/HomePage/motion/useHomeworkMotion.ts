import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsapSetup";

export function useHomeworkMotion(home: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const button = home.current?.querySelector<HTMLButtonElement>(
        ".home-to-top",
      );
      if (!button) return;

      const media = gsap.matchMedia();
      media.add("all", () => {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        gsap.set(button, {
          autoAlpha: 0,
          y: reduceMotion ? 0 : 12,
          pointerEvents: "none",
        });

        const show = () => {
          gsap.to(button, {
            autoAlpha: 1,
            y: 0,
            duration: reduceMotion ? 0 : 0.22,
            overwrite: true,
            onStart: () => {
              button.style.pointerEvents = "auto";
            },
          });
        };

        const hide = () => {
          gsap.to(button, {
            autoAlpha: 0,
            y: reduceMotion ? 0 : 12,
            duration: reduceMotion ? 0 : 0.18,
            overwrite: true,
            onComplete: () => {
              button.style.pointerEvents = "none";
            },
          });
        };

        ScrollTrigger.create({
          trigger: ".market-hero",
          start: "bottom top",
          onEnter: show,
          onLeaveBack: hide,
        });
      }, home);

      return () => media.revert();
    },
    { scope: home },
  );
}
