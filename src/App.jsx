import './App.css';
import { CV } from './CV/CV';
/* import { useState } from 'react'; */
import PersonalInfo from './components/PersonalInfo';
/* import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More'; */

const { personalInfo, /* about, education, experience, languages, habilities, volunteer */ } = CV;

function App() {
  return (
    <div className="App">
     <PersonalInfo personalInfo={personalInfo}/>
     {/* <About />
     <Education />
     <Experience />
     <More /> */}
    </div>
  );
}

export default App;
