import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";
import useFirebase from './../hooks/userFirebase';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { signInUsingGoogle, signInUser, registerUser } = useFirebase();


  const handleGoogleLogin = () => {
    signInUsingGoogle();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm();
  const onSubmit = (data) => {
    registerUser(data.email, data.password);
  }

  return (
    <div className="login-form">
      <div className="col-lg-4 offset-4 my-5" id="loginFrom">
        <h2 className="text-center ">Login </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('email', { required: true })} placeholder="Enter your Email" className="form-control mb-3" />
          {errors.email && <p className="text-danger">Last name is required.</p>}
          <input {...register('password', { required: true })} placeholder="Enter your Password" className="form-control" />
          {errors.password && <p className="text-danger">Last password is required.</p>}
          <input type="submit" vlaue="login" className="btn btn-danger mt-3 w-100" />
        </form>

        <div className="d-grid gap-2 mt-3 py-3 ">
          <Button
            variant="danger"
            onClick={handleGoogleLogin}
            size="md"
            className="mb-4 mt-2 "
          >
            <i class="fab fa-google pl-2 mr-2"></i>
            <span> Google Login</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
