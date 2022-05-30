import React from 'react';
import { Button } from "react-bootstrap";
import useFirebase from './../hooks/userFirebase';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const NewSign = () => {
    const { user, registerUser } = useFirebase();
    const history = useNavigate();




    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },

    } = useForm();
    const onSubmit = (data) => {
        registerUser(data.email, data.password);
        reset();
        if (user) {
            history('/dashboard')

        } else if (!user) {
            history("./login")
        }

    }

    return (
        <div className="login-form">
            <div className="col-lg-4 offset-4 my-5" id="loginFrom">
                <h2 className="text-center ">Sign Up </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('email', { required: true })} placeholder="Enter your Email" className="form-control mb-3" />
                    {errors.email && <p className="text-danger">Last name is required.</p>}
                    <input {...register('password', { required: true })} placeholder="Enter your Password" className="form-control" />
                    {errors.password && <p className="text-danger">Last password is required.</p>}
                    <input type="submit" vlaue="Sign Up" className="btn btn-danger mt-3 w-100" />
                </form>

                <div className="d-grid gap-2 mt-3 py-3 ">
                    <Link to="/">
                        Login here
                    </Link>

                </div>
            </div>
        </div>
    );

}

export default NewSign;
