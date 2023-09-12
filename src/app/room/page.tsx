import {
  BoschSansBlack,
  BoschSansLight,
  BoschSansRegular,
} from "@/fonts/fonts";
import RoomCard from "@/components/RoomCard";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import CreateRoomModal from "@/components/CreateRoomModal";
import JoinRoomModal from "@/components/JoinRoomModal";
import { redirect } from "next/navigation";
import ComponenteTeste from "@/components/componenteTeste";
async function getData() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return [];
  }

  const room = await prisma.group.findMany({
    where: {
      members: {
        every: {
          email: user.email,
        },
      },
    },
    select: {
      id: true,
      area: true,
      description: true,
      name: true,
      _count: {
        select: {
          members: true,
        },
      },
    },
  });

  return room.map((group) => ({
    id: group.id,
    area: group.area,
    name: group.name,
    description: group.description,
    members: group._count.members,
  }));
}

const Room = async () => {
  const room = await getData();
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return redirect("/signup");
  }

  if (!room) {
    return;
  }

  

  return (
    <div>
      <ComponenteTeste />
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
        {room.map((group) => (
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
