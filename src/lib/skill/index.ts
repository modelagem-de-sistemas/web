import { skillValidation } from '@/utils/validations/skill';
import { PrismaClient, Skill, User } from '@prisma/client';

const prisma = new PrismaClient();

const getSkill = async (id: number): Promise<Skill | null> => {
  const skill = await prisma.skill.findFirst({
    where: {
      id: id
    },
    include: {
      SkillModules: true
    }
  });

  return skill;
};

const getSkills = async (): Promise<Skill[]> => {
  const skills = await prisma.skill.findMany();

  return skills;
};

const createSkill = async (_skillData: SkillData, user: User): Promise<Skill> => {
  const { name, description, credential } = _skillData;

  const skillData: SkillData = {
    name,
    description,
    credential
  };

  await skillValidation(skillData);

  const data = await prisma.skill.create({
    // @ts-ignore
    data: {
      ...skillData,
      User: {
        connectOrCreate: {
          where: {
            id: user.id
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
