import { getHomepage, updateHomepage } from '@/lib/homepage';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const homepage = await getHomepage();

  if (!homepage) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(homepage);
};

const update = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await updateHomepage(req.body);

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await get(req, res);
      return;

    case 'PUT':
      await update(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
