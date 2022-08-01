import React from 'react';
import { Doctor } from '@prisma/client';
import { TiDeleteOutline } from 'react-icons/ti';
import { deleteDoctor } from '../../utils/apiService/doctorApi';

interface IDoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FunctionComponent<IDoctorCardProps> = ({ doctor }) => {
  async function handleDelete() {
    try {
      await deleteDoctor(doctor.id);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='relative space-y-1 bg-slate-200 p-4 rounded-md shadow-md'>
        <div>
          <TiDeleteOutline
            className='absolute right-2 top-2'
            onClick={() => handleDelete()}
          ></TiDeleteOutline>
        </div>
        <div className='text-xl font-bold'>
          {doctor.firstName} {doctor.lastName}
        </div>
        <div className='text-sm italic'>{doctor.email}</div>
        <div>
          {doctor.city} - {doctor.facility}
        </div>
        <div>{doctor.areaOfExpertise}</div>
      </div>
    </>
  );
};

export default DoctorCard;
