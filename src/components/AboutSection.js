import React from "react";
import "../App.css";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="about-section-container">
      {/* <h1>About Us</h1> */}
      <div class="block1"></div>
      <div class="block2">
        <div className="content-wrapper">
          <h1 id="about-header">About</h1>
          <p>
            This website serves to memorize Humphrey, who has gone onto better
            pastures.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
