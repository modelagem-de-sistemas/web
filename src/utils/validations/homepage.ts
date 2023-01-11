import { Validator } from './Validator';

const homepageValidation = async (homepage: HomepageData): Promise<any> => {
  const { title, meta, color } = homepage;

  const validationSchema = Validator.object().shape({
    title: Validator.string().required(),
    meta: Validator.string().required(),
    color: Validator.string().required()
  });

  try {
    return await validationSchema.validate(
      {
        title,
        meta,
        color
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

export { homepageValidation };
