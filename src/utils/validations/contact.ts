import { Validator } from './Validator';

const contactValidation = async (contact: ContactData): Promise<any> => {
  const { email, phone, description, linkedin, github, instagram } = contact;

  const validationSchema = Validator.object().shape({
    email: Validator.string().email().required(),
    phone: Validator.string().required(),
    description: Validator.string().required(),
    linkedin: Validator.string().required(),
    github: Validator.string().required(),
    instagram: Validator.string().required()
  });

  try {
    return await validationSchema.validate(
      {
        email,
        phone,
        description,
        linkedin,
        github,
        instagram
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

export { contactValidation };
