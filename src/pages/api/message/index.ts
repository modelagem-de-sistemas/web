import { messageValidation } from '@/utils/validations/message';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getMessages = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const messages = await prisma.message.findMany();

  res.status(200).json(messages);
};

const createMessage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, email, message } = req.body;

    const messageData: MessageData = {
      name,
      email,
      message
    };

    await messageValidation(messageData);

    const data = await prisma.message.create({
      data: messageData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getMessages(req, res);
      break;
    case 'POST':
      await createMessage(req, res);
      break;
    default:
      res.status(400).json({ message: 'Bad request' });
      break;
  }
}
