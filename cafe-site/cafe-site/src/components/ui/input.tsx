
import { InputHTMLAttributes } from "react";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={`w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#6b4f4f] ${className}`}
    />
  );
}
