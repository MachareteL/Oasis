import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";

interface Props {}

const Register: NextPage<Props> = ({}) => {
  return (
    <div className="absolute top-0 flex h-full w-full items-center justify-center">
    <div className="container m-5 flex max-w-xl flex-col space-y-12 rounded-2xl border-2 bg-bosch-gray-800 border-bosch-gray-100 dark:border-bosch-gray-600 p-8 dark:border">
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-bosch-gray-600 dark:text-bosch-white sm:text-2xl">
          Register
        </h1>
        <h1 className="h-[1px] bg-bosch-gray-150 dark:bg-bosch-gray-500"></h1>
      </div>

      <form className="space-y-12">
        <div className="space-y-8 px-5">
          <Input placeholder="Name" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </div>

        <div className="flex justify-end">
          <Button
            className="bg-bosch-blue-500 text-bosch-white hover:bg-bosch-blue-750 mr-5"
            type="submit"
          >
            Create an Account
          </Button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Register;
