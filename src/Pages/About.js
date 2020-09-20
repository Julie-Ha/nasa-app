import React from "react";
import './About.css';
import astronaut from "../images/astronaut.svg";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          <p>Application created with NASA API <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></p>
        </div>
        <img src={astronaut} alt="astronaut-illustration" className="astronaut" />
      </div>
    </div>
  );
}

export default About;
