import { Validator } from '@/utils/validations/Validator';

export const educationFormSchema = (education: EducationData): IFormMakerInput[][] => {
  const baseStructure = [
    [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
        initialValue: education.name,
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
        initialValue: education.description,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'school',
        label: 'School',
        type: 'text',
        placeholder: 'School',
        initialValue: education.school,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'startDate',
        label: 'Start Date',
        type: 'date',
        placeholder: 'Start Date',
        initialValue: education.startDate,
        validation: Validator.date().required(),
        disabled: false
      },
      {
        id: 'endDate',
        label: 'End Date',
        type: 'date',
        placeholder: 'End Date',
        initialValue: education.endDate,
        validation: Validator.date().min(Validator.ref('startDate'), 'End date must be after start date').required(),
        disabled: false
      }
    ]
  ];

  if (education.id) {
    return [
      [
        {
          id: 'id',
          label: 'id',
          type: 'hidden',
          placeholder: 'id',
          initialValue: education.id.toString(),
          validation: Validator.string().required(),
          disabled: true
        }
      ],
      ...baseStructure
    ];
  }

  return baseStructure;
};
