import React from "react";

export function Modal({ title, children }: ModalProps) {
  return (
    <div className="m-10 flex h-96 max-w-3xl flex-col rounded-2xl bg-bosch-white py-5 px-8">
      <p className="text-lg font-bold">{title}</p>
      <h1 className="bg-bosch-gray-100 -mx-2 h-0.5 mt-3 mb-5"></h1>
      {children}
    </div>
  );
}
