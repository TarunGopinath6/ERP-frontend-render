import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBSpinner,
  MDBCardBody,
  MDBCardImage,
  
} from "mdb-react-ui-kit";
import logo from "../assets/images/logo.jpg";


import { useNavigate } from "react-router-dom";
import useAuth from '../utils/Auth';
import '../assets/styles/login.css'


export default function App() {

  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const handleSubmit = async (event) => {

    
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    let response = await login(data.get('phone'), data.get('password'))

    if (response["code"] === 200) {
      navigate("/");
    }
    else {
      alert(JSON.stringify(response["data"]));
    }
  };

  return (
    <>

 

<MDBCard >
<MDBCardBody>
    <MDBContainer className="my-8 gradient-form">

      <MDBRow>

        <MDBCol col='7' className="mb-9" style={{height:"250%"}}>
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={logo}
                style={{width: '275px'}} alt="logo" />
              {/* <h4 className="mt-1 mb-5 pb-1">We are Precision Profiles</h4> */}
            </div>

            {/* <p>Please login to your account</p> */}

          
            <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' className="mb-4"
          type="tel"
          id="form1Example1"
          label="Phone Number"
          name="phone"
          defaultValue={"0000000000"}/>
              <MDBInput wrapperClass='mb-4' type="password"
          id="form1Example2"
          label="Password"
          name="password"
          defaultValue={"erp-password"}/>

            <div className="text-center pt-1 mb-5 pb-1">
              {/* <MDBBtn type="submit" disabled={loading}  className="mb-4 w-100 gradient-custom-3"> */}
              <MDBBtn type="submit" disabled={loading}  className="mb-4 w-100 bg-success">
          {
            loading === true ?
              <MDBSpinner size='sm' role='status' tag='span' className='me-2' /> :
              "Sign in"
          }
        </MDBBtn>
            </div>
            </form>
          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          {/* <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4"> */}
          <div className="d-flex flex-column  justify-content-center bg-success h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h2 class="mb-4">We are more than just a company</h2>
              <p class="small mb-0" style={{color:"white", textAlign: "justify"}}>At Precision Profiles India, we are driven by our unwavering commitment to building quality into every aspect of our work. From fostering total employee involvement to eliminating waste, reducing costs, and fostering teamwork, we continuously strive for improvement.

Choose Precision Profiles India, where craftsmanship meets innovation, and witness the transformation of your projects into remarkable success stories.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </MDBCardBody>
    </MDBCard>
    </>
  );


  
  }