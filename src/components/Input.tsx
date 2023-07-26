import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input({
  placeholder,
  type,
  value,
  onChange,
  className,
  ...attr
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      type={type}
      className={`rounded-md border-2 border-bosch-gray-250 px-1 pl-2 outline-bosch-gray-400 placeholder:border-bosch-gray-250 dark:text-bosch-gray-950 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...attr}
    />
  );
}
