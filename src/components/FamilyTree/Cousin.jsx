import React from 'react';
import Spacial from './Spacial';
import Friend from './Friend';

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Sajol' && <Spacial asset={asset}></Spacial>
            }
            {
                name === "Kakol" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;