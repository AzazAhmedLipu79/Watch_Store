import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./pages/Shared/Sidebar/Sidebar/Sidebar";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import useAuth from "./Context/useAuth";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "dark",
        },
      }),
    [prefersDarkMode]
  );
  // const { user } = useAuth();
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <div className="App">
            <Router>
              <Switch>
                <PrivateRoute path="/In">
                  <Sidebar></Sidebar>
                </PrivateRoute>
                <Route path="/Login">
                  <Login></Login>
                </Route>
                <Route path="/Register">
                  <Register></Register>
                </Route>
                <Route exact path="/">
                  <Redirect to="/In" />
                </Route>
              </Switch>
            </Router>
          </div>
        </>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
