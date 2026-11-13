import { useTranslation } from "react-i18next";
import { LandingBg } from "../../../assets/image";
import { LogoWhite } from "../../../assets/image";

export function MainSection() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-215 bg-cover bg-center"
      style={{ backgroundImage: `url(${LandingBg})` }}
    >
      <div className="w-full h-215 px-20 pc:p-50">
        <div className="max-w-[1160px] mx-auto flex flex-col gap-14 h-full justify-center">
          <div className="flex flex-col gap-5">
            <img src={LogoWhite} className="w-12 h-12 pc:w-18 pc:h-18" />
            <div className="text-5xl pc:text-6xl font-bold text-bg-white">
              {t("main.great")}
              <br />
              {t("main.likemarket")}
            </div>
          </div>
          <div className="text-2xl pc:text-3xl text-bg-white">
            {t("main.description")}
          </div>
        </div>
      </div>
    </div>
  );
}
