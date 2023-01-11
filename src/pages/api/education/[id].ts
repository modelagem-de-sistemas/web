import { educationValidation } from '@/utils/validations/education';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getEducation = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const education = await prisma.education.findFirst({
    where: {
      id: Number(req.query.id)
    }
  });

  if (!education) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(education);
};

const updateEducation = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
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

    const data = await prisma.education.update({
      where: { id: Number(req.query.id) },
      data: educationData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const deleteEducation = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await prisma.education.delete({
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
      await getEducation(req, res);
      return;

    case 'PUT':
      await updateEducation(req, res);
      return;

    case 'DELETE':
      await deleteEducation(req, res);
      return;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
