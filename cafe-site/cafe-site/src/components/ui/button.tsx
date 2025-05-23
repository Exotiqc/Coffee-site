
import { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      {...props}
      className={`bg-[#6b4f4f] text-white py-2 px-4 rounded-xl hover:bg-[#523f3f] transition ${className}`}
    >
      {children}
    </button>
  );
}
