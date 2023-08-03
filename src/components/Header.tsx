"use client";
import Image from "next/image";
import React from "react";
import BoschHeader from "../../public/BOSCH.svg";
import BoschBlackLogo from "../../public/BoschBlack.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  if (pathname == "/signup" || pathname == '/signup/register') {
    return <></>;
    // commit pls
  }
  return (
    <div>
      <Image
        src={BoschHeader}
        alt="hyperGraphic"
        className="h-3 w-screen object-cover"
      />
      <span className="flex items-center justify-between pr-12">
        <Image src={BoschBlackLogo} alt="Logo" className="dark:invert" />
      </span>
    </div>
  );
}
