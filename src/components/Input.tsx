import React from "react";

export default function Input({ placeholder, type }: InputProps) {
  return (
    <input
      type={type}
      className="border-2 border-bosch_gray-5 rounded-md placeholder:border-bosch_gray-2 p-1 pl-2 outline-bosch_gray-8 w-full"
      placeholder={placeholder}
    ></input>
  );
}
