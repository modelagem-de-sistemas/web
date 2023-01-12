import { Validator } from '@/utils/validations/Validator';

export const jobFormSchema = (job: JobData): IFormMakerInput[][] => {
  const baseStructure = [
    [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
        initialValue: job.name,
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
        initialValue: job.description,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'company',
        label: 'Company',
        type: 'text',
        placeholder: 'Company',
        initialValue: job.company,
        validation: Validator.string().required(),
        disabled: false
      }
    ],
    [
      {
        id: 'office',
        label: 'Office',
        type: 'text',
        placeholder: 'Office',
        initialValue: job.office,
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
        initialValue: job.startDate,
        validation: Validator.date().max(Validator.ref('endDate'), 'Start date must be before end date').required(),
        disabled: false
      }
    ],
    [
      {
        id: 'endDate',
        label: 'End Date',
        type: 'date',
        placeholder: 'End Date',
        initialValue: job.endDate,
        validation: Validator.date().min(Validator.ref('startDate'), 'End date must be after start date').required(),
        disabled: false
      }
    ]
  ];

  if (job.id) {
    return [
      [
        {
          id: 'id',
          label: 'id',
          type: 'hidden',
          placeholder: 'id',
          initialValue: job.id.toString(),
          validation: Validator.string().required(),
          disabled: true
        }
      ],
      ...baseStructure
    ];
  }

  return baseStructure;
};

export const jobTableHeaders: string[] = ['name', 'description', 'company', 'office', 'startDate', 'endDate'];
