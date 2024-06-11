import React, { Component, useState, useRef } from "react";
import Header from "../components/common/Header"
import Banner from "../components/common/Banner"
import { Line } from "react-chartjs-2";



import xlink from "../assets/images/xlink.png";
import knife from "../assets/images/knife.png";
import bearing from "../assets/images/bearing.png";
import lever from "../assets/images/lever.png";
import db from "../assets/images/db.png";
import frame from "../assets/images/frame.png";
import ls from "../assets/images/latchsupport.png";
import latch from "../assets/images/latch.png";
import sb from "../assets/images/sb.png";
import wd from "../assets/images/WheelDisk.png";
import valve from "../assets/images/valve.png";
import yoke from "../assets/images/yoke.png";






import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdb-react-ui-kit";

import { MDBPagination, MDBPageItem, MDBPageNav } from 'mdbreact';


 
export const Products = () => {

  const [activeChart, setActiveChart] = useState("Units Produced");
  const [selectedClients, setSelectedClients] = useState(['Larsen & Toubro']);
  const [selectedDesProducts, setselectedDesProducts] = useState([]);
  const [selectedDesProduct, setSelectedDesProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const handleProductDesClick = (product) => {
    setSelectedDesProduct(product);
  };

  


  
  const handleClientSelection = (client) => {
    if (selectedClients.includes(client)) {
      setSelectedClients(selectedClients.filter((c) => c !== client));
    } else {
      setSelectedClients([...selectedClients, client]);
    }

  };
  
  const handleProductSelection = (product) => {
    if (selectedDesProducts.includes(product)) {
      setselectedDesProducts(selectedDesProducts.filter((p) => p !== product));
    } else {
      setselectedDesProducts([...selectedDesProducts, product]);
    }
  };

  const selectedFilterStyle = {
    fontWeight: 'bold',
    color: '#4baa4c',
  };
  
  
const products = [
  {
    link: xlink,
    name: 'X - Link',
    clients: ['Larsen & Toubro'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: lever,
    name: 'Lever Arm',
    clients: ['Larsen & Toubro'],
    det:'	26"X84" CRACKER MILL RH -MRF DHJ',
    partNum: 'X4-20862',
    matGrp:'PROFILE',
    revision:'1',
    unitsSold:'20',
    profitsMonth:'Rs. 1,50,000 (1%)',
    profitsOverall:'Rs. 3,50,000 (2%)',
  },
  {
    link: bearing,
    name: 'Bearing Housing',
    clients: ['Flender'],
    det:'OIL HYD.VCL ASSY 93" TCP-ATC TN',
    partNum: 'Z4-11917',
    matGrp:'ASSEMBLY',
    revision:'1',
    unitsSold:'55',
    profitsMonth:'Rs. 20,50,000 (20%)',
    profitsOverall:'Rs. 90,50,000 (1%)',
  },
  {
    link: knife,
    name: 'Knife Gate Valve',
    clients: ['Larsen & Toubro'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: yoke,
    name: 'Yoke',
    clients: ['Flender'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: latch,
    name: 'Latch',
    clients: ['Flender'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: ls,
    name: 'Latch Support',
    clients: ['Flender'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: valve,
    name: 'Valve',
    clients: ['Flender'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: db,
    name: 'Disk Bracket',
    clients: ['Siemens'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: sb,
    name: 'Sliding Bracket',
    clients: ['Siemens'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: frame,
    name: 'PCI Frame',
    clients: ['Siemens'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
  {
    link: wd,
    name: 'Wheel Disk',
    clients: ['Siemens'],
    det:'65.5" DTP CONV.+VCL+SMO W/CONTROLS',
    partNum: 'Z4-11917',
    matGrp:'WELD',
    revision:'2',
    unitsSold:'13',
    profitsMonth:'Rs. 2,50,000 (12%)',
    profitsOverall:'Rs. 20,50,000 (21%)',
  },
];
  const totalPages = Math.ceil(products.length / productsPerPage);
    
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  
  
  

  
  let activeData = [];
  let datasets = [];

  selectedClients.forEach((client) => {
    if (activeChart === "Units Produced") {
      activeData = activeData.concat(unitsLine[client] || []);
    } else if (activeChart === "Expenses") {
      activeData = activeData.concat(expensesLine[client] || []);
    } else if (activeChart === "Sales") {
      activeData = activeData.concat(salesLine[client] || []);
    } else if (activeChart === "P & L") {
      activeData = activeData.concat(PLLine[client] || []);
    }
  });

  selectedDesProducts.forEach((product) => {
    if (activeChart === "Units Produced") {
      activeData = activeData.concat(unitsLine[product] || []);
    } else if (activeChart === "Expenses") {
      activeData = activeData.concat(expensesLine[product] || []);
    } else if (activeChart === "Sales") {
      activeData = activeData.concat(salesLine[product] || []);
    } else if (activeChart === "P & L") {
      activeData = activeData.concat(PLLine[product] || []);
    }
  });
  
  const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966CC", "#FF8C00", "#7CFC00", "#FF1493", "#FF4500", "#00BFFF"];

 datasets = activeData.map((product, index) => {
  const colorIndex = index % colors.length;
  const borderColor = datasets[index] ? datasets[index].borderColor : colors[colorIndex];
  
  return {
    label: product.name,
    data: product.values,
    borderColor,
    fill: false,
  };
});

  
  const ChartData = {
    labels:["January", "February", "March", "April", "May", "June"],
  datasets: datasets,
  };
  const chartOptions2 = {
    responsive: true,
    
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: activeChart !== "Units Produced" ? activeChart : "Units Produced",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: `${activeChart} - ${ (selectedClients!==null)?selectedClients: "No Company"} - ${selectedDesProducts}`,
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  };
  


  
  const handleButtonClick = (chartType) => {
    setActiveChart(chartType);
  };

  return (
  <MDBContainer fluid style={screen}>
  <Header />
  <Banner title="PRODUCTS" />
  <MDBRow>
    <MDBCol md="2">
      <MDBCard style={cardStyle}>
        <MDBCardBody >
          <MDBCardTitle style={cardTitleStyle}>Filters</MDBCardTitle>
          <div style={checkboxContainer}>
            <label style={selectedFilterStyle}>Company</label>
            
            </div>
          <MDBCardText style={{ maxHeight: '150px', overflowY: 'auto' }}>
            
             
              <div>
                <div style={checkboxContainer}>
                  <input
                    type="checkbox"
                    id="larsen"
                    name="larsen"
                    onChange={() => handleClientSelection("Larsen & Toubro")}
                    style={
                      selectedClients.includes("Larsen & Toubro")
                        ? { ...checkboxStyle, ...checkedCheckboxStyle }
                        : checkboxStyle
                    }
                    checked={selectedClients.includes("Larsen & Toubro")}
                  />
                  <label htmlFor="larsen">Larsen &amp; Toubro</label>
                </div>
                

                <div style={checkboxContainer}>
                  <input
                    type="checkbox"
                    id="flender"
                    name="flender"
                    onChange={() => handleClientSelection("Flender")}
                    style={
                      selectedClients.includes("Flender")
                        ? { ...checkboxStyle, ...checkedCheckboxStyle }
                        : checkboxStyle
                    }
                    checked={selectedClients.includes("Flender")}
                  />
                  <label htmlFor="flender">Flender</label>
                </div>

                <div style={checkboxContainer}>
                  <input
                    type="checkbox"
                    id="siemens"
                    name="siemens"
                    onChange={() => handleClientSelection("Siemens")}
                    style={
                      selectedClients.includes("Siemens")
                        ? { ...checkboxStyle, ...checkedCheckboxStyle }
                        : checkboxStyle
                    }
                    checked={selectedClients.includes("Siemens")}
                  />
                  <label htmlFor="siemens">Siemens</label>
                </div>
                <div style={checkboxContainer}>
                  <input
                    type="checkbox"
                    id="larsen"
                    name="larsen"
                    onChange={() => handleClientSelection("Larsen & Toubro")}
                    style={
                      selectedClients.includes("Larsen & Toubro")
                        ? { ...checkboxStyle, ...checkedCheckboxStyle }
                        : checkboxStyle
                    }
                    checked={selectedClients.includes("Larsen & Toubro")}
                  />
                  <label htmlFor="larsen">Larsen &amp; Toubro</label>
                </div>
                

                <div style={checkboxContainer}>
                  <input
                    type="checkbox"
                    id="flender"
                    name="flender"
                    onChange={() => handleClientSelection("Flender")}
                    style={
                      selectedClients.includes("Flender")
                        ? { ...checkboxStyle, ...checkedCheckboxStyle }
                        : checkboxStyle
                    }
                    checked={selectedClients.includes("Flender")}
                  />
                  <label htmlFor="flender">Flender</label>
                </div>

                <div style={checkboxContainer}>
                  <input
                    type="checkbox"
                    id="siemens"
                    name="siemens"
                    onChange={() => handleClientSelection("Siemens")}
                    style={
                      selectedClients.includes("Siemens")
                        ? { ...checkboxStyle, ...checkedCheckboxStyle }
                        : checkboxStyle
                    }
                    checked={selectedClients.includes("Siemens")}
                  />
                  <label htmlFor="siemens">Siemens</label>
                </div>
              </div>
          </MDBCardText>

          <div style={checkboxContainer}>
              <label style={ selectedFilterStyle}>Product</label>
              
            </div> 
          <MDBCardText style={{ maxHeight: '150px', overflowY: 'auto' }}>

            

            <div  >
        {products.map((order) => (
          <div style={checkboxContainer} key={order.name}>
            <input
              type="checkbox"
              id={order.name}
              name={order.name}
              onChange={() => handleProductSelection(order.name)}
              style={
                selectedDesProducts.includes(order.name)
                  ? { ...checkboxStyle, ...checkedCheckboxStyle }
                  : checkboxStyle
              }
              checked={selectedDesProducts.includes(order.name)}
            />
            <label htmlFor={order.name}>{order.name}</label>
          </div>
        ))}
      </div>  
           
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>


     </MDBCol>
    <MDBCol md="9" >
    <MDBRow className='justify-content-center'>
          <MDBCol md='6' className='mt-3 d-flex justify-content-center'>
            <MDBCard className='shadow-3-strong rounded-9'>
              <MDBCardBody className='p-0 py-3'>
              <MDBBtn rounded className={`me-2 ms-2 ${activeChart === "Units Produced" ? "active" : ""}`} onClick={() => handleButtonClick("Units Produced")} style={filterButton}>
                  Units
                </MDBBtn> 
                <MDBBtn rounded className={`me-2 ${activeChart === "Expenses" ? "active" : ""}`} onClick={() => handleButtonClick("Expenses")} style={filterButton}>
                  Expenses
                </MDBBtn>
                <MDBBtn rounded className={`me-2 ${activeChart === "Sales" ? "active" : ""}`} onClick={() => handleButtonClick("Sales")} style={filterButton}>

                  Sales
                </MDBBtn>
                <MDBBtn rounded className={`me-2 ${activeChart === "P & L" ? "active" : ""}`} onClick={() => handleButtonClick("P & L")} style={filterButton}>

                  P&L
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
        <div>
        {activeChart === "Units Produced" && <Line data={ChartData} options={chartOptions2} />}
        {activeChart === "Expenses" && <Line data={ChartData} options={chartOptions2} />}
        {activeChart === "Sales" && <Line data={ChartData} options={chartOptions2} />}
        {activeChart === "P & L" && <Line data={ChartData} options={chartOptions2} />}
        </div>
    </MDBRow>

    </MDBCol>
    </MDBRow>
    <br></br>
    <br></br>

    <MDBRow >
      <p style={cardTitleStyle}>Product Description</p>
      <MDBCol md="3">
          {products
            .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
            .map((product, index) => (
              <MDBCard
                key={index}
                onClick={() => handleProductDesClick(product)}
                style={{ cursor: 'pointer' }}
              >
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="4">
                      <img
                        src={product.link}
                        alt={product.name}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardTitle className="fw-bold">{product.name}</MDBCardTitle>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}
          {/* Pagination */}
          <div className="d-flex justify-content-center mt-3">
            <MDBPagination className="my-4" circle>
              <MDBPageItem disabled={currentPage === 1}>
                <MDBPageNav className="page-link" onClick={() => handlePageChange(1)}>
                  First
                </MDBPageNav>
              </MDBPageItem>
              {[...Array(totalPages)].map((_, i) => (
                <MDBPageItem active={i + 1 === currentPage} key={i}>
                  <MDBPageNav className="page-link" onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                  </MDBPageNav>
                </MDBPageItem>
              ))}
              <MDBPageItem disabled={currentPage === totalPages}>
                <MDBPageNav className="page-link" onClick={() => handlePageChange(totalPages)}>
                  Last
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </div>
        </MDBCol>
        <MDBCol md="9">
          <MDBCard style={cardStyle}>
            <MDBCardBody>
              {selectedDesProduct ? (
                <div>
                <MDBCardTitle className="fw-bold">{selectedDesProduct.name}</MDBCardTitle>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={selectedDesProduct.link}
                    alt={selectedDesProduct.name}
                    style={{ width: '20%', height: 'auto' }}
                  />
                  <div style={{ marginLeft: '1rem' }}>
                    <p>{selectedDesProduct.description}</p>
                    <p>Client: {selectedDesProduct.clients.join(', ')}</p> 
                     <p>Description: {selectedDesProduct.det}</p>
  <p>Part Number: {selectedDesProduct.partNum}</p>
  <p>Material Group: {selectedDesProduct.matGrp}</p>
  <p>Revision: {selectedDesProduct.revision}</p>
  <p>Units Sold: {selectedDesProduct.unitsSold}</p>
  <p>Profit (Monthly): {selectedDesProduct.profitsMonth}</p>
  <p>Profit (Overall): {selectedDesProduct.profitsOverall}</p>
                    
                  </div>
                </div>
              </div>
              
              
              ) : (
                <p>No product selected</p>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </MDBRow>
</MDBContainer>
  );
};



const screen = {
   margin: 0,
   padding: 0,
   height: "100vh",
   overflow:'auto',
}

const cardStyle = {
  width: '100%',
  marginTop: '1rem',
  marginLeft: '0.5rem',
  borderRadius: '20px', 
  boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.1)',
};

const checkboxContainer =  {
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
};

const checkboxStyle = {
  backgroundColor: "white",
  border: "1px solid #4baa4c",
  borderRadius: "25%",
  width: "18px",
  height: "18px",
  marginRight: "0.5rem",
  appearance: "none",
  cursor: "pointer",
  position: "relative",
  outline: "none",
};

const checkedCheckboxStyle = {
  backgroundColor: "#4baa4c",
  borderColor: "#4baa4c",
};


const cardTitleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
};
const filterButton = {
  backgroundColor: "#4baa4c",
  color:"white",
};




  
const unitsLine = {
  "Larsen & Toubro": [
    { name: "X - Link", values: [100, 120, 80, 90, 110, 130] },
    { name: "Lever Arm", values: [90, 110, 100, 80, 120, 100] },
    { name: "Bearing Housing", values: [70, 80, 90, 70, 80, 90] },
    { name: "Knife Gate Valve", values: [80, 70, 60, 90, 70, 80] },
  ],
  Flender: [
    { name: "Yoke", values: [75, 60, 100, 10, 50, 13] },
    { name: "Latch", values: [60, 120, 37, 10, 80, 10] },
    { name: "Latch Support", values: [170, 50, 69, 100, 160, 15] },
    { name: "Valve", values: [80, 90, 60, 2, 120, 1] },
  ],
  Siemens: [
    { name: "Sliding Bracket", values: [90, 50, 80, 20, 80, 90] },
    { name: "Disk Bracket", values: [80, 100, 20, 80, 90, 100] },
    { name: "PCI Frame", values: [20, 80, 80, 90, 15, 75] },
    { name: "Wheel Disk", values: [70, 80, 80, 10, 110, 60] },
  ],
  "X - Link": [
    { name: "X - Link", values: [100, 120, 80, 90, 110, 130] },
  ],
  "Lever Arm": [
    { name: "Lever Arm", values: [90, 110, 100, 80, 120, 100] },
  ],
  "Bearing Housing": [
    { name: "Bearing Housing", values: [70, 80, 90, 70, 80, 90] },
  ],
  
};


const salesLine = {
  "Larsen & Toubro": [
    { name: "X - Link", values: [200, 20, 0, 56, 79, 1] },
    { name: "Lever Arm", values: [23, 234, 100, 80, 56, 432] },
    { name: "Bearing Housing", values: [710, 23, 90, 234, 54, 950] },
    { name: "Knife Gate Valve", values: [80, 70, 60, 90, 70, 80] },
  ],
  Flender: [
    { name: "Yoke", values: [75, 60, 100, 10, 50, 13] },
    { name: "Latch", values: [60, 120, 37, 10, 80, 10] },
    { name: "Latch Support", values: [170, 50, 69, 100, 160, 15] },
    { name: "Valve", values: [80, 90, 60, 2, 120, 1] },
  ],
  Siemens: [
    { name: "Disk Bracket", values: [90, 50, 80, 20, 80, 90] },
    { name: "Sliding Bracket", values: [80, 100, 20, 80, 90, 100] },
    { name: "PCI Frame", values: [20, 80, 80, 90, 15, 75] },
    { name: "Wheel Disk", values: [70, 80, 80, 10, 110, 60] },
  ],
};
const expensesLine = {
  "Larsen & Toubro": [
    { name: "X - Link", values: [10000, 12000, 2000, 9000, 11000, 1300] },
    { name: "Lever Arm", values: [9000, 11000, 10000, 8000, 22000, 10000] },
    { name: "Bearing Housing", values: [7000, 8000, 9000, 7000, 3000, 9000] },
    { name: "Knife Gate Valve", values: [8000, 7000, 2000, 9000, 7000, 8000] },
  ],
  Flender: [
    { name: "Yoke", values: [10000, 12000, 9000, 8000, 6000, 4000] },
    { name: "Latch", values: [5000, 7000, 9000, 3000, 6000, 2000] },
    { name: "Latch Support", values: [8000, 5000, 6000, 9000, 4000, 1000] },
    { name: "Valve", values: [9000, 10000, 2000, 4000, 6000, 8000] },
  ],
  Siemens: [
    { name: "Disk Bracket", values: [4000, 6000, 2000, 10000, 8000, 5000] },
    { name: "Sliding Bracket", values: [3000, 5000, 9000, 10000, 2000, 4000] },
    { name: "PCI Frame", values: [2000, 4000, 6000, 8000, 10000, 3000] },
    { name: "Wheel Disk", values: [7000, 9000, 10000, 6000, 8000, 1000] },
  ],
};


const PLLine = {
  "Larsen & Toubro": [
    { name: "X - Link", values: [10000, 12000, 2300, 9000, 11000, 12000] },
    { name: "Lever Arm", values: [9000, 11000, 10000, 8000, 12000, 10000] },
    { name: "Bearing Housing", values: [7000, 8000, -9000, 7000, 8000, 24000] },
    { name: "Knife Gate Valve", values: [8200, 7000, 6000, 9300, 7000, 8000] },
  ],
  Flender: [
    { name: "Yoke", values: [4000, 8000, 6000, 10000, 2000, 3000] },
    { name: "Latch", values: [3000, 5000, 2000, 4000, 1000, 6000] },
    { name: "Latch Support", values: [2000, 7000, 4000, 5000, 6000, 10000] },
    { name: "Valve", values: [7000, 10000, 5000, 2000, 3000, 8000] },
  ],
  Siemens: [
    { name: "Disk Bracket", values: [5000, 3000, 4000, 2000, 8000, 6000] },
    { name: "Sliding Bracket", values: [8000, 4000, 2000, 3000, 6000, 10000] },
    { name: "PCI Frame", values: [2000, 5000, 6000, 4000, 10000, 8000] },
    { name: "Wheel Disk", values: [10000, 7000, 9000, 5000, 3000, 2000] },
  ],
};


export default Products;