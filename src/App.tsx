import React, { useState, useEffect, createContext } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import "./component/stepper/Stepper.css"
import "./style/mystyle.css";
import "./pages/landing_page/LandingPage.css";
import "./style/animation.css";
import "./pages/raise-req/CommonDrawer.css"
import Header from "./component/Header.tsx";
import SideBar from "./component/SideBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing_page/LandingPage.tsx";
import { Auth } from "./Auth.tsx";
export const locateContext = createContext<any>({});
// import Service from "./service/Service.tsx";
import { UserTrackRequest } from "./pages/track_req/UserTrackReq.tsx"
import { PackingRequest } from "./pages/track_req/ProjectLeadReq.tsx";
import {InventoryRequest}  from "./pages/track_req/InventoryLeadReq.tsx";
import { QualityLeadRequest } from "./pages/track_req/QualityLeadReq.tsx";
import './pages/raise-req/CommonDrawer.css'
import { PackerApprovalRequest } from "./pages/track_req/PackerApprovalReq.tsx";
import ComponenetLists from "./pages/packaging_list/ComponentList.tsx";
import OverAllDashboardRequest from "./pages/dashboard/OverAllDashboard";
import "./pages/track_req/CommonTrackReq.css";
import "./pages/raise-req/CommonDrawer.css";
import "./pages/landing_page/LandingPage.css";
import GroundCheckLists from "./pages/packer_checklist/GroundCheckList.tsx" 
import FlightCheckLists from "./pages/packer_checklist/FlightCheckList.tsx" 
import ConsumableCheckLists from "./pages/packer_checklist/ConsumableCheckList.tsx" 
import QualityGroundCheckLists from "./pages/quality_checklist/GroundCheckList.tsx" 
import QualityFlightCheckLists from "./pages/quality_checklist/FlightCheckList.tsx" 
import QualityConsumableCheckLists from "./pages/quality_checklist/ConsumableCheckList.tsx" 
import ScrollToTop from "./component/scrolltotop.tsx";
// import {PackerDashboardRequest} from "./pages/dashboard/TodayPacker.tsx";
// import  Yearly  from "./component/calendar/CalendarComplete/YearlyCal";
import Calendar from "./component/calendar/CALENDAR/src/Calendar.jsx";




const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const [empdetail, setEmpdetail] = useState({
    employee_id: "",
    employee_name: "",
    user_id: "",
    reports_to: "",
  });

  const [packerCheckList, setPackerCheckList] = useState("");
  const [selectedBar, setSelectedBar] = useState("Common");
  const [employeeRole, setEmployeeRole] = useState("");
  const [trackrequest, setTrackRequest] = useState([]);
  const [approvalRequest, setApprovalRequest] = useState([]);
  const [qualityApprovalRequestData, setQualityApprovalRequestData] = useState([]);

  const [packagingApprovalRequestData, setPackagingApprovalRequestData] = useState([]);
  const [inventoryApprovalRequestData, setInventoryApprovalRequestData] = useState([]);
  const [projectLeadApprovalRequestData, setProjectLeadApprovalRequestData] = useState([]);
  const [packerApprovalRequestData, setPackerLeadApprovalRequestData] = useState([]);


  const [drawer, setDrawer] = useState(false);
  const [editRequestStatus, setEditRequestStatus] = useState("");
  const [searchFilter, setSearchFilter] = useState("");



  const toggleMenu = () => {
    setIsOpenMenu((prevMenuState) => !prevMenuState);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Store the dark mode state in localStorage
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };



  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      const parsedDarkMode = JSON.parse(storedDarkMode);
      setDarkMode(parsedDarkMode);
    }
  }, []);

  return (
      <BrowserRouter>
      <ScrollToTop />

      <locateContext.Provider
          value={{
            empdetail: empdetail,
            setEmpdetail: setEmpdetail,
            selectedBar: selectedBar,
            setSelectedBar: setSelectedBar,
            employeeRole: employeeRole,
            setEmployeeRole: setEmployeeRole,
            darkMode:darkMode,
            setDarkMode: setDarkMode,
            trackrequest:trackrequest,
            setTrackRequest:setTrackRequest,
            approvalRequest:approvalRequest,
            setApprovalRequest:setApprovalRequest,
            drawer:drawer,
            setDrawer:setDrawer,
            editRequestStatus:editRequestStatus,
            setEditRequestStatus:setEditRequestStatus,
            searchFilter:searchFilter,
            setSearchFilter:setSearchFilter,
            qualityApprovalRequestData:qualityApprovalRequestData,
            setQualityApprovalRequestData:setQualityApprovalRequestData,
            packagingApprovalRequestData:packagingApprovalRequestData,
            setPackagingApprovalRequestData:setPackagingApprovalRequestData,
            inventoryApprovalRequestData:inventoryApprovalRequestData,
            setInventoryApprovalRequestData:setInventoryApprovalRequestData,
            projectLeadApprovalRequestData:projectLeadApprovalRequestData,
            setProjectLeadApprovalRequestData:setProjectLeadApprovalRequestData,
            packerApprovalRequestData:packerApprovalRequestData,
            setPackerLeadApprovalRequestData:setPackerLeadApprovalRequestData,
            packerCheckList:packerCheckList,
            setPackerCheckList:setPackerCheckList,
          }}
        >
          {/* <Service/> */}
{employeeRole&& (
        <Header
          darkMode={darkMode}
          isOpenMenu={isOpenMenu}
          toggleDarkMode={toggleDarkMode}
        />        
)}

        <SideBar
          darkMode={darkMode}
          isOpenMenu={isOpenMenu}
          toggleMenu={toggleMenu}
        >



      
          <Routes>
            <Route path="/Packaging_Management" element={<LandingPage/>} />'

            <Route path="/" element={<Auth />} /> 
            <Route path="/Packaging_Management/trackreq" element={<UserTrackRequest />} />
            <Route path="/Packaging_Management/packingrequests" element={<PackingRequest />} />
            <Route path="/Packaging_Management/inventorlead" element={<InventoryRequest />} />
            <Route path="/Packaging_Management/qualityapproval" element={<QualityLeadRequest />} />
            <Route path="/Packaging_Management/viewreq" element={<PackerApprovalRequest />} />
            <Route path="/groundcomponents" element={<ComponenetLists listType={"Ground Components"}/>} />
            <Route path="/flightcomponents" element={<ComponenetLists listType={"Flight Components"}/>} />
            <Route path="/consumablecomponents" element={<ComponenetLists listType={"Consumable Components"}/>} />
            <Route path="/Packaging_Management/dashboard" element={<OverAllDashboardRequest/>} />
            <Route path="/Packaging_Management/checklist/groundcomponent" element={<QualityGroundCheckLists/>} />
            <Route path="/Packaging_Management/checklist/flightcomponent" element={<QualityFlightCheckLists/>} />
            <Route path="/Packaging_Management/checklist/consumablecomponent" element={<QualityConsumableCheckLists/>} />

            <Route path="/Packaging_Management/checklist/groundcomponent/edit" element={<GroundCheckLists listType={"Ground Components"} />} />
            <Route path="/Packaging_Management/checklist/flightcomponent/edit" element={<FlightCheckLists listType={"Flight Components"} />} />
            <Route path="/Packaging_Management/checklist/consumablecomponent/edit" element={<ConsumableCheckLists listType={"Consumable Components"} />} />
            <Route path="/Packaging_Management/calendar" element={<Calendar/>} />

          </Routes>
        </SideBar>


        
        </locateContext.Provider>
      </BrowserRouter>
  );
};

export default App;
