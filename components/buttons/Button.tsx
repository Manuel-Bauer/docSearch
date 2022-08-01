import React from 'react';

interface IButtonProps {
  callback: () => any;
  text: string;
  disabled: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button
      className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-1 px-2 rounded-md text-white'
      onClick={() => !props.disabled && props.callback()}
    >
      {props.text}
    </button>
  );
};

export default Button;
