import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import BasicModal from "./OpenPoModal";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  {
    field: "ppi",
    headerName: "PPI",
    headerClassName: "header-theme",
    width: 115,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "header-theme",
    width: 200,
  },
  {
    field: "pieces",
    headerName: "Pieces",
    headerClassName: "header-theme",
    width: 150,
  },
  {
    field: "department",
    headerName: "Department",
    headerClassName: "header-theme",
    width: 150,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    headerClassName: "header-theme",
    width: 150,
  },
  {
    field: "openQty",
    headerName: "Open Qty",
    headerClassName: "header-theme",
    width: 150,
  },
  {
    field: "closedQty",
    headerName: "Closed Qty",
    headerClassName: "header-theme",
    width: 150,
  },
  {
    field: "partNo",
    headerName: "Part No",
    headerClassName: "header-theme",
    width: 150,
  },
  {
    field: "so",
    headerName: "SO",
    headerClassName: "header-theme",
    width: 150,
  },
  {
    field: "soLine",
    headerName: "SO Line",
    headerClassName: "header-theme",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    ppi: "PPI12312194",
    partNo: "Z4-11917 (1)",
    department: "PROFILING",
    assembly: "Main Assembly",
    dueDate: "12-06-2023 (overdue)",
    pieces: "2 pieces",
    openVal: "Rs 4,89,636",
    name: "Bottom Steam Platten Assy",
  },
  {
    id: 2,
    ppi: "PPI12312195",
    partNo: "X4-20862 (2)",
    department: "WELDING",
    assembly: "Sub Assembly",
    dueDate: "26-06-2023 (today)",
    pieces: "3 pieces",
    openVal: "Rs 4,89,636",
    name: "X- Link",
  },
  {
    id: 3,
    ppi: "PPI12312196",
    partNo: "X4-20862 (1)",
    assembly: "Main Assembly",
    department: "DISPATCH",
    dueDate: "27-06-2023(tmrw.)",
    pieces: "1 pieces",
    openVal: "Rs 3,64,984",
    name: "Lever Arm",
  },
  {
    id: 4,
    ppi: "PPI12312197",
    department: "DISPATCH",
    partNo: "X4-20862 (1)",
    assembly: "Sub Assembly",
    dueDate: "01-07-2023 (later)",
    pieces: "2 pieces",
    openVal: "Rs 9,80,324",
    name: "Bearing Housing",
  },
  // first
  {
    id: 5,
    ppi: "PPI12312198",
    partNo: "X4-20862 (2)",
    department: "FIT UP",
    assembly: "Sub Assembly",
    dueDate: "12-06-2023 ",
    pieces: "2 pieces",
    openVal: "Rs 4,89,636",
    name: "Bottom Steam Platten Assy",
  },
  {
    id: 6,
    ppi: "PPI12312199",
    partNo: "X4-20862 (1)",
    assembly: "Main Assembly",
    department: "ASSEMBLY",
    dueDate: "23-06-2023 ",
    pieces: "3 pieces",
    openVal: "Rs 4,89,636",
    name: "X- Link",
  },
  {
    id: 7,
    ppi: "PPI12312200",
    partNo: "Z4-11917 (2)",
    department: "MACHINING",
    assembly: "Sub Assembly",
    dueDate: "24-06-2023",
    pieces: "1 pieces",
    openVal: "Rs 3,64,984",
    name: "Lever Arm",
  },
  {
    id: 8,
    ppi: "PPI12312201",
    partNo: "Z4-11917 (2)",
    department: "ASSEMBLY",
    assembly: "Main Assembly",
    dueDate: "01-07-2023",
    pieces: "2 pieces",
    openVal: "Rs 9,80,324",
    name: "Bearing Housing",
  },
];

export default function DataGridDemo() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  React.useEffect(() => {
    if (modalData.name) {
      handleOpenModal();
    }
    // console.log(modalData);
  }, [modalData]);

  const handleRowClick: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    setModalData(params.row);
  };
  return (
    <Box sx={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        slots={{ toolbar: GridToolbar }}
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
          },
        }}
        // disableColumnMenu

        density="comfortable"
      />
      <BasicModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        modalData={modalData}
      />
    </Box>
  );
}
