import React, {useState} from "react";
import {CV} from "./CV/CV";
import Hero from './components/Hero';


const {hero, education, experience, languages, skills} = CV;


function App() {
  return (
    <div className="App">
    <p>pintate</p>
        <Hero hero={hero} />
        {/* <About hero={hero} />
        <Education education={education} />
        <Experience experience={experience} />
	      <More */}
        {/* languages={languages}
        skills={skills} */}
      
	    
    </div>
  );
}

export default App;