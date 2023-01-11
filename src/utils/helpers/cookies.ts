import jsCookie from 'js-cookie';
import { addHours } from './time';

const addCookie = (key: string, value: string, hours: number = 168) => {
  jsCookie.set(key, value, {
    expires: addHours(new Date(), hours)
  });
};

const getCookie = (key: string) => {
  return jsCookie.get(key);
};

const removeCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;

  jsCookie.remove(key, {
    path: '/'
  });
};

const cleanCookies = () => {
  const cookies = document.cookie.split(';');

  cookies.forEach((cookie) => {
    removeCookie(cookie.split('=')[0]);
  });
};

export { addCookie, getCookie, removeCookie, cleanCookies };
