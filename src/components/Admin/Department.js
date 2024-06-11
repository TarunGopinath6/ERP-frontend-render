import * as React from "react";

import { MDBContainer } from "mdb-react-ui-kit";
import { Tooltip, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbarContainer,
} from "@mui/x-data-grid";

import useAdmin from "../../utils/Admin";

function EditToolbar(props) {
  const { setRows, setRowModesModel, addDisabled, setAddDisabled } = props;

  const randomId = () => Math.floor(Math.random() * 1000);

  const handleClick = () => {
    console.log("click");
    setAddDisabled(true);

    const uuid = randomId();
    setRows((oldRows) => [...oldRows, { uuid, isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [uuid]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClick}
        disabled={addDisabled}
      >
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function DepartmentTable() {
  const [rows, setRows] = React.useState([]);
  const firstUpdate = React.useRef(true);
  const [options, setOptions] = React.useState({ head: {} });
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });
  const [addDisabled, setAddDisabled] = React.useState(false);
  const [rowCountState, setRowCountState] = React.useState(0);
  const [updateKey, setUpdateKey] = React.useState(null);

  const { get, write, remove, loading } = useAdmin();

  React.useEffect(() => {
    const getData = async () => {
      setAddDisabled(true);

      let get_options = false;
      if (firstUpdate.current) {
        firstUpdate.current = false;
        get_options = true;
      }

      const response = await get(
        "department",
        paginationModel?.page ?? 0,
        paginationModel?.pageSize ?? 10,
        get_options
      );
      setRows(response?.data?.data ?? []);
      setRowCountState(response?.data?.meta?.count ?? 0);

      if (get_options)
        setOptions(response?.data?.meta?.options ?? { head: {} });

      setAddDisabled(false);
    };
    getData();
  }, [paginationModel, updateKey]);

  const getRowId = (row) => row.uuid;

  const handleRowEditStart = (params, event) => {
    console.log("edit start");
    setAddDisabled(true);
  };

  const handleRowEditStop = (params, event) => {
    console.log("edit stop");
    setAddDisabled(false);
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (uuid) => () => {
    console.log("edit click");
    console.log(rows);

    setAddDisabled(true);

    setRowModesModel({ ...rowModesModel, [uuid]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (uuid) => () => {
    setAddDisabled(false);
    setRowModesModel({ ...rowModesModel, [uuid]: { mode: GridRowModes.View } });
    console.log(rowModesModel);
  };

  const handleDeleteClick = (uuid) => async () => {
    // DELETE OPERATION

    const option = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (option === false) return false;

    const response = await remove("department", uuid);
    alert(`DELETE ${uuid}. STATUS: ${response.code}`);

    setUpdateKey(new Date());
  };

  const handleCancelClick = (uuid) => () => {
    setAddDisabled(false);

    setRowModesModel({
      ...rowModesModel,
      [uuid]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.uuid === uuid);
    if (editedRow.isNew) {
      console.log("cancel click, edited row is new");
      setRows(rows.filter((row) => row.uuid !== uuid));
    }
  };

  const handleCopyClick = (uuid) => async () => {
    try {
      let row = rows.filter((row) => row.uuid === uuid)[0];
      await navigator.clipboard.writeText(`${row?.name} - ${uuid}`);
      console.log(rows);
      alert("Row ID copied");
    } catch (err) {
      alert("Error in copying row ID");
    }
  };

  const processRowUpdate = async (newRow) => {
    // UPDATE AND CREATE NEW OBJECT

    const updatedRow = { ...newRow, isNew: false };

    if (newRow.isNew === true) delete newRow.uuid;

    let isNew = newRow.isNew;
    delete newRow.isNew;

    console.log(newRow["head_name"], options?.head);
    newRow["head"] = options?.head[newRow["head_name"]];

    const response = await write("department", newRow, isNew);

    // Remove the alert and add a toast message.
    alert(`UPSERT STATUS: ${response.code}.`);
    setUpdateKey(new Date());

    return updatedRow;
  };

  const processRowUpdateError = async (error) => {
    console.log(error);
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    // newRowModesModel seems to be empty dict
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "name",
      headerName: "Department Num",
      width: 200,
      editable: true,
      disableColumnMenu: true,
    },
    {
      field: "head_name",
      headerName: "Head",
      width: 200,
      editable: true,
      disableColumnMenu: true,
      type: "singleSelect",
      valueOptions: Object.keys(options?.head) ?? [],
    },
    {
      field: "type",
      headerName: "Type",
      width: 200,
      editable: true,
      disableColumnMenu: true,
      type: "singleSelect",
      valueOptions: ["Internal", "Subcontractor", "Other"],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <Tooltip title={"Save changes"}>
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                sx={{
                  color: "primary.main",
                }}
                onClick={handleSaveClick(id)}
              />
            </Tooltip>,
            <Tooltip title={"Cancel edit"}>
              <GridActionsCellItem
                icon={<CancelIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={handleCancelClick(id)}
                color="inherit"
              />
            </Tooltip>,
          ];
        }

        return [
          <Tooltip title={"Edit record"}>
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              disabled={addDisabled}
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />
          </Tooltip>,
          <Tooltip title={"Delete record"}>
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />
          </Tooltip>,
          <Tooltip title={"Copy row ID"}>
            <GridActionsCellItem
              icon={<ContentCopyIcon />}
              label="Copy row ID"
              onClick={handleCopyClick(id)}
              color="inherit"
            />
          </Tooltip>,
        ];
      },
    },
  ];

  return (
    <>
      <DataGrid
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }}
        rows={rows}
        columns={columns}
        editMode="row"
        getRowId={getRowId}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={processRowUpdateError}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel, addDisabled, setAddDisabled },
        }}
        rowCount={rowCountState}
        loading={loading}
        pageSizeOptions={[5, 10, 20]}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
      />
    </>
  );
}
