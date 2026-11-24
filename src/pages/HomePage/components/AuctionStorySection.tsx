import { YhFashion } from "@/assets/dummy";

const scenes = [
  {
    stage: "발견",
    title: "마음에 드는 상품을 발견했어요.",
    text: "경매에 올라온 상품을 둘러보고, 나만의 시작 가격으로 경매가 열립니다.",
    label: "시작가",
    price: "3,000",
    bids: "입찰 대기",
  },
  {
    stage: "입찰",
    title: "관심이 모이며 가격이 올라가요.",
    text: "입찰이 이어지는 동안 현재 최고가를 확인하고 원하는 금액을 제안해요.",
    label: "현재 최고가",
    price: "4,500",
    bids: "3회 입찰",
  },
  {
    stage: "낙찰",
    title: "경매가 끝나면 새 주인을 만나요.",
    text: "마지막 입찰이 확정되고, 낙찰된 상품은 새로운 주인에게 전달됩니다.",
    label: "최종 낙찰가",
    price: "5,000",
    bids: "낙찰 완료",
  },
];

export function AuctionStorySection() {
  return (
    <section className="auction-story" aria-label="한눈에 보는 경매 진행 과정">
      <div className="story-frame">
        <div className="story-heading">
          <strong>한눈에 보는 경매</strong>
          <span>상품 발견부터 낙찰까지</span>
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
                  <img src={YhFashion} alt="경매 진행 예시 상품" />
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
