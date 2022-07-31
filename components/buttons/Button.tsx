import React from 'react';

interface IButtonProps {
  variant: 'primary | secondary';
  callback: () => any;
  text: string;
  disabled: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button onClick={() => !props.disabled && props.callback()}>
      {props.text}
    </button>
  );
};

export default Button;
