import { BoschSansLight } from "@/fonts/fonts";
import React from "react";

export default function Menu() {
  return (
    <div className="absolute left-0 top-24 h-32 w-9 -translate-x-5 bg-bosch-dark-gray-400 transition-all hover:translate-x-0 cursor-pointer">
      <div className="relative h-full w-full overflow-hidden rounded-md after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-gradient-to-b after:from-oasis-standard-100 after:from-10% after:to-oasis-standard-500">
        <h1 className={`text-upright flex justify-center h-full text-bosch-white dark:text-bosch-dark-gray-200 ${BoschSansLight.className}`}>MENU</h1>
      </div>
    </div>
  );
}
