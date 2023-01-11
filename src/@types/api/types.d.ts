type UserData = {
  id?: number;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  contactId: number;
  jobId: number | null;
};

type HomepageData = {
  id?: number;
  title: string;
  meta: string;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type ContactData = {
  id?: number;
  email: string;
  phone: string | null;
  description: string | null;
  linkedin: string | null;
  github: string | null;
  instagram: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

type JobData = {
  id?: number;
  name: string;
  description: string;
  business: string;
  office: string;
  startDate: Date;
  endDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

type ProjectData = {
  id?: number;
  name: string;
  description: string;
  url: string;
  html: string;
  createdAt?: Date;
  updatedAt?: Date;
  jobId: number | null;
};

type EducationData = {
  id?: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  school: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type SkillData = {
  id?: number;
  name: string;
  description: string;
  credential: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type SkillModulesData = {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  skillId?: number;
};

type MessageData = {
  id?: number;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
};
