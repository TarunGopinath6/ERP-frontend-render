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
    width: 500,
    editable: true,
  },
  {
    field: "department",
    headerName: "Department",
    headerClassName: "header-theme",
    width: 490,
    editable: true,
  },
  {
    field: "action",
    headerName: "",
    headerClassName: "header-theme",
    width: 250,
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
    name: "Raw Material Purchase",
    department: "Profiling",
  },
  {
    id: 2,
    name: "Profile Cutting",
    department: "Profiling",
  },
  {
    id: 3,
    name: "Profile Inspection",
    department: "Profiling",
  },
  {
    id: 4,
    name: "Fit Up",
    department: "Fit Up",
  },
  {
    id: 5,
    name: "Fit Up Inspection",
    department: "Fit Up",
  },
  {
    id: 6,
    name: "Welding",
    department: "Welding",
  },
  {
    id: 7,
    name: "Welding Inspection",
    department: "Welding",
  },
  {
    id: 8,
    name: "Testing",
    department: "Machining",
  },
  {
    id: 9,
    name: "Pre-Machining",
    department: "Machining",
  },
  {
    id: 10,
    name: "Machining",
    department: "Machining",
  },
  {
    id: 11,
    name: "Machining Inspection",
    department: "Machining",
  },
  {
    id: 12,
    name: "Assembly",
    department: "Assembly",
  },
  {
    id: 13,
    name: "Painting",
    department: "Assembly",
  },
  {
    id: 14,
    name: "Final Inspection",
    department: "Assembly",
  },
  {
    id: 15,
    name: "Dispatch",
    department: "Dispatch",
  },
];

export default function AdminStageTable() {
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
