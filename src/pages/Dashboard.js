import axios from "axios";
import React, { useState, Component } from "react";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import pageBg from "../assets/images/pageBg.jpg";
import compEx from "../assets/images/comp_ex.png";
import TimelineComponent from "../components/Timeline";
import {
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Pie } from "react-chartjs-2";

import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

export const Dashboard = () => {
  const [selectedPurchaseOrder, setSelectedPurchaseOrder] = useState(null);

  const PurchaseOrderDetails = ({ purchaseOrder }) => {
    const imageStyle = {
      width: "90px",
      height: "90px",
      paddingTop: "10px",
      paddingLeft: "10px",
    };

    const productNameStyle = {
      fontWeight: "bold",
      marginLeft: "1rem",
      marginTop: "10px",
      marginBottom: "1px",
    };
    const infoStyle = {
      marginBottom: "1px",
      marginLeft: "1rem",
    };

    // data for the timeline
    const eventsData = [
      {
        title: "Profiling",
        completed: true,
        current: false,
        date: "15-06-2023",
        subEvents: [
          {
            title: "Raw Material Purchase",
            completed: true,
            current: false,
            date: "01-06-2023",
          },
          {
            title: "Profile cutting",
            completed: true,
            current: false,
            date: "10-06-2023",
          },
          {
            title: "Profile inspection",
            completed: true,
            current: false,
            date: "15-06-2023",
          },
        ],
      },
      {
        title: "Fit Up",
        completed: false,
        current: true,
        date: "05-06-2023",
        subEvents: [
          {
            title: "Fit Up",
            completed: false,
            current: false,
            date: "03-06-2023",
          },
          {
            title: "Fit Up Inspection",
            completed: false,
            current: true,
            date: "05-06-2023",
          },
        ],
      },
      {
        title: "Welding",
        completed: false,
        current: false,
        date: "25-06-2023",
        subEvents: [
          {
            title: "Welding",
            completed: false,
            current: false,
            date: "18-06-2023",
          },
          {
            title: "Welding Inspection",
            completed: false,
            current: false,
            date: "25-06-2023",
          },
        ],
      },
      {
        title: "Machining",
        completed: false,
        current: false,
        date: "30-07-2023",
        subEvents: [
          {
            title: "Testing",
            completed: false,
            current: false,
            date: "25-07-2023",
          },
          {
            title: "Pre-Machining",
            completed: false,
            current: false,
            date: "26-07-2023",
          },
          {
            title: "Machining",
            completed: false,
            current: false,
            date: "27-07-2023",
          },
          {
            title: "Machine Inspection",
            completed: false,
            current: false,
            date: "30-07-2023",
          },
        ],
      },
      {
        title: "Assembly",
        completed: false,
        current: false,
        date: "05-08-2023",
        subEvents: [
          {
            title: "Assembly",
            completed: false,
            current: false,
            date: "05-08-2023",
          },
        ],
      },
      {
        title: "Dispatch",
        completed: false,
        current: false,
        date: "10-08-2023",
        subEvents: [
          {
            title: "Painting",
            completed: false,
            current: false,
            date: "07-08-2023",
          },
          {
            title: "Final Inspection",
            completed: false,
            current: false,
            date: "08-08-2023",
          },
          {
            title: "Dispatch",
            completed: false,
            current: false,
            date: "10-08-2023",
          },
        ],
      },
    ];

    const calculateScheduleEfficiency = (events) => {
      let totalScore = 0;

      events.forEach((event) => {
        event.subEvents.forEach((subEvent) => {
          const [day, month, year] = subEvent.date.split("-");
          const dueDate = new Date(`${month}-${day}-${year}`);
          const today = new Date();

          if (subEvent.completed && dueDate <= today) {
            totalScore += 1;
          }
        });
      });

      const totalSubEvents = events.reduce(
        (total, event) => total + event.subEvents.length,
        0
      );
      const efficiencyScore = (totalScore / totalSubEvents) * 100;

      return efficiencyScore;
    };

    const getCurrentEvent = () => {
      let currentEvent = null;

      for (const event of eventsData) {
        if (event.current) {
          currentEvent = event;
          break;
        }
      }

      if (currentEvent) {
        let eventString = currentEvent.title;

        if (currentEvent.subEvents.length > 0) {
          const currentSubEvent = currentEvent.subEvents.find(
            (subEvent) => subEvent.current
          );
          if (currentSubEvent) {
            eventString += ` - ${currentSubEvent.title}`;
          }
        }

        return eventString;
      }

      return "No event currently in progress";
    };

    const [day, month, year] = purchaseOrder.dueDate.split(" ")[0].split("-");
    const dueDate = new Date(`${month}-${day}-${year}`);

    // Calculate the number of days until the dueDate
    const today = new Date();
    const timeDiff = dueDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const daysDiffStyle = {
      color: daysDiff < 0 ? "red" : "#4baa4c",
    };

    const pieChartData = {
      labels: ["Efficiency Score"],
      datasets: [
        {
          data: [
            calculateScheduleEfficiency(eventsData),
            100 - calculateScheduleEfficiency(eventsData),
          ],
          backgroundColor: ["#06bfda", "#01ffcb"],
        },
      ],
    };

    const pieChartOptions = {
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        tooltip: {
          disableHoverListener: true, // Disable tooltip for all data points
        },
      },
    };

    return (
      <MDBCard className="shadow-2-strong rounded-9">
        <MDBCardBody>
          <MDBRow>
            <MDBCol className="col-md-6">
              <MDBRow>
                <MDBCol className="col-md-5">
                  <img
                    src={compEx}
                    className="img-fluid"
                    alt="Sample"
                    style={imageStyle}
                  />
                  <p style={{ ...productNameStyle, ...daysDiffStyle }}>
                    Due in: {daysDiff} days
                  </p>
                  <p style={{ ...productNameStyle, ...daysDiffStyle }}>
                    {getCurrentEvent()}
                  </p>
                  <MDBBtn
                    rounded
                    className="mt-3"
                    style={{ ...Button, width: "150px" }}
                  >
                    Inspection Report
                  </MDBBtn>
                </MDBCol>
                <MDBCol className="col-md-7">
                  <div>
                    <p style={productNameStyle}> {purchaseOrder.productName}</p>
                    <p style={productNameStyle}> {purchaseOrder.number}</p>
                  </div>
                  <div>
                    <p style={infoStyle}>Department: {purchaseOrder.dept}</p>
                    <p style={infoStyle}>Due Date: {purchaseOrder.dueDate}</p>
                    <p style={infoStyle}>Part No: {purchaseOrder.partNo}</p>
                    <p style={infoStyle}>Pieces: {purchaseOrder.pcs}</p>
                    <p style={infoStyle}>Open Value: {purchaseOrder.openVal}</p>
                    <p style={infoStyle}>ASR PU</p>
                    <p style={infoStyle}>SO-30008252</p>
                    <p style={infoStyle}>SO Line - 20</p>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-md-5 mt-5">
                  <div
                    className="ms-1"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <Pie data={pieChartData} options={pieChartOptions} />
                  </div>
                  <p style={productNameStyle}>
                    Profit: {calculateScheduleEfficiency(eventsData)}%
                  </p>
                </MDBCol>
                <MDBCol className="col-md-7 mt-5">
                  <div
                    className="ms-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <Pie data={pieChartData} options={pieChartOptions} />
                  </div>
                  <p style={productNameStyle}>
                    Schedule: {calculateScheduleEfficiency(eventsData)}%
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol className="col-md-6">
              <div>
                <TimelineComponent events={eventsData} />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  };

  const purchaseOrders = [
    {
      number: "PPI12312194",
      partNo: "Z4-11917 (1)",
      dept: "PROFILING",
      assembly: "Main Assembly",
      dueDate: "12-06-2023 (overdue)",
      pcs: "2 pcs",
      openVal: "Rs 4,89,636",
      productName: "Bottom Steam Platten Assy",
    },
    {
      number: "PPI12312195",
      partNo: "X4-20862 (2)",
      dept: "WELDING",
      assembly: "Sub Assembly",
      dueDate: "26-06-2023 (today)",
      pcs: "3 pcs",
      openVal: "Rs 4,89,636",
      productName: "X- Link",
    },
    {
      number: "PPI12312196",
      partNo: "X4-20862 (1)",
      assembly: "Main Assembly",
      dept: "DISPATCH",
      dueDate: "27-06-2023(tmrw.)",
      pcs: "1 pcs",
      openVal: "Rs 3,64,984",
      productName: "Lever Arm",
    },
    {
      number: "PPI12312197",
      dept: "DISPATCH",
      partNo: "X4-20862 (1)",
      assembly: "Sub Assembly",
      dueDate: "01-07-2023 (later)",
      pcs: "2 pcs",
      openVal: "Rs 9,80,324",
      productName: "Bearing Housing",
    },
    // first
    {
      number: "PPI12312198",
      partNo: "X4-20862 (2)",
      dept: "FIT UP",
      assembly: "Sub Assembly",
      dueDate: "12-06-2023 ",
      pcs: "2 pcs",
      openVal: "Rs 4,89,636",
      productName: "Bottom Steam Platten Assy",
    },
    {
      number: "PPI12312199",
      partNo: "X4-20862 (1)",
      assembly: "Main Assembly",
      dept: "ASSEMBLY",
      dueDate: "23-06-2023 ",
      pcs: "3 pcs",
      openVal: "Rs 4,89,636",
      productName: "X- Link",
    },
    {
      number: "PPI12312200",
      partNo: "Z4-11917 (2)",
      dept: "MACHINING",
      assembly: "Sub Assembly",
      dueDate: "24-06-2023",
      pcs: "1 pcs",
      openVal: "Rs 3,64,984",
      productName: "Lever Arm",
    },
    {
      number: "PPI12312201",
      partNo: "Z4-11917 (2)",
      dept: "ASSEMBLY",
      assembly: "Main Assembly",
      dueDate: "01-07-2023",
      pcs: "2 pcs",
      openVal: "Rs 9,80,324",
      productName: "Bearing Housing",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const totalPages = Math.ceil(purchaseOrders.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = purchaseOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <MDBContainer fluid style={{ margin: 0, padding: 0, height: "100vh" }}>
      <Header />
      <Banner title="DASHBOARD" />

      <MDBContainer fluid style={{ flex: 1 }}>
        <MDBRow className="mt-3">
          {/* Revenue Card */}
          <MDBCol xxl="3">
            <MDBCard className="shadow-2-strong rounded-9">
              <MDBCardBody>
                <MDBCardTitle style={infoCardTitle}>Revenue</MDBCardTitle>
                <MDBCardText className="ms-3 mt-3">
                  <MDBRow>
                    <MDBCol className="col-md-8">
                      <p className="fw-bold" style={infoCardNum25}>
                        ₹ 50,32,561
                      </p>
                    </MDBCol>
                    <MDBCol className="col-md-4 mt-2">
                      <p className="fw-bold" style={infoCardProfitMarker}>
                        12%
                        <MDBIcon
                          fas
                          icon="caret-up"
                          className="ms-2"
                          size="xxl"
                        />
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="col-md-8">
                      <p className="fw-bold" style={infoCardNum25}>
                        ₹ 21,25,50,653
                      </p>
                    </MDBCol>
                    <MDBCol className="col-md-4 mt-2">
                      <p className="fw-bold" style={infoCardLossMarker}>
                        12%
                        <MDBIcon
                          fas
                          icon="caret-down"
                          className="ms-2"
                          size="xxl"
                        />
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* Profits Card */}
          <MDBCol xxl="3">
            <MDBCard className="shadow-2-strong rounded-9">
              <MDBCardBody>
                <MDBCardTitle style={infoCardTitle}>Profits</MDBCardTitle>
                <MDBCardText className="ms-3 mt-3">
                  <MDBRow>
                    <MDBCol className="col-6">
                      <p className="fw-bold" style={infoCardNum25}>
                        ₹ 5,32,561
                      </p>
                    </MDBCol>
                    <MDBCol className="col-3 mt-2">
                      <p className="fw-bold" style={profitsCardPerNum}>
                        (7.25%)
                      </p>
                    </MDBCol>
                    <MDBCol className="col-3 mt-2">
                      <p className="fw-bold" style={infoCardProfitMarker}>
                        12%
                        <MDBIcon
                          fas
                          icon="caret-up"
                          className="ms-2"
                          size="xxl"
                        />
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="col-6">
                      <p
                        className="fw-bold"
                        style={{
                          letterSpacing: 1,
                          color: "#4baa4c",
                          fontSize: window.innerWidth * 0.0119,
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        ₹ 2,25,50,653
                      </p>
                    </MDBCol>
                    <MDBCol className="col-3 mt-2">
                      <p className="fw-bold" style={profitsCardPerNum}>
                        (7.25%)
                      </p>
                    </MDBCol>
                    <MDBCol className="col-3 mt-2">
                      <p className="fw-bold" style={infoCardLossMarker}>
                        12%
                        <MDBIcon
                          fas
                          icon="caret-down"
                          className="ms-2"
                          size="xxl"
                        />
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* Performance Card */}
          <MDBCol xxl="3">
            <MDBCard className="shadow-2-strong rounded-9">
              <MDBCardBody>
                <MDBCardTitle style={infoCardTitle}>Performance</MDBCardTitle>
                <MDBCardText className="ms-3 mt-2">
                  <MDBRow>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={overallPerformanceNum}
                        >
                          91%
                        </p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardLossMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-down"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardNum25}
                        >
                          83%
                        </p>
                      </MDBRow>
                      <MDBRow
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="text-center"
                      >
                        <p style={performanceCardText}>Profiling</p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardProfitMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-up"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardNum25}
                        >
                          98%
                        </p>
                      </MDBRow>
                      <MDBRow
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="text-center"
                      >
                        <p style={performanceCardText}>Welding</p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardLossMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-down"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardNum25}
                        >
                          92%
                        </p>
                      </MDBRow>
                      <MDBRow
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="text-center"
                      >
                        <p style={performanceCardText}>Machining</p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardLossMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-down"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Orders Card */}
          <MDBCol xxl="3">
            <MDBCard className="shadow-2-strong rounded-9">
              <MDBCardBody>
                <MDBCardTitle style={infoCardTitle}>Orders</MDBCardTitle>
                <MDBCardText className="ms-3 mt-2">
                  <MDBRow>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={overallOrdersNum}
                        >
                          65/124
                        </p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardLossMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-down"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardNum25}
                        >
                          12
                        </p>
                      </MDBRow>
                      <MDBRow
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="text-center"
                      >
                        <p style={performanceCardText}>Delay</p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardProfitMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-up"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardNum25}
                        >
                          1
                        </p>
                      </MDBRow>
                      <MDBRow
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="text-center"
                      >
                        <p style={performanceCardText}>No profit</p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardProfitMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-up"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardNum25}
                        >
                          1357
                        </p>
                      </MDBRow>
                      <MDBRow
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="text-center"
                      >
                        <p style={performanceCardText}>Yearly</p>
                      </MDBRow>
                      <MDBRow>
                        <p
                          className="fw-bold text-center"
                          style={infoCardLossMarker}
                        >
                          12%
                          <MDBIcon
                            fas
                            icon="caret-down"
                            className="ms-2"
                            size="xxl"
                          />
                        </p>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* OPEN PURCHASE ORDERS */}
        <MDBRow className="mt-3">
          <MDBCol className="col-md-4">
            <MDBCard className="shadow-2-strong rounded-9">
              <MDBCardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <MDBCardTitle className="fw-bold" style={openPoTitle}>
                    Open Purchase Orders
                  </MDBCardTitle>
                  <MDBBtn
                    rounded
                    className="me-2 ms-2"
                    style={Button}
                    onPress={() => {
                      window.location.href = "/upload";
                    }}
                  >
                    Add PO
                  </MDBBtn>
                </div>
                <MDBCardText className="ms-1 mt-3 me-1">
                  {currentItems.map((order) => {
                    const [day, month, year] = order.dueDate
                      .split(" ")[0]
                      .split("-");
                    const dueDate = new Date(`${month}-${day}-${year}`);

                    // Calculate the number of days until the dueDate
                    const today = new Date();
                    const timeDiff = dueDate - today;
                    const daysDiff = Math.ceil(
                      timeDiff / (1000 * 60 * 60 * 24)
                    );

                    const daysDiffStyle = {
                      color:
                        daysDiff < 0
                          ? "red"
                          : daysDiff == 0
                          ? "#6100ff"
                          : daysDiff == 1
                          ? "#ff6b00"
                          : "#9932cc",
                      fontSize: winWidth * 0.0078,
                      margin: 0,
                      padding: 0,
                    };

                    const statusStyle = {
                      color:
                        order.dept === "DISPATCH"
                          ? "#9932cc"
                          : order.dept === "WELDING"
                          ? "#223bc9"
                          : order.dept === "PROFILING"
                          ? "red"
                          : order.dept === "FIT UP"
                          ? "#007fff"
                          : order.dept === "MACHINING"
                          ? "#4aa94b"
                          : "#ff6b00",
                      fontSize: winWidth * 0.007,
                      margin: 0,
                    };

                    return (
                      <MDBRow
                        key={order.number}
                        className="mt-2 pt-0 rounded-9"
                        style={POBody}
                        onClick={() => setSelectedPurchaseOrder(order)}
                      >
                        <MDBCol className="col-2 mt-2 mb-3 me-0 pe-0 pb-1">
                          <img
                            src={compEx}
                            className="img-fluid"
                            alt="Sample"
                          />
                        </MDBCol>
                        <MDBCol className="col-10 ps-4">
                          <MDBRow>
                            <MDBCol className="fw-bold col-9 text-center">
                              <p style={statusStyle}>{order.dept}</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol className="col-6">
                              <p style={POLeftText}>{order.number}</p>
                            </MDBCol>
                            <MDBCol className="col-6">
                              <p style={daysDiffStyle}>{order.dueDate}</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol className="col-6">
                              <p style={POLeftText}>{order.partNo}</p>
                            </MDBCol>
                            <MDBCol className="col-6">
                              <p style={POLeftText}>{order.assembly}</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol className="col-6">
                              <p style={POLeftText}>{order.pcs}</p>
                            </MDBCol>
                            <MDBCol className="col-6">
                              <p style={{ ...POLeftText, fontWeight: "bold" }}>
                                {order.openVal}
                              </p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol className="col-9 align-items-center d-flex justify-content-center">
                              <p style={POLeftText}>{order.productName}</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    );
                  })}
                </MDBCardText>

                <div className="d-flex justify-content-between align-items-center">
                  <MDBPagination className="my-4" circle>
                    <MDBPageItem disabled={currentPage === 1}>
                      <MDBPageNav
                        className="page-link"
                        onClick={() => handlePageChange(1)}
                      >
                        First
                      </MDBPageNav>
                    </MDBPageItem>
                    {[...Array(totalPages)].map((_, i) => (
                      <MDBPageItem active={i + 1 === currentPage} key={i}>
                        <MDBPageNav
                          className="page-link"
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </MDBPageNav>
                      </MDBPageItem>
                    ))}
                    <MDBPageItem disabled={currentPage === totalPages}>
                      <MDBPageNav
                        className="page-link"
                        onClick={() => handlePageChange(totalPages)}
                      >
                        Last
                      </MDBPageNav>
                    </MDBPageItem>
                  </MDBPagination>

                  <MDBBtn rounded style={{ ...Button, marginLeft: "auto" }}>
                    Summary
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="col-md-8">
            {selectedPurchaseOrder && (
              <PurchaseOrderDetails purchaseOrder={selectedPurchaseOrder} />
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

const POBody = {
  letterSpacing: 1,
  padding: 0,
  backgroundColor: "#E8E8E8",
  alignItems: "center",
  justifyContent: "center",
};

const POLeftText = {
  color: "black",
  fontSize: winWidth * 0.0075,
  margin: 0,
  padding: 0,
};

const openPoTitle = {
  fontSize: winWidth * 0.012,
  margin: 0,
  padding: 0,
};

const overallOrdersNum = {
  color: "#4baa4c",
  fontSize: winWidth * 0.015,
  margin: 0,
  padding: 0,
};

const overallPerformanceNum = {
  color: "#4baa4c",
  fontSize: winWidth * 0.02,
  margin: 0,
  padding: 0,
};

const performanceCardText = {
  color: "gray",
  fontSize: winWidth * 0.0068,
  margin: 0,
  padding: 0,
};

const profitsCardPerNum = {
  color: "#4baa4c",
  fontSize: winWidth * 0.0093,
  margin: 0,
  padding: 0,
};

const infoCardLossMarker = {
  letterSpacing: 1,
  color: "#FF0000",
  fontSize: winWidth * 0.0093,
  margin: 0,
  padding: 0,
};

const infoCardProfitMarker = {
  letterSpacing: 1,
  color: "#14FE32",
  fontSize: winWidth * 0.0093,
  margin: 0,
  padding: 0,
};

const infoCardNum25 = {
  letterSpacing: 1,
  color: "#4baa4c",
  fontSize: winWidth * 0.013,
  margin: 0,
  padding: 0,
};

const infoCardTitle = {
  fontSize: winWidth * 0.011,
  margin: 0,
  padding: 0,
};
const Button = {
  backgroundColor: "#4baa4c",
  color: "white",
};

export default Dashboard;
