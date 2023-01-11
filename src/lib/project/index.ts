import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getProject = async (id: number): Promise<any> => {
  const project = await prisma.project.findFirst({
    where: {
      id: id
    }
  });

  return project;
};

const getProjects = async (): Promise<any> => {
  const projects = await prisma.project.findMany();

  return projects;
};

const createProject = async (_projectData: ProjectData): Promise<any> => {
  try {
    const { name, description, url, html, jobId } = _projectData;

    const projectData: ProjectData = {
      name,
      description,
      url,
      html,
      jobId
    };
    const data = await prisma.project.create({
      data: projectData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const updateProject = async (id: number, _projectData: ProjectData): Promise<any> => {
  try {
    const { name, description, url, html, jobId } = _projectData;

    const projectData: ProjectData = {
      name,
      description,
      url,
      html,
      jobId
    };

    const data = await prisma.project.update({
      where: { id: id },
      data: projectData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const removeProject = async (id: number): Promise<any> => {
  try {
    const data = await prisma.project.delete({
      where: { id: id }
    });

    return data;
  } catch (e) {
    throw e;
  }
};

export { getProjects, getProject, createProject, updateProject, removeProject };
