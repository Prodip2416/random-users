import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const users = props.users;
    let totalAge = users.reduce((sumAge, user) => sumAge + user.dob.age, 0);
    const salary = totalAge * 100;
    return (
        <div>
            <h3>Total Added Users : {users.length} </h3>
            <p className="salary">Total Annual Salary : ${salary}</p>
            <button onClick={()=>props.logOut()}>Close</button>
        </div>
    );
};

export default Cart;