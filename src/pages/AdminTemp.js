import React, { useState } from 'react';
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";

import Selector from '../components/Admin/Selector';

import ClientTable from '../components/Admin/Client';
import ProductTable from '../components/Admin/Product';
import DepartmentTable from '../components/Admin/Department';
import StageTable from '../components/Admin/Stage';


import {  MDBContainer } from "mdb-react-ui-kit";


const AdminTemp = () => {

  const [activeTable, setActiveTable] = useState("companies");

  return (
    <MDBContainer fluid style={outer}>

      <Header />
      <Banner title='ADMIN' />

      <MDBContainer className='d-flex  flex-column justify-content-center align-items-center'>

        <Selector setActiveTable={setActiveTable} />

        <MDBContainer className='mt-3 mb-3 justify-content-center align-items-center p-0' style={{ width: "100%", overflowX: 'auto', height: '400px' }}>
          {
            {
              'products': <ProductTable />,
              'companies': <ClientTable />,
              'departments': <DepartmentTable />,
              'stages': <StageTable />
            }[activeTable]
          }
        </MDBContainer>



      </MDBContainer>

    </MDBContainer>
  )
}



const tableSX = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 3,
  alignItems: 'center',
  '& .style--header': {
    backgroundColor: '#4baa4c',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 900,
    fontSize: '0.900rem',
    lineHeight: '1.5rem',
    textTransform: 'uppercase',
    borderBottom: '1px solid #ddd',
    color: 'white',
  },
  '& .MuiDataGrid-row': {
    backgroundColor: 'white',
  },

};

const outer = {
  margin: 0, padding: 0,
  width: '100%',
};

const buttonStyle = {
  borderRadius: '10px',
  padding: '6px 15px',
  color: 'white',
  fontWeight: 'bold',
  border: 0
}


const addButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#428bca',
  height: '40px',
}

const tableStyle = {
  border: "none",
};



export default AdminTemp