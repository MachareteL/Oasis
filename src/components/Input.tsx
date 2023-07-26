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
      className={`border-bosch-gray-250 placeholder:border-bosch-gray-250 outline-bosch-gray-550 rounded-md border-2 px-1 pl-2 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...attr}
    />
  );
}
