import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useLocation, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useAuth from "../../../Context/useAuth";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Login = () => {
  const { LoginUser, isLoading, authError, user } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    LoginUser(data.get("email"), data.get("password"), location, history);
  };
  return (
    <>
      {isLoading && (
        <Container maxWidth="md" style={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Container>
      )}
      {!isLoading && (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                style={{ backgroundColor: "#EE82EE	" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to="/Register"
                    style={{ paddingLeft: "auto", textDecoration: "none" }}
                  >
                    Don't Have a Account ? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {user.email ? (
            <Alert sx={{ mt: "10px" }} severity="success">
              <AlertTitle>Successfully Registered</AlertTitle>
              This is a success alert — <strong>check it out!</strong>
            </Alert>
          ) : (
            ""
          )}
          {authError && (
            <Alert severity="error">
              <AlertTitle>{authError}</AlertTitle>
            </Alert>
          )}
        </Container>
      )}
    </>
  );
};

export default Login;
