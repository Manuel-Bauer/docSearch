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

    // Loop over query string and add filter where value is not undefined
    for (const [key, value] of Object.entries(req.query)) {
      if (value)
        filter = {
          where: { AND: { ...filter.where.AND, [key]: { contains: value } } },
        };
    }

    const getDoctors = await prisma.doctor.findMany(filter);
    console.log(getDoctors);
    return res.status(200).json(getDoctors);
  }
}
