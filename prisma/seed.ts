import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const admin1 = await prisma.admin.upsert({
    where: { username: 'adminuser' },
    update: {},
    create: {
      username: 'adminuser',
      email: 'chsingh@yopmail.com',
      password:"Test@123#",
    },
  });

  const admin2 = await prisma.admin.upsert({
    where: { username: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      username: "What's new in Prisma? (Q1/22)",
      email: 'shalini@yopmail.com',
      password:"Test@123#",
    },
  });

  console.log({ admin1, admin2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
