import clsx from "clsx";

interface ButtonProps {
  width: string;
  type: "button" | "submit";
  text: string;
  onClick?: () => void;
}

const ButtonComp = ({ width, type, text, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "h-15 bg-orange rounded-xl font-bold text-[18px] leading-[1.56] hover:bg-[#d87f7f] hover:drop-shadow-md cursor-pointer transition duration-300 ease-in-out",
        width
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
