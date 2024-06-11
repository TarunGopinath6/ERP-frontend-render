import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "92vh",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  fontFamily: "Public Sans, sans-serif",
};

const bigTitleStyle = {
  fontFamily: "Public Sans, sans-serif",
  fontSize: "1.625rem",
  fontWeight: "bold",
};

const smallTitleStyle = {
  fontFamily: "Public Sans, sans-serif",
  fontSize: "0.9rem",
};

const leftFlexGrid = {
  display: "flex",
  justifyContent: "flex-start",
};

const rightFlexGrid = {
  display: "flex",
  justifyContent: "flex-end",
};

const steps = [
  "Profiling",
  "Fit Up",
  "Welding",
  "Machining",
  "Assembly",
  "Dispatch",
];

const materialsRows = [
  { id: 1, name: "Welding Rod", qty: 2, std: "+1" },
  { id: 2, name: "Nuts", qty: 5, std: "std" },
  { id: 3, name: "50 mm Steel", qty: 2, std: "-1" },
  { id: 4, name: "50 mm Steel", qty: 2, std: "-1" },
  { id: 5, name: "50 mm Steel", qty: 2, std: "-1" },
  { id: 6, name: "50 mm Steel", qty: 2, std: "-1" },
  { id: 7, name: "50 mm Steel", qty: 2, std: "-1" },
];

const expensesRows = [
  { id: 1, name: "Welding Rod", qty: 2, amount: 500 },
  { id: 2, name: "Nuts", qty: 5, amount: 500 },
  { id: 3, name: "50 mm Steel", qty: 2, amount: 500 },
  { id: 4, name: "50 mm Steel", qty: 2, amount: 500 },
  { id: 5, name: "50 mm Steel", qty: 2, amount: 500 },
  { id: 6, name: "50 mm Steel", qty: 2, amount: 500 },
  { id: 7, name: "50 mm Steel", qty: 2, amount: 500 },
];
export default function BasicModal({ isOpen, handleClose, modalData }) {
  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <Grid container sx={style}>
          <Grid item xs={6} sx={(leftFlexGrid, { mb: 1 })}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={bigTitleStyle}
            >
              {modalData ? modalData.name : "console"}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={(rightFlexGrid, { mb: 1 })}>
            <Button variant="outlined" size="small">
              inspection report
            </Button>
          </Grid>
          <Grid item xs={3} sx={(rightFlexGrid, { mb: 1 })}>
            <Button variant="outlined" size="small">
              drawing
            </Button>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={(smallTitleStyle, { fontSize: "1rem" })}
            >
              {modalData ? modalData.description : "console"}
              {"Description"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={(smallTitleStyle, { fontSize: "1rem" })}
            >
              {modalData ? modalData.customer : "console"}
              {"Customer"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={(leftFlexGrid, { mb: 3 })}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={(smallTitleStyle, { fontSize: "1rem" })}
            >
              {modalData ? modalData.pieces : "console"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={smallTitleStyle}
            >
              {modalData ? modalData.ppi : "console"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={smallTitleStyle}
            >
              {modalData
                ? modalData.scheduleDate + " - " + modalData.dueDate
                : "Schedule Date"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={smallTitleStyle}
            >
              {modalData ? modalData.partNo : "Part No"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Public Sans, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              {modalData ? modalData.so + "/" + modalData.soLine : "console"}
              {"SO/SO Line"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Public Sans, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              {modalData ? modalData.pu : "console"}
              {"PU"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Public Sans, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              {modalData ? modalData.po + "/" + modalData.poLine : "console"}
              {"PO/PO Line"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Public Sans, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              {modalData ? modalData.assembly : "console"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Public Sans, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              {modalData ? modalData.po + "/" + modalData.poLine : "console"}
              {"Due in: xxx days"}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={leftFlexGrid}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Public Sans, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              {modalData ? modalData.value : "console"}
              {"Value"}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 6, mb: 2 }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Divider
            sx={{
              borderColor: "gray",
              borderWidth: 1,
              marginY: 2,
              width: "100%",
            }}
          />
          <Grid item xs={6} sx={{ p: 1 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid container xs={12}>
                <Grid item xs={12} sx={{ mb: 1 }}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={(smallTitleStyle, { fontWeight: "bold" })}
                  >
                    {"Materials"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TableContainer
                    elevation={0}
                    component={Paper}
                    style={{ maxHeight: 150 }}
                  >
                    <Table>
                      <TableBody>
                        {materialsRows.map((row) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.qty}</TableCell>
                            <TableCell>{row.std}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6} sx={{ p: 1 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
                borderRadius: "16px",
                boxShadow:
                  "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
              }}
            >
              <Grid container xs={12}>
                <Grid item xs={4} sx={{ mb: 1 }}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={(smallTitleStyle, { fontWeight: "bold" })}
                  >
                    {"Expenses"}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <KeyboardDoubleArrowUpRoundedIcon
                    sx={{
                      fontSize: 20,
                      color: "#00ff00",
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    sx={{
                      fontSize: "0.875rem",
                      fontFamily: "Public Sans, sans-serif",
                      color: "rgb(33,43,54)",
                      fontWeight: 600,
                    }}
                  >
                    + 2.6 % Profit
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TableContainer
                    elevation={0}
                    component={Paper}
                    style={{ maxHeight: 150 }}
                  >
                    <Table>
                      <TableBody>
                        {expensesRows.map((row) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.qty}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

// {modalData
//     ? console.log("modalData", modalData)
//     : console.log("unread")}
