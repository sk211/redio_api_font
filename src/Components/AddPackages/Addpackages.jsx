import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddPackages.css";

const Addpackages = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, reset },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://infinite-oasis-45429.herokuapp.com/package", data)
      .then((res) => {
        if (res.data.acknowledged) {
          useHistory.push("/order");
          reset();
          alert("Your order was successful");
        }
      });
  };

  console.log(watch("example"));

  return (
    <div className="offset-1 col-md-8">
      <h2>Add Packages</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          className="form-control mb-3"
          placeholder="Enter your package Name"
        />

        <textarea
          {...register("descrip", { required: true })}
          className="form-control mb-3"
          placeholder="Package Name Description"
        />
        <input
          {...register("photoUrl", { required: true })}
          className="form-control mb-3"
          placeholder="Photo Url"
        />
        <input
          {...register("price", { required: true })}
          className="form-control mb-3"
          placeholder="price"
        />
        {errors.exampleRequired && (
          <span className="text-danger">This field is required</span>
        )}

        <input type="submit" className="btn btn-block w-100 btn-success" />
      </form>
    </div>
  );
};

export default Addpackages;
