import { Navigate, Route, Routes } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import NavbarTest from "./components/NavbarTest";
/* import Education from "./components/Education"; */
import Home from "./components/Home";
import "./App.scss";
/* import Darkmode from "./components/Darkmode"; */
import { CV } from "./CV/CV";
/* import Experience from './components/Experience'; */
import Box from "./components/Box";



const {
  personalInfo,
  /* education, experience, languages, habilities, volunteer */
} = CV;

function App() {
  
  
  
  return (
    <div className="App">
      <NavbarTest />
      {/* <Darkmode/> */}

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
         {/*  <Route path="about" element={<About />} /> */}
         {/*  <Route path="education" element={<Education />} /> */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
      <PersonalInfo personalInfo={personalInfo} />
      <About about={personalInfo.about} />
      <Box/>
      {/* <Education education={education} />
      <Experience experience={experience}/> */}
    </div>
  );
}

export default App;
