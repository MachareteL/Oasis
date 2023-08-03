import { BoschSansBlack, BoschSansBold } from "@/fonts/fonts";
import React from "react";

export default function Oasis() {
  return (
    <span className={`flex justify-center ${BoschSansBlack.className}`}>
      <h1 className="text-bosch-gray-600 text-4xl font-extrabold dark:text-bosch-white ">
        BOSCH
      </h1>
      <h1 className="text-bosch-gray-600 bg-clip-text text-4xl font-bold dark:bg-gradient-to-r dark:from-oasis-standard-100 dark:to-oasis-standard-500 dark:text-transparent">
        OASIS
      </h1>
    </span>
  );
}
