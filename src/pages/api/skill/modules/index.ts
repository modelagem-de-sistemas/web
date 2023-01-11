import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getSkillModules = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const skillModules = await prisma.skillModule.findMany();

  res.status(200).json(skillModules);
};

const createSkillModule = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, skillId } = req.body;

    const skillModuleData: SkillModuleData = {
      name,
      description,
      skillId
    };

    const data = await prisma.skillModule.create({
      data: skillModuleData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getSkillModules(req, res);
      return;

    case 'POST':
      await createSkillModule(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
