import { comparePassword, createToken } from '@/utils/helpers/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const login = async (email: string, password: string): Promise<any> => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = comparePassword(password, user.password);

  if (!isMatch) {
    throw new Error('Incorrect password');
  }

  const token = createToken(user);

  return { user, token };
};

export { login };
