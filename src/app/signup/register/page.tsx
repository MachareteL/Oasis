import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";
import Image from "next/image";
import boschSuperGraph from "../../../../public/BOSCH.svg";
import { signIn, useSession } from "next-auth/react";
import prisma from "@/lib/prisma";

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
      <div className="container mx-auto flex h-full items-center px-5">
        <div className="z-10 flex h-fit w-full flex-col space-y-4 rounded-2xl border-2 border-bosch-gray-100 bg-bosch-gray-800 p-8 dark:border dark:border-bosch-gray-600 md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-bosch-gray-600 dark:text-bosch-white sm:text-2xl">
              Register
            </h1>
            <h1 className="h-[1px] bg-bosch-gray-150 dark:bg-bosch-gray-500"></h1>
          </div>

          <form className="space-y-12" action={handleRegister}>
            <div className="space-y-8 px-5">
              <Input placeholder="Name" className="text-white" name="name" />
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Password" name="password" />
              <Input placeholder="Confirm Password" name="confirmPassword" />
            </div>

            <div className="flex justify-end">
              <Button
                className="mr-5 bg-bosch-blue-500 text-bosch-white hover:bg-bosch-blue-750"
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
