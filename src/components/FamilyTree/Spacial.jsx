import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Spacial = ({ name, asset }) => {

    const newAsset = useContext(AssetContext);
    // console.log('new asset', newAsset);

    return (
        <div>
            <h3>Spacial: {name}</h3>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Spacial;