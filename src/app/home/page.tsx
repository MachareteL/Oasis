import { NextPage } from "next";
import Link from "next/link";
import {
  BoschSansBlack,
  BoschSansLight,
  BoschSansMedium,
  BoschSansRegular,
} from "@/fonts/fonts";
import Menu from "@/components/Menu";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col sm:space-y-20">

      <div className=" flex flex-col items-center p-20 space-y-2">
        <Menu />
        <div className="flex flex-col sm:flex-row sm:space-x-3">
          <p className={`text-5xl dark:text-bosch-dark-gray-100 ${BoschSansRegular.className}`}>
            Welcome to
          </p>
          <h1 className={`bg-bosch-black bg-gradient-to-r from-oasis-standard-100 from-10% to-oasis-standard-500 dark:to-oasis-standard-550 bg-clip-text text-5xl text-transparent ${BoschSansBlack.className}`}>
            OASIS
          </h1>
        </div>
        <p className={`text-2xl text-bosch-black dark:text-bosch-dark-gray-200 ${BoschSansLight.className}`} >
            Your Bosch Chat
          </p>
      </div>

      <div className="flex flex-col items-start justify-evenly space-y-5 sm:flex-row sm:space-y-0">
        <Link href={"/"} className="flex max-w-sm flex-col items-center space-y-4 rounded-xl border border-bosch-light-gray-200 px-5 py-12 transition-transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-bosch-light-gray-400 dark:border-bosch-dark-gray-300 ">
          <p className={`text-2xl text-bosch-black dark:font-medium dark:text-bosch-dark-gray-100 ${BoschSansMedium.className}`} >
            Start a New Chat
          </p>
          <p className={`flex text-center text-lg text-bosch-black dark:text-bosch-dark-gray-200 ${BoschSansLight.className}`} >
            Here is your space, for your documents and your questions
          </p>
        </Link>
        <Link href={"/"} className="flex max-w-sm flex-col items-center space-y-4 rounded-xl border border-bosch-light-gray-200 px-5 py-12 transition-transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-bosch-light-gray-400 dark:border-bosch-dark-gray-300 ">
          <p className={`text-2xl text-bosch-black dark:font-medium dark:text-bosch-dark-gray-100 ${BoschSansMedium.className}`} >
            Groups You Join
          </p>
          <p className={`flex text-center text-lg text-bosch-black dark:text-bosch-dark-gray-200 ${BoschSansLight.className}`} >
            Create or join teams to share documents and ask questions together
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
