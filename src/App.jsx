import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import NewsandEvents from "./pages/NewsandEvents";
import AffilliatedCollege from "./pages/AffilliatedCollege";
import MOUs from "./pages/MOUs";
import SAR from "./submenu/Reports/SAR";
import SIPE from "./submenu/Reports/SIPE";
import UPR from "./submenu/Reports/UPR";
import IPE from "./submenu/Reports/IPE";
import Service from "./submenu/CapacityBuilding/Service";
import Workshop from "./submenu/CapacityBuilding/Workshop";
import Presentation from "./submenu/CapacityBuilding/Presentation";
import Training from "./submenu/CapacityBuilding/Training";
import AssesmentTeam from "./submenu/Assesment/AssesmentTeam";
import Departments from "./submenu/Assesment/Departments";
import Faculty4 from "./submenu/Assesment/Faculty4";
import Program from "./submenu/Assesment/Program";
import Mannual from "./submenu/Downloads/Mannual";
import HecRule from "./submenu/Downloads/HecRule";
import Faculty from "./submenu/Functions/Faculty";
import ResearchPaper from "./pages/ResearchPaper";
import Proformas from "./submenu/Mphill-phd-performas/Proformas";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import HecPortal from "./submenu/Services/HecPortal";
import DegreeAttestation from "./submenu/Services/DegreeAttestation";
import AccreditationCouncil from "./submenu/Services/Accredition";
import Scholarships from "./submenu/Services/Scholarships";
import Gep from "./submenu/Downloads/Gep";
import EmployerSurvey from "./submenu/Services/EmployerSurvey";
import AlumniSurvey from "./submenu/Services/AlumniSurvey";
import SCE from "./submenu/Services/SCE";
import FacultyEvaluation from "./submenu/Services/Faculty-Surveys";


const App = () => {



  return (
    <>

        <Routes>
          <Route path="/login"  element={<Login />} />
          <Route path="/signup" element={<Signup />} />


          <Route element={<RootLayout/>} >

          <Route path="/" element={<Home />} />
          
          <Route path="/affiliated-colleges" element={<AffilliatedCollege />} />
          <Route path="/mous" element={<MOUs />} />

          {/*QEC Services */}
          <Route path="/qec-services/HEC-E-Portal" element={<HecPortal/>}/>
          <Route path="/qec-services/Degree-Attestaion" element={<DegreeAttestation/>}/>
          <Route path="/qec-services/Accredition-Councils" element={<AccreditationCouncil/>}/>
          <Route path="/qec-services/Scholarships" element={<Scholarships/>}/>
          <Route path="/qec-services/Employer-Surveys" element={<EmployerSurvey />} />
          <Route path="/qec-services/Alumni-Surveys" element={<AlumniSurvey />} />
          <Route path="/qec-services/Student-Evaluation" element={<SCE/>} />
          <Route path="/qec-services/Faculty-Surveys" element={<FacultyEvaluation/>} />


          {/* Reports (Protected) */}
          
          
          <Route path="/reports/forms/sar" element={<SAR />} />
          <Route path="/reports/forms/qecs" element={<SIPE />} />
          {/* Research Paper (Protected) */}
          {/* <Route path="/reports/forms/ResearchPaper" element={<ResearchPaper />} /> */}
          <Route path="/reports/forms/ypr" element={<UPR />} />
          <Route path="/reports/forms/ripe" element={<IPE />} />

          {/* <Route element={<PrivateRoute />}>
          </Route> */}
          
          

          {/* Capacity Building */}
          <Route path="/capacitybuilding/service" element={<Service />} />
          <Route path="/capacitybuilding/workshop" element={<Workshop />} />
          <Route path="/capacitybuilding/training" element={<Training />} />
          <Route
            path="/capacitybuilding/presentations"
            element={<Presentation />}
          />

          {/* Assessments */}
          <Route path="/assessments/departments" element={<Departments />} />
          <Route path="/assessments/programs" element={<Program />} />
          <Route path="/assessments/faculty" element={<Faculty4 />} />
          <Route
            path="/assessments/assessmentteam"
            element={<AssesmentTeam />}
          />

          {/* Functions */}
          <Route path="/functions/faculty-training" element={<Faculty />} />
          <Route path="/functions/News&Events" element={<NewsandEvents />} />

          {/* Downloads */}
          <Route path="/downloads/manual" element={<Mannual />} />
          <Route path="/downloads/hec-rules" element={<HecRule />} />
          <Route path="/downloads/gep-policy" element={<Gep/>} />

          {/* pro-formas  */}
          <Route path="/pro-formas" element={<Proformas />} />
          </Route>
        </Routes>
      

      <ToastContainer />
    </>
  );
};

export default App;
