import React from 'react';
import { Doctor } from '@prisma/client';
import DoctorCard from '../cards/Doctor.Card';

interface IDoctorListProps {
  doctors: Doctor[] | null;
}

const DoctorList: React.FunctionComponent<IDoctorListProps> = ({ doctors }) => {
  return (
    <div className='flex-row p-4 space-y-5'>
      {doctors?.map((doctor: Doctor) => {
        return <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>;
      })}
    </div>
  );
};

export default DoctorList;
