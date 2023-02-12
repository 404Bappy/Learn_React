import React from 'react';
import { add, multiply, substract } from '../../utilities/storage';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 25 },
        { id: 1, name: 'Nail Polish', price: 100 },
        { id: 1, name: 'Face MAsk', price: 50 },
        { id: 1, name: 'FaceWash', price: 500 }
    ]

    return (
        <div>
            <h1> My Cosmetics Shop !</h1>
        </div>
    );
};

export default Cosmetics;



// const first = 55;
// const second = 89;
// const sum = add(first, second);
// const multi = multiply(first, second);
// const sub = substract(first, second);