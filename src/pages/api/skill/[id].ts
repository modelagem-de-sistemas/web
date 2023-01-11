import { skillValidation } from '@/utils/validations/skill';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getSkill = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const skill = await prisma.skill.findFirst({
    where: {
      id: Number(req.query.id)
    }
  });

  if (!skill) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(skill);
};

const updateSkill = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, credential } = req.body;

    const skillData: SkillData = {
      name,
      description,
      credential
    };

    await skillValidation(skillData);

    const data = await prisma.skill.update({
      where: { id: Number(req.query.id) },
      data: skillData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const deleteSkill = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await prisma.skill.delete({
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
      return getSkill(req, res);
    case 'PUT':
      return updateSkill(req, res);
    case 'DELETE':
      return deleteSkill(req, res);
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
