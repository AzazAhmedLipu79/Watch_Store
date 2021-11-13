import { Container } from "@mui/material";

import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Review = () => {
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://fathomless-depths-15420.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    //   console.log(data); reset({ something: '' });
    reset();
    swal("SuccessFul!", "Review  Added !", "success");
  };
  document.title = "Review Our Webapplication ~ Rolex Shop";
  return (
    <Container>
      <h2 className="fw-bold text-secondary">Review Our Site !</h2>
      <form className="container p-5 " onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <br />
        <input
          className="px-5 mb-3"
          placeholder="Your Name"
          defaultValue=""
          {...register("ReviewersName")}
        />
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <textarea
          className="p-5 mx-5 my-2"
          placeholder="Drop Your Comment"
          {...register("Comment", { required: true })}
        />
        <br />
        <label className="me-1">Please Rate us</label>
        <select {...register("StarRating")}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input className="mt-3" type="submit" />
      </form>
    </Container>
  );
};

export default Review;
