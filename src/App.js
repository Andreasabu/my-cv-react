import React, {useState} from "react";
import {CV} from "./CV/CV";
import Hero from './components/Hero';
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";

const {hero, education, experience,} = CV;


function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
        <Hero hero={hero} />
        <About about ={hero.aboutMe}/>
        <div className='btn-container'>
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}>Education</button>
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}>Experience</button>
        /</div>
        <div>
        {showEducation ? 
          <Education education={education} /> :
         
          <Experience experience={experience} />
        }
      </div>
      {/* <Languages languages= {languages} />
      <Skills skills={habilities} />
      <Volunteer volunteer={volunteer} /> */}
	    
    </div>
  );
}

export default App;