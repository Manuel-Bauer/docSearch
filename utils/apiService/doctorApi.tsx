import { Doctor, Prisma } from '@prisma/client';

export async function createDoctor(
  item: Prisma.DoctorCreateInput
): Promise<Doctor> {
  console.log('createDoctor', item);
  const res = await fetch('../../pages/api/doctor', {
    method: 'POST',
    body: JSON.stringify(item),
  });
  const data = await res.json();
  return data;
}
