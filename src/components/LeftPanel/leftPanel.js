import React from "react";
import "./leftPanel.css";

export default function LeftPanel(){
    return(
        <div className="leftPanel">
            <div className="intro-container">
                <div className="intro-pic">
                    <img src="/DP.jpg" alt="Portfolio Display Picture" />
                </div>
                <div className="intro-desc">
                    <h1>Srivatsa Pantangi</h1>
                    <h3>Full Stack Developer</h3>
                    <p>
                        Building robust and scalable full stack applications to 
                        deliver exceptional user experience.
                    </p>
                    <a className="intro-url" target="__blank" href="/Srivatsa_Pantangi_Resume.pdf">
                        <span>View Resume &#8594;</span>
                    </a>
                </div>
            </div>
        </div>
        
    );
}