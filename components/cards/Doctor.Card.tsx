import React from 'react';
import { Doctor } from '@prisma/client';

interface IDoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FunctionComponent<IDoctorCardProps> = ({ doctor }) => {
  return (
    <div className='space-y-1 bg-slate-200 p-4 rounded-md shadow-md'>
      <div className='text-xl font-bold'>
        {doctor.firstName} {doctor.lastName}
      </div>
      <div className='text-sm italic'>{doctor.email}</div>
      <div>
        {doctor.city} - {doctor.facility}
      </div>
      <div>{doctor.areaOfExpertise}</div>
    </div>
  );
};

export default DoctorCard;
