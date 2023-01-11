import { login } from '@/lib/auth';

const authLogin = async (email: string, password: string) => {
  try {
    const { user, token } = await login(email, password);
    return { user, token };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export { authLogin };
