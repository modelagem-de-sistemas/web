import { Validator } from '@/utils/validations/Validator';

type SkillData = {
  id?: number;
  name: string;
  description: string;
  credential: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export const skillFormSchema = (skill: SkillData): IFormMakerInput[][] => {
  const baseStructure = [
    [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
        initialValue: skill.name,
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
        initialValue: skill.description,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'credential',
        label: 'Credential',
        type: 'text',
        placeholder: 'Credential',
        initialValue: skill.credential,
        validation: Validator.string().required(),
        disabled: false
      }
    ]
  ];

  if (skill.id) {
    return [
      [
        {
          id: 'id',
          label: 'id',
          type: 'hidden',
          placeholder: 'id',
          initialValue: skill.id.toString(),
          validation: Validator.string().required(),
          disabled: true
        }
      ],
      ...baseStructure
    ];
  }

  return baseStructure;
};

export const skillTableHeaders: string[] = ['name', 'description', 'credential'];
