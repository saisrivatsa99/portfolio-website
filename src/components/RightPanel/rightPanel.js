import React from "react";
import About from "../About/About.js";
import Experience from "../Experience/Experience.js";
import Education from "../Education/Education.js";
import Footer from "../Footer/Footer.js";


export default function RightPanel(){
    return(
        <div className="rightPanel">
            <About/>
            <Experience/>
            <Education/>
            <Footer/>
        </div>
    );
}
