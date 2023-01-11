import { skillValidation } from '@/utils/validations/skill';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getSkills = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const skills = await prisma.skill.findMany();

  res.status(200).json(skills);
};

const createSkill = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, credential } = req.body;

    const skillData: SkillData = {
      name,
      description,
      credential
    };

    await skillValidation(skillData);

    const data = await prisma.skill.create({
      data: skillData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getSkills(req, res);
      return;

    case 'POST':
      await createSkill(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
