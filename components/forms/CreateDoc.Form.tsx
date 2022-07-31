import { Doctor } from '@prisma/client';
import React, { Dispatch, SetStateAction } from 'react';
import { checkServerIdentity } from 'tls';
import { TAreaOfExpertise } from '../../utils/types/AreaOfExpertise.Type';

interface IInputState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  areaOfExpertise: TAreaOfExpertise;
  facility: string;
}

interface ICreateDocFormProps {
  inputState: IInputState;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string>>;
  setAreaOfExpertise: Dispatch<SetStateAction<TAreaOfExpertise>>;
  handleSubmit: () => Promise<void>;
  setError: Dispatch<SetStateAction<string>>;
  error: string;
  isLoading: boolean;
}

const CreateDocForm: React.FunctionComponent<ICreateDocFormProps> = (props) => {
  return (
    <div>
      <input
        type='text'
        placeholder='First Name'
        value={props.inputState.firstName}
        onChange={(e) => {
          props.setFirstName(e.target.value as string);
          props.setError('');
        }}
      ></input>
      <input
        type='text'
        placeholder='Last Name'
        value={props.inputState.lastName}
        onChange={(e) => {
          props.setLastName(e.target.value as string);
          props.setError('');
        }}
      ></input>
      <input
        type='email'
        placeholder='Email'
        value={props.inputState.email}
        onChange={(e) => {
          props.setEmail(e.target.value as string);
          props.setError('');
        }}
      ></input>
      <input
        type='text'
        placeholder='City'
        value={props.inputState.city}
        onChange={(e) => {
          props.setCity(e.target.value as string);
          props.setError('');
        }}
      ></input>
      <input
        type='text'
        placeholder='Area Of Expertise'
        value={props.inputState.firstName}
        onChange={(e) => {
          props.setAreaOfExpertise(e.target.value as TAreaOfExpertise);
          props.setError('');
        }}
      ></input>
    </div>
  );
};

export default CreateDocForm;
