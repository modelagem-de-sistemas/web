import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'gabriella.carvalho@gmail.com' },
    update: {},
    create: {
      email: 'gabriella.carvalho@gmail.com',
      name: 'Gabriella Carvalho',
      password: '123456',
      contact: {
        create: {
          email: 'gabriella.carvalho@gmail.com',
          phone: '',
          description: '',
          linkedin: '',
          github: '',
          instagram: ''
        }
      }
    }
  });

  const homepage = await prisma.homepage.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Gabriella Carvalho',
      meta: 'Gabriella Carvalho',
      color: '200'
    }
  });

  console.log({ admin, homepage });
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
