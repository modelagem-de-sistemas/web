import { jobValidation } from '@/utils/validations/job';
import { PrismaClient, Job, User } from '@prisma/client';

const prisma = new PrismaClient();

const getJob = async (id: number): Promise<Job> => {
  const job = await prisma.job.findFirst({
    where: {
      id: id
    }
  });

  return job;
};

const getJobs = async (): Promise<Job[]> => {
  const jobs = await prisma.job.findMany();

  return jobs;
};

const createJob = async (_jobData: JobData, User: user): Promise<any> => {
  try {
    const { name, description, startDate, endDate, company, office } = _jobData;

    const jobData: JobData = {
      name,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      company,
      office
    };

    await jobValidation(jobData);

    const data = await prisma.user.update({
      where: { id: user.id },
      data: {
        Jobs: {
          create: [{ ...jobData }]
        }
      }
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const updateJob = async (id: number, _jobData: JobData): Promise<any> => {
  try {
    const { name, description, startDate, endDate, company, office } = _jobData;

    const jobData: JobData = {
      name,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      company,
      office
    };

    await jobValidation(jobData);

    const data = await prisma.job.update({
      where: { id: id },
      data: jobData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const removeJob = async (id: number): Promise<any> => {
  try {
    const data = await prisma.job.delete({
      where: { id: id }
    });

    return data;
  } catch (e) {
    throw e;
  }
};

export { getJob, getJobs, createJob, updateJob, removeJob };
