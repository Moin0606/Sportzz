import React, { useState, useEffect } from 'react';

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch user data from the MongoDB database or your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/getuser',{
        method:'Post',
        headers:{
            'Content-type':'application/json',
        }
      });
        console.log(response)
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Initially, set filtered users to all users
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter users based on the search term
  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.sports.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, location, or sports"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user._id}>
            <h3>{user.name}</h3>
            <p>Location: {user.location}</p>
            <p>Sports: {user.sports}</p>
            {/* You can display additional user information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
