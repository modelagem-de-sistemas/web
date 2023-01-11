import { educationValidation } from '@/utils/validations/education';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getEducations = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const educations = await prisma.education.findMany();

  res.status(200).json(educations);
};

const createEducation = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, startDate, endDate, school } = req.body;

    const educationData: EducationData = {
      name,
      description,
      startDate,
      endDate,
      school
    };

    await educationValidation(educationData);

    const data = await prisma.education.create({
      data: educationData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getEducations(req, res);
      return;

    case 'POST':
      await createEducation(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
