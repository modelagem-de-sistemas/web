import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getEducations = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const educations = await prisma.education.findMany();

  if (!educations) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(educations);
};

const createEducation = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { name, description, date } = req.body;

  const education = await prisma.education.create({
    data: {
      name,
      description,
      date
    }
  });

  res.status(200).json(education);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getEducations(req, res);
      return;

    case 'PUT':
      await updateContact(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
