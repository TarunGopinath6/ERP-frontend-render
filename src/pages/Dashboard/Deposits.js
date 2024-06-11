import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import Grid from "@mui/material/Grid";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            component="p"
            variant="h6"
            sx={{
              fontSize: "0.875rem",
              fontFamily: "Public Sans, sans-serif",
              fontWeight: 600,
              color: "rgb(33,43,54)",
            }}
          >
            Recent Deposits
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
        <Grid item xs={11}>
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
            +2.6 %
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "top" }}>
          <Typography
            component="p"
            variant="subtitle2"
            sx={{
              fontSize: "1.625rem",
              fontFamily: "Public Sans, sans-serif",
              color: "rgb(33,43,54)",
              fontWeight: 700,
            }}
          >
            18,354
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
