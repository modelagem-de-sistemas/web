import { projectValidation } from '@/utils/validations/project';
import { PrismaClient, User } from '@prisma/client';

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

const createProject = async (_projectData: ProjectData, user: User): Promise<any> => {
  try {
    const { name, description, url, html, jobId } = _projectData;

    const projectData: ProjectData = {
      name,
      description,
      url,
      html
    };

    await projectValidation(projectData);

    if (jobId) {
      return await prisma.project.create({
        // @ts-ignore
        data: {
          ...projectData,
          Job: {
            connect: {
              id: jobId
            }
          },
          User: {
            connectOrCreate: {
              where: {
                email: user.email
              },
              create: {
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password
              }
            }
          }
        }
      });
    }

    return await prisma.project.create({
      // @ts-ignore
      data: {
        ...projectData,
        User: {
          connectOrCreate: {
            where: {
              email: user.email
            },
            create: {
              id: user.id,
              email: user.email,
              name: user.name,
              password: user.password
            }
          }
        }
      }
    });
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

    await projectValidation(projectData);

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
