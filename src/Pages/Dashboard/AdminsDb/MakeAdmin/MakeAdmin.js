import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
        // setEmail(data.email);
        const user = { email: data.email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert('Admin Made Successfully.')
                };
            });
    };
    return (
        <div className="vh">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email..." {...register("email")} />
                <input className="button addService" placeholder="" type="submit" value="Add Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;