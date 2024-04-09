import whiteLogo from "../assets/images/logo-white.svg";
import blackLogo from "../assets/images/logo-black.svg";
import world from "../assets/images/world.svg";
import worldBlack from "../assets/images/world-black.svg";

export default function NavbarWhite({
  click,
  vairant = "black",
}: {
  click: () => void;
  vairant: string;
}) {
  return (
    <nav className="flex flex-col-reverse md:flex-row gap-y-5 justify-between items-center z-[2] w-full max-w-7xl px-5 xl:px-0">
      <div className="flex items-center gap-3">
        <button
          className={`font-semibold ${
            vairant === "black" ? "text-white" : "text-primary"
          }`}
        >
          English
        </button>{" "}
        <img src={vairant === "black" ? world : worldBlack} alt="" />
        <button
          onClick={() => click()}
          className={`${
            vairant !== "black"
              ? "flex text-sm md:text-md justify-center items-center h-7 md:h-11 font-bold ml-5 hover:bg-primary transition-all duration-300 w-28 md:w-44 bg-dark text-white rounded-full"
              : "flex text-sm md:text-md justify-center items-center md:h-11 h-7 font-bold ml-5 hover:bg-dark hover:text-white transition-all duration-300 w-28 md:w-44 bg-white rounded-full text-primary "
          }`}
        >
          سجل اهتمامك
        </button>
      </div>
      <img
        src={vairant === "black" ? whiteLogo : blackLogo}
        className="w-20 md:w-36"
        alt=""
      />
    </nav>
  );
}
