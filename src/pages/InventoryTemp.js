import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

import { inventoryColumns } from "../components/adminColumns";
import Loading from "../components/common/Loading";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";

import useAdmin from "./../utils/Admin";

const AdminTemp = () => {
  const [activeTable, setActiveTable] = useState("companies");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);

  const { getInventory, loading } = useAdmin();

  const handlePageChange = () => {};
  const handleAdd = () => {};
  const handleProcessRowUpdate = ({ newRow, oldRow }) => {};
  const handleProcessRowUpdateError = ({ error }) => {};

  useEffect(() => {
    (async () => {
      let response = await getInventory();

      if (response.code === 200) {
        try {
          let rows = response.data.data.inventories.edges.map((elem) => {
            return elem["node"];
          });
          console.log(rows);
          setData(rows);
        } catch (e) {
          // Incase something breaks
          setData([]);
          alert("Error in retriving data");
          console.log(e);
        }
      } else {
        alert("Data not retrived. Please try again.");
      }
    })();
  }, [activeTable]);

  return (
    <MDBContainer fluid style={outer}>
      <Header />
      <Banner title="INVENTORY" />

      <MDBContainer className="d-flex  flex-column justify-content-center align-items-center">
        {loading === true ? (
          <Loading />
        ) : (
          <MDBContainer
            className="mt-3 mb-3 shadow-2-strong rounded-9 justify-content-center align-items-center p-0"
            style={{ width: "100%", overflowX: "auto" }}
          >
            <MDBContainer className="d-flex mb-1 justify-content-between my-3">
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
              <MDBBtn style={addButtonStyle} onClick={handleAdd}>
                Add
              </MDBBtn>
            </MDBContainer>

            <Box sx={tableSX}>
              <DataGrid
                rows={data}
                columns={inventoryColumns}
                getRowId={(row) => row.uuid}
                processRowUpdate={handleProcessRowUpdate}
                onProcessRowUpdateError={handleProcessRowUpdateError}
                // disableColumnMenu

                disableColumnSelector
                disableDensitySelector
                hideFooter
                disableSelectionOnClick
                checkboxSelection={false}
                disableExtendRowFullWidth
                disableColumnReorder
                disableColumnResize
                autoHeight
                style={tableStyle}
              />
            </Box>
          </MDBContainer>
        )}
      </MDBContainer>
    </MDBContainer>
  );
};

const filterButton = {
  backgroundColor: "#4baa4c",
  color: "white",
};

const tableSX = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: 3,
  alignItems: "center",
  "& .style--header": {
    backgroundColor: "#4baa4c",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 900,
    fontSize: "0.900rem",
    lineHeight: "1.5rem",
    textTransform: "uppercase",
    borderBottom: "1px solid #ddd",
    color: "white",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "white",
  },
};

const outer = {
  margin: 0,
  padding: 0,
  width: "100%",
};

const buttonStyle = {
  borderRadius: "10px",
  padding: "6px 15px",
  color: "white",
  fontWeight: "bold",
  border: 0,
};

const addButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#428bca",
  height: "40px",
};

const tableStyle = {
  border: "none",
};

export default AdminTemp;
