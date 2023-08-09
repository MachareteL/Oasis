import InputStandart from "@/components/InputStandart";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <form
      className="px-5 pb-4 pt-3 absolute bottom-0 w-full border-t border-bosch-light-gray-200 dark:border-bosch-dark-gray-300 flex justify-center">
        <div className="flex items-center space-x-6 w-11/12 max-w-5xl">
          <InputStandart placeholder="Type here" />
          <button className="w-7">
            <PaperAirplaneIcon className="text-bosch-dark-gray-200 hover:text-oasis-aqua-400 dark:text-bosch-dark-gray-200 dark:hover:text-oasis-aqua-300"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
