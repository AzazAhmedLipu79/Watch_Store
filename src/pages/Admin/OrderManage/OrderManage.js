import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const OrderManage = () => {
  const [orders, setOrders] = useState([]);
  const [Status, setStatus] = useState("");
  const [control, setControl] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setStatus(data);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ Status }),
    });

    console.log(id);
  };
  const CancelManageOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/deleteManageOrder/${id}`, {
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
  document.title = "Admin : Order Manage ~ Rolex Shop";
  return (
    <>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Customers Email</TableCell>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Price($)</TableCell>
                <TableCell align="right">Order Date</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="right">{row?.email}</TableCell>
                  <TableCell align="right">{row?.name}</TableCell>
                  <TableCell align="right">{row?.price}</TableCell>

                  <TableCell>{row?.OrderDate}</TableCell>
                  <TableCell align="right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <select {...register("status")}>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Done">Done</option>
                      </select>
                      <input
                        onClick={() => {
                          handleUpdate(row._id);
                        }}
                        type="submit"
                      />
                    </form>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        CancelManageOrder(row?._id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default OrderManage;
