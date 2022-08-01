import type { NextPage } from 'next';
import type { TAreaOfExpertise } from '../utils/types/AreaOfExpertise.Type';
import { useState } from 'react';
import { getDoctors } from '../utils/apiService/doctorApi';
import SearchDocForm from '../components/forms/SearchDoc.Form';
import Header from '../components/structure/Header';
import { Doctor } from '@prisma/client';
import DoctorList from '../components/lists/Doctor.List';

const Search: NextPage = () => {
  /* INPUT STATES */
  const [city, setCity] = useState<string>('');
  const [facility, setFacility] = useState<string>('');
  const [areaOfExpertise, setAreaOfExpertise] = useState<TAreaOfExpertise>('');

  /* OUTPUT STATES */
  const [doctors, setDoctors] = useState<Doctor[] | null>(null);

  /* ERROR STATES */
  const [searchError, setSearchError] = useState<string>('');

  /* LOADING STATES */
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  /* SEARCH FORM HANDLING */
  async function handleSubmit() {
    setSearchLoading(true);
    try {
      const doctors: Doctor[] = await getDoctors({
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

  return (
    <>
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
      <DoctorList doctors={doctors}></DoctorList>
    </>
  );
};

export default Search;
