import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddProduct = () => {
  document.title = "Admin : Add Product ~ Rolex Shop";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://fathomless-depths-15420.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    //   console.log(data); reset({ something: '' });
    reset();
    swal("SuccessFul!", "New Product Added !", "success");
  };
  return (
    <div className="container">
      <h2 className="text-center fw-bold">Add A Product</h2>
      <div className="login-box w-75 m-auto mt-5">
        <div className="event-box border shadow-lg  p-5 border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                required
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                required
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                required
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                required
                {...register("price", { required: true })}
                placeholder="Price"
                type="number"
                className="p-2 m-2 w-100"
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input
                type="submit"
                value="Add"
                style={{ backgroundColor: "purple" }}
                className="btn btn-secondary w-100 rounded"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
