import React from 'react';
import { checkServerIdentity } from 'tls';

interface IInputState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  areaOfExpertise: string;
  facility: string;
}

interface ICreateDocFormProps {
  inputState: IInputState;
}

const CreateForm: React.FunctionComponent<ICreateDocFormProps> = (props) => {
  return <></>;
};

export default CreateForm;
