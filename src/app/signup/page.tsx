"use client";
import Button from "@/components/Button";
import InputStandart from "@/components/InputStandart";
import { NextPage } from "next";
import { signIn, useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import boschSuperGraph from "../../../public/bosch-supergraphic-oasis.svg";
import Oasis from "@/components/Oasis";
import Link from "next/link";
import { BoschSansBold, BoschSansLight, BoschSansMedium } from "@/fonts/fonts";

interface Props { }

const Login: NextPage<Props> = ({ }) => {
  const { data, status } = useSession();
  console.log(data, status);
  const [user, setUser] = useState({ email: "", password: "" });
  function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    console.log("onsubmit");

    void signIn("credentials", {
      email: user.email,
      password: user.password,
      callbackUrl: '/'
    })
  }
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-bosch-black">
        <Image
          src={boschSuperGraph}
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
      </div>
      <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-4 px-5">
        <div className="z-10 flex h-fit w-full flex-col space-y-12 rounded-2xl bg-bosch-white px-20 py-24 opacity-90 dark:bg-bosch-dark-gray-400 md:ml-auto md:mt-0 md:w-2/3 lg:w-2/4 xl:w-5/12">
          <div className="flex flex-col">
            <Oasis />
            <h1 className={`flex justify-center text-xl sm:text-2xl ${BoschSansLight.className}`}>
              Sign In
            </h1>
          </div>

          <form
            className="space-y-14"
            onSubmit={(event) => {
              handleLogin(event);
            }}
          >
            <div className="space-y-8">
              <InputStandart
                placeholder="E-mail"
                name="email"
                onChange={(event) => {
                  setUser({ ...user, email: event.target.value });
                }}
              />
              <div className="space-y-1">
                <InputStandart
                  placeholder="Password"
                  name="password"
                  onChange={(event) => {
                    setUser({ ...user, password: event.target.value });
                  }}
                />
                <span className="flex justify-end text-sm text-bosch-dark-gray-200 opacity-80 hover:opacity-100 hover:text-oasis-aqua-300">
                  <Link href={"/signup/sendcode"}>Forgot password?</Link>
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                className=" bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500"
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
        <div className="z-10 flex w-full justify-center space-x-2 rounded-2xl bg-bosch-white py-8 opacity-90 dark:bg-bosch-dark-gray-400 md:ml-auto md:mt-0 md:w-2/3 lg:w-2/4 xl:w-5/12">
          <h1 className={`text-lg ${BoschSansMedium.className}`}>
            Don't have an account?
          </h1>
          <Link
            href="/signup/register"
            className={`text-lg hover:text-oasis-aqua-300 ${BoschSansMedium.className} underline`}
          >
            Create one
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
