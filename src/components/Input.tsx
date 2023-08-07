"use client";
import { TextField, styled } from "@mui/material";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
let theme;

if (typeof window !== "undefined") {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const TextInput = styled(TextField)(
  theme
    ? {
        "& label.Mui-focused": {
          color: "#B2B9C0",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#7D8389",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#7D8389",
          },
          "&:hover fieldset": {
            borderColor: "#7D8389",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#B2B9C0",
          },
        },
      }
    : {
        "& label.Mui-focused": {
          color: "#18837E",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#A4ABB3",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#A4ABB3",
          },
          "&:hover fieldset": {
            borderColor: "#A4ABB3",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#18837E",
          },
        },
      },
);

export default function Input({
  placeholder,
  type,
  value,
  onChange,
  className,
  ...attr
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <>
      <TextInput
        id="outlined-basic"
        label={placeholder}
        onChange={onChange}
        variant="outlined"
        inputProps={{ className: `text-black dark:text-white`, ...attr }}
        className="w-full"
        size="small"
      />
    </>
  );
}
