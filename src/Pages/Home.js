import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import rocket from "../images/rocket_launch_.svg";

function Home() {
  return (
    <div className="home-container">
        <div className="home-text">
          <p>NASA images and videos</p>
          <Link to="/Pictures" className="home-btn">Discover</Link>
        </div>
        <img src={rocket} alt="rocket-illustration" className="rocket" />
    </div>
  );
}

export default Home;
