import { projectValidation } from '@/utils/validations/project';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getProject = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const project = await prisma.project.findFirst({
    where: {
      id: Number(req.query.id)
    }
  });

  if (!project) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(project);
};

const updateProject = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, description, html, url, jobId } = req.body;

    const projectData: ProjectData = {
      name,
      description,
      html,
      url,
      jobId
    };

    await projectValidation(projectData);

    const data = await prisma.project.update({
      where: { id: Number(req.query.id) },
      data: projectData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const deleteProject = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await prisma.project.delete({
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
      await getProject(req, res);
      return;

    case 'PUT':
      await updateProject(req, res);
      return;

    case 'DELETE':
      await deleteProject(req, res);
      return;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
