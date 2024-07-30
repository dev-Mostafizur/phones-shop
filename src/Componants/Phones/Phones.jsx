import React from 'react';
import PhonesCard from './PhonesCard';

const Phones = ({phones}) => {
    // console.log(phones)
    return (
        <>
      <div className=''>
      <div className='py-10'>
        <h1 className='text-2xl text-center'>All Categoris Phone</h1>
       </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   '>
            {
                phones?.map(phone=> <PhonesCard phone={phone} key={phone.id}></PhonesCard>)
            }
            </div>
      </div>
        </>
    );
};

export default Phones;