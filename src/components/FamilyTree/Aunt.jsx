import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ asset }) => {

    const [money, setMoney] = use(MoneyContext);

    return (
        <div>
            <h3>Aunt</h3>
            <button onClick={() => setMoney(money + 5000)}>
                Add 5000 TK</button>
            <section className='flex'>
                <Cousin asset={asset} name='Sajol'></Cousin>
                <Cousin name='Kakol'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;