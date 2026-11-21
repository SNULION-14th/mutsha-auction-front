import { YhFashion } from "@/assets/dummy";

import Inspection from "@/assets/dummy/runway-inspection";
import Framed from "@/assets/dummy/runway-framed";

const scenes = [
  {
    stage: "발견",
    image: YhFashion,
    alt: "조명 아래 펼쳐진 런웨이",
    title: "한 장의 런웨이를 발견하다.",
    text: "객석 너머, 조명 속 실루엣. 마음에 들어온 순간을 소장해 보세요.",
    label: "시작가",
    price: "3,000",
    bids: "입찰 대기",
  },
  {
    stage: "입찰",
    image: Inspection,
    alt: "장갑을 낀 손으로 살펴보는 런웨이 프린트",
    title: "같은 사진에 모인 시선.",
    text: "세 번째 입찰이 들어왔어요. 이 사진에 내가 매길 가격은 얼마일까요?",
    label: "현재 최고가",
    price: "4,500",
    bids: "3회 입찰",
  },
  {
    stage: "낙찰",
    image: Framed,
    alt: "선반 위 액자에 전시한 런웨이 프린트",
    title: "이제, 나의 컬렉션으로.",
    text: "마지막 입찰이 확정됐어요. 한 장의 사진이 새 주인을 만나는 순간입니다.",
    label: "최종 낙찰가",
    price: "5,000",
    bids: "낙찰 완료",
  },
];

export function AuctionStorySection() {
  return (
    <section
      className="auction-story"
      aria-label="런웨이 포토 프린트 경매 예시"
    >
      <div className="story-frame">
        <div className="story-heading">
          <strong>한눈에 보는 경매</strong>
          <span>런웨이 포토 프린트 · 예시</span>
        </div>
        <div className="story-deck">
          {scenes.map((scene, index) => (
            <article className="story-scene" key={scene.stage}>
              <div className="story-copy">
                <small>
                  0{index + 1} / 03　{scene.stage}
                </small>
                <h2>{scene.title}</h2>
                <p>{scene.text}</p>
              </div>
              <figure className="lot">
                <div className="lot-photo">
                  <img src={scene.image} alt={scene.alt} />
                  <span>{scene.bids}</span>
                </div>
                <figcaption>
                  <span>{scene.label}</span>
                  <strong>
                    {scene.price} <small>P</small>
                  </strong>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
        <div className="story-track" aria-hidden="true">
          <i />
        </div>
      </div>
    </section>
  );
}
