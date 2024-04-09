import { useState } from "react";
import images from "../../assets/why-dal/index";
import NavbarWhite from "../../components/NavbarWhite";
import { useNavigate } from "react-router-dom";

export default function WhyDal() {
  const [active, setActive] = useState(data["موجه"]);
  const navigate = useNavigate();

  const isLastActive = active.title === "أمان";

  return (
    <div
      className={`min-h-screen flex flex-col justify-between items-center relative py-10  ${
        isLastActive ? "bg-primary text-white" : "text-primary"
      }`}
    >
      <NavbarWhite
        click={() => navigate("/about-dal")}
        vairant={isLastActive ? "black" : "white"}
      />

      <div className="z-[2] flex-1 flex flex-col gap-16 py-16 w-full max-w-5xl mx-auto px-5 lg:px-0 ">
        <h1 className="text-end text-3xl md:text-5xl font-semibold">
          لماذا دال ؟
        </h1>

        <div className="grid grid-cols-8">
          <div className="col-span-full lg:col-span-3 order-3 lg:order-1">
            <img src={active.src} className="w-[300px]" alt="" />
          </div>

          <div className="flex flex-col gap-10 text-end py-10 col-span-full lg:col-span-3 order-2">
            <h1 className="lg:text-5xl text-3xl font-bold">{active.title}</h1>
            <p
              className={`lg:text-2xl text-xl ${
                isLastActive ? "text-g1" : "text-dark"
              }`}
            >
              {active.text}
            </p>
          </div>

          <div className="flex lg:flex-col flex-row-reverse gap-3 lg:gap-0 items-end lg:col-span-2 col-span-full order-1 lg:order-3">
            {list.map((item, i) =>
              item === "line" ? (
                <div
                  className="h-10 hidden lg:block relative right-8 w-[2px] bg-gray-200"
                  key={i}
                ></div>
              ) : (
                <Selectable
                  key={i}
                  active={active}
                  setActive={setActive}
                  item={item}
                  lastActive={isLastActive}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Selectable = ({ setActive, active, item, lastActive }) => {
  const isActive = active.title === item.name;

  return (
    <div
      onClick={() => setActive(data[item.name])}
      className="flex gap-3 md:gap-6 cursor-pointer place-items-center"
    >
      <h3 className={`md:text-xl text-right ${isActive ? "font-bold" : ""}`}>
        {item.name}
      </h3>
      <div>
        <div
          className={`md:p-5 p-1.5 md:rounded-3xl rounded-xl scale-[0.8] ${
            isActive ? "bg-primary" : lastActive ? "bg-g1/30" : "bg-g1"
          }`}
          style={{ backgroundColor: isActive && lastActive ? "#ffffff" : "" }}
        >
          <img
            src={isActive || lastActive ? item.icon.white : item.icon.fill}
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const data = {
  موجه: {
    title: "موجه",
    text: "حلول مخصصة لاحتياجات الجهات في السوق المالية",
    src: images.mainOne,
  },
  موثوقه: {
    title: "موثوقه",
    text: "تحت إشراف نخبة من أبرز الخبراء المختصين في المجال",
    src: images.mainTwo,
  },
  بسيط: {
    title: "بسيط",
    text: "سهلنا وصولك للمعلومة وتقدر تسألنا تتأكد منها",
    src: images.mainThree,
  },
  أمان: {
    title: "أمان",
    text: "خلك مرتاح البال من مخاطر الالتزام والعقوبات المحتملة",
    src: images.mainFour,
  },
};

const list = [
  { name: "موجه", icon: images.iconOne },
  "line",
  { name: "موثوقه", icon: images.iconTwo },
  "line",
  { name: "بسيط", icon: images.iconThree },
  "line",
  { name: "أمان", icon: images.iconFour },
];
