import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const teste = await prisma.user.create({
    data: {
      email: "newLucas",
      password: "$2b$12$lNl9osVL5DnmZSELluLcPehmAjZ8fuxlp7uxJuQ1Q9z2wInKV3kOy",
      name: "aSenhaé123",
    },
  });
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
