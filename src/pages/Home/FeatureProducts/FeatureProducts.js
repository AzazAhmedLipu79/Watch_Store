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
import { Container } from "@mui/material";
const FeatureProducts = () => {
  const [allProducts, setAllProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <>
      <Container sx={{ py: "15px", my: "15px" }}>
        <Typography
          className="fw-bold "
          variant="h5"
          gutterBottom
          component="div"
        >
          Feature Products :
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {allProducts.length === 0 ? (
              <CircularProgress
                sx={{ mx: "30px" }}
                size="50"
                color="secondary"
              />
            ) : null}{" "}
            {allProducts.slice(0, 6).map((pd) => (
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
      </Container>
    </>
  );
};

export default FeatureProducts;
