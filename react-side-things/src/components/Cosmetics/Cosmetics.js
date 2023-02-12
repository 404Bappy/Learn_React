import React, { useEffect, useState } from 'react';
import { add, multiply, substract } from '../../utilities/storage';
import Cosmetic from '../Cosmetic/cosmetic';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, [])


    return (
        <div>
            <h1> My Cosmetics Shop !</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;



// const first = 55;
// const second = 89;
// const sum = add(first, second);
// const multi = multiply(first, second);
// const sub = substract(first, second);