import { jobValidation } from '@/utils/validations/job';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getJobs = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const jobs = await prisma.job.findMany();

  res.status(200).json(jobs);
};

const createJob = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, startDate, endDate, company, office } = req.body;

    const jobData: JobData = {
      name,
      description,
      startDate,
      endDate,
      company,
      office
    };

    await jobValidation(jobData);

    const data = await prisma.job.create({
      data: jobData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getJobs(req, res);
      return;

    case 'POST':
      await createJob(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
