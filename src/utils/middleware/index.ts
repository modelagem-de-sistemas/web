import { User } from '@prisma/client';
import { NextApiRequest } from 'next';
import { cleanToken, verifyToken } from '../helpers/auth';

const middleware = (req: NextApiRequest, ssr = false): User => {
  const token = ssr ? req?.cookies?.token : req?.headers?.authorization;

  if (!token) {
    throw new Error('No token').message;
  }

  const cleanedToken = cleanToken(token);

  const user = verifyToken(cleanedToken);

  if (!user) {
    throw new Error('Invalid token').message;
  }

  return user;
};

export { middleware };
