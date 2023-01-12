import { Validator } from '@/utils/validations/Validator';

type ProjectData = {
  id?: number;
  name: string;
  description: string;
  url: string;
  html: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export const projectFormSchema = (project: ProjectData): IFormMakerInput[][] => {
  const baseStructure = [
    [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
        initialValue: project.name,
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
        initialValue: project.description,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'url',
        label: 'Url',
        type: 'text',
        placeholder: 'Url',
        initialValue: project.url,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'html',
        label: 'Html',
        type: 'text',
        placeholder: 'Html',
        initialValue: project.html,
        validation: Validator.string().required(),
        disabled: false
      }
    ]
  ];

  if (project.id) {
    return [
      [
        {
          id: 'id',
          label: 'id',
          type: 'hidden',
          placeholder: 'id',
          initialValue: project.id.toString(),
          validation: Validator.string().required(),
          disabled: true
        }
      ],
      ...baseStructure
    ];
  }

  return baseStructure;
};

export const projectTableHeaders: string[] = ['id', 'name', 'description', 'url', 'html'];
