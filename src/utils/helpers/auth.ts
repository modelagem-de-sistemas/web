import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const salt = bcrypt.genSaltSync(10);
const secret = 'secret';

const hashPassword = (password: string) => {
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

const comparePassword = (password: string, hash: string) => {
  const isMatch = bcrypt.compareSync(password, hash);

  return isMatch;
};

const createToken = (user: UserData) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name
    },
    secret
  );

  return token;
};

const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, secret);

  return decoded;
};

export { hashPassword, comparePassword, createToken, verifyToken };
