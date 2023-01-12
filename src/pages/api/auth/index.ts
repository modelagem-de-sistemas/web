import { auth } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const login = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { email, password } = req.body;

    const data = await auth(email, password);

    res.status(200).json(data);
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  switch (req.method) {
    case 'POST':
      await login(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
