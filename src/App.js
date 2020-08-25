import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/user/User';
import Cart from './components/cart/Cart';
import Logout from './components/logout/Logout';

function App() {
  const [users, setUsers] = useState([]);
  const [cartUser, setCartUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        //console.table(data.results);
        // console.table(data.results[0]);
        setUsers(data.results);
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddUser = (user) => {
    const totalUsers = [...cartUser, user];
    setCartUser(totalUsers);
    console.log(totalUsers);
  }
  const logOut = () => {
    document.getElementById('main').style.display='none';
    document.getElementById('logout').style.display='inline';
  }

  return (
    <div>
      <div id="main">
        <h1 className="total-user">Total Users : {users.length}</h1>
        <div className="user-container">
          <div className="cart">
            <Cart users={cartUser} logOut={logOut} />
          </div>
          <div className="user-list">
            {
              users.map(user => <User key={user.phone} users={user} handleAddUser={handleAddUser} />)
            }
          </div>
         
        </div>
      </div>  
      <div id="logout">
           <Logout/>
      </div> 
    </div>

  );
}

export default App;
