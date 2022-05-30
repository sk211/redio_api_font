import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom';

import "./Creact.css";
import { useForm } from 'react-hook-form';

const Creact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, reset },
  } = useForm();

  const history = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/create", data)
      .then((res) => {
        if (res.data.acknowledged) {
          history("order");
          reset();
          alert("Created Station successfully");
        }
      });
  };

  console.log(watch("example"));

  return (
    <div className="offset-1 col-md-8">
      <h2>Add Redio station</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          className="form-control mb-3"
          placeholder="Enter your Statoin Name"
        />

        <input
          {...register("station", { required: true })}
          className="form-control mb-3"
          placeholder="PEnter Your Station Number"
        />

        {errors.exampleRequired && (
          <span className="text-danger">This field is required</span>
        )}

        <input type="submit" className="btn btn-block w-100 btn-success" />
      </form>
    </div>
  );
};

export default Creact;
