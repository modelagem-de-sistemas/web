import { createProject, getProjects } from '@/lib/project';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const educations = await getProjects();

  res.status(200).json(educations);
};

const create = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await createProject(req.body);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  switch (req.method) {
    case 'GET':
      await get(req, res);
      return;

    case 'POST':
      await create(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
