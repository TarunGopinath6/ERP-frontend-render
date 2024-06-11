import axios from "axios";
import React, { Component } from "react";
import Header from "../components/common/Header"
import compEx from "..//assets/images/comp_ex.png"
import Banner from "../components/common/Banner"
import {
  MDBContainer,
} from "mdb-react-ui-kit";
import { Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import { faker } from "@faker-js/faker"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
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
        text: "Expenses"
      },
    },
  },
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Monthly Expenses of Precision Profiles"
    }
  }
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
  labels,
  datasets: [
    {
      label: "Raw materials",
      data: [150,140,123,89,190,220,210],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Peripherals",
      data: [170, 160, 140, 120, 200, 210, 190],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)"
    },
    {
      label: "Equipment",
      data: [130, 120, 110, 100, 150, 160, 140],
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)"
    },
    {
      label: "Maintenance ",
      data: [180, 170, 150, 130, 210, 220, 200],
      borderColor: "rgb(255, 159, 64)",
      backgroundColor: "rgba(255, 159, 64, 0.5)"
    },
    {
      label: "Electricity",
      data: [100, 90, 80, 70, 120, 130, 110],
      borderColor: "rgb(201, 203, 207)",
      backgroundColor: "rgba(201, 203, 207, 0.5)"
    },
    {
      label: "Labour",
      data: [160, 150, 130, 110, 190, 200, 180],
      borderColor: "rgb(0, 123, 255)",
      backgroundColor: "rgba(0, 123, 255, 0.5)"
    },
    {
      label: "miscellaneous ",
      data: [110, 100, 90, 80, 140, 150, 130],
      borderColor: "rgb(0, 255, 0)",
      backgroundColor: "rgba(0, 255, 0, 0.5)"
    },
  ]
}
export const Expenses = () => {
  return (
    <>
    <MDBContainer fluid style={{margin:0, padding:0}}>
    <Header />
    
    
    <Banner title="EXPENSES"/>
    </MDBContainer>

    <Paper sx={{ width: "90%", marginLeft:"5%", marginTop:"1%", height: "480px"}} elevation={4}>
    <Line options={options} data={data} />
    </Paper>

    
  
    </>
  );
};

export default Expenses;