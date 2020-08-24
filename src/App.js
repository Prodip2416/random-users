import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/user/User';
import Cart from './components/cart/Cart';

function App() {
  const [users, setUsers] = useState([]);
  const [cartUser, setCartUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        // console.log(data.results);
        // console.log(data.results[0]);
        setUsers(data.results);
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddUser = (user) => {
    const totalUsers = [...cartUser, user];
    setCartUser(totalUsers);
    console.log(totalUsers);
  }

  return (
    <div>
      <h2>Total Users : {users.length}</h2>
      <div className="user-container">
        <div className="user-list">
          {
            users.map(user => <User key={user.phone} users={user} handleAddUser={handleAddUser} />)
          }
        </div>
        <div>
          <Cart users={cartUser}/>
        </div>
      </div>
    </div>

  );
}

export default App;
