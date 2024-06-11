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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Chart from "react-apexcharts";

import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

import { mainListItems, secondaryListItems } from "./listItems";
// import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Dashboard from "./Dashboard";
import ProductsTable from "./ProductsTable";
import ProductsCompanyChart from "./ProductsCompanyChart";

export default function Performance() {
  const [salesByProductValue, setSalesByProductValue] = React.useState("");
  const [salesByProductChartData, setSalesByProductChartData] = React.useState(
    []
  );

  const [salesByCompanyValue, setSalesByCompanyValue] = React.useState("");
  const [salesByCompanyChartData, setSalesByCompanyChartData] = React.useState(
    []
  );

  // REVENUE CHARTS STATES

  const [revenueByProductValue, setRevenueByProductValue] = React.useState("");
  const [revenueByProductChartData, setRevenueByProductChartData] =
    React.useState([]);

  const [revenueByCompanyValue, setRevenueByCompanyValue] = React.useState("");
  const [revenueByCompanyChartData, setRevenueByCompanyChartData] =
    React.useState([]);

  // COSTING REPORT STATES
  const [costingReportValue, setCostingReportValue] = React.useState("");
  const [costingReportData, setCostingReportData] = React.useState([]);
  const [costingReportExpensesTreeData, setCostingReportExpensesTreeData] =
    React.useState([]);

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

  const departmentOverallPerformancePercentageChangeStyle = {
    fontFamily: "Public Sans, sans-serif",
    fontSize: "1rem",
    lineHeight: 0,
  };

  const gridCenterStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const TableCellStyle = {
    fontFamily: "Public Sans, sans-serif",
  };

  const companyChartOptions = {
    labels: [
      "Larsen & Toubro",
      "Takraf",
      "Flender",
      "Siemens",
      "ABB",
      "Others",
    ],
    animations: {
      enabled: true,
      easing: "easein",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    toolbar: {
      show: true,
    },
    legend: {
      show: true,
      position: "bottom",
      onItemClick: {
        toggleDataSeries: true, // Ensures that clicking the legend item toggles the series
      },
    },
  };

  const companyChartSeries = [40, 25, 15, 5, 10, 5];

  const productChartOptions = {
    chart: {
      type: "treemap",
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const data = w.config.series[seriesIndex].data[dataPointIndex];
        return `<div style="background: white; padding: 10px;">
              <strong>Product:</strong> ${data.x}<br/>
              <strong>Qty:</strong> ${data.y}<br/>
              <strong>Company:</strong> ${data.company}
            </div>`;
      },
    },
  };

  const productChartSeries = [
    {
      data: [
        { x: "X-Link", y: 45, company: "Flender" },
        { x: "Bottom Steel Platten Assembly", y: 25, company: "Flender" },
        { x: "Lever Arm", y: 15, company: "Siemens" },
        { x: "Bearing Housing", y: 5, company: "Larsen & Toubro" },
        { x: "Control Panel", y: 10, company: "ABB" },
      ],
    },
  ];

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

  // SALES CHARTS

  const salesByProductChartDropdown = [
    { label: "X-Link" },
    { label: "Bottom Steam Platten Assy." },
    { label: "Lever Arm" },
    { label: "Bearing Housing" },
    { label: "Control Panel" },
  ];

  const salesByProductChartDropdownSeries = {
    Product: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
    "X-Link": [
      {
        name: "X-Link",
        data: [20, 40, 50, 60, 70],
      },
    ],
    "Bottom Steam Platten Assy.": [
      {
        name: "Bottom Steam Platten Assy.",
        data: [10, 0, 80, 5, 30],
      },
    ],
    "Lever Arm": [
      {
        name: "Lever Arm",
        data: [90, 149, 23],
      },
    ],
    "Bearing Housing": [
      {
        name: "Bearing Housing",
        data: [89, 142, 344, 4, 30],
      },
    ],
    "Control Panel": [
      {
        name: "Control Panel",
        data: [18, 72, 30],
      },
    ],
  };

  const salesByProductChartOptions = {
    chart: {
      id: "my-chart",
      type: "area",
      toolbar: {
        show: true, // Hide the toolbar (including download option)
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    dataLabels: {
      enabled: true, // Hide data labels
    },
    legend: {
      show: true, // Hide legend
    },
    xaxis: {
      axisBorder: {
        show: true, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: true, // Hide x-axis labels
      },
    },
    yaxis: {
      axisBorder: {
        show: true, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: true, // Hide x-axis labels
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
        // return (
        //   '<div style="padding:10; borderRadius:10">' +
        //   "<span>" +
        //   "Value: " +
        //   series[seriesIndex][dataPointIndex] +
        //   "</span>" +
        //   "</div>"
        // );
        return `<div style="background: white; padding: 10px;">
              <strong>Units:</strong> ${series[seriesIndex][dataPointIndex]}<br/>
            </div>`;
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

  const salesByCompanyChartDropdown = [
    { label: "Larsen & Toubro" },
    { label: "Flender" },
    { label: "Takraf" },
    { label: "Siemens" },
    { label: "ABB" },
  ];

  const salesByCompanyChartDropdownSeries = {
    Product: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
    "Larsen & Toubro": [
      {
        name: "Larsen & Toubro",
        data: [20, 40, 50, 60, 70],
      },
    ],
    Flender: [
      {
        name: "Flender",
        data: [10, 0, 80, 5, 30],
      },
    ],
    Takraf: [
      {
        name: "Takraf",
        data: [90, 149, 23],
      },
    ],
    Siemens: [
      {
        name: "Siemens",
        data: [89, 142, 344, 4, 30],
      },
    ],
    ABB: [
      {
        name: "ABB",
        data: [18, 72, 30],
      },
    ],
  };

  // REVENUE CHARTS
  const revenueByProductChartDropdown = [
    { label: "X-Link" },
    { label: "Bottom Steam Platten Assy." },
    { label: "Lever Arm" },
    { label: "Bearing Housing" },
    { label: "Control Panel" },
  ];

  const revenueByProductChartDropdownSeries = {
    Product: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
    "X-Link": [
      {
        name: "X-Link",
        data: [20000, 40000, 5000, 6000, 70000],
      },
    ],
    "Bottom Steam Platten Assy.": [
      {
        name: "Bottom Steam Platten Assy.",
        data: [10000, 0, 80000, 500000, 30000],
      },
    ],
    "Lever Arm": [
      {
        name: "Lever Arm",
        data: [90000, 149000, 23000],
      },
    ],
    "Bearing Housing": [
      {
        name: "Bearing Housing",
        data: [89000, 14200, 344000, 4000, 3000],
      },
    ],
    "Control Panel": [
      {
        name: "Control Panel",
        data: [18000, 72000, 30000],
      },
    ],
  };

  const revenueByProductChartOptions = {
    chart: {
      id: "my-chart",
      type: "area",
      toolbar: {
        show: true, // Hide the toolbar (including download option)
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    dataLabels: {
      enabled: true, // Hide data labels
    },
    legend: {
      show: true, // Hide legend
    },
    xaxis: {
      axisBorder: {
        show: true, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: true, // Hide x-axis labels
      },
    },
    yaxis: {
      axisBorder: {
        show: true, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: true, // Hide x-axis labels
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
      colors: "#ffd400",
    },

    tooltip: {
      enabled: true,
      theme: "light",
      interpolate: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        // return (
        //   '<div style="padding:10; borderRadius:10">' +
        //   "<span>" +
        //   "Value: " +
        //   series[seriesIndex][dataPointIndex] +
        //   "</span>" +
        //   "</div>"
        // );
        return `<div style="background: white; padding: 10px;">
              <strong>Units:</strong> ${series[seriesIndex][dataPointIndex]}<br/>
            </div>`;
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#ffd400"],
      line: {
        dashArray: [0], // Disable the line
      },
    },
  };

  const revenueByCompanyChartDropdown = [
    { label: "Larsen & Toubro" },
    { label: "Flender" },
    { label: "Takraf" },
    { label: "Siemens" },
    { label: "ABB" },
  ];

  const revenueByCompanyChartDropdownSeries = {
    Product: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
    "Larsen & Toubro": [
      {
        name: "Larsen & Toubro",
        data: [2000000, 400000, 5000000, 600000, 700000],
      },
    ],
    Flender: [
      {
        name: "Flender",
        data: [1000000, 0, 80000, 500000, 300000],
      },
    ],
    Takraf: [
      {
        name: "Takraf",
        data: [900000, 1490000, 230000],
      },
    ],
    Siemens: [
      {
        name: "Siemens",
        data: [890000, 191000, 3440000, 400000, 300000],
      },
    ],
    ABB: [
      {
        name: "ABB",
        data: [1800000, 2000000, 3000000],
      },
    ],
  };

  // COSTING REPORT CHARTS

  const costingReportExpensesChartOptions = {
    chart: {
      id: "my-chart",
      type: "area",
      toolbar: {
        show: true, // Hide the toolbar (including download option)
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    dataLabels: {
      enabled: true, // Hide data labels
    },
    legend: {
      show: true, // Hide legend
    },
    xaxis: {
      axisBorder: {
        show: true, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: true, // Hide x-axis labels
      },
    },
    yaxis: {
      axisBorder: {
        show: true, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      labels: {
        show: true, // Hide x-axis labels
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
      colors: "#ffd400",
    },

    tooltip: {
      enabled: true,
      theme: "light",
      interpolate: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        // return (
        //   '<div style="padding:10; borderRadius:10">' +
        //   "<span>" +
        //   "Value: " +
        //   series[seriesIndex][dataPointIndex] +
        //   "</span>" +
        //   "</div>"
        // );
        return `<div style="background: white; padding: 10px;">
              <strong>Units:</strong> ${series[seriesIndex][dataPointIndex]}<br/>
            </div>`;
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#ffd400"],
      line: {
        dashArray: [0], // Disable the line
      },
    },
  };

  const costingReportDropdown = [
    { label: "X-Link" },
    { label: "Bottom Steam Platten Assy." },
    { label: "Lever Arm" },
    { label: "Bearing Housing" },
    { label: "Control Panel" },
  ];

  const costingReportDropdownSeries = {
    Product: [
      [
        {
          data: [0, 0, 0, 0, 0],
        },
      ],
    ],
    "X-Link": [
      [
        {
          name: "Welding Rod",
          data: [312, 3453, 2321, 1124],
        },
        {
          name: "Peripheral 2",
          data: [312, 3453, 2321, 1124],
        },
        {
          name: "Peripheral 3",
          data: [10000, 0, 80000, 500000, 30000],
        },
      ],
    ],
    "Bottom Steam Platten Assy.": [
      [
        {
          name: "Peripheral 6",
          data: [10000, 0, 80000, 500000, 30000],
        },
        {
          name: "Welding Rod",
          data: [3000, 5000, 1000, 9000],
        },
      ],
    ],
    "Lever Arm": [
      [
        {
          name: "Welding Rod",
          data: [1290, 423, 4124, 4313],
        },
        {
          name: "Peripheral 3",
          data: [312, 3453, 2321, 1124],
        },
      ],
    ],
    "Bearing Housing": [
      [
        {
          name: "Welding Rod",
          data: [312, 3453, 2321, 1124],
        },
        {
          name: "Peripheral 2",
          data: [3000, 5000, 1000, 9000],
        },
        {
          name: "Peripheral 3",
          data: [1290, 423, 4124, 4313],
        },
      ],
    ],
    "Control Panel": [
      [
        {
          name: "Welding Rod",
          data: [3000, 5000, 1000, 9000],
        },
        {
          name: "Peripheral 1",
          data: [1290, 423, 4124, 4313],
        },
      ],
    ],
  };

  const transformData = (flattenedData) => {
    // const flattenedData = data[0];
    return flattenedData.map((item) => ({
      x: item.name,
      y: item.data.reduce((sum, value) => sum + value, 0),
    }));
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
        <Grid container spacing={3}>
          {/* START OF TOP BAR BOXES */}
          <Grid item lg={2} xs={6} md={6}>
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
              <Box sx={{ width: "100%" }}>
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
                      Total Products
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
                      2,341
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
            </Paper>
          </Grid>

          <Grid item lg={2} xs={6} md={6}>
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
              <Box sx={{ width: "100%" }}>
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
                      Total Companies
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
                      86
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
            </Paper>
          </Grid>

          <Grid item lg={4} xs={12} md={12}>
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
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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
                      Product Time Quartiles
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      1 - 4 days
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      5 - 9 days
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      10 - 17 days
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      18 - 29 days
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      25
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      32
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      14
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      29
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      585
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      749
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      328
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      679
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid item lg={4} xs={12} md={12}>
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
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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
                      Product Revenue Quartiles
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      36k - 1.5L
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      1.6L - 3.2L
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      3.3L - 4.8L
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.3,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      4.9l - 8.7L
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      25
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      32
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      14
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "2rem",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                        lineHeight: 1.1,
                        display: "inline",
                      }}
                    >
                      29
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          marginLeft: 0.5,
                          display: "inline",
                        }}
                      >
                        %
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      585
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      749
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      328
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "Public Sans, sans-serif",
                        lineHeight: 0.2,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      679
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          {/* REVENUE BY PRODUCT LINE CHART */}
          <Grid item xs={12} md={12} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", pt: 1, pl: 2, pb: 2 }}
                    gutterBottom
                  >
                    Revenue by Product
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Autocomplete
                    value={revenueByProductValue}
                    onChange={(event, newValue) => {
                      setRevenueByProductValue(newValue["label"]);
                      setRevenueByProductChartData((prevData) => [
                        ...prevData,
                        revenueByProductChartDropdownSeries[
                          newValue["label"]
                        ][0],
                      ]);
                    }}
                    id="combo-box-demo"
                    options={revenueByProductChartDropdown}
                    getOptionSelected={(option, value) =>
                      option.label === value
                    }
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Product" />
                    )}
                  />
                </Grid>
              </Grid>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Chart
                  options={revenueByProductChartOptions}
                  series={revenueByProductChartData}
                  type="area"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Paper>
          </Grid>
          {/* REVENUE BY COMPANY LINE CHART */}
          <Grid item xs={12} md={12} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", pt: 1, pl: 2, pb: 2 }}
                    gutterBottom
                  >
                    Revenue by Company
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Autocomplete
                    value={revenueByCompanyValue}
                    onChange={(event, newValue) => {
                      setRevenueByCompanyValue(newValue["label"]);
                      setRevenueByCompanyChartData((prevData) => [
                        ...prevData,
                        revenueByCompanyChartDropdownSeries[
                          newValue["label"]
                        ][0],
                      ]);
                    }}
                    id="combo-box-demo"
                    options={revenueByCompanyChartDropdown}
                    getOptionSelected={(option, value) =>
                      option.label === value
                    }
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Product" />
                    )}
                  />
                </Grid>
              </Grid>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Chart
                  options={revenueByProductChartOptions}
                  series={revenueByCompanyChartData}
                  type="area"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Paper>
          </Grid>
          {/* SALES BY PRODUCT LINE CHART */}
          <Grid item xs={12} md={12} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", pt: 1, pl: 2, pb: 2 }}
                    gutterBottom
                  >
                    Unit Sales by Product
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Autocomplete
                    value={salesByProductValue}
                    onChange={(event, newValue) => {
                      setSalesByProductValue(newValue["label"]);
                      setSalesByProductChartData((prevData) => [
                        ...prevData,
                        salesByProductChartDropdownSeries[newValue["label"]][0],
                      ]);
                    }}
                    id="combo-box-demo"
                    options={salesByProductChartDropdown}
                    getOptionSelected={(option, value) =>
                      option.label === value
                    }
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Product" />
                    )}
                  />
                </Grid>
              </Grid>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Chart
                  options={salesByProductChartOptions}
                  series={salesByProductChartData}
                  type="area"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Paper>
          </Grid>
          {/* SALES BY COMPANY LINE CHART */}
          <Grid item xs={12} md={12} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", pt: 1, pl: 2, pb: 2 }}
                    gutterBottom
                  >
                    Unit Sales by Company
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Autocomplete
                    value={salesByCompanyValue}
                    onChange={(event, newValue) => {
                      setSalesByCompanyValue(newValue["label"]);
                      setSalesByCompanyChartData((prevData) => [
                        ...prevData,
                        salesByCompanyChartDropdownSeries[newValue["label"]][0],
                      ]);
                    }}
                    id="combo-box-demo"
                    options={salesByCompanyChartDropdown}
                    getOptionSelected={(option, value) =>
                      option.label === value
                    }
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Product" />
                    )}
                  />
                </Grid>
              </Grid>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Chart
                  options={salesByProductChartOptions}
                  series={salesByCompanyChartData}
                  type="area"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Paper>
          </Grid>
          {/* TOTAL ORDERS BY PRODUCT */}
          <Grid item xs={12} lg={8}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "600", pt: 1, pl: 2, pb: 2 }}
                gutterBottom
              >
                Total Orders by Product
              </Typography>
              <Chart
                options={productChartOptions}
                series={productChartSeries}
                type="treemap"
                width="100%"
                height="80%"
              />
              {/* <Chart
                options={companyChartOptions}
                series={companyChartSeries}
                type="pie"
                width="100%"
              /> */}
            </Paper>
          </Grid>
          {/* TOTAL ORDERS BY COMPANY */}
          <Grid item xs={12} lg={4}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 400,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "600", pt: 3, pl: 3, pb: 1 }}
                gutterBottom
              >
                Total Orders by Company
              </Typography>
              <Chart
                options={companyChartOptions}
                series={companyChartSeries}
                type="pie"
                width="100%"
                height="85%"
              />
            </Paper>
          </Grid>
          {/* COSTING DASHBOARD */}
          <Grid item xs={12} spacing={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                // height: "100vh",
                width: "100%",
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={0} lg={3} />
                <Grid item xs={6} lg={3}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "600", pt: 1, pl: 2, pb: 2 }}
                    gutterBottom
                  >
                    COSTING REPORT
                  </Typography>
                </Grid>
                <Grid item xs={4} lg={3}>
                  <Autocomplete
                    value={costingReportValue}
                    onChange={(event, newValue) => {
                      setCostingReportValue(newValue["label"]);
                      setCostingReportData(
                        costingReportDropdownSeries[newValue["label"]][0]
                      );
                      setCostingReportExpensesTreeData([
                        {
                          data: transformData(
                            costingReportDropdownSeries[newValue["label"]][0]
                          ),
                        },
                      ]);
                    }}
                    id="combo-box-demo"
                    options={costingReportDropdown}
                    getOptionSelected={(option, value) =>
                      option.label === value
                    }
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Product" />
                    )}
                  />
                </Grid>
                <Grid item xs={0} lg={3} />

                <Grid item xs={12} md={12} lg={6}>
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600", pt: 1, pl: 2, pb: 2 }}
                      gutterBottom
                    >
                      Expenses
                    </Typography>
                    <Chart
                      options={costingReportExpensesChartOptions}
                      series={costingReportData}
                      type="area"
                      width="100%"
                      height="250"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <Chart
                    options={productChartOptions}
                    series={costingReportExpensesTreeData}
                    type="treemap"
                    width="100%"
                    height="250"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* ALL PRODUCTS TABLE */}
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
              <ProductsTable />
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
