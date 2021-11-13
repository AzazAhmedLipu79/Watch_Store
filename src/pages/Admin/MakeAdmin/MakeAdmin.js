import { Button, TextField, Alert, Container } from "@mui/material";
import React, { useState } from "react";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    swal({
      title: "Are you sure?",
      text: "The owner of this email will be the admin on this site",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((admin) => {
      if (admin) {
        fetch("https://fathomless-depths-15420.herokuapp.com/users/admin", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              console.log(data);
              setSuccess(true);
            }
          });

        swal("Congo! New Admin Done!", {
          icon: "success",
        });
      } else {
        swal("You Cancelled him to be an Administrator!");
      }
    });

    e.preventDefault();
  };
  document.title = "Make Admin ~ Rolex Shop";
  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage:
          "url('https://media2.giphy.com/media/26tn33aiTi1jkl6H6/200w.webp?cid=ecf05e47en8pf6mt8lfolwv2l3if1j8p4gqtu2y29kkmah5o&rid=200w.webp&ct=g')",
        backgroundSize: "cover",
        height: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <h2 className="fw-bold  ">Make an Admin</h2>
      <Container className="mt-5">
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "50%" }}
            label="Email"
            required
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <br />
          <Button
            className="mt-2 px-3 rounded"
            type="submit"
            variant="outlined"
            color="error"
          >
            Make Admin
          </Button>
        </form>
      </Container>
      {success && (
        <Alert className="w-25 my-5  mx-auto rounded-pill" severity="success">
          Made Admin successfully!
        </Alert>
      )}

      {!success && (
        <Alert
          className="w-25 my-5 p-2 mx-auto rounded-pill"
          severity="warning"
        >
          Please Provide a Valid User
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
