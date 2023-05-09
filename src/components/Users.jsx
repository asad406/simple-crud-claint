/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Length of Users : {users.length}</h2>
            {
                users.map(user => <p key={user._id}>name:{user.name}, email : {user.email}</p>)
            }
        </div>
    );
};

export default Users;