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
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
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
import OpenPoTable from "./OpenPoTable";

export default function Performance() {
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

  const bigTitleStyle = {
    fontFamily: "Public Sans, sans-serif",
    fontSize: "1.625rem",
    fontWeight: "bold",
  };

  const smallTitleStyle = {
    fontFamily: "Public Sans, sans-serif",
    fontSize: "0.9rem",
  };

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

  const departmentPerformanceData = {
    series: [
      {
        name: "Major Delay",
        data: [44, 55, 41, 37, 22, 43],
        color: "#f4511e",
      },
      {
        name: "Minor Delay",
        data: [53, 32, 33, 52, 13, 43],
        color: "#ff9800",
      },
      {
        name: "On Schedule",
        data: [12, 17, 11, 9, 15, 11],
        color: "#fdd835",
      },
    ],
  };

  const departmentPerformanceDataOptions = {
    chart: {
      type: "bar",
      width: "100%",
      height: "100%",
      stacked: true,
      toolbar: {
        show: true,
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "0.875rem",
              fontWeight: "normal",
              fontFamily: "Public Sans, sans-serif",
            },
          },
        },
      },
    },
    xaxis: {
      categories: [
        "PROFILING",
        "FIT UP",
        "WELDING",
        "MACHINING",
        "ASSEMBLY",
        "DISPATCH",
      ],
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Public Sans, sans-serif",
          fontSize: "0.8rem",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  };

  const departmentMaterialsData = {
    series: [
      {
        name: "50mm Steel Plate",
        data: [44, 0, 0, 0, 0, 0],
        // data: [44, 55, 41, 37, 22, 0],
        // color: "#FF6B6B",
      },
      {
        name: "Production Bolts",
        data: [20, 0, 0, 0, 0, 0],
        // data: [12, 17, 11, 0, 15, 11],
        // color: "#FF9AA2",
      },
      {
        name: "Nuts",
        data: [0, 53, 0, 0, 0, 0],
        // data: [53, 0, 33, 52, 13, 43],
        // color: "#FFD966",
      },
      {
        name: "Nuts 2",
        data: [0, 52, 0, 0, 0, 0],
        // data: [53, 0, 33, 52, 13, 43],
        // color: "#FFD966",
      },
      {
        name: "L Clamp",
        data: [0, 0, 11, 0, 0, 0],
        // data: [0, 17, 11, 9, 15, 11],
        // color: "#6B83FF",
      },
      {
        name: "L Clamp 2",
        data: [0, 0, 5, 0, 0, 0],
        // data: [0, 17, 11, 9, 15, 11],
        // color: "#6B83FF",
      },
      {
        name: "L Clamp 3",
        data: [0, 0, 30, 0, 0, 0],
        // data: [0, 17, 11, 9, 15, 11],
        // color: "#6B83FF",
      },
      {
        name: "C Clamp",
        data: [0, 0, 0, 25, 0, 0],
        // data: [12, 17, 11, 0, 15, 11],
        // color: "#66FF9E",
      },
      {
        name: "C Clamp",
        data: [0, 0, 0, 30, 0, 0],
        // data: [12, 17, 11, 0, 15, 11],
        // color: "#66FF9E",
      },
      {
        name: "Pads",
        data: [0, 0, 0, 0, 15, 0],
        // data: [12, 17, 11, 0, 15, 11],
        // color: "#c247ff",
      },
      {
        name: "Pads",
        data: [0, 0, 0, 0, 42, 0],
        // data: [12, 17, 11, 0, 15, 11],
        // color: "#c247ff",
      },
      {
        name: "Packaging",
        data: [0, 0, 0, 0, 0, 17],
        // data: [12, 17, 11, 0, 15, 11],
        // color: "#FF9AA2",
      },
    ],
  };

  function delayedProductsDataToolbar() {
    return (
      <GridToolbarContainer>
        <Box sx={{ width: "45%" }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={(smallTitleStyle, { fontWeight: "bold" })}
          >
            Delayed Products
          </Typography>
        </Box>
        <GridToolbarColumnsButton sx={{ fontSize: 12 }} />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const delayedProductsData = [
    {
      id: 1,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      avgDelay: 4,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 2,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      avgDelay: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 3,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      avgDelay: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 4,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      avgDelay: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 5,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      avgDelay: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 6,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      avgDelay: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 7,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      avgDelay: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
  ];

  const delayedProductsDataColumn = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "header-theme",
      width: 225,
    },
    {
      field: "factor",
      headerName: "Factor",
      headerClassName: "header-theme",
      width: 100,
    },
    {
      field: "avgDelay",
      headerName: "Avg Delay",
      headerClassName: "header-theme",
      width: 100,
    },
    {
      field: "number",
      headerName: "Number",
      headerClassName: "header-theme",
      width: 100,
    },
    {
      field: "department",
      headerName: "Department",
      headerClassName: "header-theme",
      width: 150,
    },
    {
      field: "customer",
      headerName: "Customer",
      headerClassName: "header-theme",
      width: 200,
    },
  ];

  function materialsOverheadDataToolbar() {
    return (
      <GridToolbarContainer>
        <Box sx={{ width: "45%" }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={(smallTitleStyle, { fontWeight: "bold" })}
          >
            Materials Overhead
          </Typography>
        </Box>
        <GridToolbarColumnsButton sx={{ fontSize: 12 }} />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const materialsOverheadData = [
    {
      id: 1,
      name: "Welding Rod",
      factor: 3,
      percentage: 12,
      avg: 4,
      number: 5,
      department: "Profiling",
    },
    {
      id: 2,
      name: "Welding Rod",
      factor: 3,
      percentage: 12,
      avg: 3,
      number: 5,
      department: "Profiling",
    },
    {
      id: 3,
      name: "Welding Rod",
      factor: 3,
      percentage: 12,
      avg: 3,
      number: 5,
      department: "Profiling",
    },
    {
      id: 4,
      name: "Welding Rod",
      factor: 3,
      percentage: 12,
      avg: 3,
      number: 5,
      department: "Profiling",
    },
    {
      id: 5,
      name: "Welding Rod",
      factor: 3,
      percentage: 12,
      avg: 3,
      number: 5,
      department: "Profiling",
    },
    {
      id: 6,
      name: "Welding Rod",
      factor: 3,
      percentage: 12,
      avg: 3,
      number: 5,
      department: "Profiling",
    },
    {
      id: 7,
      name: "Welding Rod",
      factor: 3,
      percentage: 12,
      avg: 3,
      number: 5,
      department: "Profiling",
    },
  ];

  const materialsOverheadDataColumn = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "header-theme",
      width: 225,
    },
    {
      field: "factor",
      headerName: "Factor",
      headerClassName: "header-theme",
      width: 100,
    },
    {
      field: "avg",
      headerName: "Avgerage",
      headerClassName: "header-theme",
      width: 100,
    },
    {
      field: "number",
      headerName: "Number",
      headerClassName: "header-theme",
      width: 100,
    },
    {
      field: "department",
      headerName: "Department",
      headerClassName: "header-theme",
      width: 155,
    },
    {
      field: "percentage",
      headerName: "Percentage",
      headerClassName: "header-theme",
      width: 100,
    },
  ];

  const departmentMaterialsDataOptions = {
    chart: {
      type: "bar",
      width: "100%",
      height: "100%",
      stacked: true,
      toolbar: {
        show: true,
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "0.875rem",
              fontWeight: "normal",
              fontFamily: "Public Sans, sans-serif",
            },
          },
        },
      },
    },
    xaxis: {
      categories: [
        "PROFILING",
        "FIT UP",
        "WELDING",
        "MACHINING",
        "ASSEMBLY",
        "DISPATCH",
      ],
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Public Sans, sans-serif",
          fontSize: "0.8rem",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  };

  const departmentQualityCheckDataOptions = {
    chart: {
      type: "bar",
      width: "100%",
      height: "100%",
      stacked: true,
      toolbar: {
        show: true,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "0.875rem",
              fontWeight: "normal",
              fontFamily: "Public Sans, sans-serif",
            },
          },
        },
      },
    },
    xaxis: {
      categories: [
        "PROFILING",
        "FIT UP",
        "WELDING",
        "MACHINING",
        "ASSEMBLY",
        "DISPATCH",
      ],
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Public Sans, sans-serif",
          fontSize: "0.8rem",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  };

  const departmentQualityCheckData = {
    series: [
      {
        name: "Re-Work",
        data: [44, 55, 41, 37, 22, 43],
        color: "#b76cd3",
      },
      {
        name: "Discard",
        data: [30, 2, 5, 1, 0, 7],
        color: "#8631a6",
      },
    ],
  };

  const qualityCheckData = [
    {
      id: 1,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      departmentFactor: 4,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 2,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      departmentFactor: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 3,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      departmentFactor: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 4,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      departmentFactor: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 5,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      departmentFactor: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 6,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      departmentFactor: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
    {
      id: 7,
      name: "Bottom Steam Platten Assy",
      factor: 3,
      departmentFactor: 3,
      number: 5,
      department: "Profiling",
      customer: "Larsen & Toubro Pvt. Ltd.",
    },
  ];

  const qualityCheckDataColumn = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "header-theme",
      width: 225,
    },
    {
      field: "factor",
      headerName: "Total Factor",
      headerClassName: "header-theme",
      width: 100,
    },
    {
      field: "departmentFactor",
      headerName: "Dept. Factor",
      headerClassName: "header-theme",
      width: 110,
    },
    {
      field: "number",
      headerName: "Number",
      headerClassName: "header-theme",
      width: 80,
    },
    {
      field: "department",
      headerName: "Department",
      headerClassName: "header-theme",
      width: 120,
    },
    {
      field: "customer",
      headerName: "Customer",
      headerClassName: "header-theme",
      width: 200,
    },
  ];

  function qualityCheckDataToolbar() {
    return (
      <GridToolbarContainer>
        <Box sx={{ width: "45%" }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={(smallTitleStyle, { fontWeight: "bold" })}
          >
            Quality Check
          </Typography>
        </Box>
        <GridToolbarColumnsButton sx={{ fontSize: 12 }} />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const departmentOverallPerformancePercentageStyle = {
    fontSize: "1.875rem",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 600,
    color: "rgb(33,43,54)",
    lineHeight: 0,
  };

  const departmentOverallPerformanceTextStyle = {
    fontSize: "0.875rem",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 600,
    color: "rgb(33,43,54)",
    lineHeight: 0,
  };

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

  const departmentOverallPerformanceChangeBarChartData = [
    {
      name: "Increase",
      data: [6.23, 0, 0, 4.2, 2.0, 0],
    },
    {
      name: "Decrease",
      data: [0, -3.2, -10.4, 0, 0, -1],
    },
  ];

  const departmentOverallPerformanceChangeBarChartOptions = {
    chart: {
      type: "bar",
      height: 330,
      stacked: true,
    },
    colors: ["#008FFB", "#FF4560"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val);
        },
      },
    },
    xaxis: {
      categories: [
        "Profiling",
        "Fabrication",
        "Welding",
        "Machining",
        "Assembly",
        "Dispatch",
      ],
    },
    toolbar: {
      show: false,
    },
  };

  const departmentMaterialsOverheadChangeBarChartData = [
    {
      name: "Increase",
      data: [3.21, 0, 1.3, 0, 5.7, 0],
    },
    {
      name: "Decrease",
      data: [0, -8.2, 0, -1.42, 0, -4.67],
    },
  ];

  const departmentMaterialsOverheadChangeBarChartOptions = {
    chart: {
      type: "bar",
      height: 330,
      stacked: true,
    },
    colors: ["#00E396", "#FEB019"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val);
        },
      },
    },
    xaxis: {
      categories: [
        "Profiling",
        "Fabrication",
        "Welding",
        "Machining",
        "Assembly",
        "Dispatch",
      ],
    },
    toolbar: {
      show: false,
    },
  };

  const departmentQualityCheckChangeBarChartData = [
    {
      name: "Increase",
      data: [0, 8.2, 0, 1.42, 0, 4.67],
    },
    {
      name: "Decrease",
      data: [-3.21, 0, -1.3, 0, -5.7, 0],
    },
  ];

  const departmentQualityCheckChangeBarChartOptions = {
    chart: {
      type: "bar",
      height: 330,
      stacked: true,
    },
    colors: ["#3F51B5", "#FF7043"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val);
        },
      },
    },
    xaxis: {
      categories: [
        "Profiling",
        "Fabrication",
        "Welding",
        "Machining",
        "Assembly",
        "Dispatch",
      ],
    },
    toolbar: {
      show: false,
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
        <Grid container spacing={3}>
          {/* START OF TOP BAR BOXES */}
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
                      Major Delays
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
                      23
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
          </Grid>
          {/* END OF TOP BAR BOXES */}

          {/* JOBS DELAYED + DELAYED PRODUCTS */}
          <Grid item container lg={12} spacing={3}>
            {/* LEFT STATS */}
            <Grid item container lg={8} xs={12} spacing={3}>
              <Grid item lg={12} xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Jobs Delayed
                    </Typography>
                    <Chart
                      options={departmentPerformanceDataOptions}
                      series={departmentPerformanceData.series}
                      type="bar"
                      // width="170%"
                      height="90%"
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item lg={12} xs={12} sx={{ p: 1 }}>
                <Paper
                  sx={{
                    p: 2,
                    pt: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Grid container xs={12}>
                    <Grid item xs={12} height="320px">
                      <DataGrid
                        rows={delayedProductsData}
                        columns={delayedProductsDataColumn}
                        onRowClick={() => {}}
                        initialState={{
                          pagination: {
                            paginationModel: {
                              pageSize: 5,
                            },
                          },
                        }}
                        pageSizeOptions={[5]}
                        slots={{ toolbar: delayedProductsDataToolbar }}
                        sx={{
                          border: 0,
                          paddingTop: 1,
                          fontFamily: "Public Sans, sans-serif",
                          fontSize: "0.875rem",
                          "& .header-theme": {
                            // backgroundColor: "rgba(75, 170, 76, 0.2)",
                            backgroundColor: "rgb(244,246,248)",
                          },
                          "& .MuiDataGrid-toolbarContainer": {
                            // Your custom styles for the toolbar container
                            padding: "15px",
                            height: "250",
                          },
                        }}
                        // disableColumnMenu
                        density="compact"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item lg={12} xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Materials Overhead
                    </Typography>
                    <Chart
                      options={departmentMaterialsDataOptions}
                      series={departmentMaterialsData.series}
                      type="bar"
                      // width="170%"
                      height="90%"
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item lg={12} xs={12} sx={{ p: 1 }}>
                <Paper
                  sx={{
                    p: 2,
                    pt: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Grid container xs={12}>
                    <Grid item xs={12} height="320px">
                      <DataGrid
                        rows={materialsOverheadData}
                        columns={materialsOverheadDataColumn}
                        onRowClick={() => {}}
                        initialState={{
                          pagination: {
                            paginationModel: {
                              pageSize: 5,
                            },
                          },
                        }}
                        pageSizeOptions={[5]}
                        slots={{ toolbar: materialsOverheadDataToolbar }}
                        sx={{
                          border: 0,
                          paddingTop: 1,
                          fontFamily: "Public Sans, sans-serif",
                          fontSize: "0.875rem",
                          "& .header-theme": {
                            // backgroundColor: "rgba(75, 170, 76, 0.2)",
                            backgroundColor: "rgb(244,246,248)",
                          },
                          "& .MuiDataGrid-toolbarContainer": {
                            // Your custom styles for the toolbar container
                            padding: "15px",
                            height: "250",
                          },
                        }}
                        // disableColumnMenu
                        density="compact"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item lg={12} xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Quality Check
                    </Typography>
                    <Chart
                      options={departmentQualityCheckDataOptions}
                      series={departmentQualityCheckData.series}
                      type="bar"
                      height="90%"
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item lg={12} xs={12} sx={{ p: 1 }}>
                <Paper
                  sx={{
                    p: 2,
                    pt: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Grid container xs={12}>
                    <Grid item xs={12} height="320px">
                      <DataGrid
                        rows={qualityCheckData}
                        columns={qualityCheckDataColumn}
                        onRowClick={() => {}}
                        initialState={{
                          pagination: {
                            paginationModel: {
                              pageSize: 5,
                            },
                          },
                        }}
                        pageSizeOptions={[5]}
                        slots={{ toolbar: qualityCheckDataToolbar }}
                        sx={{
                          border: 0,
                          paddingTop: 1,
                          fontFamily: "Public Sans, sans-serif",
                          fontSize: "0.875rem",
                          "& .header-theme": {
                            // backgroundColor: "rgba(75, 170, 76, 0.2)",
                            backgroundColor: "rgb(244,246,248)",
                          },
                          "& .MuiDataGrid-toolbarContainer": {
                            // Your custom styles for the toolbar container
                            padding: "15px",
                            height: "250",
                          },
                        }}
                        // disableColumnMenu
                        density="compact"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            {/* RIGHT GRAPHS FOR DEPARTMENT */}
            <Grid item container lg={4} xs={12} spacing={3}>
              {/* DEPARTMENT PERFORMANCE CHANGE */}
              <Grid item lg={12} xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Department Performance Change
                    </Typography>
                    <Chart
                      // options={departmentPerformanceDataOptions}
                      // series={departmentPerformanceData.series}
                      options={
                        departmentOverallPerformanceChangeBarChartOptions
                      }
                      series={departmentOverallPerformanceChangeBarChartData}
                      type="bar"
                      height="90%"
                    />
                  </Box>
                </Paper>
              </Grid>
              {/* DEPARTMENT MATERIALS OVERHEAD CHANGE */}
              <Grid item lg={12} xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Materials Overhead Performance
                    </Typography>
                    <Chart
                      options={departmentMaterialsOverheadChangeBarChartOptions}
                      series={departmentMaterialsOverheadChangeBarChartData}
                      type="bar"
                      height="90%"
                    />
                  </Box>
                </Paper>
              </Grid>
              {/* DEPARTMENT QUALITY CHECK CHANGE */}
              <Grid item lg={12} xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 330,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <Box sx={{ width: "100%", height: "100%" }}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Public Sans, sans-serif",
                        fontWeight: 600,
                        color: "rgb(33,43,54)",
                      }}
                    >
                      Quality Check Performance
                    </Typography>
                    <Chart
                      options={departmentQualityCheckChangeBarChartOptions}
                      series={departmentQualityCheckChangeBarChartData}
                      type="bar"
                      height="90%"
                    />
                  </Box>
                </Paper>
              </Grid>
              {/* DEPARTMENT PERFORMANCE LINE CHART */}
              <Grid item lg={12} xs={12} md={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    // height: 1045,
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  {/* <Box sx={{ width: "60%" }}> */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          mb: 3.5,
                          fontSize: "1.2rem",
                          display: "flex",
                          justifyContent: "center",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                        }}
                      >
                        Department Performance
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformanceTextStyle}
                      >
                        Profiling
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageStyle}
                      >
                        83%
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageChangeStyle}
                      >
                        + 2.6 %
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2.7 }}>
                      <Chart
                        options={chartOptionsPositive}
                        series={chartData.series}
                        type="area"
                        width="100%"
                        height="60%"
                      />
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "0.875rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          lineHeight: 1.4,
                        }}
                      >
                        Fabrication
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageStyle}
                      >
                        83%
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageChangeStyle}
                      >
                        + 2.6 %
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2.7 }}>
                      <Chart
                        options={chartOptionsNegative}
                        series={chartData.series}
                        type="area"
                        width="100%"
                        height="60%"
                      />
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "0.875rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          lineHeight: 1.4,
                        }}
                      >
                        Welding
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageStyle}
                      >
                        83%
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageChangeStyle}
                      >
                        + 2.6 %
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2.7 }}>
                      <Chart
                        options={chartOptionsPositive}
                        series={chartData.series}
                        type="area"
                        width="100%"
                        height="60%"
                      />
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "0.875rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          lineHeight: 1.4,
                        }}
                      >
                        Machining
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageStyle}
                      >
                        83%
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageChangeStyle}
                      >
                        + 2.6 %
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2.7 }}>
                      <Chart
                        options={chartOptionsNegative}
                        series={chartData.series}
                        type="area"
                        width="100%"
                        height="60%"
                      />
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "0.875rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          lineHeight: 1.4,
                        }}
                      >
                        Assembly
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageStyle}
                      >
                        83%
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageChangeStyle}
                      >
                        + 2.6 %
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2.7 }}>
                      <Chart
                        options={chartOptionsPositive}
                        series={chartData.series}
                        type="area"
                        width="100%"
                        height="60%"
                      />
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={{
                          fontSize: "0.875rem",
                          fontFamily: "Public Sans, sans-serif",
                          fontWeight: 600,
                          color: "rgb(33,43,54)",
                          lineHeight: 1.4,
                        }}
                      >
                        Dispatch
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageStyle}
                      >
                        83%
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={gridCenterStyle}>
                      <Typography
                        component="p"
                        variant="h6"
                        sx={departmentOverallPerformancePercentageChangeStyle}
                      >
                        + 2.6 %
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2.7 }}>
                      <Chart
                        options={chartOptionsNegative}
                        series={chartData.series}
                        type="area"
                        width="100%"
                        height="60%"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
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
