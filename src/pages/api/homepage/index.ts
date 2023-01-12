import { getHomepage, updateHomepage } from '@/lib/homepage';
import { middleware } from '@/utils/middleware';
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

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    middleware(req);

    switch (req.method) {
      case 'GET':
        await get(req, res);
        break;
      case 'PUT':
        await update(req, res);
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
}
