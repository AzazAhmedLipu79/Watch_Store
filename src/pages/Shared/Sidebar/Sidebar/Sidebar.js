import * as React from "react";
import { Switch, Route, Link, useRouteMatch, Redirect } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MuiAppBar from "@mui/material/AppBar";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Toolbar from "@mui/material/Toolbar";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Home from "../../../Home/Home/Home";
import Product from "../../../AllProductPage/Product/Product";
import useAuth from "../../../../Context/useAuth";
import Button from "@mui/material/Button";
import AddProduct from "../../../Admin/AddProduct/AddProduct/AddProduct";
import { Avatar, Chip } from "@mui/material";
import OrderCheckOut from "../../../UserDashBoard/OrderCheckOut/OrderCheckOut";
import MyOrders from "../../../UserDashBoard/MyOrders/MyOrders";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let { path, url } = useRouteMatch();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Nache App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img
            src="https://mui.com/static/branding/product-core-dark.svg"
            alt="Logo"
          />
          <span>Niche Shop</span>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <>
                <ChevronRightIcon />
              </>
            ) : (
              <>
                <ChevronLeftIcon />
              </>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Link
          to={`${url}/Home`}
          style={{ paddingLeft: "auto", textDecoration: "none" }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <MapsHomeWorkRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={`${url}/Products`}
          style={{ paddingLeft: "auto", textDecoration: "none" }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
          </List>
        </Link>

        <Divider />
        <Link
          to={`${url}/MyOrders`}
          style={{ paddingLeft: "auto", textDecoration: "none" }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <PlaylistAddCheckIcon />
              </ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItem>
          </List>
        </Link>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mb: "3px" }} />
        <Chip
          sx={{ mt: "2px" }}
          avatar={<Avatar>A</Avatar>}
          label="Admin Tools"
        />

        <Link
          to={`${url}/AddProduct`}
          style={{ paddingLeft: "auto", textDecoration: "none" }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItem>
          </List>
        </Link>
        <Divider />
        {/* conditional rendering */}
        {user.email ? (
          <List
            style={{ marginTop: "30%" }}
            // sx={{ backgroundColor: "#B33A3A", padding: "5px" }}
          >
            <Button
              className="rounded-pill w-100 shadow-lg "
              onClick={logOut}
              variant="contained"
              color="error"
            >
              <ListItem sx={{ px: "auto" }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Button>
          </List>
        ) : (
          ""
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/Home`} />
          </Route>
          <Route path={`${path}/Home`}>
            <Home></Home>
          </Route>
          <Route path={`${path}/Products`}>
            <Product></Product>
          </Route>

          <Route path={`${path}/MyOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/OrderCheckOut/:ProductId`}>
            <OrderCheckOut></OrderCheckOut>
          </Route>

          <Route path={`${path}/AddProduct`}>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default Sidebar;
