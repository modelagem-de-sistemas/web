import { Validator } from './Validator';

const userValidation = async (user: UserData): Promise<any> => {
  const { name, email, password } = user;

  const validationSchema = Validator.object().shape({
    name: Validator.string().required(),
    email: Validator.string().email().required(),
    password: Validator.string().required()
  });

  try {
    return await validationSchema.validate(
      {
        name,
        email,
        password
      },
      { abortEarly: true }
    );
  } catch (err) {
    if (err instanceof Validator.ValidationError) {
      throw err.message;
    }

    throw err;
  }
};

export { userValidation };
