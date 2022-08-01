import { NextPage } from 'next';
import CreateDocForm from '../components/forms/CreateDoc.Form';
import Header from '../components/structure/Header';
import { useState } from 'react';
import { createDoctor } from '../utils/apiService/doctorApi';
import { TAreaOfExpertise } from '../utils/types/AreaOfExpertise.Type';
import validator from 'validator';

const Create: NextPage = () => {
  /* INPUT STATES */
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [facility, setFacility] = useState<string>('');
  const [areaOfExpertise, setAreaOfExpertise] = useState<TAreaOfExpertise>(
    'Allergy and Immunology'
  );

  /* USER FEEDBACK STATES */
  const [createError, setCreateError] = useState<string>('');
  const [createSuccess, setCreateSuccess] = useState<string>('');

  /* LOADING STATES */
  const [createLoading, setCreateLoading] = useState<boolean>(false);

  /* FORM HANDLING */
  async function handleSubmit() {
    if (!validateForm()) return;
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
      setCreateSuccess('Doctor added successfully!');
    } catch (err) {
      console.log(err);
      setCreateLoading(false);
      setCreateError('Doctor could not be created. Please check input.');
    }
  }

  /* FORM VALIDATION */
  function validateForm() {
    if (firstName === '') {
      setCreateError('Please provide first name!');
      return false;
    }
    if (lastName === '') {
      setCreateError('Please provide last name!');
      return false;
    }
    if (!validator.isEmail(email)) {
      setCreateError('Please provide valid email!');
      return false;
    }
    if (city === '') {
      setCreateError('Please provide city!');
      return false;
    }
    if (facility === '') {
      setCreateError('Please provide facility!');
      return false;
    }
    if (areaOfExpertise === '') {
      setCreateError('Please provide areaOfExpertise!');
      return false;
    }
    return true;
  }

  return (
    <div>
      <Header text='DOCUNITED'></Header>
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
        setError={setCreateError}
        setSuccess={setCreateSuccess}
        isLoading={createLoading}
      ></CreateDocForm>
      <div className='text-xl text-recunited font-bold px-5'>
        {createSuccess}
      </div>
      <div className='text-xl text-red font-bold px-5'>{createError}</div>
    </div>
  );
};

export default Create;
