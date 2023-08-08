import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const groups = await prisma.group.create({
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
  const groups1 = await prisma.group.create({
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
  console.log({ groups, groups1 });
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
