import { skillModuleValidation } from '@/utils/validations/skillModule';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getSkillModule = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;

  const skill = await prisma.skillModule.findUnique({
    where: {
      id: Number(id)
    }
  });

  res.status(200).json(skill);
};

const updateSkillModule = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, skillId } = req.body;

    const skillModuleData: SkillModuleData = {
      name,
      description,
      skillId
    };

    await skillModuleValidation(skillModuleData);

    const data = await prisma.skillModule.update({
      where: { id: Number(req.query.id) },
      data: skillModuleData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const deleteSkillModule = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await prisma.skillModule.delete({
      where: { id: Number(req.query.id) }
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      return getSkillModule(req, res);
    case 'PUT':
      return updateSkillModule(req, res);
    case 'DELETE':
      return deleteSkillModule(req, res);
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
