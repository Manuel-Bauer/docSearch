import type { NextPage } from 'next';
import type { TAreaOfExpertise } from '../utils/types/AreaOfExpertise.Type';
import { useState } from 'react';
import { getDoctors } from '../utils/apiService/doctorApi';
import SearchDocForm from '../components/forms/SearchDoc.Form.Comp';

const Search: NextPage = () => {
  /* INPUT STATES */
  const [city, setCity] = useState<string>('');
  const [facility, setFacility] = useState<string>('');
  const [areaOfExpertise, setAreaOfExpertise] = useState<TAreaOfExpertise>('');

  /* ERROR STATES */
  const [searchError, setSearchError] = useState<string>('');

  /* LOADING STATES */
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  /* FORM HANDLING */
  async function handleSubmit() {
    setSearchLoading(true);
    try {
      await getDoctors({
        city,
        facility,
        areaOfExpertise,
      });
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

  const searchForm = () => {};
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
      <div>DoctorList</div>
    </>
  );
};

export default Search;
