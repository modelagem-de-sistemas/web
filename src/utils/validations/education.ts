import { Validator } from './Validator';

const educationValidation = async (education: EducationData): Promise<any> => {
  const { name, description, startDate, endDate, school } = education;

  const validationSchema = Validator.object().shape({
    name: Validator.string().required(),
    description: Validator.string().required(),
    startDate: Validator.date().required(),
    endDate: Validator.date().required(),
    school: Validator.string().required()
  });

  try {
    return await validationSchema.validate(
      {
        name,
        description,
        startDate,
        endDate,
        school
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

export { educationValidation };
