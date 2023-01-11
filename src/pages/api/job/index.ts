import { createJob, getJobs } from '@/lib/job';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const educations = await getJobs();

  res.status(200).json(educations);
};

const create = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await createJob(req.body);
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

    case 'POST':
      await create(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
