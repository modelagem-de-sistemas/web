import { messageValidation } from '@/utils/validations/message';
import { Message, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const getMessage = async (id: number): Promise<Message | null> => {
  const message = await prisma.message.findFirst({
    where: {
      id: id
    }
  });

  return message;
};

const getMessages = async (): Promise<Message[]> => {
  const messages = await prisma.message.findMany();

  return messages;
};

const createMessage = async (_messageData: MessageData, user: User): Promise<Message> => {
  const { name, email, message } = _messageData;

  const messageData: MessageData = {
    name,
    email,
    message
  };

  await messageValidation(messageData);

  const data = await prisma.message.create({
    // @ts-ignore
    data: {
      ...messageData,
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
};

const updateMessage = async (id: number, _messageData: MessageData): Promise<Message> => {
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
