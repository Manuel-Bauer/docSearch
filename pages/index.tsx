/* NEXT IMPORTS */
import type { NextPage } from 'next';
/*REACT IMPORTS */
import { useState } from 'react';
/*COMPONENT IMPORTS */
import Header from '../components/structure/Header';
import Linked from '../components/structure/Linked';

export const Home: NextPage = () => {
  return (
    <div>
      <Header text='DOCUNITED'></Header>
      <div className='flex-row justify-center align-center mt-20 space-y-10 mx-20'>
        <Linked route='/create' text='Add new doctor'></Linked>
        <Linked route='/search' text='Search for doctor'></Linked>
      </div>
    </div>
  );
};

export default Home;
