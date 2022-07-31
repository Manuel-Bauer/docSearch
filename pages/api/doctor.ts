import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.$connect();
  console.log('req.body', req.body);
  if (req.method === 'POST') {
    const doctor = req.body;
    console.log('doctor', doctor);
    const createDoctor = await prisma.doctor.create({ data: doctor });
    return res.status(200).json(createDoctor);
  }
}
