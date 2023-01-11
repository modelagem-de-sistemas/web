import { Validator } from './Validator';

const messageValidation = async (message: MessageData): Promise<any> => {
  const { name, email, message: messageText } = message;

  const validationSchema = Validator.object().shape({
    name: Validator.string().required(),
    email: Validator.string().email().required(),
    message: Validator.string().required()
  });

  try {
    return await validationSchema.validate(
      {
        name,
        email,
        message: messageText
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

export { messageValidation };
