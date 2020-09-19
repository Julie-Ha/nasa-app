import React from "react";
import astronaut from "../images/astronaut.svg";

function About() {
  return (
    <div>
      <div className="home-container">
        <div className="home-text">
          <p>Application created with NASA API <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></p>
        </div>
        <img src={astronaut} alt="astronaut-illustration" className="rocket" />
      </div>
    </div>
  );
}

export default About;
