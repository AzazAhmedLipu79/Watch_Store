import {
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

const OrderManage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
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
                <TableCell align="right">{row?.OrderDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default OrderManage;
