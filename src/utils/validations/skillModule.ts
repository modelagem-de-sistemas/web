import { Validator } from './Validator';

const skillModuleValidation = async (skillModule: SkillModulesData): Promise<any> => {
  const { name, description } = skillModule;

  const validationSchema = Validator.object().shape({
    name: Validator.string().required(),
    description: Validator.string().required()
  });

  try {
    return await validationSchema.validate(
      {
        name,
        description
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

export { skillModuleValidation };
