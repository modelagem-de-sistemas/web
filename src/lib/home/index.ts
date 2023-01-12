import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getHome = async (): Promise<any> => {
  const homepage = await prisma.user.findFirst({
    include: {
      Homepage: true,
      Contact: true,
      Skills: {
        include: {
          SkillModules: true
        }
      },
      Jobs: {
        include: {
          Project: true
        }
      },
      Projects: true
    }
  });

  return homepage;
};

export { getHome };
