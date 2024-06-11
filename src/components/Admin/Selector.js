import React from 'react'


import { MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";

const Selector = ({ setActiveTable }) => {

    const filterButton = {
        backgroundColor: "#4baa4c",
        color: "white",
    };

    return (
        <MDBCard className='shadow-3-strong rounded-9 justify-content-center align-items-center mt-3' style={{ width: "fit-content" }}>
            <MDBCardBody className='p-0 py-3'>
                <MDBBtn rounded className='me-2 ms-2 ' style={filterButton} onClick={() => setActiveTable('users')}>
                    Users
                </MDBBtn>
                <MDBBtn rounded className='me-2' style={filterButton} onClick={() => setActiveTable('products')}>
                    Products
                </MDBBtn>
                <MDBBtn rounded className='me-2' style={filterButton} onClick={() => setActiveTable('companies')}>
                    Clients
                </MDBBtn>
                <MDBBtn rounded className='me-2' style={filterButton} onClick={() => setActiveTable('departments')}>
                    Dept
                </MDBBtn>
                <MDBBtn rounded className='me-2' style={filterButton} onClick={() => setActiveTable('stages')}>
                    Stage
                </MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )


}

export default Selector