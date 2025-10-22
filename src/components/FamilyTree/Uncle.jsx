import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Aritrro'></Cousin>
                <Cousin name ='Arnob'></Cousin>
                <Cousin name = 'Omkita'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;