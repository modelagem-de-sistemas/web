import { skillValidation } from '@/utils/validations/skill';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getSkill = async (id: number): Promise<any> => {
  const skill = await prisma.skill.findFirst({
    where: {
      id: id
    }
  });

  return skill;
};

const getSkills = async (): Promise<any> => {
  const skills = await prisma.skill.findMany();

  return skills;
};

const createSkill = async (_skillData: SkillData): Promise<any> => {
  const { name, description, credential } = _skillData;

  const skillData: SkillData = {
    name,
    description,
    credential
  };

  await skillValidation(skillData);

  const data = await prisma.skill.create({
    data: skillData
  });

  return data;
};

const updateSkill = async (id: number, _skillData: SkillData): Promise<any> => {
  const { name, description, credential } = _skillData;

  const skillData: SkillData = {
    name,
    description,
    credential
  };

  await skillValidation(skillData);

  const data = await prisma.skill.update({
    where: { id: id },
    data: skillData
  });

  return data;
};

const removeSkill = async (id: number): Promise<any> => {
  const data = await prisma.skill.delete({
    where: { id: id }
  });

  return data;
};

export { getSkill, getSkills, createSkill, updateSkill, removeSkill };
