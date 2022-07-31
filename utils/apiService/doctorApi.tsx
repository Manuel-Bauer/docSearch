import { Doctor, Prisma } from '@prisma/client';

export async function createDoctor(
  item: Prisma.DoctorCreateInput
): Promise<Doctor> {
  const res = await fetch('api/doctor', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}
