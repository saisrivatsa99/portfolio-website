import React from "react";
import MailIcon from "../Icons/MailIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

export default function Contact(){
    return(
        <div className="ContactPanel">
            <ul className="contact-list">
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                title="LinkedIn Icon"
                href="https://www.linkedin.com/in/srivatsa-pantangi"
              >
                <LinkedInIcon isDark={true} />
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                title="Github Icon"
                href="https://github.com/saisrivatsa99"
              >
                <GithubIcon isDark={true} />
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                title="Email Icon"
                href="mailto:pantangisrivatsa@gmail.com"
              >
                <MailIcon isDark={true} />
              </a>
            </li>
            </ul>
        </div>
        
    );
}