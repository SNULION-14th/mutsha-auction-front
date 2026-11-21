import { useRef } from "react";
import { FAQSection } from "./components/FAQSection";
import { InfoSection } from "./components/InfoSection";
import { MainSection } from "./components/MainSection";
import { RecommendSection } from "./components/RecommendSection";
import { AuctionStorySection } from "./components/AuctionStorySection";
import "./motion/layout.css";
import { useCardMotion } from "./motion/useCardMotion";
import { useHeroMotion } from "./motion/useHeroMotion";
import { useStoryMotion } from "./motion/useStoryMotion";

export default function HomePage() {
  const home = useRef<HTMLDivElement>(null);
  useCardMotion(home);
  useHeroMotion(home);
  useStoryMotion(home);
  return (
    <div ref={home} className="market-home">
      <MainSection />
      <RecommendSection />
      <InfoSection />
      <AuctionStorySection />
      <FAQSection />
    </div>
  );
}
