import type { NextPage } from 'next';
import { useState } from 'react';
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
      <header>docsearch</header>
      <Link href='/create'>Add new Doctor</Link>
      <Link href='/search'>Search for doctor</Link>
    </div>
  );
};

export default Home;
