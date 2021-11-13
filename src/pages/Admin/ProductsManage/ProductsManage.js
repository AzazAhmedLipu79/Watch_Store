import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Container from "@mui/material/Container";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import swal from "sweetalert";

const ProductsManage = () => {
  const [product, setProduct] = React.useState([]);

  const [control, setControl] = React.useState(false);
  React.useEffect(() => {
    fetch("https://fathomless-depths-15420.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [control]);

  const DeleteMangeProduct = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://fathomless-depths-15420.herokuapp.com/deleteManageProduct/${id}`,
          {
            method: "DELETE",
          }
        )
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
  document.title = "Admin : Product Manage ~ Rolex Shop";

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Watch</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  ({" "}
                  <img
                    src={row?.image}
                    className="rounded-circle img-fluid w-50"
                    alt={row.name}
                  />
                  )
                </TableCell>
                <TableCell align="right">{row?.name}</TableCell>
                <TableCell align="right">${row?.price}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      DeleteMangeProduct(row?._id);
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
  );
};

export default ProductsManage;
