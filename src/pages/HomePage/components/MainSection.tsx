import { useTranslation } from "react-i18next";
import { LandingBg, LogoWhite } from "../../../assets/image";

export function MainSection() {
  const { t } = useTranslation();
  return (
    <section className="market-hero">
      <img className="hero-photo" src={LandingBg} alt="" />
      <div className="hero-copy">
        <img
          className="hero-mark"
          src={LogoWhite}
          width="52"
          height="52"
          alt=""
        />
        <h1>
          <span className="hero-great">{t("main.great")}</span>{" "}
          <span className="hero-market">{t("main.likemarket")}</span>
        </h1>
        <p>{t("main.description")}</p>
      </div>
      <div className="hero-track" aria-hidden="true">
        <i />
      </div>
    </section>
  );
}
