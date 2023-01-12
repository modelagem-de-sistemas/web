import { getEducation, removeEducation, updateEducation } from '@/lib/education';
import { middleware } from '@/utils/middleware';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const education = await getEducation(Number(req.query.id));

  if (!education) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(education);
};

const update = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await updateEducation(Number(req.query.id), req.body);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const remove = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await removeEducation(Number(req.query.id));
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  try {
    middleware(req);

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
  } catch (e) {
    res.status(400).json({ message: e });
  }
}
