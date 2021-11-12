import React, { useEffect, useState } from "react";
import useAuth from "../../../Context/useAuth";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import swal from "sweetalert";

const MyOrders = () => {
  const { user } = useAuth();
  const email = user.email;

  const [myOrder, setMyOrder] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control]);

  const CancelOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setControl(!control);
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <>
      <Container>
        <Typography
          className="fw-bold"
          variant="h4"
          gutterBottom
          component="div"
        >
          My Order:
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {myOrder.length === 0 ? (
              <Alert severity="error">You have no Product — Ordered!</Alert>
            ) : null}
            {myOrder.map((pd) => (
              <>
                {console.log(pd)}
                <Grid key={pd._id} item xs={12} md={4} sm={6}>
                  {" "}
                  <Card
                    key={pd._id}
                    sx={{ maxWidth: 375, padding: "20px", my: "8px" }}
                  >
                    <div className="container-fluid d-flex g-2 bg-secondary rounded-pill shadow-lg px-2">
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Order Date : {pd.OrderDate}
                      </Typography>
                      <Typography
                        sx={{ marginLeft: "9px" }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        & Time : {pd.OrderTime}
                      </Typography>
                    </div>
                    <CardActions>
                      <Button
                        onClick={() => {
                          CancelOrder(pd?._id);
                        }}
                        variant="outlined"
                        color="error"
                        size="medium"
                      >
                        Cancel Order
                      </Button>
                    </CardActions>

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {pd.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {pd.description}
                      </Typography>
                      <Typography variant="h6" gutterBottom component="div">
                        ${pd?.price}
                      </Typography>

                      <TextField
                        style={{ marginTop: "10px" }}
                        fullWidth
                        value={pd._id}
                        label="Tracking Id"
                        id="fullWidth"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default MyOrders;
