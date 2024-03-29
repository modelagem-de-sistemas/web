import { educationValidation } from '@/utils/validations/education';
import { PrismaClient, User, Education } from '@prisma/client';

const prisma = new PrismaClient();

const getEducation = async (id: number): Promise<Education | null> => {
  const education = await prisma.education.findFirst({
    where: {
      id: id
    }
  });

  return education;
};

const getEducations = async (): Promise<Education[]> => {
  const educations = await prisma.education.findMany();

  return educations;
};

const createEducation = async (_educationData: EducationData, user: User): Promise<Education> => {
  try {
    const { name, description, startDate, endDate, school } = _educationData;

    const educationData: EducationData = {
      name,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      school
    };

    await educationValidation(educationData);

    const data = await prisma.education.create({
      // @ts-ignore
      data: {
        ...educationData,
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

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateEducation = async (id: number, _educationData: EducationData): Promise<Education> => {
  try {
    const { name, description, startDate, endDate, school } = _educationData;

    const educationData: EducationData = {
      name,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      school
    };

    await educationValidation(educationData);

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
