import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

yup.setLocale(pt);

export { yup as Validator };
