import { getContact, updateContact } from '@/lib/contact';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const contact = await getContact();

  res.status(200).json(contact);
};

const update = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await updateContact(req.body);

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
