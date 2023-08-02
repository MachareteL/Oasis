"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

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
    <div className="absolute top-0 flex h-full w-full items-center justify-center">
      <div className="container m-5 flex max-w-xl flex-col space-y-12 rounded-2xl border-2 border-bosch-gray-100 bg-bosch-gray-800 p-8 dark:border dark:border-bosch-gray-600">
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-bosch-gray-600 dark:text-bosch-white sm:text-2xl">
            Log In
          </h1>
          <h1 className="h-[1px] bg-bosch-gray-150 dark:bg-bosch-gray-500"></h1>
        </div>

        <form
          className="space-y-12"
          onSubmit={(event) => {
            handleLogin(event);
          }}
        >
          <div className="space-y-8 px-5">
            <Input
              placeholder="E-mail"
              // maxLength={20}
              name="email"
              onChange={(e) => {
                console.log(user.email);
                setUser({ ...user, email: e.target.value });
              }}
            />
            <Input
              placeholder="Password"
              name="password"
              onChange={(e) => {
                console.log(user.password);
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-end">
            <Button
              className="mr-5 bg-bosch-blue-500 text-bosch-white hover:bg-bosch-blue-750"
              type="submit"
            >
              Enter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
