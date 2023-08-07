"use client";
import { BoschSansLight } from "@/fonts/fonts";
import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import { IconFolder, IconPlus, IconX } from "./Icon";
import Link from "next/link";

type Anchor = "left";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute left-0 top-24 h-32 w-9 -translate-x-5 cursor-pointer  dark:bg-bosch-dark-gray-400 transition-all hover:translate-x-0">
      <div
        className="relative h-full w-full overflow-hidden rounded-md after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-gradient-to-b after:from-oasis-standard-100 after:from-10% after:to-oasis-standard-500 border" 
        onClick={() => setOpen(true)}
      >
        <h1
          className={`text-upright flex h-full justify-center text-bosch-black dark:text-bosch-dark-gray-200 ${BoschSansLight.className}`}
        >
          MENU
        </h1>
      </div>
      <div className="relative w-full dark:bg-bosch-dark-gray-400 after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-gradient-to-b after:from-oasis-standard-100 after:from-10% after:to-oasis-standard-500 sm:w-1/6"></div>

      <Drawer open={open}>
        <div className="h-screen w-screen after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-gradient-to-b after:from-oasis-standard-100 after:from-10% after:to-oasis-standard-500 dark:bg-bosch-dark-gray-400 sm:w-64 md:w-80 ">
          <div
            onClick={() => setOpen(false)}
            className="flex justify-end bg-white p-5 text-white"
          >
            <IconX className="w-5 text-white" />
          </div>
          <div className="px-8 pt-20 space-y-3">
            <Link
              href={"/signup"}
              className="flex items-center justify-between rounded-lg border border-bosch-light-gray-200 p-2 px-4 transition-transform hover:-translate-y-1 hover:shadow-md dark:border-bosch-dark-gray-300 dark:text-bosch-white dark:hover:shadow-bosch-light-gray-400"
            >
              <IconPlus className="w-8" />
              New Chat
            </Link>
            <Link
              href={"/groups"}
              className="flex items-center justify-between rounded-lg border border-bosch-light-gray-200 p-2 px-4 transition-transform hover:-translate-y-1 hover:shadow-md dark:border-bosch-dark-gray-300 dark:text-bosch-white dark:hover:shadow-bosch-light-gray-400"
            >
              <IconFolder className="w-8" />
              Your Groups
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
