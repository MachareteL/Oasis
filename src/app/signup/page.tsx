"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import boschSuperGraph from "../../../public/BOSCH.svg";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  const { data, status } = useSession();
  console.log(data, status);
  const [user, setUser] = useState({ email: "", password: "" });
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
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
      <div className="container mx-auto flex h-full items-center px-5">
        <div className="z-10 flex h-fit w-full flex-col space-y-4 rounded-2xl p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3 bg-bosch-white dark:bg-bosch-dark-gray-400">
          <div className="space-y-4">
            <h1 className="text-xl font-bold dark:text-bosch-white sm:text-2xl">
              Sign Up
            </h1>
            <h1 className="h-[1px] bg-bosch-gray-150 dark:bg-bosch-gray-500"></h1>
          </div>

          <form className="space-y-12"
          onSubmit={(event) => {handleLogin(event)}}>
            <div className="space-y-8 px-5">
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Password" name="password" />
            </div>

            <div className="flex justify-end">
              <Button
                className="mr-5 text-bosch-white bg-oas"
                type="submit"
              >
                Create an Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
