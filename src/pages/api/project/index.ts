import { projectValidation } from '@/utils/validations/project';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getProjects = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const projects = await prisma.project.findMany();

  res.status(200).json(projects);
};

const createProject = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, url, html, jobId } = req.body;

    const projectData: ProjectData = {
      name,
      description,
      url,
      html,
      jobId
    };

    await projectValidation(projectData);

    const data = await prisma.project.create({
      data: projectData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getProjects(req, res);
      return;

    case 'POST':
      await createProject(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
