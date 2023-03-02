import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const CountHandler = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count : {count} </h1>
            <button onClick={CountHandler}>INCREASE + </button>
        </div>
    );
};

export default Count;