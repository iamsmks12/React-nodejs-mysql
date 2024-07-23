import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>User Data:</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
