import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

function formatString(inputString) {
  // Convert the string to lowercase
  const lowercaseString = inputString.toLowerCase();

  // Remove spaces from the string
  const stringWithoutSpaces = lowercaseString.replace(/\s/g, "");

  // Return the formatted string
  return stringWithoutSpaces;
}

const mainMenuItems = [
  // { id: 1, name: "Open PO", icon: <DashboardIcon />, path: "/openpo" },
  { id: 2, name: "Performance", icon: <InsightsIcon />, path: "/performance" },
  { id: 3, name: "Products", icon: <AssignmentIcon />, path: "/products" },
  // { id: 4, name: "Expenses", icon: <BarChartIcon />, path: "/expenses" },
  // { id: 5, name: "Inventory", icon: <LayersIcon />, path: "/inventory" },
  { id: 6, name: "Admin", icon: <AssignmentIcon />, path: "/admin" },
];

export default function MainListItems(props) {
  const selectedItem = props.selectedItem;
  const [select, setSelect] = React.useState(0);

  const location = useLocation();
  const active = location.pathname;

  React.useEffect(() => {
    console.log("active", active.substring(1));
    setSelect(active.substring(1));
  }, [active]);

  return (
    <React.Fragment>
      {mainMenuItems.map((item) => (
        <ListItemButton
          key={item.id}
          // onClick={() => setSelect(item.id)}
          component={Link}
          to={item.path}
          sx={{
            // backgroundColor: item.name == selectedItem ? "#4baa4c" : "inherit",
            backgroundColor:
              formatString(item.name) == select
                ? "rgba(75,170,76,1)"
                : "inherit",
            borderRadius: "15px",
          }}
        >
          <ListItemIcon
            // sx={{ color: item.name == selectedItem ? "#ffffff" : "inherit" }}
            sx={{
              color: formatString(item.name) == select ? "#ffffff" : "inherit",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            // sx={{ color: item.name == selectedItem ? "#ffffff" : "inherit" }}
            sx={{
              color: formatString(item.name) == select ? "#ffffff" : "inherit",
            }}
            primaryTypographyProps={{
              style: {
                fontFamily: "Public Sans, sans-serif",
                fontSize: "0.875rem",
                fontWeight: "500",
              },
            }}
            primary={item.name}
          />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
}

// function SecondaryListItems() {
//   return (
//     <React.Fragment>
//       <ListSubheader component="div" inset>
//         Saved reports
//       </ListSubheader>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Current month" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Last quarter" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Year-end sale" />
//       </ListItemButton>
//     </React.Fragment>
//   );
// }
