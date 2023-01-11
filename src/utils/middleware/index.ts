import { verifyToken } from '../helpers/auth';

const checkAuth = (token: string) => {
  if (!token) {
    throw new Error('No token provided');
  }

  try {
    const decoded = verifyToken(token);

    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export { checkAuth };
