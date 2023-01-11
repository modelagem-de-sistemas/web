import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getEducation = async (id: number): Promise<any> => {
  const education = await prisma.education.findFirst({
    where: {
      id: id
    }
  });

  return education;
};

const getEducations = async (): Promise<any> => {
  const educations = await prisma.education.findMany();

  return educations;
};

const createEducation = async (_educationData: EducationData): Promise<any> => {
  try {
    const { name, description, startDate, endDate, school } = _educationData;

    const educationData: EducationData = {
      name,
      description,
      startDate,
      endDate,
      school
    };

    const data = await prisma.education.create({
      data: educationData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const updateEducation = async (id: number, _educationData: EducationData): Promise<any> => {
  try {
    const { name, description, startDate, endDate, school } = _educationData;

    const educationData: EducationData = {
      name,
      description,
      startDate,
      endDate,
      school
    };

    const data = await prisma.education.update({
      where: { id: id },
      data: educationData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const removeEducation = async (id: number): Promise<any> => {
  try {
    const data = await prisma.education.delete({
      where: { id: id }
    });

    return data;
  } catch (e) {
    throw e;
  }
};

export { getEducation, getEducations, createEducation, updateEducation, removeEducation };
