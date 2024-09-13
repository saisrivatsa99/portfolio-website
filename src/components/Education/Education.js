import React from "react";
import { education} from "../../utils/constants.js";
import CVCard from "../wrapper/CVCard.js";
import "./educationStyles.css"

export default function Education(){
    return(
        <div id="education" className="edu-container">
        <section className="edu-section">
        <h2>Education</h2>
        <div>
          {education.map((edu, eduIndex) => (
            <CVCard
              key={eduIndex}
              duration={`${edu.dateFrom} - ${edu.dateTo}`}
              title={edu.title}
              subtitle={`${edu.institute} | ${edu.location}`}
              desc={`GPA: ${edu.gpa} / ${edu.maxGpa}`}
              descList={edu.relevantCourses}
              url={edu.url}
            />
          ))}
        </div>
      </section>
    </div>
    )
}