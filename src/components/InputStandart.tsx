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
          borderBottomColor: "#D0D4D8",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#D0D4D8",
          },
          "&:hover fieldset": {
            borderColor: "#D0D4D8",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#18837E",
          },
        },
      },
);

export default function InputStandart({
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
        inputProps={{ className: `text-bosch-black dark:text-bosch-white`, ...attr }}
        className="w-full"
        size="small"
      />
    </>
  );
}
