import { skillModuleValidation } from '@/utils/validations/skillModule';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getSkillModule = async (id: number): Promise<any> => {
  const skillModule = await prisma.skillModule.findFirst({
    where: {
      id: id
    }
  });

  return skillModule;
};

const getSkillsModules = async (): Promise<any> => {
  const skillsModules = await prisma.skillModule.findMany();

  return skillsModules;
};

const createSkillModule = async (_skillModuleData: SkillModuleData): Promise<any> => {
  const { name, description, skillId } = _skillModuleData;

  const skillModuleData: SkillModuleData = {
    name,
    description,
    skillId
  };

  await skillModuleValidation(skillModuleData);

  const data = await prisma.skillModule.create({
    data: skillModuleData
  });

  return data;
};

const updateSkillModule = async (id: number, _skillModuleData: SkillModuleData): Promise<any> => {
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

const removeSkillModule = async (id: number): Promise<any> => {
  const data = await prisma.skillModule.delete({
    where: { id: id }
  });

  return data;
};

export { getSkillModule, getSkillsModules, createSkillModule, updateSkillModule, removeSkillModule };
