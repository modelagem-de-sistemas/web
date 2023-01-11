import { Validator } from './Validator';

const skillValidation = async (skill: SkillData): Promise<any> => {
  const { name, description, credential } = skill;

  const validationSchema = Validator.object().shape({
    name: Validator.string().required(),
    description: Validator.string().required(),
    credential: Validator.string().required()
  });

  try {
    return await validationSchema.validate(
      {
        name,
        description,
        credential
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

export { skillValidation };
