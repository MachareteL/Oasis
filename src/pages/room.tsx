import {
  BoschSansBlack,
  BoschSansLight,
  BoschSansRegular,
} from "@/fonts/fonts";
import RoomCard from "@/components/Roomcard";
import CreateRoomModal from "@/components/CreateGroupModal";
import JoinRoomModal from "@/components/JoinRoomModal";
import { Iaxios } from "@/adapters/axios";
import { useEffect, useState } from "react";

const Room = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    Iaxios.get("/api/group/fetch")
      .then(({ data }) => {
        setRooms(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CreateRoomModal />
      <JoinRoomModal />
      <div className=" flex flex-col items-center space-y-2 p-20">
        <div className="flex flex-col sm:flex-row sm:space-x-3">
          <p className={`text-5xl   ${BoschSansRegular.className}`}>
            Welcome to
          </p>
          <h1
            className={`bg-bosch-black bg-gradient-to-r from-oasis-standard-100 from-10% to-oasis-standard-500 bg-clip-text text-5xl text-transparent dark:to-oasis-standard-550 ${BoschSansBlack.className}`}
          >
            OASIS
          </h1>
        </div>
        <p
          className={`text-2xl dark:text-bosch-dark-gray-200 ${BoschSansLight.className}`}
        >
          Your Bosch Chat
        </p>
      </div>
      <div className="container mx-auto flex flex-col gap-4 px-2 sm:grid sm:grid-cols-2 xl:grid-cols-4">
        {rooms.map((group) => (
          <RoomCard
            borderColorIndex={Math.floor(Math.random() * 15)}
            key={group.id}
            {...group}
          />
        ))}
      </div>
    </div>
  );
};

export default Room;
