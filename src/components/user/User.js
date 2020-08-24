import React from 'react';
import './User.css';

const User = (props) => {
   // console.log(props.users);
    const { name, picture, dob } = props.users;
  //  console.log(name, picture, dob)

    return (
        <div className="user">
            <div>
                <img src={picture.medium} alt="" />
            </div>
            <p>Hi, My name is</p>
            <h3>{name.title} {name.first} {name.last}</h3>
            <button onClick={() => props.handleAddUser(props.users)}>Add This User</button>
        </div>
    );
};

export default User;