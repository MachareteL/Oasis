import InputStandart from "@/components/InputStandart";
import ReadRoomInfosModal from "@/components/ReadRoomInfosModal";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div>
      <ReadRoomInfosModal />
      <form className="absolute bottom-0 flex w-full justify-center border-t border-bosch-light-gray-200 px-5 pb-4 pt-3 dark:border-bosch-dark-gray-300">
        <div className="flex w-11/12 max-w-5xl items-center space-x-6">
          <InputStandart placeholder="Type here" />
          <button className="w-7">
            <PaperAirplaneIcon className="text-bosch-dark-gray-200 hover:text-oasis-aqua-400 dark:text-bosch-dark-gray-200 dark:hover:text-oasis-aqua-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
