"use client";
import Image from "next/image";
import React from "react";
import BoschHeader from "../../public/bosch-supergraphic-oasis.svg";
import BoschBlackLogo from "../../public/BoschBlack.svg";
import { usePathname } from "next/navigation";
import Menu from "./Menu";

export default function Header() {
  const pathname = usePathname();
  if (pathname == "/signup" || pathname == '/signup/register' || pathname == '/signup/changepassword' || pathname == '/signup/sendcode') {
    return <></>;
    // commit pls
  }
  return (
    <div>
      <Menu />

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
