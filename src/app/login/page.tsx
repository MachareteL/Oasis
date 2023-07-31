import Button from "@/components/Button";
import Input from "@/components/Input";
import { NextPage } from "next";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  async function handleLogin(formdata: FormData) {
    "use server";
    const user = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    };
    console.log(user);
  }
  return (
    <div className="h-full w-full bg-red-500 absolute">
      <div className="container m-auto flex max-w-xl flex-col space-y-4 rounded-2xl border-2 bg-pink-700 p-8">
        <text className="text-lg font-bold text-bosch-gray-800 dark:text-bosch-white sm:text-2xl">
          Log in
        </text>
        <h1 className="h-0.5 bg-bosch-gray-100"></h1>
        <form className="space-y-6" action={handleLogin}>
          <div className="flex flex-col space-y-1 text-bosch-gray-850 dark:text-bosch-white">
            <label>User:</label>
            <Input
              placeholder="User..."
              maxLength={20}
              className="h-8 sm:h-10"
              name="email"
            />
          </div>
          <div className="flex flex-col space-y-1 text-bosch-gray-850 dark:text-bosch-white">
            <label>Password:</label>
            <Input
              placeholder="Password..."
              className="h-8 sm:h-10"
              name="password"
            />
          </div>
          <div className="flex justify-between">
            <Button className="border border-bosch-gray-100 text-bosch-gray-800 hover:bg-bosch-gray-100 dark:text-bosch-white dark:hover:text-bosch-gray-800">
              Cancel
            </Button>
            <Button
              className="bg-bosch-green-350 text-bosch-white hover:bg-bosch-green-500"
              type="submit"
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
