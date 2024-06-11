
import React, { Component } from "react";
import Header from "../components/common/Header"
import Banner from "../components/common/Banner"
import { Paper } from "@mui/material";import GaugeChart from 'react-gauge-chart'
import {
  MDBContainer,
 
} from "mdb-react-ui-kit";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { Bar } from "react-chartjs-2"
import { Line } from "react-chartjs-2"
import { faker } from "@faker-js/faker"


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Expense vs Profit analytics"
    }
  }
}




const labels = ["January", "February", "March", "April", "May", "June", "July"]


export const data = {
  labels,
  datasets: [
    {
      label: "Expense",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Profit",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
}




export const data3 = {
  labels: ["Assembly","Assembly-D", "Machining ", "Machining-D ","Profiling", "Profiling-D", "Welding", "Welding-D","Dispatch","Dispatch-D"],
  datasets: [
    {
      label: "no of items",
      data: [12, 6,19, 3, 5, 2,7,3,2,1],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "red",
        "rgba(54, 162, 235, 0.2)",
        "#5738FF",
        "#FFFB86",
        '#E2DB1A',
        
        
        "#BEFF9D",
        '#48D700',
        "#FF72C2",
        "#FF0091"

      ],
      borderColor: [
        "rgba(255, 99, 132, 0.2)",
        "red",
        "rgba(54, 162, 235, 0.2)",
        "#5738FF",
        "#FFFB86",
        '#E2DB1A',
        
        
        "#BEFF9D",
        '#48D700',
        "#FF72C2",
        "#FF0091"
      ],
      borderWidth: 1
    }
  ]
}


export const options2 = {
  plugins: {
    title: {
      display: true,
      text: "Product delivery analytics"
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
}


export const data2 = {
  labels,
  datasets: [
    {
      label: "Late delivery",
      data: [3,4,5,0,7,4,0],
      backgroundColor: "rgb(255, 99, 132)"
    },
    {
      label: "Over Due",
      data:  [3,4,5,6,7,4,3],
      backgroundColor: "rgb(75, 192, 192)"
    },
    {
      label: "Dispatched on time",
      data:  [3,4,5,6,7,4,3],
      backgroundColor: "rgb(53, 162, 235)"
    }
  ]
}

export const Performance = () => {
  return (
    <>
    <MDBContainer fluid style={{margin:0, padding:0}}>
    <Header />
    
    <Banner title ="Performance"/>
    
    </MDBContainer>
    <div>
    <Paper sx={{ width: ' 97%', height:"400px", backgroundColor: '#F9F9F9' , marginLeft:"1%", marginTop:"1%", boxShadow:'2px'}}>
      <Doughnut data={data3} style={{ marginLeft:"5%", float:'left'}} elevation={3}/>   <Line options={options} data={data} style={{float:'right'}} elevation={3}/>  
    </Paper>

   
 
   
    </div>
    <div style={{marginTop:"3%",marginLeft:"15%  ", marginRight:"15%"}}>
    <Paper sx={{  height:"400px", backgroundColor: 'white'}} elevation={5}>
    <Bar options={options2} data={data2} style={{marginLeft:'11%'}}/>;
    </Paper>
    </div>
    </>
  );
};

export default Performance;