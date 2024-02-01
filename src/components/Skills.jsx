import React from 'react';
import '../styles/skills.css';
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import javascriptLogo from '../assets/javascript-logo.svg';
import pythonLogo from '../assets/python-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import mongoLogo from '../assets/mongo-logo.svg';
import expressLogo from '../assets/express-logo.svg';
import nodeLogo from '../assets/node-logo.svg';
import linuxLogo from '../assets/linux-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import figmaLogo from '../assets/figma-logo.svg';
import adobeLogo from '../assets/adobe-logo.svg';

export default function Skills(props) {

    //skills html, css, javascript, python, react, mongoDB, express, nodeJS, linux, github

    const [skill, setSkill] = React.useState("");

    return (
        <div className="modal-container skills-modal-container">
            <div className="skills-content content">
                <p>My Skills</p>
                <div className="skill-display">{skill === "" ? "Hover over a skill to see its description." : skill}</div>
                <div className="skills-container">
                    <img className="skill" src={htmlLogo} onMouseEnter={() => setSkill("HTML5")}></img>
                    <img className="skill" src={cssLogo} onMouseEnter={() => setSkill("CSS3")}></img>
                    <img className="skill" src={javascriptLogo} onMouseEnter={() => setSkill("JavaScript")}></img>
                    <img className="skill" src={pythonLogo} onMouseEnter={() => setSkill("Python")}></img>
                    <img className="skill" src={reactLogo} onMouseEnter={() => setSkill("ReactJS")}></img>
                    <img className="skill" src={mongoLogo} onMouseEnter={() => setSkill("MongoDB")}></img>
                    <img className="skill" src={expressLogo} onMouseEnter={() => setSkill("Express")}></img>
                    <img className="skill" src={nodeLogo} onMouseEnter={() => setSkill("NodeJS")}></img>
                    <img className="skill" src={adobeLogo} onMouseEnter={() => setSkill("Adobe Photoshop")}></img>
                    <img className="skill" src={githubLogo} onMouseEnter={() => setSkill("GitHub")}></img>
                    <img className="skill" src={linuxLogo} onMouseEnter={() => setSkill("Linux")}></img>
                    <div className="skill" onMouseEnter={() => setSkill("TBD")}></div>
                    <div className="skill" onMouseEnter={() => setSkill("TBD")}></div>
                    <div className="skill" onMouseEnter={() => setSkill("TBD")}></div>
                    <div className="skill" onMouseEnter={() => setSkill("TBD")}></div>
                    <div className="skill" onMouseEnter={() => setSkill("TBD")}></div>
                    <div className="skill" onMouseEnter={() => setSkill("TBD")}></div>
                    <div className="skill" onMouseEnter={() => setSkill("TBD")}></div>
                </div>
            </div>
            <button className="close-container-btn close-skills-container-btn" onClick={() => props.setPage("")}>Close</button>
        </div>
    )
}