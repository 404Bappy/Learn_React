import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const CountHandlerIncrease  = () => {
        setCount(count + 1);
    }
    
    const CountHandlerDecrease = () => {
        setCount(count - 1);
    }
    return (
        <div className='Div_Count'>
            <h1 className='Count'>Count : {count} </h1>
            <h4>Click The Green Button To Increase Count</h4>
            <button className='btn' onClick={CountHandlerIncrease}>INCREASE + </button>

            <button className='btn-' onClick={CountHandlerDecrease}>DECREASE - </button>

        </div>
    );
};

export default Count;