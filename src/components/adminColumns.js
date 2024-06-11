const handleAdmit = () => { }
const handleRevoke = () => { }
const handleDelete = (source, id) => { 
    window.confirm("Delete Record?")
}

const buttonStyle = {
    borderRadius: '10px',
    padding: '6px 15px',
    color: 'white',
    fontWeight: 'bold',
    border: 0
}

const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#d9534f'
}

const admitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#428bca'
}


export const userColumns = [
    { field: 'name', headerName: 'NAME', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 200, editable: true },
    { field: 'phone', headerName: 'PHONE', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 200, editable: true },
    { field: 'designation', headerName: 'TITLE', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 200, editable: true },
    { field: 'group', headerName: 'TYPE', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 150, editable: true },
    {
        field: 'access',
        headerName: 'ACCESS',
        headerClassName: 'style--header',
        headerAlign: 'center',
        align: 'center',
        width: 300,
        renderCell: (params) => {

            return (
                <>
                    <button className=" me-3" onClick={() => handleAdmit(params.row.id)} style={admitButtonStyle}>Admit</button>
                    <button onClick={() => handleRevoke(params.row.id)} style={deleteButtonStyle}>Revoke</button>

                </>
            );
        },
    },
    {
        field: 'col5',
        headerName: 'ACTION',
        headerClassName: 'style--header',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        renderCell: (params) => {

            return (
                <>
                    <button onClick={() => handleDelete(params.row.id)} style={deleteButtonStyle}>Delete</button>
                </>
            );
        },
    },
];

export const clientColumns = [
    { field: 'name', headerName: 'CLIENT NAME', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 250, editable: true },
    {
        field: 'col5',
        headerName: 'ACTION',
        headerClassName: 'style--header',
        headerAlign: 'center',
        align: 'center',
        width: 200,
        renderCell: (params) => {
            return (
                <>
                    <button onClick={() => handleDelete(params.row.id)} style={deleteButtonStyle}>Delete</button>
                </>
            );
        },
    },
];

export const deptColumns = [
    { field: 'name', headerName: 'DEPARTMENT NAME', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 200, editable: true },
    { field: 'head', headerName: 'HEAD', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 150, editable: true },
    { field: 'type', headerName: 'TYPE', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 150, editable: true },
    {
        field: 'col5',
        headerName: 'ACTION',
        headerClassName: 'style--header',
        headerAlign: 'center',
        align: 'center',
        width: 200,
        renderCell: (params) => {

            return (
                <>
                    <button onClick={() => handleDelete(params.row.id)} style={deleteButtonStyle}>Delete</button>
                </>
            );
        },
    },
];

export const productColumns = [
    { field: 'description', headerName: 'PRODUCT NAME', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 250, editable: true },
    { field: 'details', headerName: 'DETAILS', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 350, editable: true },
    { field: 'company', headerName: 'COMPANY', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 150, editable: true },
    { field: 'partNum', headerName: 'PART NUMBER', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 150, editable: true },
    { field: 'materialGroup', headerName: 'MATERIAL GROUP', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 150, editable: true },
    { field: 'revision', headerName: 'REVISION', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 100, editable: true },
    {
        field: 'col5',
        headerName: 'ACTION',
        headerClassName: 'style--header',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <button onClick={() => handleDelete(params.row.id)} style={deleteButtonStyle}>Delete</button>
                </>
            );
        },
    },
];

export const stageColumns = [
    { field: 'name', headerName: 'STAGE NAME', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 200, editable: true },
    { field: 'department', headerName: 'DEPT', headerClassName: 'style--header', headerAlign: 'center', align: 'center', width: 200, editable: true },
    {
        field: 'col5',
        headerName: 'ACTION',
        headerClassName: 'style--header',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <button onClick={() => handleDelete(params.row.id)} style={deleteButtonStyle}>Delete</button>
                </>
            );
        },
    },
];



export const inventoryColumns = [
    { field: 'name', headerName: 'ITEM', headerClassName: 'style--header', headerAlign:'center',align: 'center', width: 200, editable:true },
    { field: 'description', headerName: 'Description', headerClassName: 'style--header',headerAlign:'center', align: 'center', width: 200, editable:true },
    { field: 'type', headerName: 'TYPE', headerClassName: 'style--header',headerAlign:'center', align: 'center', width: 150, editable:true },
    { field: 'quantity', headerName: 'QUANTITY', headerClassName: 'style--header',headerAlign:'center', align: 'center', width: 150, editable:true },
    { field: 'unitPrice', headerName: 'UNIT PRICE', headerClassName: 'style--header',headerAlign:'center', align: 'center', width: 150, editable:true },
    
    {
      field: 'col5',
      headerName: 'ACTION',
      headerClassName: 'style--header',
      headerAlign:'center',
      align: 'center',
      width: 150,
      renderCell: (params) => {
       
          return (
            <>
              <button onClick={() => handleDelete(params.row.id)} style={deleteButtonStyle}>Delete</button>
            </>
          );
      },
    },
  ];
