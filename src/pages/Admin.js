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

import Modal from "react-modal";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";

function computeMutation(newRow, oldRow) {
  if (newRow.name !== oldRow.name) {
    return `Name from '${oldRow.name}' to '${newRow.name}'`;
  }
  if (newRow.phone !== oldRow.phone) {
    return `Phone from '${oldRow.phone || ""}' to '${newRow.phone || ""}'`;
  }
  if (newRow.title !== oldRow.title) {
    return `Title from '${oldRow.title || ""}' to '${newRow.title || ""}'`;
  }
  if (newRow.type !== oldRow.type) {
    return `Type from '${oldRow.type || ""}' to '${newRow.type || ""}'`;
  }
  return null;
}

export const Admin = () => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarData, setSnackbarData] = React.useState({
    message: "",
    severity: "success",
  });

  const UserRowsArr = [
    {
      id: 1,
      name: "User 1",
      phone: "+91 9677132165",
      title: "Marketing Head",
      type: "Admin",
      col5: { delete: true },
    },
    {
      id: 2,
      name: "User 2",
      phone: "+91 9677132165",
      title: "Accounts Manager",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 3,
      name: "User 3",
      phone: "+91 9677132165",
      title: "Production",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 4,
      name: "User 4",
      phone: "+91 9677132165",
      title: "Quality Supervisor",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 5,
      name: "User 5",
      phone: "+91 9677132165",
      title: "Accounts Manager",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 6,
      name: "User 6",
      phone: "+91 9677132165",
      title: "Quality Supervisor",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 7,
      name: "User 7",
      phone: "+91 9677132165",
      title: "Production",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 8,
      name: "User 8",
      phone: "+91 9677132165",
      title: "Accounts Manager",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 9,
      name: "User 9",
      phone: "+91 9677132165",
      title: "Quality Supervisor",
      type: "User",
      col5: { delete: true },
    },
    {
      id: 10,
      name: "User 10",
      phone: "+91 9677132165",
      title: "Production",
      type: "User",
      col5: { delete: true },
    },
  ];

  const ProductRowsArr = [
    {
      id: 1,
      productName: "X-Link",
      det: '	65.5" DTP CONV.+VCL+SMO W/CONTROLS',
      company: "Flender",
      partNum: "Z4-11917",
      matGrp: "WELD",
      revision: "2",
    },
    {
      id: 2,
      productName: "Bottom Steel Platten Assembly",
      det: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
      company: "Flender",
      partNum: "X4-20862",
      matGrp: "WELD",
      revision: "1",
    },
    {
      id: 3,
      productName: "Lever Arm",
      det: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
      company: "Siemens",
      partNum: "X4-20862",
      matGrp: "WELD",
      revision: "2",
    },
    {
      id: 4,
      productName: "Bearing Housing",
      det: '65.5" DTP CONV.+VCL+SMO W/CONTROLS',
      company: "Larsen & Toubro",
      partNum: "Z4-11917",
      matGrp: "WELD",
      revision: "1",
    },
    // Add more rows as needed
  ];
  const ClientRowsArr = [
    { id: 1, clientName: "Flender" },
    { id: 2, clientName: "Siemens" },
    { id: 3, clientName: "Larsen & Toubro" },
    { id: 4, clientName: "Kobelco" },
    // Add more rows as needed
  ];
  const DeptRowsArr = [
    { id: 1, deptName: "Dept 1", head: "Name 1", deptType: "Type" },
    { id: 2, deptName: "Dept 2", head: "Name 2", deptType: "Type" },
    { id: 3, deptName: "Dept 3", head: "Name 3", deptType: "Type" },
    { id: 4, deptName: "Dept 4", head: "Name 4", deptType: "Type" },
    // Add more rows as needed
  ];
  const StageRowsArr = [
    { id: 1, stageName: "Pre- Machining", dept: "Machining" },
    { id: 2, stageName: "Painting", dept: "Dispatch" },
    { id: 3, stageName: "Raw Material Purchase", dept: "Profiling" },
    { id: 4, stageName: "Fit Up", dept: "Fit Up" },
    // Add more rows as needed
  ];

  const [UserRowsState, setUserRowsState] = useState(UserRowsArr);
  const [ProductRowsState, setProductRowsState] = useState(ProductRowsArr);
  const [ClientRowsState, setClientRowsState] = useState(ClientRowsArr);
  const [DeptRowsState, setDeptRowsState] = useState(DeptRowsArr);
  const [StageRowsState, setStageRowsState] = useState(StageRowsArr);
  let lastUserId =
    UserRowsState.length > 0 ? UserRowsState[UserRowsState.length - 1].id : 1;
  let lastProdId =
    ProductRowsState.length > 0
      ? ProductRowsState[ProductRowsState.length - 1].id
      : 1;
  let lastCliId =
    ClientRowsState.length > 0
      ? ClientRowsState[ClientRowsState.length - 1].id
      : 1;
  let lastDeptId =
    DeptRowsState.length > 0 ? DeptRowsState[DeptRowsState.length - 1].id : 1;
  let lastStageId =
    StageRowsState.length > 0
      ? StageRowsState[StageRowsState.length - 1].id
      : 1;

  const [activeTable, setActiveTable] = useState("Users");

  const userColumns = [
    {
      field: "name",
      headerName: "NAME",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
      editable: true,
    },
    {
      field: "phone",
      headerName: "PHONE",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
      editable: true,
    },
    {
      field: "title",
      headerName: "TITLE",
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
      field: "access",
      headerName: "ACCESS",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <button
              className=" me-3"
              onClick={() => handleAdmit(params.row.id)}
              style={admitButtonStyle}
            >
              Admit
            </button>
            <button
              onClick={() => handleRevoke(params.row.id)}
              style={deleteButtonStyle}
            >
              Revoke
            </button>
          </>
        );
      },
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

  const clientColumns = [
    {
      field: "clientName",
      headerName: "CLIENT NAME",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 250,
      editable: true,
    },
    {
      field: "col5",
      headerName: "ACTION",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
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

  const deptColumns = [
    {
      field: "deptName",
      headerName: "DEPARTMENT NAME",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
      editable: true,
    },
    {
      field: "head",
      headerName: "HEAD",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
    },
    {
      field: "deptType",
      headerName: "TYPE",
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
      width: 200,
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
  const productColumns = [
    {
      field: "productName",
      headerName: "PRODUCT NAME",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 250,
      editable: true,
    },
    {
      field: "det",
      headerName: "DETAILS",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 350,
      editable: true,
    },
    {
      field: "company",
      headerName: "COMPANY",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
    },
    {
      field: "partNum",
      headerName: "PART NUMBER",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
    },
    {
      field: "matGrp",
      headerName: "MATERIAL GROUP",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
    },
    {
      field: "revision",
      headerName: "REVISION",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 100,
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

  const stageColumns = [
    {
      field: "stageName",
      headerName: "STAGE NAME",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
      editable: true,
    },
    {
      field: "dept",
      headerName: "DEPT",
      headerClassName: "style--header",
      headerAlign: "center",
      align: "center",
      width: 200,
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
      } else if (activeTable === "Products") {
        setProductRowsState(ProductRowsState.filter((row) => row.id !== id));
      } else if (activeTable === "Clients") {
        setClientRowsState(ClientRowsState.filter((row) => row.id !== id));
      } else if (activeTable === "Department") {
        setDeptRowsState(DeptRowsState.filter((row) => row.id !== id));
      } else if (activeTable === "Stage") {
        setStageRowsState(StageRowsState.filter((row) => row.id !== id));
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
        maxWidth="xs"
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
        maxWidth="xs"
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
        name: "New User",
        phone: "Phone Number",
        title: "Title",
        type: "Type",
        col5: { delete: true },
      };
      setUserRowsState([...UserRowsState, newRow]);
    } else if (activeTable === "Products") {
      const newId = lastProdId + 1;
      const newRow = {
        id: newId,
        productName: "New Product",
        det: "Details",
        company: "Company",
        partNum: "Last Updated",
        matGrp: "Material Group",
        revision: "Revision",
      };
      setProductRowsState([...ProductRowsState, newRow]);
    } else if (activeTable === "Clients") {
      const newId = lastCliId + 1;

      const newRow = {
        id: newId,
        clientName: "New Client",
      };
      setClientRowsState([...ClientRowsState, newRow]);
    } else if (activeTable === "Department") {
      const newId = lastDeptId + 1;

      const newRow = {
        id: newId,
        deptName: "New Department",
        head: "Name",
        deptType: "Type",
      };
      setDeptRowsState([...DeptRowsState, newRow]);
    } else if (activeTable === "Stage") {
      const newId = lastStageId + 1;

      const newRow = {
        id: newId,
        stageName: "New stage",
        dept: "Department",
      };
      setStageRowsState([...StageRowsState, newRow]);
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
    const totalCount =
      activeTable === "Users"
        ? UserRowsState.length
        : activeTable === "Products"
        ? ProductRowsState.length
        : activeTable === "Clients"
        ? ClientRowsState.length
        : activeTable === "Department"
        ? DeptRowsState.length
        : StageRowsState.length;

    const calculatedTotalPages = Math.ceil(totalCount / pageSize);
    setTotalPages(calculatedTotalPages);
    console.log(activeTable);
  }, [
    activeTable,
    UserRowsState,
    ProductRowsState,
    ClientRowsState,
    DeptRowsState,
    StageRowsState,
    pageSize,
  ]);

  // Function to handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getRowsForCurrentPage = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (activeTable === "Users") {
      return UserRowsState.slice(startIndex, endIndex);
    } else if (activeTable === "Products") {
      return ProductRowsState.slice(startIndex, endIndex);
    } else if (activeTable === "Clients") {
      return ClientRowsState.slice(startIndex, endIndex);
    } else if (activeTable === "Department") {
      return DeptRowsState.slice(startIndex, endIndex);
    } else if (activeTable === "Stage") {
      return StageRowsState.slice(startIndex, endIndex);
    }
  };

  return (
    <MDBContainer fluid style={outer}>
      {/* <Modal
        isOpen={true}
        style={ {
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        contentLabel="Example Modal"
      ></Modal> */}

      {/* <Header /> */}
      {/* <Banner title='ADMIN' /> */}
      <MDBContainer fluid style={display}>
        <div style={{ flex: "0 0 65%" }}>
          <MDBContainer fluid>
            <MDBRow className="justify-content-center">
              <MDBCol
                md="7"
                className="mt-3 d-flex justify-content-center align-items-center"
              >
                <MDBCard className="shadow-3-strong rounded-9">
                  <MDBCardBody className="p-0 py-3">
                    <MDBBtn
                      rounded
                      className="me-2 ms-2 "
                      style={filterButton}
                      onClick={() => setActiveTable("Users")}
                    >
                      Users
                    </MDBBtn>
                    <MDBBtn
                      rounded
                      className="me-2"
                      style={filterButton}
                      onClick={() => setActiveTable("Products")}
                    >
                      Products
                    </MDBBtn>
                    <MDBBtn
                      rounded
                      className="me-2"
                      style={filterButton}
                      onClick={() => setActiveTable("Clients")}
                    >
                      Clients
                    </MDBBtn>
                    <MDBBtn
                      rounded
                      className="me-2"
                      style={filterButton}
                      onClick={() => setActiveTable("Department")}
                    >
                      Dept
                    </MDBBtn>
                    <MDBBtn
                      rounded
                      className="me-2"
                      style={filterButton}
                      onClick={() => setActiveTable("Stage")}
                    >
                      Stage
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>

            <MDBRow style={flex}>
              <MDBContainer
                fluid
                className="mt-3 mb-3 shadow-2-strong rounded-9"
                style={{ ...display, width: "150%" }}
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
                      key={
                        activeTable === "Users"
                          ? UserRowsState.length
                          : activeTable === "Products"
                          ? ProductRowsState.length
                          : activeTable === "Clients"
                          ? ClientRowsState.length
                          : activeTable === "Department"
                          ? DeptRowsState.length
                          : StageRowsState.length
                      }
                      rows={getRowsForCurrentPage()}
                      columns={
                        activeTable === "Users"
                          ? userColumns
                          : activeTable === "Products"
                          ? productColumns
                          : activeTable === "Clients"
                          ? clientColumns
                          : activeTable === "Department"
                          ? deptColumns
                          : stageColumns
                      }
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

export default Admin;
