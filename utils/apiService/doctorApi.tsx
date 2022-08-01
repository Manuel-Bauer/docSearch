import { Doctor, Prisma } from '@prisma/client';
import { TAreaOfExpertise } from '../types/AreaOfExpertise.Type';

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

export async function getDoctors(item: {
  city: string;
  facility: string;
  areaOfExpertise: TAreaOfExpertise;
}): Promise<Doctor> {
  const res = await fetch(
    `api/doctor?city=${item.city}&facility=${item.facility}&areaOfExpertise=${item.areaOfExpertise}`,
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  return data;
}
