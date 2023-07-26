import React from "react";
import Input from "./Input";
import { IconAirplane } from "./Icon";

export function Inputchat() {
  return (
    <div className="flex gap-3 items-center justify-center">
      <Input placeholder={"ufa"} />
      <IconAirplane />
    </div>
  );
}
