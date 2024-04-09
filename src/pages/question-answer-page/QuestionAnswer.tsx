import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, useState, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import NavbarWhite from "../../components/NavbarWhite";

export default function QuestionAnswerPage() {
  const [open, setOpen] = useState(0);
  const navigate = useNavigate();
  return (
    <div
      className={`min-h-screen flex flex-col justify-between items-center relative pt-10`}
    >
      <NavbarWhite vairant="white" click={() => navigate("/join-dal")} />

      <div className="z-[2] flex-1 flex flex-col items-center justify-center text-right pt-10 w-full max-w-7xl mx-auto">
        <h1 className="text-primary text-3xl md:text-5xl font-bold mb-10">
          الأسئلة والحلول
        </h1>
        <div className="flex flex-col w-full gap-5 px-5 lg:px-0">
          {data.map((item, index) => (
            <FaqElement
              key={index}
              {...item}
              open={open}
              setOpen={setOpen}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const FaqElement = ({
  q,
  a,
  open,
  setOpen,
  index,
}: {
  q: string;
  a: string;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  const expanded = open === index;

  const Icon = expanded ? <AiOutlineMinus /> : <AiOutlinePlus />;

  return (
    <div
      className="p-5 overflow-hidden text-right rounded-xl max-w-5xl mx-auto w-full"
      style={{
        background: expanded
          ? "linear-gradient(230.51deg, rgba(51, 104, 126, 0.016) 0%, rgba(51, 104, 126, 0.128) 100%)"
          : "",
      }}
      onClick={() => setOpen((p) => (p === index ? 99 : index))}
    >
      <button className="flex w-full items-center justify-between font-medium gap-10">
        <span
          className={`p-2 rounded-xl ${
            expanded ? "text-white bg-primary" : "text-primary bg-g1"
          }`}
        >
          {Icon}
        </span>
        {q}
      </button>
      <AnimatePresence mode="sync">
        {expanded && (
          <motion.div
            key={q}
            initial={{ height: 0, marginTop: "0", opacity: 0 }}
            animate={{ height: "auto", marginTop: "10px", opacity: 1 }}
            exit={{ height: 0, marginTop: "0", opacity: 0 }}
            className="font-medium text-gray-500"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const data = [
  {
    q: "ماذا يميز دال؟",
    a: "نوفر حلولاً تقنية مبتكرة للجهات في السوق المالية، لتلبية كل متطلبات الالتزام والمطابقة.",
  },
  {
    q: " التقنية التنظيمية الان؟",
    a: "لأن الامتثال للمتطلبات يزداد صعوبة، وتأتي التقنية لتعزز الكفاءة وتقلل التكاليف والمخاطر.",
  },
  {
    q: "حلول دال؟",
    a: "منصة لتسهيل الوصول للمعلومات عبر بحث متقدم، وتجاوز التحديات بدعم خبراء دال، وحلول أخرى لإدارة المخاطر والالتزامات المستمرة.",
  },
  {
    q: "متابعة التغييرات التنظيمية؟",
    a: "يقوم فريقنا بمتابعة التحديثات التنظيمية وعكسها بشكل فوري على المنصة لإدارة هذه التغييرات.",
  },

  {
    q: "كيف يمكنني التواصل معكم؟",
    a: "نتشرف بك، ويسعدنا مساعدتك عبر التواصل معنا (اضغط هنا).",
  },
];
