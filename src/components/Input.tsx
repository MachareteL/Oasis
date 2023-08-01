"use client";
import { TextField, styled } from "@mui/material";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

const theme = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(theme);

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
          color: "#007BC0",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#C1C7CC",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#C1C7CC",
          },
          "&:hover fieldset": {
            borderColor: "#C1C7CC",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#007BC0",
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
        variant="outlined"
        InputLabelProps={{ className: `text-white ${className}`}}
        color="primary"
        size="small"
        className="w-full"
      />
    </>
  );
}
