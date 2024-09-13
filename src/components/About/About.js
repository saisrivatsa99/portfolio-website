import React from "react";
import { about } from "../../utils/constants.js";
import "./aboutStyles.css";

export default function About() {
  return (
    <div id="about" className="about-container">
      <section className="about-section">
        <h1>Hi There!</h1>
        {about.map((paraText, key) => (
          <p key={key}>{paraText}</p>
        ))}
      </section>
    </div>
  );
}
