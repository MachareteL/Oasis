import Image from "next/image";
import React from "react";
import BoschHeader from "../../public/bosch-supergraphic-oasis.svg";
import BoschBlackLogo from "../../public/BoschBlack.svg";
import { useRouter } from "next/router";
import Menu from "./Menu";
import Link from "next/link";
import GroupSettings from "./GroupSettings";

export default function Header() {
  const route = useRouter();
  const allowedRoutes = [
    "/signup",
    "/signup/register",
    "/signup/changepassword",
    "/signup/sendcode",
    "/signup/login",
  ];
  const { id } = route.query as { id: string };
  if (allowedRoutes.includes(route.pathname)) {
    return null;
  }

  return (
    <div>
      <Menu />
      <Image
        src={BoschHeader}
        alt="hyperGraphic"
        className="h-3 w-screen object-cover"
      />
      <div className="flex items-center justify-between pr-12">
        <Link href={"/"}>
          <Image src={BoschBlackLogo} alt="Logo" className="dark:invert" />
        </Link>
        {id && <GroupSettings id={id} />}
      </div>
    </div>
  );
}
