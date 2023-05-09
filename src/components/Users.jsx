/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const allUsers = useLoaderData();
    const [users, setAllUser] = useState(allUsers)
    // console.log(users)
    const handleDelete = (_id) => {
        console.log({_id});
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.deletedCount > 0){
                    alert('Delete successfully')
                    const remaining = users.filter(user => user._id !== _id);
                    setAllUser(remaining);
                }
            });
    };
    return (
        <div>
            <h2>Length of Users : {users.length}</h2>
            {users.map((user) => (
                <p key={user._id}>
                    name:{user.name}, email : {user.email}
                    <Link to={`/update/${user._id}`}><button>update</button></Link>
                    <button onClick={() => handleDelete(user._id)}>X</button>
                </p>
            ))}
        </div>
    );
};

export default Users;
