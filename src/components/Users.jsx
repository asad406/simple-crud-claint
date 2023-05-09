/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.deletedCount > 0){
                    alert('Delete successfully')
                }
            });
    };
    return (
        <div>
            <h2>Length of Users : {users.length}</h2>
            {users.map((user) => (
                <p key={user._id}>
                    name:{user.name}, email : {user.email}
                    <button onClick={() => handleDelete(user._id)}>X</button>
                </p>
            ))}
        </div>
    );
};

export default Users;
