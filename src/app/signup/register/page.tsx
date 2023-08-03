import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";
import Image from "next/image";
import boschSuperGraph from "../../../../public/BOSCH.svg";
import { signIn, useSession } from "next-auth/react";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { BoschSansBold } from "@/fonts/fonts";

interface Props {}

const Register: NextPage<Props> = ({}) => {
  async function handleRegister(formdata: FormData) {
    "use server";
    const name = formdata.get("name")?.toString();
    const email = formdata.get("email")?.toString();
    const password = formdata.get("password")?.toString();
    const confirmPassword = formdata.get("confirmPassword")?.toString();
    if (!name || !email || !password || !confirmPassword) {
      return;
    }
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    console.log(user);
  }
  return (
    <section className="relative h-screen text-gray-600">
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src={boschSuperGraph}
          alt=""
          className="h-full w-full object-cover opacity-75"
        />
      </div>
      <div className="container mx-auto flex h-full items-center">
        <div className="z-10 flex h-fit w-full flex-col space-y-4 rounded-2xl border-2 border-bosch-gray-100 bg-bosch-gray-800 p-24 dark:border dark:border-bosch-gray-600 md:ml-auto md:w-2/3 lg:w-2/4 xl:w-5/12">
          <div className="flex flex-col py-4">
            <span className={`flex justify-center ${BoschSansBold.className}`}>
              <h1 className="text-4xl font-extrabold text-bosch-gray-600 dark:text-bosch-white ">
                BOSCH
              </h1>
              <h1 className="text-4xl font-bold text-bosch-gray-600 dark:text-transparent dark:bg-gradient-to-r ">
                OASIS
              </h1>
            </span>
            <h1 className="text-center text-bosch-white text-xl">Register</h1>
          </div>
          <form className="space-y-12" action={handleRegister}>
            <div className="space-y-4">
              <div>
                <Input placeholder="Name" className="text-white" name="name" />
              </div>
              <div>
                <Input placeholder="E-mail" name="email" />
              </div>
              <div>
                <Input placeholder="Password" name="password" />
              </div>
              <div>
                <Input placeholder="Confirm Password" name="confirmPassword" />
                <span className="flex justify-end text-bosch-white">
                  <p>Already have an account?</p>
                  <Link href={"/signup"}>Sign In</Link>
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                className="bg-bosch-blue-500 text-bosch-white hover:bg-bosch-blue-750"
                type="submit"
              >
                Create an Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>

    // <div classNameName="absolute top-0 flex h-full w-full items-center justify-center">
    //   <div classNameName="container grid grid-cols-12 rounded-2xl border-2 border-bosch-gray-100 bg-bosch-gray-800 p-8 dark:border dark:border-bosch-gray-600">
    //     <div classNameName="col-span-6"></div>
    //     <div classNameName="col-span-4">
    //       <div classNameName="space-y-4">
    //         <h1 classNameName="text-xl font-bold text-bosch-gray-600 dark:text-bosch-white sm:text-2xl">
    //           Register
    //         </h1>
    //         <h1 classNameName="h-[1px] bg-bosch-gray-150 dark:bg-bosch-gray-500"></h1>
    //       </div>

    //       <htmlForm classNameName="space-y-12">
    //         <div classNameName="space-y-8 px-5">
    //           <Input placeholder="Name" />
    //           <Input placeholder="E-mail" />
    //           <Input placeholder="Password" />
    //           <Input placeholder="Confirm Password" />
    //         </div>

    //         <div classNameName="flex justify-end">
    //           <Button
    //             classNameName="mr-5 bg-bosch-blue-500 text-bosch-white hover:bg-bosch-blue-750"
    //             type="submit"
    //           >
    //             Create an Account
    //           </Button>
    //         </div>
    //       </htmlForm>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;
