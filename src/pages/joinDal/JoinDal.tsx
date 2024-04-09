import Button from "../../components/Button";
import icons from "../../assets/footer-icons/index";
import { useNavigate } from "react-router-dom";
import NavbarWhite from "../../components/NavbarWhite";

export default function JoinDal() {
  const navigate = useNavigate();
  return (
    <div
      className={`min-h-screen flex flex-col justify-between items-center relative pt-10`}
    >
      <NavbarWhite vairant="white" click={() => navigate("/")} />

      <div className="z-[2] flex-1 flex flex-col items-center justify-center text-right pt-20 py-20 lg:py-0 p-5 w-full max-w-7xl mx-auto">
        <div
          className="rounded-3xl text-white p-10 flex flex-col-reverse lg:flex-row gap-y-5 w-full justify-between items-center"
          style={{
            background:
              "linear-gradient(0deg, #31667C, #31667C), linear-gradient(267.5deg, #467D95 40.67%, rgba(28, 28, 28, 0) 99.81%)",
          }}
        >
          <Button text="سجل اهتمامك" click={() => null} />
          <div>
            <h1 className="font-bold lg:text-4xl text-2xl py-5">
              كن أول القادرين للاستفادة من حلولنا وانضم لمجتمع دال
            </h1>
            <p className="md:text-lg text-sm">
              إعادة ابتكار التميز في الالتزام
            </p>
            <p className="md:text-lg text-sm">
              تقنيات تنظيمية مبتكرة لتخفف أعباء الامتثال وتجاوزها بسلاسة ودقة
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white flex w-full flex-col gap-10 py-10 px-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="flex items-center gap-2">
            <img src={icons.mialIcon} alt="" />
            hello@DAL.com
          </div>
          <div className="flex items-center gap-2">
            <img src={icons.phoneicon} alt="" />
            +91 91813 23 2309
          </div>
          <div className="flex items-center gap-2">
            <img src={icons.mapIcon} alt="" />
            Saudi Arabia
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full h-[1px] bg-gray-600" />

        <div className="lg:rounded-full rounded-xl p-5 max-w-7xl mx-auto bg-white text-dark flex flex-col lg:flex-row gap-y-5 justify-between items-center w-full">
          <div className="flex items-center justify-center gap-2">
            <img src={icons.fbIcon} alt="" />
            <img src={icons.twitterIcon} alt="" />
            <img src={icons.linkedInIcon} alt="" />
          </div>

          <p>DAL@2024 All Rights Reserved</p>
          <p className="pr-5">Privacy Policy | Terms of Services</p>
        </div>
      </footer>
    </div>
  );
}
