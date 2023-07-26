import React from "react";

export function Modal({ title, children }: ModalProps) {
  return (
    <div className="m-10 flex h-96 max-w-3xl flex-col rounded-2xl bg-bosch-white p-5">
      <text className="text-lg font-bold">{title}</text>
      <h1 className="bg-bosch_gray-100 mx-2 h-0.5"></h1>
      {children}
    </div>
  );
}
