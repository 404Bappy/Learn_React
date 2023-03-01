import React, { useEffect, useState } from 'react';

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
                users.map(user => <li>{user.name}</li>)
            }
        </div>
    );
};

export default ExternalUsers;