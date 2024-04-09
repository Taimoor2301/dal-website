import NavbarWhite from "../../components/NavbarWhite";
import icons from "../../assets/about-icons/index";
import { useNavigate } from "react-router-dom";

export default function AboutDal() {
  const navigate = useNavigate();
  return (
    <div
      className={`min-h-screen flex flex-col justify-between items-center relative py-10 text-primary`}
    >
      <NavbarWhite click={() => navigate("/faq")} vairant="white" />

      <div className="z-[2] flex-1 flex flex-col items-center text-center pt-20 w-full max-w-5xl mx-auto ">
        <h1 className="font-bold lg:text-6xl text-4xl">عن دال</h1>
        <p className="md:text-2xl text-md lg:py-10 py-5">
          ,هي شركة تقنية تنظيمية ناشئة تقدم حلولاً تقنية مبتكرة للجهات في السوق
          المالية
          <br />
          .لتلبية كل متطلبات المطابقة والالتزام
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 lg:p-0 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(230.51deg, rgba(51, 104, 126, 0.016) 0%, rgba(51, 104, 126, 0.128) 100%)",
              }}
              className="shadow-sm rounded-2xl p-5 h-full bg-g1 flex flex-col items-center text-center gap-5"
            >
              <img src={item.icon} alt="" />
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    icon: icons.icon1,
    title: "رؤيتنا",
    text: "قيادة التحول الرقمي في مجال التقنية التنظيمية في السوق المالية.",
  },
  {
    icon: icons.icon2,
    title: "خدماتنا",
    text: "تحت إشراف نخبة من أبرز الخبراء المختصین في المجال.",
  },
  {
    icon: icons.icon3,
    title: "عملاؤنا",
    text: "الجهات الخاضعة لإشراف هيئة السوق المالية، بما فيهم مؤسسات السوق المالیة، أو الصناديق الاستثمارية تحت إدارتها، وشركات التقنية المالیة، والشركات المدرجة.",
  },
];
