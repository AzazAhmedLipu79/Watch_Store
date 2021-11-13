import {
  Alert,
  AlertTitle,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import useAuth from "../../../Context/useAuth";

const OrderCheckOut = () => {
  const { user } = useAuth();
  const { ProductId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(
      `https://fathomless-depths-15420.herokuapp.com/SingleProduct/${ProductId}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.OrderDate = new Date().toLocaleDateString();
    data.OrderTime = new Date().toLocaleTimeString();
    data.status = "Pending";
    fetch("https://fathomless-depths-15420.herokuapp.com/ConfirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    swal("Thank For Order This ").then((value) => {
      window.location.replace("/In/MyOrders");
    });
  };
  document.title = "Confirm Your Order ~ Rolex Shop";
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sm={6}>
            <Card sx={{ maxWidth: 375, padding: "20px", my: "8px" }}>
              <CardMedia
                className="my-1"
                component="img"
                alt="green iguana"
                height="140"
                sx={{ width: "100%" }}
                image={product?.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product?.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {product?.description}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  ${product?.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} sm={6}>
            <div className="event-box c shadow-lg  px-3 py-4  mx-4   border  d-flex justify-content-center align-items-center">
              <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name", { required: true })}
                    readOnly
                    defaultValue={product?.name}
                    className="p-2 m-2 w-100"
                  />
                  <br />

                  <input
                    {...register("description")}
                    readOnly
                    defaultValue={product?.description}
                    className="p-2 m-2 w-100"
                  />
                  <br />

                  <input
                    {...register("price", { required: true })}
                    defaultValue={product?.price}
                    readOnly
                    type="number"
                    className="p-2 m-2 w-100"
                  />
                  <br />

                  <input
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    readOnly
                    className="p-2 m-2 w-100"
                  />
                  <br />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <br />
                  <input
                    type="submit"
                    value="Confirm Order"
                    style={{ backgroundColor: "purple" }}
                    className="btn btn-secondary w-100 rounded"
                  />
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="w-25 mx-auto my-5 bg-dark">
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          If Order Successfully Done — <strong>
            You will be Redirected!
          </strong>{" "}
          further You won't see any action
        </Alert>
      </div>
    </>
  );
};

export default OrderCheckOut;
