"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import boschSuperGraph from "../../../public/BOSCH.svg";
import Oasis from "@/components/Oasis";
import Link from "next/link";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  const { data, status } = useSession();
  console.log(data, status);
  const [user, setUser] = useState({ email: "", password: "" });
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    console.log('onsubmit');
    
    await signIn("credentials", {
      email: user.email,
      password: user.password,
    });
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
        <div className="z-10 flex h-fit w-full flex-col space-y-4 rounded-2xl bg-bosch-white p-20 dark:bg-bosch-dark-gray-400 md:ml-auto md:mt-0 md:w-2/3 lg:w-2/4 xl:w-5/12 opacity-90">
          <div className="flex flex-col">
            <Oasis />
            <h1 className="flex justify-center text-xl font-thin sm:text-2xl text-bosch-black dark:text-bosch-light-gray-100">
              Sign In
            </h1>
          </div>

          <form
            className="space-y-12"
            onSubmit={(event) => {
              handleLogin(event);
            }}
          >
            <div className="space-y-4">
              <Input placeholder="E-mail" name="email" />
              <div className="space-y-1">
                <Input placeholder="Password" name="password" />
                <span className="flex justify-end text-sm text-bosch-dark-gray-200 opacity-80 hover:opacity-100">
                  <Link href={"/signup"}>Forgot password?</Link>
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
        <div className="z-10 flex w-full justify-center space-x-2 rounded-2xl bg-bosch-white py-8 dark:bg-bosch-dark-gray-400 md:ml-auto md:mt-0 md:w-2/3 lg:w-2/4 xl:w-5/12 opacity-90">
          <h1 className="text-lg text-bosch-black dark:text-bosch-light-gray-100">Don&apos;t have an account?</h1>
              <Link href="/signup/register" className="text-oasis-aqua-300 hover:text-oasis-aqua-500 dark:hover:text-oasis-aqua-400 text-lg">Create one</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
