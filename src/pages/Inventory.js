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

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";

function computeMutation(newRow, oldRow) {
  if (newRow.materialname !== oldRow.materialname) {
    return `Item from '${oldRow.materialname}' to '${newRow.materialname}'`;
  }
  if (newRow.product_id !== oldRow.product_id) {
    return `Product_id from '${oldRow.product_id || ""}' to '${
      newRow.product_id || ""
    }'`;
  }
  if (newRow.description !== oldRow.description) {
    return `Description from '${oldRow.description || ""}' to '${
      newRow.description || ""
    }'`;
  }
  if (newRow.type !== oldRow.type) {
    return `Type from '${oldRow.type || ""}' to '${newRow.type || ""}'`;
  }
  if (newRow.quantity !== oldRow.quantity) {
    return `Quantity from '${oldRow.quantity || ""}' to '${
      newRow.quantity || ""
    }'`;
  }
  if (newRow.unit_price !== oldRow.unit_price) {
    return `Unit price from '${oldRow.unit_price || ""}' to '${
      newRow.unit_price || ""
    }'`;
  }
  return null;
}

export const Inventory = () => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarData, setSnackbarData] = React.useState({
    message: "",
    severity: "success",
  });

  const UserRowsArr = [
    {
      id: 1,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 2,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 3,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 4,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 5,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 6,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 7,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 8,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
    {
      id: 9,
      materialname: "Iron sheets",
      product_id: "P13002",
      description: "This is the 1st batch of the delivery from the supplier ",
      type: "Raw material",
      quantity: 10,
      unit_price: 100,
      col5: { delete: true },
    },
  ];

  const [UserRowsState, setUserRowsState] = useState(UserRowsArr);

  let lastUserId =
    UserRowsState.length > 0 ? UserRowsState[UserRowsState.length - 1].id : 1;

  const [activeTable, setActiveTable] = useState("Users");

  const userColumns = [
    {
      field: "materialname",
      headerName: "ITEM",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
      editable: true,
    },
    {
      field: "product_id",
      headerName: "Purchase ID",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
      editable: true,
    },
    {
      field: "type",
      headerName: "TYPE",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
    },
    {
      field: "unit_price",
      headerName: "UNIT PRICE",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
    },

    {
      field: "col5",
      headerName: "ACTION",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={() => handleDelete(params.row.id)}
              style={deleteButtonStyle}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  const [delPromiseArguments, setDelPromiseArguments] = React.useState(null);

  const handleDelete = React.useCallback(
    (id) =>
      new Promise((resolve, reject) => {
        setDelPromiseArguments({ resolve, reject, id });
      }),
    []
  );

  const handleAdmit = React
    .useCallback
    //     (id) =>

    //     new Promise ((resolve, reject) => {
    //       console.log(id)

    //       setDelPromiseArguments({ resolve, reject, id });
    // }),
    // [],
    ();
  const handleRevoke = React
    .useCallback
    //     (id) =>

    //     new Promise ((resolve, reject) => {
    //       console.log(id)

    //       setDelPromiseArguments({ resolve, reject, id });
    // }),
    // [],
    ();

  const [promiseArguments, setPromiseArguments] = React.useState(null);
  const noButtonRef = React.useRef(null);

  const handleProcessRowUpdate = React.useCallback(
    (newRow, oldRow) =>
      new Promise((resolve, reject) => {
        const mutation = computeMutation(newRow, oldRow);
        if (mutation) {
          setPromiseArguments({ resolve, reject, newRow, oldRow });
        } else {
          resolve(oldRow);
        }
      }),
    []
  );

  const handleProcessRowUpdateError = React.useCallback((error) => {
    console.error("EWrror ", error.message);
  }, []);

  const handleNo = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow);
    setPromiseArguments(null);
  };
  const handleYes = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

    try {
      setPromiseArguments(null);
      resolve(newRow);
      console.log("Saved", newRow);

      setSnackbarData({ message: "Saved", severity: "success" });
      setSnackbarOpen(true);
    } catch (error) {
      reject(oldRow);
      setPromiseArguments(null);
    }
  };

  const handleDelNo = () => {
    const { reject } = delPromiseArguments;
    reject();
    setDelPromiseArguments(null);
  };

  const handleDelYes = async () => {
    const { id, resolve } = delPromiseArguments;

    try {
      resolve(id);
      setDelPromiseArguments(null);
      if (activeTable === "Users") {
        setUserRowsState(UserRowsState.filter((row) => row.id !== id));
        console.log("lastid", lastUserId);
      }
      resolve(id);

      setSnackbarData({ message: "Deleted", severity: "success" });
      setSnackbarOpen(true);
    } catch (error) {
      setDelPromiseArguments(null);
    }
  };

  const handleEntered = () => {};

  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }
    const { newRow, oldRow } = promiseArguments;
    const mutation = computeMutation(newRow, oldRow);

    return (
      <Dialog
        maxWidth="xl"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!promiseArguments}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent dividers>
          {`Pressing 'Yes' will change ${mutation}.`}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} onClick={handleNo}>
            No
          </Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderDelConfirmDialog = () => {
    if (!delPromiseArguments) {
      return null;
    }
    const { id } = delPromiseArguments;

    return (
      <Dialog
        maxWidth="xl"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!delPromiseArguments}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent dividers>
          {`Pressing 'Yes' will delete the row.`}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} onClick={handleDelNo}>
            No
          </Button>
          <Button onClick={handleDelYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const handleAdd = () => {
    console.log(UserRowsState);
    console.log("lastid2", lastUserId);

    if (activeTable === "Users") {
      const newId = lastUserId + 1;
      const newRow = {
        id: newId,
        materialname: "New Material",
        product_id: "Product Id",
        description: "Description",
        type: "Type",
        quantity: "Quantity",
        unit_price: "Unit price",
        col5: { delete: true },
      };
      setUserRowsState([...UserRowsState, newRow]);
    }
    setSnackbarData({ message: "New Row Added", severity: "success" });
    setSnackbarOpen(true);
    console.log("after", UserRowsState);
  };

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  // Calculate the total number of pages based on the number of rows and page size
  useEffect(() => {
    const totalCount = UserRowsState.length;

    const calculatedTotalPages = Math.ceil(totalCount / pageSize);
    setTotalPages(calculatedTotalPages);
  }, [activeTable, UserRowsState, pageSize]);

  // Function to handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getRowsForCurrentPage = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (activeTable === "Users") {
      return UserRowsState.slice(startIndex, endIndex);
    }
  };

  return (
    <MDBContainer fluid style={outer}>
      <Header />
      <Banner title="INVENTORY" />
      <MDBContainer fluid style={display}>
        <div style={{ flex: "0 0 65%" }}>
          <MDBContainer fluid>
            <MDBRow style={flex}>
              <MDBContainer
                fluid
                className="mt-3 mb-3 shadow-2-strong rounded-9"
                style={{ ...display, width: "150%", boxShadow: "10" }}
              >
                <div className="mt-3" style={table}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
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
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                      />
                      <MDBBtn style={addButtonStyle} onClick={handleAdd}>
                        Add
                      </MDBBtn>
                    </div>
                    {renderConfirmDialog()}
                    {renderDelConfirmDialog()}
                    <DataGrid
                      key={UserRowsState.length}
                      rows={getRowsForCurrentPage()}
                      columns={userColumns}
                      isCellEditable={(params) => params.field !== "col5"}
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
                </div>
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={2000}
                  onClose={() => setSnackbarOpen(false)}
                >
                  <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity={snackbarData.severity}
                    sx={{ width: "100%" }}
                  >
                    {snackbarData.message}
                  </Alert>
                </Snackbar>
              </MDBContainer>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBContainer>
    </MDBContainer>
  );
};

const filterButton = {
  backgroundColor: "#4baa4c",
  color: "white",
};

const flex = {
  flex: 1,
};

const table = {
  margin: "auto",
  display: "flex",
  justifyContent: "center",
};

const outer = {
  margin: 0,
  padding: 0,
};

const display = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const buttonStyle = {
  borderRadius: "10px",
  padding: "6px 15px",
  color: "white",
  fontWeight: "bold",
  border: 0,
};

const deleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#d9534f",
};

const admitButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#428bca",
};

const addButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#428bca",
  height: "40px",
};

const tableStyle = {
  border: "none",
};

export default Inventory;
