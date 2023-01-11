import { Validator } from './Validator';

const projectValidation = async (project: ProjectData): Promise<any> => {
  const { name, description, url, html, jobId } = project;

  const validationSchema = Validator.object().shape({
    name: Validator.string().required(),
    description: Validator.string().required(),
    url: Validator.string().required(),
    html: Validator.string().required(),
    jobId: Validator.number()
  });

  try {
    return await validationSchema.validate(
      {
        name,
        description,
        url,
        html,
        jobId
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

export { projectValidation };
