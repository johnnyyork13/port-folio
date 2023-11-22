import React from 'react';
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

export default function Skills(props) {

    //skills html, css, javascript, python, react, mongoDB, express, nodeJS, linux, github

    const [skill, setSkill] = React.useState("");

    return (
        <div className="modal-container">
            <div className="skills-content content">
                <p>Skill Deposits</p>
                <div className="skill-display">{skill === "" ? "Hover over a skill to check deposit." : skill}</div>
                <div className="skills-container">
                    <img className="skill" src={htmlLogo} onMouseEnter={() => setSkill("HTML")}></img>
                    <img className="skill" src={cssLogo} onMouseEnter={() => setSkill("CSS")}></img>
                    <img className="skill" src={javascriptLogo} onMouseEnter={() => setSkill("JavaScript")}></img>
                    <img className="skill" src={pythonLogo} onMouseEnter={() => setSkill("Python")}></img>
                    <img className="skill" src={reactLogo} onMouseEnter={() => setSkill("ReactJS")}></img>
                    <img className="skill" src={mongoLogo} onMouseEnter={() => setSkill("MongoDB")}></img>
                    <img className="skill" src={expressLogo} onMouseEnter={() => setSkill("Express")}></img>
                    <img className="skill" src={nodeLogo} onMouseEnter={() => setSkill("NodeJS")}></img>
                    <img className="skill" src={linuxLogo} onMouseEnter={() => setSkill("Linux")}></img>
                    <img className="skill" src={githubLogo} onMouseEnter={() => setSkill("GitHub")}></img>
                    <div className="skill"></div>
                    <div className="skill"></div>
                </div>
            </div>
            <button className="close-container-btn" onClick={() => props.setPage("")}>Close</button>
        </div>
    )
}