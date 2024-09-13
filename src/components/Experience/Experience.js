import React from "react";
import { expArray} from "../../utils/constants.js";
import CVCard from "../wrapper/CVCard.js";
import "./expStyles.css"


export default function Experience(){
    return(
        <div id="experience" className="exp-container">
        <section className="exp-section">
        <h2>Experience</h2>
        <div>
          {expArray.map((exp, expIndex) => (
            <CVCard
              key={expIndex}
              duration={`${exp.dateFrom} - ${exp.dateTo}`}
              title={exp.title}
              subtitle={`${exp.company} | ${exp.location}`}
              desc={exp.desc}
              descList={exp.skills}
              url={exp.url}
            />
          ))}
        </div>
      </section>
    </div>
    );
}