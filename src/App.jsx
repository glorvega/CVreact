import { Navigate, Route, Routes } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import NavbarTest from "./components/NavbarTest";
import Education from "./components/Education";
import Home from "./components/Home";
import "./App.scss";
import Darkmode from "./components/Darkmode";
import { CV } from "./CV/CV";
/* import Experience from './components/Experience'; */
import Box from "./components/Box";
import { useSelector } from "react-redux";



const {
  personalInfo,
  /* education, experience, languages, habilities */
} = CV;

function App() {

  const mode = useSelector((state) => state.darkModeObject);
  const isdarkMode = mode.isdarkMode;
  
  return (
    <div className={isdarkMode ? 'AppDrk' : 'App'}>
      <NavbarTest />
      <Darkmode/>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
         {/*  <Route path="about" element={<About />} /> */}
          <Route path="education" element={<Education />} />
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
