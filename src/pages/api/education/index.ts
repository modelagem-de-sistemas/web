import { createEducation, getEducations } from '@/lib/education';
import { middleware } from '@/utils/middleware';
import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const educations = await getEducations();

  res.status(200).json(educations);
};

const create = async (req: NextApiRequest, res: NextApiResponse, user: User): Promise<void> => {
  try {
    const data = await createEducation(req.body, user);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const user = middleware(req);

    switch (req.method) {
      case 'GET':
        await get(req, res);
        return;

      case 'POST':
        await create(req, res, user);
        return;

      default:
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
}
