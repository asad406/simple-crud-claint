/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData();
    // console.log(user);

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const newUser = { name, email };
        // console.log(newUser);

         fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
              if(data.modifiedCount > 0){
                alert('Update successfully')
                form.reset();
              }
            })
    };

    return (
        <div>
            <h2>This information of {user.name}</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    name="name"
                    defaultValue={user.name}
                    id=""
                />
                <br />
                <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    id=""
                />
                <br />
                <br />
                <input
                    type="submit"
                    value="update"
                />
            </form>
        </div>
    );
};

export default Update;
