import { Validator } from '@/utils/validations/Validator';

export const homepageFormSchema = (homepage: HomepageData): IFormMakerInput[][] => {
  return [
    [
      {
        id: 'title',
        label: 'Title',
        type: 'text',
        placeholder: 'Title',
        initialValue: homepage.title,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'description',
        label: 'Description',
        type: 'text',
        placeholder: 'Description',
        initialValue: homepage.meta,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'color',
        label: 'Color',
        type: 'number',
        placeholder: 'Color',
        initialValue: homepage.color ? Number.parseInt(homepage.color) : null,
        validation: Validator.number().required(),
        disabled: false
      }
    ]
  ];
};

export const homePageTableHeaders: string[] = ['title', 'description', 'color'];
