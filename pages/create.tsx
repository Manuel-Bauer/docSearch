import type { NextPage } from 'next';
import CreateDocForm from '../components/forms/CreateDoc.Form';
import { useState } from 'react';
import { createDoctor } from '../utils/apiService/doctorApi';
import { TAreaOfExpertise } from '../utils/types/AreaOfExpertise.Type';

export const Create: NextPage = () => {
  /* INPUT STATES */
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [facility, setFacility] = useState<string>('');
  const [areaOfExpertise, setAreaOfExpertise] = useState<TAreaOfExpertise>(
    'Allergy and Immunology'
  );

  /* ERROR STATES */
  const [createError, setCreateError] = useState<string>('');

  /* LOADING STATES */
  const [createLoading, setCreateLoading] = useState<boolean>(false);

  /* FORM HANDLING */
  async function handleSubmit() {
    setCreateLoading(true);
    try {
      await createDoctor({
        firstName,
        lastName,
        email,
        city,
        areaOfExpertise,
        facility,
      });
      setCreateLoading(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setCity('');
      setFacility('');
      setAreaOfExpertise('Allergy and Immunology');
    } catch (err) {
      console.log(err);
      setCreateLoading(false);
      setCreateError('Doctor could not be created. Please check input.');
    }
  }

  return (
    <div>
      <CreateDocForm
        inputState={{
          firstName,
          lastName,
          email,
          city,
          areaOfExpertise,
          facility,
        }}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setCity={setCity}
        setAreaOfExpertise={setAreaOfExpertise}
        setFacility={setFacility}
        handleSubmit={handleSubmit}
        error={createError}
        setError={setCreateError}
        isLoading={createLoading}
      ></CreateDocForm>
    </div>
  );
};

export default Create;
