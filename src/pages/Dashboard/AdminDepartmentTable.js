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
    width: 350,
    editable: true,
  },
  {
    field: "departmentHead",
    headerName: "Department Head",
    headerClassName: "header-theme",
    width: 350,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    headerClassName: "header-theme",
    width: 350,
    editable: true,
  },
  {
    field: "action",
    headerName: "",
    headerClassName: "header-theme",
    width: 195,
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
    name: "Profiling",
    departmentHead: "Diwakar",
    description: "First Process",
  },
  {
    id: 2,
    name: "Fit Up",
    departmentHead: "Venkataraman",
    description: "Second Process",
  },
  {
    id: 3,
    name: "Welding",
    departmentHead: "Vinoth",
    description: "Third Process",
  },
  {
    id: 4,
    name: "Machining",
    departmentHead: "Aarav",
    description: "Fourth Process",
  },
  {
    id: 5,
    name: "Assembly",
    departmentHead: "Kishore",
    description: "Fifth Process",
  },
  {
    id: 6,
    name: "Dispatch",
    departmentHead: "Poongothai",
    description: "Final Process",
  },
];

export default function AdminDepartmentTable() {
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
