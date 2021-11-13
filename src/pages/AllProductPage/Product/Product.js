import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
const Product = () => {
  const [allProducts, setAllProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://fathomless-depths-15420.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  document.title = "Explore ~ Rolex Shop";
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {allProducts.length === 0 ? (
            <CircularProgress sx={{ mx: "30px" }} size="50" color="secondary" />
          ) : null}
          {allProducts.map((pd) => (
            <>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <Card
                  key={pd._id}
                  sx={{ maxWidth: 375, padding: "20px", my: "8px" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    sx={{ width: "100%" }}
                    image={pd.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {pd.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {pd.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                      ${pd.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      style={{ paddingLeft: "auto", textDecoration: "none" }}
                      to={`/In/OrderCheckOut/${pd._id}`}
                    >
                      <Button variant="outlined" size="medium">
                        Order
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Product;
