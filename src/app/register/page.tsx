import Button from "@/components/Button";
import Input from "@/components/Input";
import { Modal } from "@/components/Modal";
import { NextPage } from "next";

interface Props {}

const Register: NextPage<Props> = ({}) => {
  return (
    <div className="h-full w-full absolute top-0 flex items-center">
      <div className=" p-8 m-auto container max-w-xl flex flex-col space-y-4 rounded-2xl border-2 dark:border border-bosch-gray-100 ">
        <text className="text-xl font-bold text-bosch-gray-800 dark:text-bosch-white sm:text-2xl">
          Register
        </text>
        <h1 className="h-0.5 bg-bosch-gray-100"></h1>
        <form className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label className="text-bosch-gray-800 dark:text-bosch-white">Name:</label>
            <Input
              placeholder="Name..."
              maxLength={20}
              className="h-8 sm:h-10"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-bosch-gray-800 dark:text-bosch-white">E-mail:</label>
            <Input
              placeholder="E-mail..."
              maxLength={20}
              className="h-8 sm:h-10"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-bosch-gray-800 dark:text-bosch-white">Password:</label>
            <Input placeholder="Password..." className="h-8 sm:h-10" />
          </div>
          <div className="flex justify-between">
            <Button className="border border-bosch-gray-100 hover:bg-bosch-gray-100 text-bosch-gray-800 dark:text-bosch-white dark:hover:bg-bosch-gray-700">
              Cancel
            </Button>
            <Button className="bg-bosch-green-350 text-bosch-white hover:bg-bosch-green-500" type="submit">
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
