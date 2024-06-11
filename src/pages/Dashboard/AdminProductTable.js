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
    field: "description",
    headerName: "Description",
    headerClassName: "header-theme",
    width: 350,
    editable: true,
  },
  {
    field: "company",
    headerName: "Company",
    headerClassName: "header-theme",
    width: 250,
    editable: true,
  },
  {
    field: "materialGroup",
    headerName: "Material Group",
    headerClassName: "header-theme",
    width: 150,
    editable: true,
  },
  {
    field: "revision",
    headerName: "Revision",
    headerClassName: "header-theme",
    width: 150,
    editable: true,
  },
  {
    field: "action",
    headerName: "",
    headerClassName: "header-theme",
    width: 150,
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
    name: "X-Link",
    description: '	65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    company: "Flender",
    partNumber: "Z4-11917",
    materialGroup: "WELD",
    revision: "2",
  },
  {
    id: 2,
    name: "Bottom Steel Platten Assembly",
    description: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    company: "Flender",
    partNumber: "X4-20862",
    materialGroup: "WELD",
    revision: "1",
  },
  {
    id: 3,
    name: "Lever Arm",
    description: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    company: "Siemens",
    partNumber: "X4-20862",
    materialGroup: "WELD",
    revision: "2",
  },
  {
    id: 4,
    name: "Bearing Housing",
    description: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    company: "Larsen & Toubro",
    partNumber: "Z4-11917",
    materialGroup: "WELD",
    revision: "1",
  },
  // Add more rows as needed
];

export default function AdminProductTable() {
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
