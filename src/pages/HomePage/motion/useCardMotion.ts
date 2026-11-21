import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsapSetup";

export function useCardMotion(home: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: "(min-width: 1200px)",
          mobile: "(max-width: 1199.99px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce) return;
          const slots = gsap.utils.toArray<HTMLElement>(
            ".info-slot",
            home.current,
          );
          const columns = context.conditions?.desktop ? 2 : 1;
          for (let index = 0; index < slots.length; index += columns) {
            const row = slots.slice(index, index + columns);
            const cards = row.map(
              (slot) => slot.querySelector<HTMLElement>(".info-reveal")!,
            );
            function move(y: number) {
              gsap.killTweensOf(cards);
              gsap.to(cards, {
                y,
                opacity: y === 0 ? 1 : 0,
                duration: 0.52,
                stagger: y === 0 ? 0.09 : 0,
                ease: "power3.out",
              });
            }
            const trigger = ScrollTrigger.create({
              trigger: row[0],
              start: "top 78%",
              end: () => `bottom ${88 + (innerHeight - 88) * 0.1}px`,
              onEnter: () => move(0),
              onLeave: () => move(-36),
              onEnterBack: () => move(0),
              onLeaveBack: () => move(36),
            });
            const y = trigger.isActive ? 0 : trigger.progress === 1 ? -36 : 36;
            gsap.set(cards, { y, opacity: y === 0 ? 1 : 0 });
          }
          ScrollTrigger.refresh();
          return () =>
            gsap.killTweensOf(slots.map((slot) => slot.firstElementChild));
        },
        home,
      );
      return () => media.revert();
    },
    { scope: home },
  );
}
