import { getProject, removeProject, updateProject } from '@/lib/project';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const education = await getProject(Number(req.query.id));

  if (!education) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(education);
};

const update = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await updateProject(Number(req.query.id), req.body);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const remove = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await removeProject(Number(req.query.id));
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

    case 'PUT':
      await update(req, res);
      return;

    case 'DELETE':
      await remove(req, res);
      return;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
