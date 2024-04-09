export default function Button({
  text,
  click,
}: {
  text: string;
  click: () => void;
}) {
  return (
    <button
      onClick={click}
      className="bg-white text-primary rounded-full flex justify-center items-center h-12 w-56 font-bold hover:bg-dark hover:text-white transition-all duration-300 ease-out"
    >
      {text}
    </button>
  );
}
