import React from 'react';
import { Doctor } from '@prisma/client';
import { TiDeleteOutline } from 'react-icons/ti';

interface IDoctorCardProps {
  doctor: Doctor;
  handleDelete: (id: string) => Promise<Doctor>;
}

const DoctorCard: React.FunctionComponent<IDoctorCardProps> = (props) => {
  return (
    <>
      <div className='relative space-y-1 bg-slate-200 p-4 rounded-md shadow-md'>
        <div>
          <TiDeleteOutline
            className='absolute right-2 top-2'
            onClick={() => props.handleDelete(props.doctor.id)}
          ></TiDeleteOutline>
        </div>
        <div className='text-xl font-bold'>
          {props.doctor.firstName} {props.doctor.lastName}
        </div>
        <div className='text-sm italic'>{props.doctor.email}</div>
        <div>
          {props.doctor.city} - {props.doctor.facility}
        </div>
        <div>{props.doctor.areaOfExpertise}</div>
      </div>
    </>
  );
};

export default DoctorCard;
