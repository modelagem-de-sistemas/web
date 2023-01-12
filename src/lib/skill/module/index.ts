import { skillModuleValidation } from '@/utils/validations/skillModule';
import { PrismaClient, SkillModule } from '@prisma/client';

const prisma = new PrismaClient();

const getSkillModule = async (id: number): Promise<SkillModule | null> => {
  const skillModule = await prisma.skillModule.findFirst({
    where: {
      id: id
    }
  });

  return skillModule;
};

const getSkillsModules = async (skillId?: string): Promise<SkillModule[]> => {
  if (skillId && Number.parseInt(skillId) > 0) {
    const skillsModules = await prisma.skillModule.findMany({
      where: {
        skillId: Number.parseInt(skillId)
      }
    });

    return skillsModules;
  }

  const skillsModules = await prisma.skillModule.findMany();

  return skillsModules;
};

const createSkillModule = async (_skillModuleData: SkillModuleData): Promise<SkillModule> => {
  try {
    const { name, description, skillId } = _skillModuleData;

    const skillModuleData: SkillModuleData = {
      name,
      description,
      skillId
    };

    await skillModuleValidation(skillModuleData);

    const data = await prisma.skillModule.create({
      // @ts-ignore
      data: {
        ...skillModuleData
      }
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const updateSkillModule = async (id: number, _skillModuleData: SkillModuleData): Promise<SkillModule> => {
  const { name, description, skillId } = _skillModuleData;

  const skillModuleData: SkillModuleData = {
    name,
    description,
    skillId
  };

  await skillModuleValidation(skillModuleData);

  const data = await prisma.skillModule.update({
    where: { id: id },
    data: skillModuleData
  });

  return data;
};

const removeSkillModule = async (id: number): Promise<SkillModule> => {
  const data = await prisma.skillModule.delete({
    where: { id: id }
  });

  return data;
};

export { getSkillModule, getSkillsModules, createSkillModule, updateSkillModule, removeSkillModule };
