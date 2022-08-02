import React, { Dispatch, SetStateAction } from 'react';
import { TAreaOfExpertise } from '../../utils/types/AreaOfExpertise.Type';
import Button from '../buttons/Button';
import { getDoctors } from '../../utils/apiService/doctorApi';

const UpdateDocForm: React.FunctionComponent<any> = (props) => {
  return (
    <button
      onClick={() =>
        getDoctors({ id: '62e814c256d3109fe2a3b95c' }).then((res) =>
          console.log(res[0])
        )
      }
    >
      Test
    </button>
  );
};

export default UpdateDocForm;
