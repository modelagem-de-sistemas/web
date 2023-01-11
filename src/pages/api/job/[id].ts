import { jobValidation } from '@/utils/validations/job';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getJob = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const job = await prisma.job.findFirst({
    where: {
      id: Number(req.query.id)
    }
  });

  if (!job) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(job);
};

const updateJob = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
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

    const data = await prisma.job.update({
      where: { id: Number(req.query.id) },
      data: jobData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const deleteJob = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await prisma.job.delete({
      where: { id: Number(req.query.id) }
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getJob(req, res);
      break;
    case 'PUT':
      await updateJob(req, res);
      break;
    case 'DELETE':
      await deleteJob(req, res);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}
