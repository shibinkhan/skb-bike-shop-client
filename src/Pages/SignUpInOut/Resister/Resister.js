import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Home/Header/Header';
import { useHistory, useLocation } from 'react-router';

const Resister = () => {
    const { signUp } = useAuth();
    const history = useHistory();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.password2) {
            alert('Password did not matched!');
            return;
        }
        signUp(data.email, data.password, data.displayName, history);
    };

    return (
        <div className="add-service vh">
            <Header />
            <h1 className="fw-bold color my-3">Resistration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="name" placeholder="Full Name..." {...register("displayName")} />
                <input type="email" placeholder="Email..." {...register("email")} />
                <input type="password" placeholder="Password..." {...register("password")} />
                <input type="password" placeholder="Re-type Password..." {...register("password2")} />
                <input className="button addService w-25" placeholder="" type="submit" value="Create Account" />
            </form>
            <hr />
            <p>Already Have Account?</p>
            <NavLink className="" to="/login">Log In</NavLink>
        </div>
    );
};

export default Resister;