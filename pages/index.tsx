import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Create from './create';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
      <Link href='/create'>Add New Doctor</Link>
    </div>
  );
};

export default Home;
