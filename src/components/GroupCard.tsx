"use client";
import { BoschSansBold, BoschSansLight } from "@/fonts/fonts";
import { useEffect } from "react";
import Link from "next/link";

export default function GroupCard({
  borderColorIndex,
}: {
  borderColorIndex: number;
}) {
  const borderColor = [
    "before:bg-oasis-standard-100",
    "before:bg-oasis-standard-200",
    "before:bg-oasis-standard-300",
    "before:bg-oasis-standard-400",
    "before:bg-oasis-standard-500",
    "before:bg-oasis-purple-100",
    "before:bg-oasis-purple-200",
    "before:bg-oasis-purple-300",
    "before:bg-oasis-purple-400",
    "before:bg-oasis-purple-500",
    "before:bg-oasis-blue-100",
    "before:bg-oasis-blue-200",
    "before:bg-oasis-blue-300",
    "before:bg-oasis-blue-400",
    "before:bg-oasis-blue-500",
  ];

  return (
    <Link href={"/"}
      className={`relative flex h-36 flex-col justify-between overflow-hidden rounded-lg border border-bosch-light-gray-200 bg-[var(--bgCardBorderColor)] from-10% px-5 py-2 before:absolute before:left-0 before:top-0 before:h-full before:w-2 dark:border-bosch-dark-gray-300 ${borderColor[borderColorIndex]} transition-transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-bosch-light-gray-400`}
    >
      <div className="flex flex-col">
        <p
          className={`${BoschSansBold.className} text-lg text-bosch-black dark:text-bosch-light-gray-200`}
        >
          Title
        </p>
        <p className={`${BoschSansLight.className}`}>Description</p>
      </div>
      <p className={`flex justify-end`}>area - name</p>
    </Link>
  );
}
