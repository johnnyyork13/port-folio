import React from 'react';

export default function ProjectTile(props) {

    return (
        <div className="project">
            <img className="project-thumbnail" src={props.thumbnail}></img>
            <div className="project-info">
                <div className="project-info-section">
                    {/* <p className="project-info-section-header">{props.name}</p> */}
                    <p className="project-info-section-body">{props.body}</p>
                    <a href={props.github} target="_blank">GitHub Link</a>
                    <a href={props.liveLink} target="_blank">View Live</a>
                </div> 
            </div>
        </div>
    )
}