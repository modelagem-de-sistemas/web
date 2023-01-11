import { messageValidation } from '@/utils/validations/message';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getMessage = async (id: number): Promise<any> => {
  const message = await prisma.message.findFirst({
    where: {
      id: id
    }
  });

  return message;
};

const getMessages = async (): Promise<any> => {
  const messages = await prisma.message.findMany();

  return messages;
};

const createMessage = async (_messageData: MessageData): Promise<any> => {
  const { name, email, message } = _messageData;

  const messageData: MessageData = {
    name,
    email,
    message
  };

  await messageValidation(messageData);

  const data = await prisma.message.create({
    data: messageData
  });

  return data;
};

const updateMessage = async (id: number, _messageData: MessageData): Promise<any> => {
  try {
    const { name, email, message } = _messageData;

    const messageData: MessageData = {
      name,
      email,
      message
    };

    await messageValidation(messageData);

    const data = await prisma.message.update({
      where: { id: id },
      data: messageData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

const removeMessage = async (id: number): Promise<any> => {
  try {
    const data = await prisma.message.delete({
      where: { id: id }
    });

    return data;
  } catch (e) {
    throw e;
  }
};

export { getMessage, getMessages, createMessage, updateMessage, removeMessage };
