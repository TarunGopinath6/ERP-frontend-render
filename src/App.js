import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoPage from "./components/common/NoPage";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Test from "./pages/Test";
import Dashboard from "./pages/Dashboard";
import PerformanceOld from "./pages/Performance";
import ProductsOld from "./pages/Products";
import Expenses from "./pages/Expenses";
import Inventory from "./pages/Inventory";
import AdminOld from "./pages/Admin";
import Login from "./pages/Login";
import ExcelUpload from "./pages/ExcelUpload";
import RequireAuth from "./components/common/RequireAuth";
import BarChart from "./pages/AppTest";
import Upload from "./pages/Upload";

import NewTest from "./pages/NewTest";
import SampleDash from "./pages/Dashboard/Dashboard";

// NEW PAGES
import OpenPO from "./pages/Dashboard/OpenPOPage";
import Performance from "./pages/Dashboard/Performance";
import Products from "./pages/Dashboard/Products";
import Admin from "./pages/Dashboard/Admin.js";

import axiosInstance from "./API/axios";
import axios from "axios";

import AdminTemp from "./pages/AdminTemp";
import InventoryTemp from "./pages/InventoryTemp";

axiosInstance.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    // prettier-ignore
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/performanceold" element={ <PerformanceOld /> }></Route>
          <Route exact path="/productsold" element={ <ProductsOld /> }></Route>
          <Route exact path="/expenses" element={ <Expenses /> }></Route>
          <Route exact path="/inventory" element={ <Inventory /> }></Route>

          <Route exact path="/inventorytemp" element={ <InventoryTemp /> }></Route>

          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/adminold" element={<AdminOld />}></Route>
          
          <Route exact path="/admintemp" element={<AdminTemp />}></Route>

          <Route exact path="/test" element={<Test />}></Route>
          <Route exact path="/NewTest" element={< NewTest />}></Route>
          <Route exact path="/SampleDash" element={< SampleDash />}></Route>

          {/* NEW PAGES */}
          <Route exact path="/openpo" element={< OpenPO />}></Route>
          <Route exact path="/performance" element={ <Performance /> }></Route>
          <Route exact path="/products" element={ <Products /> }></Route>
          <Route exact path="/admin" element={ <Admin /> }></Route>
          
          <Route path="/bar-chart" element ={<BarChart/>} />
          <Route exact path="/excel" element={<RequireAuth> <ExcelUpload /> </RequireAuth>}></Route>
          <Route exact path="/upload" element={<RequireAuth> <Upload /> </RequireAuth>}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
