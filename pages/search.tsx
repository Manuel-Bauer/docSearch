/* NEXT IMPORTS */
import { NextPage } from 'next';
import { useRouter } from 'next/router';
/* REACT IMPORTS */
import { useState } from 'react';
/* COMPONENT IMPORTS */
import Header from '../components/structure/Header';
import SearchDocForm from '../components/forms/SearchDoc.Form';
import DoctorList from '../components/lists/Doctor.List';
/* FUNCTION IMPORTS */
import { getDoctors, deleteDoctor } from '../utils/apiService/doctorApi';
/* TYPE IMPORTS */
import { TAreaOfExpertise } from '../utils/types/AreaOfExpertise.Type';
/* EXTERNAL IMPORTS */
import { Doctor } from '@prisma/client';
import { IoIosArrowBack } from 'react-icons/io';

const Search: NextPage = () => {
  /* NAVIGATION */
  const router = useRouter();

  /* INPUT STATES */
  const [city, setCity] = useState<string>('');
  const [facility, setFacility] = useState<string>('');
  const [areaOfExpertise, setAreaOfExpertise] = useState<TAreaOfExpertise>('');

  /* OUTPUT STATES */
  const [doctors, setDoctors] = useState<Doctor[] | undefined>(undefined);

  /* ERROR STATES */
  const [searchError, setSearchError] = useState<string>('');

  /* LOADING STATES */
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  /* SEARCH FORM HANDLING */
  async function handleSubmit() {
    setSearchLoading(true);
    try {
      const doctors = await getDoctors({
        city,
        facility,
        areaOfExpertise,
      });
      setDoctors(doctors);
      setSearchLoading(false);
      setCity('');
      setFacility('');
      setAreaOfExpertise('');
    } catch (err) {
      console.log(err);
      setSearchLoading(false);
      setSearchError('Invalid search input. Please try again.');
    }
  }

  /* DELETE DOCTOR HANDLING */
  async function handleDelete(id: string) {
    try {
      const deletedDoctor = await deleteDoctor(id);
      // Filter out deleted doctor
      setDoctors((prev) => {
        return prev?.filter((doctor) => doctor.id !== deletedDoctor.id);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header text='DOCUNITED'></Header>
      <SearchDocForm
        inputState={{ city, facility, areaOfExpertise }}
        setCity={setCity}
        setFacility={setFacility}
        setAreaOfExpertise={setAreaOfExpertise}
        handleSubmit={handleSubmit}
        setError={setSearchError}
        error={searchError}
        isLoading={searchLoading}
      ></SearchDocForm>
      {doctors && (
        <DoctorList doctors={doctors} handleDelete={handleDelete}></DoctorList>
      )}

      <IoIosArrowBack
        onClick={() => router.back()}
        className='absolute top-6 left-5'
      ></IoIosArrowBack>
    </>
  );
};

export default Search;
