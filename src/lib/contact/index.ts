import { contactValidation } from '@/utils/validations/contact';
import { Contact, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getContact = async (): Promise<Contact | null> => {
  const contact = await prisma.contact.findFirst();

  return contact;
};

const updateContact = async (_contactData: ContactData): Promise<Contact> => {
  try {
    const { email, phone, description, linkedin, github, instagram } = _contactData;

    const contactData: ContactData = {
      email,
      phone,
      description,
      linkedin,
      github,
      instagram
    };

    await contactValidation(contactData);

    const data = await prisma.contact.update({
      where: { id: 1 },
      data: contactData
    });

    return data;
  } catch (e) {
    throw e;
  }
};

export { getContact, updateContact };
