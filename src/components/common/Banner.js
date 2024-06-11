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
  MDBCol,
} from "mdb-react-ui-kit";

import pageBg from "../../assets/images/pageBg.jpg";

export default function Banner(props) {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBContainer fluid style={{ margin: 0, padding: 0 }}>
      <div
        className="bg-image mt-2"
        style={{ height: window.innerHeight * 0.07 }}
      >
        <img src={pageBg} width="100%" className="img-fluid" alt="Sample" />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(75, 170, 76, 0.5)" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <p
              className="text-white m-0 fw-bolder"
              style={{ fontSize: 25, letterSpacing: 1 }}
            >
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

const headerItemName = {
  color: "#4baa4c",
  fontSize: 18,
};

const headerItemIcon = {
  color: "#4baa4c",
};

const headerBrandNameText = {
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "600",
  letterSpacing: 1.5,
  fontSize: 20,
};
const headerBrandNameCol = {
  width: winWidth * 0.251,
  backgroundColor: "#4baa4c",
  justifyContent: "center",
  borderTopRightRadius: 40,
  borderBottomRightRadius: 40,
  margin: 0,
  padding: 0,
};

const headerContainer = {
  padding: 0,
  height: 65,
};
