import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const  room = await prisma.group.create({
    data: {
      area: "ETS",
      description: "happy happy happy ",
      name: "lus cas",
      members: {
        connect: {
          email: "newLucas",
        },
      },
    },
  });
  const  room1 = await prisma.group.create({
    data: {
      area: "ETS",
      description: "Sad Sad Sad",
      name: "rai sa",
      members: {
        connect: {
          email: "newLucas",
        },
      },
    },
  });
  console.log({  room,  room1 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
