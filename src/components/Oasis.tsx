import { BoschSansBlack, BoschSansBold } from "@/fonts/fonts";
import React from "react";

export default function Oasis() {
  return (
    <span className={`flex justify-center ${BoschSansBlack.className}`}>
      <h1 className="text-bosch-gray-600 text-4xl font-extrabold dark:text-bosch-light-gray-100">
        BOSCH
      </h1>
      <h1 className="text-bosch-gray-600 text-4xl font-bold bg-clip-text text-transparent `bg-bosch-black bg-gradient-to-r from-oasis-standard-100 from-10% to-oasis-standard-500 dark:to-oasis-standard-550 ">
        OASIS
      </h1>
    </span>
  );
}
