import React, { Dispatch, SetStateAction } from 'react';
import { TAreaOfExpertise } from '../../utils/types/AreaOfExpertise.Type';
import Button from '../buttons/Button';

interface IInputState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  facility: string;
  areaOfExpertise: TAreaOfExpertise;
}

interface ICreateDocFormProps {
  inputState: IInputState;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string>>;
  setFacility: Dispatch<SetStateAction<string>>;
  setAreaOfExpertise: Dispatch<SetStateAction<TAreaOfExpertise>>;
  handleSubmit: () => Promise<void>;
  setError: Dispatch<SetStateAction<string>>;
  setSuccess: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}

/* FOR SELECT DROPDOWN */
const areaOfExpertise = [
  'Allergy and Immunology',
  'Anesthesiology',
  'Colon and Rectal Surgery',
  'Dermatology',
  'Emergency Medicine',
];

const CreateDocForm: React.FunctionComponent<ICreateDocFormProps> = (props) => {
  return (
    <div className='flex-row p-4 space-y-2'>
      <input
        className='w-full border border-black rounded-md py-1 px-2'
        type='text'
        placeholder='First Name'
        value={props.inputState.firstName}
        onChange={(e) => {
          props.setFirstName(e.target.value as string);
          props.setError('');
          props.setSuccess('');
        }}
      ></input>
      <input
        className='w-full border border-black rounded-md py-1 px-2'
        type='text'
        placeholder='Last Name'
        value={props.inputState.lastName}
        onChange={(e) => {
          props.setLastName(e.target.value as string);
          props.setError('');
          props.setSuccess('');
        }}
      ></input>
      <input
        className='w-full border border-black rounded-md py-1 px-2'
        type='email'
        placeholder='Email'
        value={props.inputState.email}
        onChange={(e) => {
          props.setEmail(e.target.value as string);
          props.setError('');
          props.setSuccess('');
        }}
      ></input>
      <input
        className='w-full border border-black rounded-md py-1 px-2'
        type='text'
        placeholder='City'
        value={props.inputState.city}
        onChange={(e) => {
          props.setCity(e.target.value as string);
          props.setError('');
          props.setSuccess('');
        }}
      ></input>
      <input
        className='w-full border border-black rounded-md py-1 px-2'
        type='text'
        placeholder='Facility'
        value={props.inputState.facility}
        onChange={(e) => {
          props.setFacility(e.target.value as string);
          props.setError('');
          props.setSuccess('');
        }}
      ></input>
      <select
        className='w-full border border-black rounded-md py-1 px-2'
        value={props.inputState.areaOfExpertise}
        onChange={(e) => {
          props.setAreaOfExpertise(e.target.value as TAreaOfExpertise);
          props.setError('');
          props.setSuccess('');
        }}
      >
        {areaOfExpertise.map((area) => {
          return (
            <option key={area} value={area}>
              {area}
            </option>
          );
        })}
      </select>
      <Button
        text='Add doctor'
        disabled={props.isLoading}
        callback={props.handleSubmit}
      ></Button>
    </div>
  );
};

export default CreateDocForm;
