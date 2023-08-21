import InputStandart from "@/components/InputStandart";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import boschSuperGraph from "../../../../public/bosch-supergraphic-oasis.svg";
import Oasis from "@/components/Oasis";
import Button from "@/components/Button";
import { BoschSansLight } from "@/fonts/fonts";

interface Props {}

const ChangePassword: NextPage<Props> = ({}) => {
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
        <div className="z-10 flex h-fit w-full flex-col space-y-12 rounded-2xl bg-bosch-white p-20 opacity-90 dark:bg-bosch-dark-gray-400 md:ml-auto md:mt-0 md:w-2/3 lg:w-2/4 xl:w-5/12">
          <div className="flex flex-col pt-4">
            <Oasis />
            <h1 className={`flex justify-center text-xl sm:text-2xl ${BoschSansLight.className}`}>
              Change Password
            </h1>
          </div>
          <form className="space-y-14">
            <div className="space-y-4">
              <div>
                <InputStandart placeholder="E-mail" name="email" />
              </div>
              <div>
                <InputStandart placeholder="New Password" name="newPassword" />
              </div>
              <div>
                <InputStandart
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                className="bg-oasis-aqua-400 text-bosch-white hover:bg-oasis-aqua-500"
                type="submit"
              >
                Change
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;