import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";

const bigTitleStyle = {
  fontFamily: "Public Sans, sans-serif",
  fontSize: "1.625rem",
  fontWeight: "bold",
};

const smallTitleStyle = {
  fontFamily: "Public Sans, sans-serif",
  fontSize: "0.9rem",
};

const productColumns = [
  {
    field: "name",
    headerName: "Name",
    headerClassName: "header-theme",
    width: 250,
    editable: true,
  },
  {
    field: "company",
    headerName: "Company",
    headerClassName: "header-theme",
    width: 200,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    headerClassName: "header-theme",
    width: 300,
    editable: true,
  },
  {
    field: "partNumber",
    headerName: "Part Number",
    headerClassName: "header-theme",
    width: 125,
    editable: true,
  },
  {
    field: "pending",
    headerName: "Pending",
    headerClassName: "header-theme",
    width: 100,
    editable: true,
  },
  {
    field: "unitsSold",
    headerName: "Units Sold",
    headerClassName: "header-theme",
    width: 100,
    editable: true,
  },
  {
    field: "revenue",
    headerName: "Revenue",
    headerClassName: "header-theme",
    width: 100,
    editable: true,
  },
  {
    field: "profit",
    headerName: "Profit",
    headerClassName: "header-theme",
    width: 100,
    editable: true,
  },
  {
    field: "performance",
    headerName: "Performance",
    headerClassName: "header-theme",
    width: 100,
    editable: true,
  },
  {
    field: "materialGroup",
    headerName: "Material Group",
    headerClassName: "header-theme",
    width: 125,
    editable: true,
  },
  {
    field: "revision",
    headerName: "Revision",
    headerClassName: "header-theme",
    width: 100,
    editable: true,
  },
];

const productRows = [
  {
    id: 1,
    name: "X-Link",
    company: "Flender",
    description: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNumber: "P001",
    pending: 2,
    unitsSold: 500,
    revenue: "125000",
    profit: "25000",
    performance: "85",
    materialGroup: "Weld",
    revision: "1",
  },
  {
    id: 2,
    name: "Bottom Steel Platten Assembly",
    company: "Flender",
    description: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNumber: "P002",
    pending: 1,
    unitsSold: 600,
    revenue: "150000",
    profit: "30000",
    performance: "88",
    materialGroup: "Weld",
    revision: "2",
  },
  {
    id: 3,
    name: "Lever Arm",
    company: "Siemens",
    description: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNumber: "P003",
    pending: 2,
    unitsSold: 400,
    revenue: "100000",
    profit: "20000",
    performance: "80",
    materialGroup: "Weld",
    revision: "3",
  },
  {
    id: 4,
    name: "Bearing Housing",
    company: "Larsen & Toubro",
    description: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNumber: "P004",
    pending: 1,
    unitsSold: 450,
    revenue: "112500",
    profit: "22500",
    performance: "82",
    materialGroup: "Weld",
    revision: "1",
  },
  {
    id: 5,
    name: "Control Panel",
    company: "ABB",
    description: "Advanced control panel for automation systems",
    partNumber: "P005",
    pending: 3,
    unitsSold: 700,
    revenue: "175000",
    profit: "35000",
    performance: "90/100",
    materialGroup: "Profile",
    revision: "Rev 4",
  },
];

function productToolbar() {
  return (
    <GridToolbarContainer>
      <Box sx={{ width: "60%" }}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={(smallTitleStyle, { fontWeight: "bold", marginLeft: 5 })}
        >
          All Products
        </Typography>
      </Box>
      <GridToolbarColumnsButton sx={{ fontSize: 12 }} />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function AdminProductTable() {
  return (
    <Box sx={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={productRows}
        columns={productColumns}
        pageSize={5}
        slots={{ toolbar: productToolbar }}
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
        density="comfortable"
        editable={true}
      />
    </Box>
  );
}
