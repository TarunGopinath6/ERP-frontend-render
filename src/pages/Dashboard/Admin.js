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
import Chart from "react-apexcharts";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

import { mainListItems, secondaryListItems } from "./listItems";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Dashboard from "./Dashboard";
import AdminUserTable from "./AdminUserTable";
import AdminProductTable from "./AdminProductTable";
import AdminDepartmentTable from "./AdminDepartmentTable";
import AdminStageTable from "./AdminStageTable";
import AdminClientTable from "./AdminClientTable";

export default function Admin() {
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

  const [displayTable, setDisplayTable] = React.useState("user");

  const handleDisplayTableButtonClick = (value) => {
    console.log("Display Button Pressed", value);
    setDisplayTable(value);
  };

  const restOfThePage = (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        padding: 0,
      }}
    >
      <Toolbar />
      <Container maxWidth="100vw" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 2,
                paddingRight: 2,
                // backgroundColor: "#4baa4c",
                flexDirection: "row",
                height: 50,
                width: "50vw",
                borderRadius: "15px",
                // border: "1px solid #4baa4c",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
              color="gray"
            >
              <Button
                sx={{
                  p: 3,
                  height: "30px",
                  color: "user" === displayTable ? "#4baa4c" : "gray",
                }}
                onClick={() => handleDisplayTableButtonClick("user")}
              >
                User
              </Button>
              <span color="gray">|</span>
              <Button
                sx={{
                  p: 3,
                  color: "#4baa4c",
                  height: "30px",
                  color: "product" === displayTable ? "#4baa4c" : "gray",
                }}
                onClick={() => handleDisplayTableButtonClick("product")}
              >
                Product
              </Button>
              <span color="gray">|</span>
              <Button
                sx={{
                  p: 3,
                  color: "#4baa4c",
                  height: "30px",
                  color: "department" === displayTable ? "#4baa4c" : "gray",
                }}
                onClick={() => handleDisplayTableButtonClick("department")}
              >
                Department
              </Button>
              <span color="gray">|</span>
              <Button
                sx={{
                  p: 3,
                  color: "#4baa4c",
                  height: "30px",
                  color: "stage" === displayTable ? "#4baa4c" : "gray",
                }}
                onClick={() => handleDisplayTableButtonClick("stage")}
              >
                Stage
              </Button>
              <span color="gray">|</span>
              <Button
                sx={{
                  p: 3,
                  color: "#4baa4c",
                  height: "30px",
                  color: "client" === displayTable ? "#4baa4c" : "gray",
                }}
                onClick={() => handleDisplayTableButtonClick("client")}
              >
                Client
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                // p:2,
                display: "flex",
                flexDirection: "column",
                height: 555,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              {displayTable === "user" ? (
                <AdminUserTable />
              ) : displayTable === "product" ? (
                // Render the product table component here
                <AdminProductTable />
              ) : displayTable === "department" ? (
                <AdminDepartmentTable />
              ) : displayTable === "stage" ? (
                <AdminStageTable />
              ) : displayTable === "client" ? (
                <AdminClientTable />
              ) : null}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  return (
    <React.Fragment>
      <Dashboard restOfThePage={restOfThePage} activePage="Dashboard" />
    </React.Fragment>
  );
}
