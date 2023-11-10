import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";

let theme;

if (typeof window !== "undefined") {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const AutoCompleteComponent = styled(Autocomplete)(
  theme
    ? {
        "& label.Mui-focused": {
          color: "#419E98",
        },
        "& .MuiOutlinedInput-root": {
          color: "#ffffff",
          "& fieldset": {
            borderColor: "#7D8389",
          },
          "&:hover fieldset": {
            borderColor: "#7D8389",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#419E98",
          },
          "& .MuiSvgIcon-root": {
            color: "#7D8389",
          },
          "& .MuiChip-label": {
            color: "#7D8389",
        },
        },
        "& .css-1q60rmi-MuiAutocomplete-endAdornment": {
          top: "calc(14px)",
        },
        "& .css-5brnvr-MuiButtonBase-root-MuiChip-root .MuiChip-deleteIcon": {
          color: "#50555A"
          
        },
        overflowY: "scroll",
        maxHeight: "6rem",
        paddingTop: 5,
        borderBottom: "solid 1px #7D8389",
      }
    : {
        "& label.Mui-focused": {
          color: "#18837E",
        },
        "& .MuiOutlinedInput-root": {
          color: "#101112",
          "& fieldset": {
            borderColor: "#D0D4D8",
          },
          "&:hover fieldset": {
            borderColor: "#D0D4D8",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#18837E",
          },
          "& .MuiSvgIcon-root": {
            color: "#D0D4D8",
          },
          "& .MuiChip-label": {
            color: "#101112",
        },
        //   "& .MuiButtonBase-root": {
        //     backgroundColor: "#EFF1F2",
        // },
    },
    "& .css-1q60rmi-MuiAutocomplete-endAdornment": {
          top: "calc(14px)",
        },
        "& .css-5brnvr-MuiButtonBase-root-MuiChip-root .MuiChip-deleteIcon": {
          color: "#D0D4D8"
          
        },
        overflowY: "scroll",
        maxHeight: "6rem",
        paddingTop: 5,
        borderBottom: "solid 1px #D0D4D8",
      }
);

export default function CustomizedHook() {
  return (
    <Stack className="w-full flex-row justify-between gap-2">
      <div className="w-5/12">
        <AutoCompleteComponent
          multiple
          id="tags-outlined"
          options={areas}
          className=""
          getOptionLabel={(option) => option.area}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} label="Area" />}
        />
      </div>
      <div className="w-7/12">
        <AutoCompleteComponent
          multiple
          id="tags-outlined"
          options={people}
          getOptionLabel={(option) => option.area}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Participants" />
          )}
        />
      </div>
    </Stack>
  );
}

const areas = [
  { area: "CaP/GS-TET3" },
  { area: "CaP/ETS" },
  { area: "CaP/GS-TET3" },
  { area: "CaP/ETS" },
  { area: "CaP/GS-TET3" },
  { area: "CaP/ETS" },
  { area: "CaP/GS-TET3" },
];
const people = [
  { area: "exemplo" },
  { area: "exemplo" },
  { area: "exemplo" },
  { area: "exemplo" },
  { area: "exemplo" },
  { area: "exemplo" },
  { area: "exemplo" },
];
