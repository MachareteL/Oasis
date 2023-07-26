"use client";
import Image from "next/image";
import React from "react";
import BoschHeader from "../../public/BOSCH.svg";
import BoschBlackLogo from "../../public/BoschBlack.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  return (
    <div>
      <Image
        src={BoschHeader}
        alt="hyperGraphic"
        className="w-screen h-3 object-cover"
      />
      <span className="flex items-center justify-between pr-12">
        <Image src={BoschBlackLogo} alt="Logo" className="dark:invert"/>
        {pathname != "/signin" && <Link href={"/signin"}>Log in</Link>}
      </span>
    </div>
  );
}
