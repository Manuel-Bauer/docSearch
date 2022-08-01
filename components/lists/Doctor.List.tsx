import React from 'react';
import { Doctor } from '@prisma/client';
import DoctorCard from '../cards/Doctor.Card';

interface IDoctorListProps {
  doctors: Doctor[] | null;
  handleDelete: (id: string) => Promise<Doctor>;
}

const DoctorList: React.FunctionComponent<IDoctorListProps> = (props) => {
  return (
    <div className='flex-row p-4 space-y-5'>
      {props.doctors?.map((doctor: Doctor) => {
        return (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            handleDelete={props.handleDelete}
          ></DoctorCard>
        );
      })}
    </div>
  );
};

export default DoctorList;
