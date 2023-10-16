import Image from "next/image";
import React from "react";
import BoschHeader from "../../public/bosch-supergraphic-oasis.svg";
import BoschBlackLogo from "../../public/BoschBlack.svg";
import { usePathname } from "next/navigation";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  if (
    pathname == "/signup" ||
    pathname == "/signup/register" ||
    pathname == "/signup/changepassword" ||
    pathname == "/signup/sendcode" ||
    pathname == "/signup/login"
  ) {
    return <></>;
  }
  return (
    <div>
      <Menu />

      <Image
        src={BoschHeader}
        alt="hyperGraphic"
        className="h-3 w-screen object-cover"
      />
      <Link
        href={"/"}
        className="flex w-fit items-center justify-between pr-12"
      >
        <Image src={BoschBlackLogo} alt="Logo" className="dark:invert" />
      </Link>
    </div>
  );
}
