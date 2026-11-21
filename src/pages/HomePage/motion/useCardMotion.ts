import { useEffect, type RefObject } from "react";
import "./cards.css";

export function useCardMotion(home: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!home.current) return;
    const slots = home.current.querySelectorAll<HTMLElement>(".info-slot");
    let frame = 0;
    function update() {
      frame = 0;
      const zones = Array.from(slots, (slot) => {
        const { top, bottom } = slot.getBoundingClientRect();
        if (bottom < 88 + (innerHeight - 88) * 0.1) return "above";
        if (top > innerHeight * 0.78) return "below";
        return "inside";
      });
      slots.forEach((slot, i) => {
        if (slot.dataset.zone !== zones[i]) slot.dataset.zone = zones[i];
      });
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    const observer = new ResizeObserver(schedule);
    observer.observe(home.current);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      slots.forEach((slot) => delete slot.dataset.zone);
    };
  }, [home]);
}
