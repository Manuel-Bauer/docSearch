import React from 'react';

interface IHeaderProps {
  text: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className='bg-white text-center text-3xl text-recunited uppercase p-3 font-bold tracking-widest'>
      {props.text}
    </div>
  );
};

export default Header;
