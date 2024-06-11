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
    field: "onBoardDate",
    headerName: "On-Board Date",
    headerClassName: "header-theme",
    width: 440,
    editable: true,
  },
  {
    field: "action",
    headerName: "",
    headerClassName: "header-theme",
    width: 300,
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
    name: "Larsen & Toubro",
    onBoardDate: "23-11-2006",
  },
  {
    id: 2,
    name: "Flender",
    onBoardDate: "01-09-2013",
  },
  {
    id: 3,
    name: "Takraf",
    onBoardDate: "15-10-2023",
  },
  {
    id: 4,
    name: "Larsen & Toubro",
    onBoardDate: "23-11-2006",
  },
  {
    id: 5,
    name: "Siemens",
    onBoardDate: "19-01-216",
  },
];

export default function AdminClientTable() {
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
