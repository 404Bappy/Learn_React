import React from 'react';

const UserDetails = (props) => {
    return (
        <div className='Person'>
            <h2>name:  {props.name}</h2>
            <p>email:  {props.email}</p>
        </div>
    );
};

export default UserDetails;