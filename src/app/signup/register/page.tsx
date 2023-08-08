import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";
import Image from "next/image";
import boschSuperGraph from "../../../../public/bosch-supergraphic-oasis.svg";
import { signIn, useSession } from "next-auth/react";
import prisma from "@/lib/prisma";
import Link from "next/link";
import Oasis from "@/components/Oasis";
import { hash } from "bcrypt";

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
        password: await hash(password, 12),
        name,
      },
    });
    console.log(user);
  }
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-bosch-black">
        <Image
          src={boschSuperGraph}
          alt=""
          className="h-full w-full object-cover opacity-75"
        />
      </div>
      <div className="container mx-auto flex h-full items-center">
        <div className="z-10 flex h-fit w-full flex-col space-y-4 rounded-2xl bg-bosch-white p-20 dark:bg-bosch-dark-gray-400 md:ml-auto md:mt-0 md:w-2/3 lg:w-2/4 xl:w-5/12 opacity-90">
          <div className="flex flex-col pt-4">
            <Oasis />
            <h1 className="flex justify-center text-xl font-thin sm:text-2xl text-bosch-black dark:text-bosch-light-gray-100">
              Register
            </h1>
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
                <span className="flex justify-end space-x-1 pt-2 text-bosch-dark-gray-200">
                  <p>Already have an account?</p>
                  <Link href={"/signup"} className="text-oasis-standard-200">
                    Sign In
                  </Link>
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                className="bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500"
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
