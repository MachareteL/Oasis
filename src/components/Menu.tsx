"use client";
import { BoschSansLight } from "@/fonts/fonts";
import { Drawer } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/outline";
import { PlusSmallIcon } from "@heroicons/react/24/solid";

type Anchor = "left";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute left-0 top-28 h-32 w-9 -translate-x-5 cursor-pointer dark:bg-bosch-dark-gray-400 transition-all hover:translate-x-0">
      <div
        className="relative h-full w-full overflow-hidden rounded-md after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-gradient-to-b after:from-oasis-standard-100 after:from-10% after:to-oasis-standard-500 border dark:border-none" 
        onClick={() => setOpen(true)}
      >
        <h1
          className={`text-upright flex h-full justify-center ${BoschSansLight.className}`}
        >
          MENU
        </h1>
      </div>
      <div className="relative w-full dark:bg-bosch-dark-gray-400 after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-gradient-to-b after:from-oasis-standard-100 after:from-10% after:to-oasis-standard-500 sm:w-1/6"></div>

      <Drawer open={open}>
        <div className="h-screen w-screen after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-gradient-to-b after:from-oasis-standard-100 after:from-10% after:to-oasis-standard-500 dark:bg-bosch-dark-gray-400 sm:w-64 md:w-80 ">
          <div
            onClick={() => setOpen(false)}
            className="flex justify-end p-5 text-bosch-light-gray-300   hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300"
          >
            <XMarkIcon className="w-10"/>
          </div>
          <div className="px-8 pt-20 space-y-3">
            <Link
              href={"/chat"}
              className="flex items-center justify-between rounded-lg border h-14 px-4 transition-transform hover:-translate-y-1 hover:shadow-md text-bosch-light-gray-300 dark:text-bosch-dark-gray-100 border-bosch-light-gray-200 dark:border-bosch-dark-gray-200  dark:hover:shadow-bosch-light-gray-400"
            >
              <PlusSmallIcon className="w-10 -ml-2"/>
              New Chat
            </Link>
            <Link
              href={"/ room"}
              className="flex items-center justify-between rounded-lg border h-14 px-4 transition-transform hover:-translate-y-1 hover:shadow-md text-bosch-light-gray-300 dark:text-bosch-dark-gray-100 border-bosch-light-gray-200 dark:border-bosch-dark-gray-200  dark:hover:shadow-bosch-light-gray-400"
            >
              <FolderIcon className="w-7" />
              Your  room
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
