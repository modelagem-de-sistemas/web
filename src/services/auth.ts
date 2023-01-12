import { addCookie } from '@/utils/helpers/cookies';
import api from './apis';

const authLogin = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth', { email, password });

    addCookie('token', response.data.token);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message);
  }
};

export { authLogin };
