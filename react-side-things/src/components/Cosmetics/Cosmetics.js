import React from 'react';
import { add, multiply, substract } from '../../utilities/storage';

const Cosmetics = () => {
    const first = 55;
    const second = 89;
    const sum = add(first, second);
    const multi = multiply(first, second);
    const sub = substract(first, second);

    return (
        <div>

        </div>
    );
};

export default Cosmetics;