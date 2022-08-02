import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.$connect();
  if (req.method === 'POST') {
    const doctor = req.body;
    const createDoctor = await prisma.doctor.create({ data: doctor });
    return res.status(200).json(createDoctor);
  }
  if (req.method === 'GET') {
    let filter = { where: { AND: {} } };

    console.log('req.query', typeof req.query.id);

    // Loop over query string and add filter where value is not undefined
    for (const [key, value] of Object.entries(req.query)) {
      if (value)
        filter = {
          where: {
            AND: { ...filter.where.AND, [key]: value },
          },
        };
    }

    const getDoctors = await prisma.doctor.findMany(filter);
    return res.status(200).json(getDoctors);
  }
  if (req.method === 'DELETE') {
    const { id } = req.query;

    const deleteDoctor = await prisma.doctor.delete({
      where: {
        id: id?.toString(),
      },
    });
    return res.status(200).json(deleteDoctor);
  }
  if (req.method === 'PUT') {
    const doctor = req.body;
    const { id } = req.query;

    const updateDoctor = await prisma.doctor.update({
      where: {
        id: id?.toString(),
      },
      data: {
        ...doctor,
      },
    });

    return res.status(200).json(updateDoctor);
  }
}
