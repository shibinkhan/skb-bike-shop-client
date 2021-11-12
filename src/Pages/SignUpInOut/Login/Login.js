import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Header from '../../Home/Header/Header';
const Login = () => {
    const { signIn, googleSignIn } = useFirebase();
    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password, location, history);
    };

    const handleGoogleSignin = () => {
        googleSignIn(location, history);
    };

    return (
        <div className="add-service vh">
            <Header />
            <h1 className="fw-bold color my-3">Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email..." {...register("email")} />
                <input type="password" placeholder="Password..." {...register("password")} />
                <input className="button addService w-25" placeholder="" type="submit" value="Log In" />
            </form>
            <p>Or</p>
            <button className="button" onClick={handleGoogleSignin}>Sign In with Google</button>
            <hr />
            <p>Already Have Account?</p>
            <NavLink className="" to="/signup">Sign Up</NavLink>
        </div>
    );
};

export default Login;