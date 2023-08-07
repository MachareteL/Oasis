import { NextPage } from "next";
import {
  BoschSansBlack,
  BoschSansBold,
  BoschSansLight,
  BoschSansMedium,
  BoschSansRegular,
} from "@/fonts/fonts";
import GroupCard from "@/components/GroupCard";

interface Props {}

const Groups: NextPage<Props> = ({}) => {
  const groups = [1, 2, 3, 4];
  const colors = [];
  return (
    <div>
      <div className=" flex flex-col items-center space-y-2 p-20">
        <div className="flex flex-col sm:flex-row sm:space-x-3">
          <p
            className={`text-5xl dark:text-bosch-dark-gray-100 ${BoschSansRegular.className}`}
          >
            Welcome to
          </p>
          <h1
            className={`bg-bosch-black bg-gradient-to-r from-oasis-standard-100 from-10% to-oasis-standard-500 bg-clip-text text-5xl text-transparent dark:to-oasis-standard-550 ${BoschSansBlack.className}`}
          >
            OASIS
          </h1>
        </div>
        <p
          className={`text-2xl text-bosch-black dark:text-bosch-dark-gray-200 ${BoschSansLight.className}`}
        >
          Your Bosch Chat
        </p>
      </div>
      <div className="container mx-auto flex flex-col gap-4 px-2 sm:grid sm:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <GroupCard
            borderColorIndex={Math.floor(Math.random() * 15)}
          />
        ))}
      </div>
    </div>
  );
};

export default Groups;
