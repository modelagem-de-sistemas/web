import { User } from '@prisma/client';

const hashPassword = (password: string) => {
  const hash = password;

  return hash;
};

const comparePassword = (password: string, hash: string) => {
  const isMatch = hash === password;

  return isMatch;
};

const createToken = (user: User) => {
  const token = JSON.stringify(user);

  return token;
};

const verifyToken = (token: string) => {
  const decoded = JSON.parse(token) as UserData;

  return decoded;
};

export { hashPassword, comparePassword, createToken, verifyToken };
