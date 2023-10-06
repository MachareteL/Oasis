import React, {
  type DetailedHTMLProps,
  type ButtonHTMLAttributes,
} from "react";

export default function Button({
  className,
  children,
  disabled,
  ...attr
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={`disabled:bg-bosch-gray-200 rounded-md px-3 py-2 shadow-md ${className}`}
      disabled={disabled}
      {...attr}
    >
      {children}
    </button>
  );
}
