import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';

const ExternalUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h3>External Users</h3>

            {
                users.map(user => <UserDetails name={user.name} email={user.email}></UserDetails>)
            }
        </div>
    );
};

export default ExternalUsers;