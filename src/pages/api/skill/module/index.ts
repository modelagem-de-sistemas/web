import { createSkillModule, getSkillsModules } from '@/lib/skill/module';
import { middleware } from '@/utils/middleware';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const educations = await getSkillsModules(req.query?.skillId as string);

  res.status(200).json(educations);
};

const create = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await createSkillModule(req.body);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    middleware(req);

    switch (req.method) {
      case 'GET':
        await get(req, res);
        break;
      case 'POST':
        await create(req, res);
        break;
      default:
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
}
