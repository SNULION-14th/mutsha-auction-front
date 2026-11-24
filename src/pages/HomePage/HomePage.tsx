import { useRef } from "react";
import { AuctionStorySection } from "./components/AuctionStorySection";
import { FAQSection } from "./components/FAQSection";
import { InfoSection } from "./components/InfoSection";
import { MainSection } from "./components/MainSection";
import { RecommendSection } from "./components/RecommendSection";
import "./motion/layout.css";
import { useCardMotion } from "./motion/useCardMotion";
import { useHeroMotion } from "./motion/useHeroMotion";
import { useHomeworkMotion } from "./motion/useHomeworkMotion";
import { useStoryMotion } from "./motion/useStoryMotion";

function HomePage() {
  const home = useRef<HTMLDivElement>(null);
  useCardMotion(home);
  useHeroMotion(home);
  useStoryMotion(home);
  useHomeworkMotion(home);

  return (
    <div ref={home} className="market-home">
      <MainSection />
      <RecommendSection />
      <InfoSection />
      <AuctionStorySection />
      <FAQSection />
      <button
        className="home-to-top"
        type="button"
        aria-label="페이지 맨 위로 이동"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          })
        }
      >
        맨 위로 <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}

export default HomePage;
