import { User } from '@prisma/client';

const hashPassword = (password: string): string => {
  const hash = password;

  return hash;
};

const comparePassword = (password: string, hash: string): boolean => {
  const isMatch = hash === password;

  return isMatch;
};

const createToken = (user: User): string => {
  const token = JSON.stringify(user);

  return token;
};

const verifyToken = (token: string): User => {
  const decoded = JSON.parse(token) as User;

  return decoded;
};

const cleanToken = (token: string): string => {
  const cleanToken = token.replace('Bearer ', '');

  return cleanToken;
};

export { hashPassword, comparePassword, createToken, verifyToken, cleanToken };
