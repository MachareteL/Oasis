import { BoschSansBlack } from "@/fonts/fonts";
import React from "react";
import Link from "next/link";

export default function Oasis() {
  return (
    <Link
      href={"/"}
      className={`flex justify-center ${BoschSansBlack.className}`}
    >
      <h1 className="text-bosch-gray-600 text-4xl font-extrabold dark:text-bosch-light-gray-100">
        BOSCH
      </h1>
      <h1 className="text-bosch-gray-600 bg-gradient-to-r from-oasis-standard-100 from-10% to-oasis-standard-500 bg-clip-text text-4xl font-bold text-transparent transition-all duration-100 ease-out hover:from-100% dark:to-oasis-standard-550">
        OASIS
      </h1>
    </Link>
  );
}
