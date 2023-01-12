import { createMessage, getMessages } from '@/lib/message';
import { middleware } from '@/utils/middleware';
import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const educations = await getMessages();

  res.status(200).json(educations);
};

const create = async (req: NextApiRequest, res: NextApiResponse, user: User): Promise<void> => {
  try {
    const data = await createMessage(req.body, user);
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
        break;
      case 'POST':
        await create(req, res, user);
        break;
      default:
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
}
