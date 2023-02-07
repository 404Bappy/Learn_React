import React from 'react';
import Config from './Config/Config';

const Device = (props) => {
    return (
        <div>
            <h2>My Device : {props.name}</h2>
            <Config price={props.Price} />
        </div>
    );
};

export default Device;