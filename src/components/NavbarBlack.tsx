import world from "../assets/images/world-black.svg";
import blackLogo from "../assets/images/logo-black.svg";
export default function NavBar({ click }: { click: () => void }) {
  return (
    <nav className="flex flex-col-reverse gap-y-10 md:flex-row justify-between items-center z-[2] w-full max-w-7xl px-5 xl:px-0">
      <div className="flex items-center gap-3">
        <button className="font-semibold">English</button>{" "}
        <img src={world} alt="" />
        <button
          onClick={() => click()}
          className="flex text-sm md:text-md justify-center items-center h-7 md:h-11 font-bold ml-5 hover:bg-primary transition-all duration-300 w-28 md:w-44 bg-dark text-white rounded-full"
        >
          سجل اهتمامك
        </button>
      </div>
      <img className="w-20 md:w-36" src={blackLogo} alt="" />
    </nav>
  );
}
