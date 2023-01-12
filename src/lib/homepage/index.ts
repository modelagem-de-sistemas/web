import { homepageValidation } from '@/utils/validations/homepage';
import { Homepage, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getHomepage = async (): Promise<Homepage | null> => {
  const homepage = await prisma.homepage.findFirst();

  return homepage;
};

const updateHomepage = async (_homepageData: HomepageData): Promise<Homepage> => {
  try {
    const { title, meta, color } = _homepageData;

    const homepageData: HomepageData = {
      title,
      meta,
      color
    };

    await homepageValidation(homepageData);

    const data = await prisma.homepage.update({
      where: { id: 1 },
      data: homepageData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

export { getHomepage, updateHomepage };
