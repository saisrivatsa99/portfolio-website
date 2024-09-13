import React from "react";
import "./wrappersStyles.css";

export default function CVCard(props) {
  return (
    <div className="exp-card-container">
      <div className="exp-duration">{props.duration}</div>
      <div className="exp-desc">
        <h2>{props.title}</h2>
        <h3>
          <a
            href={props.url.length > 0 ? props.url : "#"}
            target="__blank"
            rel="noopener noreferrer"
          >
            <span>{props.subtitle}</span>
          </a>
        </h3>
        <p>{props.desc}</p>
        <ul className="exp-skill-list">
          {props.descList.map((skill, skillIndex) => (
            <li key={skillIndex} className="exp-skill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
