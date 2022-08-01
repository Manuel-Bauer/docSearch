import React, { Dispatch, SetStateAction } from 'react';
import { TAreaOfExpertise } from '../../utils/types/AreaOfExpertise.Type';
import Button from '../buttons/Button';
import Header from '../structure/Header';

interface IInputState {
  city: string;
  facility: string;
  areaOfExpertise: TAreaOfExpertise;
}

interface ISearchDocFormProps {
  inputState: IInputState;
  setCity: Dispatch<SetStateAction<string>>;
  setFacility: Dispatch<SetStateAction<string>>;
  setAreaOfExpertise: Dispatch<SetStateAction<TAreaOfExpertise>>;
  handleSubmit: () => Promise<void>;
  setError: Dispatch<SetStateAction<string>>;
  error: string;
  isLoading: boolean;
}

// For Select Dropdown
const areaOfExpertise = [
  'Allergy and Immunology',
  'Anesthesiology',
  'Colon and Rectal Surgery',
  'Dermatology',
  'Emergency Medicine',
];

const SearchDocForm: React.FunctionComponent<ISearchDocFormProps> = (props) => {
  return (
    <>
      <Header text='DOCUNITED'></Header>
      <div className='flex-row p-4 space-y-2'>
        <input
          className='border border-black rounded-md py-1 px-2'
          type='text'
          placeholder='Select city'
          value={props.inputState.city}
          onChange={(e) => {
            props.setCity(e.target.value as string);
            props.setError('');
          }}
        ></input>
        <input
          className='border border-black rounded-md py-1 px-2'
          type='text'
          placeholder='Facility'
          value={props.inputState.facility}
          onChange={(e) => {
            props.setFacility(e.target.value as string);
            props.setError('');
          }}
        ></input>
        <select
          className='border border-black rounded-md py-1 px-2'
          value={props.inputState.areaOfExpertise}
          onChange={(e) => {
            props.setAreaOfExpertise(e.target.value as TAreaOfExpertise);
            props.setError('');
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
        <div>
          <Button
            text='Search doctor'
            disabled={props.isLoading}
            callback={props.handleSubmit}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default SearchDocForm;
