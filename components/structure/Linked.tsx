import Link from 'next/link';
import React from 'react';

interface ILinkProps {
  route: string;
  text: string;
}

const Linked: React.FunctionComponent<ILinkProps> = (props) => {
  return (
    <div className='text-white text-center bg-recunited hover:bg-recunitedLight py-2 px-2 rounded-md'>
      <Link href={props.route}>{props.text}</Link>
    </div>
  );
};

export default Linked;
