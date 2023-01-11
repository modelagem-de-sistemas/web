import { Validator } from './Validator';

const jobValidation = async (job: JobData): Promise<any> => {
  const { name, description, company, office, startDate, endDate } = job;

  const validationSchema = Validator.object().shape({
    name: Validator.string().required(),
    description: Validator.string().required(),
    company: Validator.string().required(),
    office: Validator.string().required(),
    startDate: Validator.date().required(),
    endDate: Validator.date().required()
  });

  try {
    return await validationSchema.validate(
      {
        name,
        description,
        company,
        office,
        startDate,
        endDate
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

export { jobValidation };
