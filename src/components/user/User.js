import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCoffee,faUserPlus  } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
   // console.log(props.users);
    const { name, picture, dob } = props.users;
  //  console.log(name, picture, dob)

    return (
        <div className="user">        
            <div className="user-img">
                <img src={picture.large} alt="" />
            </div>
            <div className="user-detail">
                <p>Hi, My name is</p>
                <h2>{name.title} {name.first} {name.last}</h2>
                <button onClick={() => props.handleAddUser(props.users)}>
                    <FontAwesomeIcon icon={faUserPlus} />  Add User</button>
            </div>
           
        </div>
    );
};

export default User;

