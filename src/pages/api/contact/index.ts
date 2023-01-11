import { contactValidation } from '@/utils/validations/contact';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getContact = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const contact = await prisma.contact.findFirst();

  if (!contact) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(contact);
};

const updateContact = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { email, phone, description, linkedin, github, instagram } = req.body;

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

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  switch (req.method) {
    case 'GET':
      await getContact(req, res);
      return;

    case 'PUT':
      await updateContact(req, res);

    default:
      res.status(405).json({ message: 'Method not allowed' });
      return;
  }
}
