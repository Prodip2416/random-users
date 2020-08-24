import React from 'react';

const Cart = (props) => {
    const users = props.users;
    const totalAge = users.reduce((sumAge, user) => sumAge + user.dob.age, 0);
    return (
        <div>
            <h3>Total Users : {users.length} </h3>
            <p>Total Users Age : {totalAge}</p>
        </div>
    );
};

export default Cart;