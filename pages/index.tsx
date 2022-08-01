import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/structure/Header';

export const Home: NextPage = () => {
  const [doctor, setDoctor] = useState({
    firstName: 'Tobias',
    lastName: 'Stöhr',
    email: 'tobiasstöhr@gmail.com',
    city: 'München',
    facility: 'TUM Universitätsklinikum',
    areaOfExpertise: 'Colon and Rectal Surgery',
  });

  async function createDoctor() {
    const res = await fetch('api/doctor', {
      method: 'POST',
      body: JSON.stringify(doctor),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log('createDoc', res);
    const data = await res.json();
    return data;
  }

  return (
    <div>
      <Header text='DOCUNITED'></Header>
      <div className='flex-row justify-center align-center mt-20 space-y-10 mx-20'>
        <div className='text-white text-center bg-recunited hover:bg-recunitedLight py-2 px-2 rounded-md'>
          <Link href='/create'>Add new doctor</Link>
        </div>
        <div className='text-white text-center bg-recunited hover:bg-recunitedLight py-2 px-2 rounded-md'>
          <Link href='/search'>Search for doctor</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
