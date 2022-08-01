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
      <Header text='docSearch'></Header>
      <div className='flex-row justify-center align-center mt-40 space-y-10 mx-10'>
        <div className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-1 px-2 rounded-md text-white text-center text-xl'>
          <Link href='/create'>Add new Doctor</Link>
        </div>
        <div className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-1 px-2 rounded-md text-white text-center text-xl'>
          <Link href='/search'>Search for doctor</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
