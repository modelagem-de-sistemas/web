import { Validator } from '@/utils/validations/Validator';

export const contactFormSchema = (contact: ContactData): IFormMakerInput[][] => [
  [
    {
      id: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Email',
      initialValue: contact.email,
      validation: Validator.string().email().required(),
      disabled: false
    }
  ],
  [
    {
      id: 'phone',
      label: 'Phone',
      type: 'text',
      placeholder: 'Phone',
      initialValue: contact.phone,
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
      initialValue: contact.description,
      validation: Validator.string().required(),
      disabled: false
    }
  ],
  [
    {
      id: 'linkedin',
      label: 'Linkedin',
      type: 'text',
      placeholder: 'Linkedin',
      initialValue: contact.linkedin,
      validation: Validator.string().url().required(),
      disabled: false
    }
  ],
  [
    {
      id: 'github',
      label: 'Github',
      type: 'text',
      placeholder: 'Github',
      initialValue: contact.github,
      validation: Validator.string().url().required(),
      disabled: false
    }
  ],
  [
    {
      id: 'instagram',
      label: 'Instagram',
      type: 'text',
      placeholder: 'Instagram',
      initialValue: contact.instagram,
      validation: Validator.string().url().required(),
      disabled: false
    }
  ]
];
