import { homepageValidation } from '@/utils/validations/homepage';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getHomepage = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const homepage = await prisma.homepage.findFirst();

  if (!homepage) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(homepage);
};

const updateHomepage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { title, meta, color } = req.body;

    const homepageData: HomepageData = {
      title,
      meta,
      color
    };

    await homepageValidation(homepageData);

    const data = await prisma.homepage.update({
      where: { id: Number(req.query.id) },
      data: homepageData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getHomepage(req, res);
      return;

    case 'PUT':
      await updateHomepage(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
