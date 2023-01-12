import { getHome } from '@/lib/home';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const home = await getHome();

  if (!home) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(home);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    switch (req.method) {
      case 'GET':
        await get(req, res);
        break;
      default:
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
}
