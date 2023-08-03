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
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2 h-full px-5">
        <div className="z-10 flex h-fit w-full flex-col space-y-4 rounded-2xl p-20 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/4 xl:w-5/12 bg-bosch-white dark:bg-bosch-dark-gray-400">
              <h1 className="text-xl font-thin dark:text-bosch-white sm:text-2xl flex justify-center">
                Sign Up
              </h1>

          <form className="space-y-12"
          onSubmit={(event) => {handleLogin(event)}}>
            <div className="space-y-8">
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Password" name="password" />
            </div>

            <div className="flex justify-end">
              <Button
                className=" text-bosch-white bg-oasis-aqua-400 hover:bg-oasis-aqua-500"
                type="submit"
              >
                Create an Account
              </Button>
            </div>
          </form>
        </div>
        <div className="z-10 py-10 flex w-full rounded-2xl justify-center md:ml-auto md:mt-0 md:w-1/2 lg:w-2/4 xl:w-5/12 bg-bosch-white dark:bg-bosch-dark-gray-400 space-x-2">
            <h1>Don't have an account?</h1>
            <button className="text-oasis-aqua-400">Create one</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
