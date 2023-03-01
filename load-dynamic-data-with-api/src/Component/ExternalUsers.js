import React, { useEffect, useState } from 'react';

const ExternalUsers = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h3>External Users</h3>
        </div>
    );
};

export default ExternalUsers;