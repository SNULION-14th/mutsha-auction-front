import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsapSetup";

export function useStoryMotion(home: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        "(min-height: 700px) and (min-width: 350px) and (prefers-reduced-motion: no-preference)",
        () => {
          const scenes = gsap.utils.toArray<HTMLElement>(
            ".story-scene",
            home.current,
          );

          gsap.set(".story-frame", {
            width: "100%",
            paddingInline:
              "calc(var(--gutter) + max(0px, (100% - 1440px) / 2))",
            height: "calc(100svh - 88px)",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
          });
          gsap.set(".story-deck", { display: "grid" });
          gsap.set(scenes, { gridArea: "1 / 1", alignSelf: "center" });
          gsap.set(scenes.slice(1), { x: "100vw", autoAlpha: 0 });
          gsap.set(".story-track", { visibility: "visible" });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: ".story-frame",
              pin: true,
              start: "top 88px",
              end: () => `+=${window.innerHeight * 2.2}`,
              scrub: 0.32,
              invalidateOnRefresh: true,
            },
          });

          timeline.fromTo(
            ".story-track i",
            { scaleX: 0 },
            { scaleX: 1, duration: 1 },
            0,
          );

          scenes.slice(1).forEach((next, index) => {
            const at = index === 0 ? 0.26 : 0.59;
            timeline
              .to(
                scenes[index]!,
                { x: "-100vw", autoAlpha: 0, duration: 0.15 },
                at,
              )
              .to(next, { x: 0, autoAlpha: 1, duration: 0.15 }, "<");
          });

          const pin = timeline.scrollTrigger!;
          const visibleHeight = () => window.innerHeight - 88;

          gsap.fromTo(
            ".story-deck",
            { x: "100vw", opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                start: () => pin.start - visibleHeight() * 0.65,
                end: () => pin.start - visibleHeight() * 0.08,
                scrub: true,
              },
            },
          );
          gsap.fromTo(
            ".story-deck",
            { x: 0, opacity: 1 },
            {
              x: "-100vw",
              opacity: 0,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                start: () => pin.end + visibleHeight() * 0.08,
                end: () => pin.end + visibleHeight() * 0.65,
                scrub: true,
              },
            },
          );

          let refreshFrame = 0;
          const observer = new ResizeObserver(() => {
            cancelAnimationFrame(refreshFrame);
            refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
          });

          for (const section of home.current!.children) {
            if (section.matches(".auction-story")) break;
            observer.observe(section);
          }

          return () => {
            observer.disconnect();
            cancelAnimationFrame(refreshFrame);
          };
        },
        home,
      );

      return () => media.revert();
    },
    { scope: home },
  );
}
