import React from "react";

export function Modal({ title, children }: ModalProps) {
  return (
    <div className="bg-bosch-white max-w-3xl h-96 rounded-2xl flex flex-col m-10">
      <text>{title}</text>
      <h1 className="bg-red-800 h-0.5 mx-2"></h1>
      {children}
    </div>
  );
}
