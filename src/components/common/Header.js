import React, { useState, Dimensions } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBCol
} from "mdb-react-ui-kit";

import pageBg from "../../assets/images/pageBg.jpg"

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  
  return (
    <MDBContainer fluid style={{margin:0, padding:0}}>
        <MDBNavbar expand="xxl" light bgColor="light" style={{padding:0}} >
            <MDBContainer fluid style={headerContainer}>
                <MDBCol className="col-md-2 h-100" style={headerBrandNameCol}>
                    <MDBNavbarBrand href="#" className='h-100' style={headerBrandNameText}>PRECISION PROFILES INDIA</MDBNavbarBrand>
                </MDBCol>
                
                <MDBNavbarToggler
                type="button"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowNav(!showNav)}
                >
                <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNav}>
                <MDBNavbarNav className="ms-5">
                    <MDBNavbarItem className="fw-bold me-5">
                    <MDBNavbarLink active aria-current="page" href="/#" style={headerItemName}>
                        <MDBIcon fas icon="home me-2" size='lg' style={headerItemIcon}/>
                        Dashboard
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem className="fw-bold me-5">
                    <MDBNavbarLink active aria-current="page" href="/performance" style={headerItemName}>
                        <MDBIcon fas icon="chart-pie me-2" size="lg" style={headerItemIcon}/>
                        Performance
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem className="fw-bold me-5">
                    <MDBNavbarLink active aria-current="page" href="products" style={headerItemName}>
                        <MDBIcon fas icon="shopping-bag me-2" size="lg" style={headerItemIcon}/>
                        Products
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem className="fw-bold me-5">
                    <MDBNavbarLink active aria-current="page" href="expenses" style={headerItemName}>
                        <MDBIcon fas icon="hand-holding-usd me-2" size="lg" style={headerItemIcon}/>
                        Expenses
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem className="fw-bold me-5">
                    <MDBNavbarLink active aria-current="page" href="inventory" style={headerItemName}>
                        <MDBIcon fas icon="cubes me-2" size="lg" style={headerItemIcon}/>
                        Inventory
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem className="fw-bold me-5">
                    <MDBNavbarLink active aria-current="page" href="admintemp" style={headerItemName}>
                        <MDBIcon fas icon="users me-2" size="lg" style={headerItemIcon}/>
                        Admin
                    </MDBNavbarLink>
                    </MDBNavbarItem>                
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    </MDBContainer>
  );
}

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

const headerItemName = {
    color:'#4baa4c', fontSize:winWidth*0.01
}

const headerItemIcon = {
    color:"#4baa4c"
}

const headerBrandNameText = {
    justifyContent:'center',
    alignItems:'center', 
    color:'white', 
    fontWeight:'600', 
    letterSpacing:1.5, 
    fontSize:winWidth*0.0112
}
const headerBrandNameCol = {
    width: winWidth*0.251,
    backgroundColor:'#4baa4c',
    justifyContent:'center',
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    margin:0,
    padding:0
}

const headerContainer = {
    padding:0, height:65,
}