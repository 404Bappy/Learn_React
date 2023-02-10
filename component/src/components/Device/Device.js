import React from 'react';
import Config from './Config/Config';

const Device = (props) => {
    return (
        <div className='DeviceD'>
            <h2>My Device : {props.name}</h2>
            <h4>Current steps : {props.steps}</h4>
            <Config price={props.Price} steps={props.steps} />
        </div>
    );
};

export default Device;