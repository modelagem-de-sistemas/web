import { messageValidation } from '@/utils/validations/message';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getMessage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const message = await prisma.message.findFirst({
    where: {
      id: Number(req.query.id)
    }
  });

  if (!message) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(message);
};

const updateMessage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, email, message } = req.body;

    const messageData: MessageData = {
      name,
      email,
      message
    };

    await messageValidation(messageData);

    const data = await prisma.message.update({
      where: { id: Number(req.query.id) },
      data: messageData
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const deleteMessage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const data = await prisma.message.delete({
      where: { id: Number(req.query.id) }
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getMessage(req, res);
      break;
    case 'PUT':
      await updateMessage(req, res);
      break;
    case 'DELETE':
      await deleteMessage(req, res);
      break;
    default:
      res.status(400).json({ message: 'Bad request' });
      break;
  }
}
