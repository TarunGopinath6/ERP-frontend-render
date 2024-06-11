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
import OpenPoTable from "./OpenPoTable";

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

export default function Performance() {
  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        // categories: [
        //   1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
        //   2002, 2003,
        // ],
        categories: [1991, 1992, 1993, 1994, 1995, 1996],
      },
    },
    series: [
      {
        name: "series-1",
        // data: [20, 40, 80, 30, 60, 10, 70, 50, 90, 40, 60, 30, 80],
        data: [20, 40, 80, 30, 60, 10, 70],
      },
    ],
  };

  const chartOptionsPositive = {
    chart: {
      id: "my-chart",
      type: "area",
      toolbar: {
        show: false, // Hide the toolbar (including download option)
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    dataLabels: {
      enabled: false, // Hide data labels
    },
    legend: {
      show: false, // Hide legend
    },
    xaxis: {
      axisBorder: {
        show: false, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    yaxis: {
      axisBorder: {
        show: false, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
      colors: "#00ff00",
    },

    tooltip: {
      enabled: true,
      theme: "light",
      interpolate: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="custom-tooltip">' +
          "<span>" +
          "Value: " +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#00e676"],
      line: {
        dashArray: [0], // Disable the line
      },
    },
  };

  const chartOptionsNegative = {
    chart: {
      id: "my-chart",
      type: "area",
      toolbar: {
        show: false, // Hide the toolbar (including download option)
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    dataLabels: {
      enabled: false, // Hide data labels
    },
    legend: {
      show: false, // Hide legend
    },
    xaxis: {
      axisBorder: {
        show: false, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    yaxis: {
      axisBorder: {
        show: false, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    tooltip: {
      enabled: true,
      theme: "light",
      interpolate: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="custom-tooltip">' +
          "<span>" +
          "Value: " +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#ef5350"],
      line: {
        dashArray: [0], // Disable the line
      },
    },
    markers: {
      size: 0, // Hide markers
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
      colors: "#f44336",
    },
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
          {/* <Grid item lg={3} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 150,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item xs={12}>
                  <Typography
                    component="p"
                    variant="h6"
                    sx={{
                      fontSize: "0.875rem",
                      fontFamily: "Public Sans, sans-serif",
                      fontWeight: 600,
                      color: "rgb(33,43,54)",
                    }}
                  >
                    Total Open PO
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <KeyboardDoubleArrowUpRoundedIcon
                    sx={{
                      fontSize: 20,
                      color: "#00ff00",
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    sx={{
                      fontSize: "0.875rem",
                      fontFamily: "Public Sans, sans-serif",
                      color: "rgb(33,43,54)",
                      fontWeight: 600,
                    }}
                  >
                    +2.6 %
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", alignItems: "top" }}>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    sx={{
                      fontSize: "1.625rem",
                      fontFamily: "Public Sans, sans-serif",
                      color: "rgb(33,43,54)",
                      fontWeight: 700,
                    }}
                  >
                    18,354
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid> */}
          {/* <Grid item lg={3} xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "row",
                height: 150,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Box sx={{ width: "60%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Overall Efficiency
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.4,
                      }}
                    >
                      83%
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <TrendingDownRoundedIcon
                      sx={{
                        p: 0.3,
                        fontSize: 25,
                        color: "green",
                        backgroundColor: "#E0F6E5",
                        borderRadius: "60px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      - 4.2 %
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.675rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: "normal",
                        color: "rgb(33,43,54)",
                      }}
                    >
                      from last week
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ width: "45%", height: "100%" }}>
                <Chart
                  options={chartOptionsPositive}
                  series={chartData.series}
                  type="area"
                  width="100"
                  height="100"
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={3} xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "row",
                height: 150,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Box sx={{ width: "60%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Minor Delays
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.4,
                      }}
                    >
                      19
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <TrendingUpRoundedIcon
                      sx={{
                        p: 0.3,
                        fontSize: 25,
                        color: "red",
                        backgroundColor: "#FFE4DD",
                        borderRadius: "60px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      + 2.6 %
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.675rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: "normal",
                        color: "rgb(33,43,54)",
                      }}
                    >
                      from last week
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ width: "45%", height: "100%" }}>
                <Chart
                  options={chartOptionsNegative}
                  series={chartData.series}
                  type="area"
                  width="100"
                  height="100"
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={3} xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "row",
                height: 150,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Box sx={{ width: "60%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Overall Efficiency
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.4,
                      }}
                    >
                      83%
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <TrendingDownRoundedIcon
                      sx={{
                        p: 0.3,
                        fontSize: 25,
                        color: "green",
                        backgroundColor: "#E0F6E5",
                        borderRadius: "60px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      - 4.2 %
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.675rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: "normal",
                        color: "rgb(33,43,54)",
                      }}
                    >
                      from last week
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ width: "45%", height: "100%" }}>
                <Chart
                  options={chartOptionsPositive}
                  series={chartData.series}
                  type="area"
                  width="100"
                  height="100"
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={3} xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "row",
                height: 150,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Box sx={{ width: "60%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Material Overheads
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.4,
                      }}
                    >
                      7%
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <TrendingUpRoundedIcon
                      sx={{
                        p: 0.3,
                        fontSize: 25,
                        color: "red",
                        backgroundColor: "#FFE4DD",
                        borderRadius: "60px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      + 2.6 %
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.675rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: "normal",
                        color: "rgb(33,43,54)",
                      }}
                    >
                      from last week
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ width: "45%", height: "100%" }}>
                <Chart
                  options={chartOptionsNegative}
                  series={chartData.series}
                  type="area"
                  width="100"
                  height="100"
                />
              </Box>
            </Paper>
          </Grid> */}
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
              <OpenPoTable />
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
