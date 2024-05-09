import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  errors = [],
  name,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none border-none 
        ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 transition
      placeholder:text-neutral-400"
        name={name}
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
