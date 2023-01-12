import { to2Digits } from './string';

const addHours = (date: Date, hours: number) => {
  date.setHours(date.getHours() + hours);

  return date;
};

const toDDMMYYYY = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${to2Digits(day)}/${to2Digits(month)}/${year}`;
};

const isDate = (date: any) => {
  if (typeof date === 'string' && date.length < 8) {
    return false;
  }
  // @ts-ignore next line
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
};

const getGreenwichTime = (date: Date): Date => {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  return new Date(utc);
};

export { addHours, toDDMMYYYY, isDate, getGreenwichTime };
