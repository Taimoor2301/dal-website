import Button from "../../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import NavbarWhite from "../../components/NavbarWhite.tsx";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      id="home-bg"
      className="min-h-screen flex flex-col justify-between items-center relative gap-10 py-10"
    >
      <NavbarWhite click={() => navigate("/why-dal")} />

      <div className="flex flex-col gap-7 items-center justify-center text-center text-white z-[2] flex-1">
        <h1 className="md:text-4xl text-xl">،وداعاً للتعقيد</h1>
        <h1 className="md:text-7xl text-4xl font-bold">
          وأهلاً بالامتثال الدقيق
        </h1>
        <p className="md:text-2xl text-lg">
          وداعاً للتعقيد، وأهلاً بالامتثال الدقيق ، تحت إشراف نخبة من أبرز
          الخبراء المختصين في المجال ،<br /> سهلنا وصولك للمعلومة وتقدر تسألنا
          تتأكد منها
        </p>
        <Button text={"سجل اهتمامك الان"} click={() => navigate("/why-dal")} />
      </div>
    </div>
  );
}
