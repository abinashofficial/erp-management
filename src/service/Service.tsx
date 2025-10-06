import  React from 'react';
import { useFrappeGetDocList, useFrappeGetDoc } from "frappe-react-sdk";
import { useEffect, useState, useContext } from "react";
import { locateContext } from "../App";

interface Employee {
  employee_name: string;
  employee: string;
  image: string;
  reporting_managers_email:string;
}

interface Role {
  role: string; // Assuming role is a string, adjust it according to your data structure
  // Add other properties if there are any
}

interface PackagingRequest {
  name: string;
  employee_id: string;
  employee_name: string;
  package_type: string;
  status: string;
  purpose: string;
  transport_from: string;
  transport_to: string;
  transport_mode: string;
  packer_name: string;
  image_1: null;
  image_2:null;
  image_3:null;
  image_4:null;
  image_5:null;
  image_6:null;
  reports_to:string;
  created_request_date:string;
  created_request_time:string;
  dashboard_status:string;

}



const Service: React.FC = () => {
        const cookiesArray = document.cookie.split("; ");
  const cookieData: { [key: string]: string } = {};
  
  cookiesArray.forEach((cookie) => {
    const [key, value] = cookie.split("=");
    cookieData[key] = decodeURIComponent(value);
  });

  const userIdCookie = cookieData.user_id;

  console.log(userIdCookie, "userIdCookie")



  const { empdetail, setEmpdetail, setEmployeeRole, setTrackRequest, setQualityApprovalRequestData, setPackagingApprovalRequestData, setInventoryApprovalRequestData, setProjectLeadApprovalRequestData, setPackerLeadApprovalRequestData } = useContext(locateContext);
  const [roles, setRoles] = useState<string[]>([]); // Assuming roleValue is of type string



  const userDocType = "User";
  const parent = userIdCookie;
  const { data } = useFrappeGetDoc(userDocType, parent);

  useEffect(() => {
    if (data && data.roles && data.roles.length > 0) {
      console.log(data, "useridcookie")

      const temp = data.roles.map((roleObj: Role) => roleObj.role);
      setRoles(temp);
    }
  }, [data]);


  useEffect(() => {
    async function fetchData() {
      try {
        const fields = '[]';
        const filters = '[["Packaging Request","created_request_date","Timespan","today"]]';

        
        const response = await fetch(`api/method/frappe.desk.reportview.get_count?doctype=Packaging+Request&fields=${fields}&filters=${filters}&distinct=false`);

                
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        console.log('Over All Component Count', jsonData);

        // setData1(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData() {
      try {
        const fields = '[]';
        const filters = '[["Packaging Request","created_request_date","Timespan","today"],["Packaging Request","package_type","=","Flight Components"]]';

        
        const response = await fetch(`api/method/frappe.desk.reportview.get_count?doctype=Packaging+Request&fields=${fields}&filters=${filters}&distinct=false`);

                
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        console.log('Today Flight Component Count', jsonData);

        // setData1(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const fields = '[]';
        const filters = '[["Packaging Request","created_request_date","Timespan","today"],["Packaging Request","package_type","=","Consumable Components"]]';

        
        const response = await fetch(`api/method/frappe.desk.reportview.get_count?doctype=Packaging+Request&fields=${fields}&filters=${filters}&distinct=false`);

                
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        console.log('Today Consumable Component', jsonData);

        // setData1(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const fields = '[]';
        const filters = '[["Packaging Request","created_request_date","Timespan","today"],["Packaging Request","package_type","=","Ground Components"]]';

        
        const response = await fetch(`api/method/frappe.desk.reportview.get_count?doctype=Packaging+Request&fields=${fields}&filters=${filters}&distinct=false`);

                
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        console.log('Today Ground Component', jsonData);

        // setData1(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);



  const { data: empid } = useFrappeGetDocList<Employee>("Employee", {
    fields: ["employee_name", "employee", "image", "reporting_managers_email"],
    filters: [["company_email", "=", userIdCookie]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });


  const { data: trackRequestData } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [
      "name",
      "employee_id",
      "employee_name",
      "package_type",
      "status",
      "purpose",
      "transport_from",
      "transport_to",
      "transport_mode",
    ],
    filters: [["employee_id", "=", empdetail.employee_id]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  const { data: overAllComponentToday } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [],
    filters: [],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  const { data: overAllFlightComponentToday } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [],
    filters: [["package_type", "=", "Flight Components"]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  const { data: overAllGroundComponentToday } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [],
    filters: [["package_type", "=", "Ground Components"]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  const { data: overAllConsumableComponentToday } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [],
    filters: [["package_type", "=", "Consumable Components"]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  if (overAllComponentToday && overAllComponentToday.length > 0) {
    console.log(overAllComponentToday.length, "overAllComponent")
  }

  if (overAllFlightComponentToday && overAllFlightComponentToday.length > 0) {
    console.log(overAllFlightComponentToday.length, "overAllFlightComponent")
  }

  if (overAllGroundComponentToday && overAllGroundComponentToday.length > 0) {
    console.log(overAllGroundComponentToday.length, "overAllGroundComponent")
  }

  if (overAllConsumableComponentToday && overAllConsumableComponentToday.length > 0) {
    console.log(overAllConsumableComponentToday.length, "overAllConsumableComponent")
  }



  const { data: projectLeadApprovalRequestData } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [
      "name",
      "employee_id",
      "employee_name",
      "package_type",
      "status",
      "purpose",
      "transport_from",
      "transport_to",
      "transport_mode",
      "packer_name",
    ],
    filters: [["status", "in", ["Pending","Project Lead Approved", "Project Lead Rejected"]], ["reports_to", "=", userIdCookie]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });


  const { data: inventoryApprovalRequestData } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [
      "name",
      "employee_id",
      "employee_name",
      "package_type",
      "status",
      "purpose",
      "transport_from",
      "transport_to",
      "transport_mode",
      "packer_name",
    ],
    filters: [["status", "in", ["Project Lead Approved","Inventory Lead Approved", "Inventory Lead Rejected"]]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  const { data: packagingApprovalRequestData } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [
      "name",
      "employee_id",
      "employee_name",
      "package_type",
      "status",
      "purpose",
      "transport_from",
      "transport_to",
      "transport_mode",
      "packer_name",
    ],
    filters: [["status", "in", ["Inventory Lead Approved","Approved for Packaging", "Packer Rejected", "Packed", "Repack"]]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  const { data: packerRequestData } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: [
      "name",
      "employee_id",
      "employee_name",
      "package_type",
      "status",
      "purpose",
      "transport_from",
      "transport_to",
      "transport_mode",
      "packer_name",
    ],
    filters: [["status", "in", ["Approved for Packaging", "Packer Rejected", "Packed"]]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });

  const { data: qualityApprovalRequestData } = useFrappeGetDocList<PackagingRequest>("Packaging Request", {
    fields: ["*"],
    filters: [["status", "in", ["Packed","Quality Lead Approved", "Quality Lead Rejected", "Repack"]]],
    orderBy: {
      field: "creation",
      order: "desc",
    },
  });
  



  if (empid && empid.length > 0) {
    console.log("employee_name:", empid[0].employee);
  } else {
    console.log("No employee data found");
  }

  // console.log("Track Request Data:", trackRequestData);



  if (trackRequestData && trackRequestData.length > 0) {
    console.log("Track Request Data:", trackRequestData);
  } else {
    console.log("Track Request Data Not Found");
  }

  if (qualityApprovalRequestData) {
    console.log("qualityApprovalRequestData:", qualityApprovalRequestData);
  } else {
    console.log("qualityApprovalRequestData Found");
  }


  // console.log("packagingApprovalRequestData:", packagingApprovalRequestData);


  useEffect(() => {
    if (empid && empid.length > 0) {
      setEmpdetail({
        ...empdetail,
        employee_id: empid[0].employee,
        employee_name: empid[0].employee_name,
        user_id: userIdCookie,
        reports_to: empid[0].reporting_managers_email,
        // image: empid[0].image,
      });
    }
    if (trackRequestData && trackRequestData.length > 0) {
      setTrackRequest(trackRequestData);
    }
    if (qualityApprovalRequestData && qualityApprovalRequestData.length > 0) {
      setQualityApprovalRequestData(qualityApprovalRequestData);
    }
    if (packagingApprovalRequestData && packagingApprovalRequestData.length > 0) {
      setPackagingApprovalRequestData(packagingApprovalRequestData);
    }
    if (inventoryApprovalRequestData && inventoryApprovalRequestData.length > 0) {
      setInventoryApprovalRequestData(inventoryApprovalRequestData);
    }
    if (projectLeadApprovalRequestData && projectLeadApprovalRequestData.length > 0) {
      setProjectLeadApprovalRequestData(projectLeadApprovalRequestData);
    }
  
    if (packerRequestData && packerRequestData.length > 0) {
      setPackerLeadApprovalRequestData(packerRequestData);
    }
    
  }, [userIdCookie, empid, trackRequestData, projectLeadApprovalRequestData, inventoryApprovalRequestData, packagingApprovalRequestData, qualityApprovalRequestData, packerRequestData ]);



  useEffect(() => {
    if (roles && roles.length > 0) {
      if (roles.includes("Quality Lead")) {
        setEmployeeRole("qualitylead");
      } else if (roles.includes("Packer")) {
        setEmployeeRole("packer");
      } else if (roles.includes("Inventory Lead")) {
        setEmployeeRole("inventorylead");
      } else if (roles.includes("Project Lead")) {
        setEmployeeRole("projectlead");
      } else if (roles.includes("Employee")) {
        setEmployeeRole("employee");
      }
    } 
  }, [roles]);


  return null; // or any JSX element
};
export default Service;