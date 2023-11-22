import React from 'react';

export default function Projects(props) {

    return (
        <div className="modal-container">
            <div className="projects-content content">
                <p className="projects-header">Exercises (projects I've worked on)</p>
                <div className="projects-container">
                    <div className="project">
                        <img className="project-thumbnail"></img>
                        <div className="project-info">
                            <div className="project-info-section">
                                <p className="project-info-section-header">BloggyAI</p>
                                <p className="project-info-section-body">Blog application that creates blog posts based on a prompt by a user.</p>
                                <a href="https://www.github.com/johnnyyork13/blog-api" target="_blank">GitHub Link</a>
                                <a href="" target="_blank">View Live</a>
                            </div> 
                        </div>
                    </div>
                    <div className="project">
                        <img className="project-thumbnail"></img>
                        <div className="project-info">
                            <div className="project-info-section">
                                <p className="project-info-section-header">WishBox</p>
                                <p className="project-info-section-body">Gaming app that allows users to search for and save games to a wishlist.</p>
                                <a href="https://www.github.com/johnnyyork13/react-digital-game-app" target="_blank">GitHub Link</a>
                                <a href="" target="_blank">View Live</a>
                            </div> 
                        </div>
                    </div>
                    <div className="project">
                        <img className="project-thumbnail"></img>
                        <div className="project-info">
                            <div className="project-info-section">
                                <p className="project-info-section-header">Pokemon Deck Builder</p>
                                <p className="project-info-section-body">Virtual Pokemon card deck building app allowing users to search and sort their pokemon cards.</p>
                                <a href="https://www.github.com/johnnyyork13/pokemon-deck-builder" target="_blank">GitHub Link</a>
                                <a href="https://johnnyyork13.github.io/pokemon-deck-builder" target="_blank">View Live</a>
                            </div> 
                        </div>
                    </div>
                    <div className="project">
                        <img className="project-thumbnail"></img>
                        <div className="project-info">
                            <div className="project-info-section">
                                <p className="project-info-section-header">Battleship</p>
                                <p className="project-info-section-body">Battleship simulator where a player can compete against the computer to sink each other's ships.</p>
                                <a href="https://www.github.com/johnnyyork13/battleship" target="_blank">GitHub Link</a>
                                <a href="https://johnnyyork13.github.io/battleship/public/index.html" target="_blank">View Live</a>
                            </div> 
                        </div>
                    </div>
                    <div className="project">
                        <img className="project-thumbnail"></img>
                        <div className="project-info">
                            <div className="project-info-section">
                                <p className="project-info-section-header">ReactCV</p>
                                <p className="project-info-section-body">Simple CV creator built with React that transforms input into a stylish resume.</p>
                                <a href="https://www.github.com/johnnyyork13/react-cv" target="_blank">GitHub Link</a>
                                <a href="https://johnnyyork13.github.io/react-cv" target="_blank">View Live</a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <button className="close-container-btn" onClick={() => props.setPage("")}>Close</button>
        </div>
    )
}