import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        });
    }, []);


    return (
    <div>
        {loading ? (
        <p>Loading...</p>
        ) : (
        <ul>
            {users.map(user => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )}
  </div>
  );
}

export default UserList;

