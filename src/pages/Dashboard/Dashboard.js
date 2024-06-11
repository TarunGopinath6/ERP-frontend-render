import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

// import { mainListItems, secondaryListItems } from "./listItems";
// import { MainListItems, SecondaryListItems } from "./listItems copy";
import MainListItems from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

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
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard(props) {
  const [open, setOpen] = React.useState(true);

  const { restOfThePage } = props;
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* HEADER */}
        <AppBar
          position="absolute"
          open={open}
          elevation={0}
          // style={{ backgroundColor: "#4baa4c" }}
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
                color: open ? "#ffffff" : "gray",
              }}
            >
              <ArrowCircleRightOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
            {/* LOGO TO BE INCLUDED */}
            {/* <img
              src="https://github.com/anirudh-cp/ERP-Precision-Profiles-India/blob/mobile/frontend/src/assets/images/ppi_logo_white.png"
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }} // Adjust height and margin as needed
            /> */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              align="center"
              sx={{
                flexGrow: 1,
                letterSpacing: "0.05em",
                wordSpacing: "0.25em",
                color: "#4baa4c",
              }}
            >
              PRECISION PROFILES INDIA
            </Typography>
            {/* <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary" sx={{ marginLeft: 1 }}>
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* LOGO TO BE INCLUDED */}
            <img
              src="https://media.licdn.com/dms/image/D560BAQGfo6Rx2NUKmg/company-logo_200_200/0/1683166465454?e=2147483647&v=beta&t=VIA_LbXY4XIlCGUP9R_Ml_SjZdvqo7lmre3voOno1X0"
              alt="Logo"
              style={{ height: "45px", marginRight: "10px" }} // Adjust height and margin as needed
            />
          </Toolbar>
        </AppBar>

        {/* LEFT DRAWER */}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{ color: open ? "gray" : "#ffffff" }}
            >
              <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Toolbar>
          <Divider sx={{ margin: 1, color: "#cfd8dc" }} />
          <List component="nav" sx={{ margin: 1 }}>
            {/* {MainListItems} */}
            <MainListItems />
            <Divider sx={{ my: 1, color: "#cfd8dc" }} />
            {/* {secondaryListItems} */}
            {/* <SecondaryListItems /> */}
          </List>
        </Drawer>

        {restOfThePage}
      </Box>
    </ThemeProvider>
  );
}
