import { BoschSansBlack, BoschSansBold, BoschSansLight, BoschSansMedium } from "@/fonts/fonts";
import React, { type DetailedHTMLProps, type ButtonHTMLAttributes } from "react";

export default function GroupCard() {
  return (
    <div className="flex flex-col w-1/6 border border-l-8 border-l-red-600 px-5 py-2 h-32 justify-between rounded-lg ">
        <div className="flex flex-col">
            <p className={`${BoschSansBold.className} text-lg text-bosch-black dark:text-bosch-light-gray-200`}>Title</p>
            <p className={`${BoschSansLight.className}`}>Description</p>
        </div>
        <p className={`flex justify-end`}>area - name</p>
    </div>
  );
}
