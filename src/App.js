import React, { useState} from "react";

import {Hero, About, Education, Experience, More} from "./components";
import {CV} from "./CV/CV";

const {hero, education, experience, languages, skills} = CV;


function App() {
  return (
    <div className="App">
        <Hero hero={hero} />
        <About hero={hero} />
        <Education education={education} />
        <Experience experience={experience} />
	      <More
        languages={languages}
        skills={skills}
      
	      />
    </div>
  );
}

export default App;