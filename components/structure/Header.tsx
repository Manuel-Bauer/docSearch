import React from 'react';

interface IHeaderProps {
  text: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className='bg-violet-500 text-center text-lg text-white p-3'>
      {props.text}
    </div>
  );
};

export default Header;
