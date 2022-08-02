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
  id?: string | string[];
  city?: string;
  facility?: string;
  areaOfExpertise?: TAreaOfExpertise;
}): Promise<Doctor> {
  //if id is provided, search with the help of the id, else use other params
  const res = await fetch(
    `api/doctor?city=${item.city}&facility=${item.facility}&areaOfExpertise=${item.areaOfExpertise}`,
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  return data;
}

export async function deleteDoctor(id: string): Promise<Doctor> {
  const res = await fetch(`api/doctor?id=${id}`, { method: 'DELETE' });
  const data = await res.json();
  return data;
}

export async function updateDoctor(
  id: string,
  item: Prisma.DoctorUpdateInput
): Promise<Doctor> {
  const res = await fetch(`api/doctor?id=${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}
