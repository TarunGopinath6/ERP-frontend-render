import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "Name",
    headerClassName: "header-theme",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    headerClassName: "header-theme",
    width: 150,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    headerClassName: "header-theme",
    width: 350,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    headerClassName: "header-theme",
    width: 200,
    editable: true,
  },
  {
    field: "access",
    headerName: "Access",
    headerClassName: "header-theme",
    width: 200,
    renderCell: (params) => {
      return (
        <Button
          variant="contained"
          color={params.value ? "error" : "primary"}
          onClick={() => console.log("Revoke/Admit Button Pressed", params.row)}
          sx={{ width: "100px" }}
        >
          {params.value ? "Revoke" : "Admit"}
        </Button>
      );
    },
  },
  {
    field: "action",
    headerName: "",
    headerClassName: "header-theme",
    width: 145,
    renderCell: (params) => {
      return (
        <Button
          variant="contained"
          color="warning"
          onClick={() => console.log("Delete Button Pressed", params.row)}
          sx={{ width: "100px" }}
        >
          Delete
        </Button>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Aarav Patel",
    phone: "9876543210",
    title: "Production Manager",
    type: "admin",
    access: true,
  },
  {
    id: 2,
    name: "Aarohi Sharma",
    phone: "8765432109",
    title: "Quality Assurance",
    type: "user",
    access: false,
  },
  {
    id: 3,
    name: "Aarush Singh",
    phone: "7654321098",
    title: "Supply Chain Coordinator",
    type: "admin",
    access: true,
  },
  {
    id: 4,
    name: "Advik Gupta",
    phone: "6543210987",
    title: "Research & Development Engineer",
    type: "user",
    access: false,
  },
  {
    id: 5,
    name: "Agastya Kumar",
    phone: "5432109876",
    title: "Maintenance Technician",
    type: "admin",
    access: true,
  },
  // Add more rows as needed
];

export default function AdminUserTable() {
  return (
    <Box sx={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        components={{
          Toolbar: GridToolbar,
        }}
        sx={{
          border: 0,
          paddingTop: 1,
          fontFamily: "Public Sans, sans-serif",
          fontSize: "0.875rem",
          "& .header-theme": {
            backgroundColor: "rgb(244,246,248)",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-toolbarContainer": {
            padding: "15px",
          },
        }}
        disableRowSelectionOnClick
        // disableColumnMenu
        density="comfortable"
        editable={true}
      />
    </Box>
  );
}
