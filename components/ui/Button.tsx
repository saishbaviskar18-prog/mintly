import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        rounded-[24px]
        bg-white
        shadow-lg
        py-4
        text-lg
        font-semibold
        text-black
        transition-all
        duration-200
        hover:scale-[1.005]
        hover:bg-zinc-100
        active:scale-[0.99]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}