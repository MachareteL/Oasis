import React from "react";

export default function Button({ className, children }: ButtonProps) {
  return (
    <button className={`rounded-md px-3 py-2 shadow-md ${className}`}>
      {children}
    </button>
  );
}
