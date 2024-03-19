import React from 'react';
import '../styles/projects.css';
import ProjectTile from './ProjectTile';
import viceLogo from '../assets/vice-logo.png';
import bloggyLogo from '../assets/bloggyai-logo.svg';
import wishboxLogo from '../assets/wishbox-logo.png';
import mercerLogo from '../assets/mercer-logo.png';
import pokemonLogo from '../assets/pokemon-logo.png';
import battleshipLogo from '../assets/battleship-logo.png';
import reactcvLogo from '../assets/reactcv-logo.png';

export default function Projects(props) {

    return (
        <div className="modal-container project-modal-container">
            <div className="projects-content content">
                <p className="projects-header">My Top Projects</p>
                <div className="projects-container">
                    <ProjectTile
                        thumbnail={mercerLogo} 
                        name={"MyBear"}
                        body={"Social media site designed for Mercer students."}
                        github={"https://www.github.com/johnnyyork13/bearbook"}
                        liveLink={"https://johnnyyork13.github.io/bearbook"}
                    />
                    <ProjectTile
                        thumbnail={viceLogo} 
                        name={"ViceWaves"}
                        body={"Small e-commerce site for SynthWave merchandise."}
                        github={"https://www.github.com/johnnyyork13/vicewaves"}
                        liveLink={"https://vicewaves.com"}
                    />
                    <ProjectTile
                        thumbnail={bloggyLogo} 
                        name={"BloggyAI"}
                        body={"Blog application that generates posts based on context provided by a user."}
                        github={"https://www.github.com/johnnyyork13/blog-api"}
                        liveLink={"http://johnnyyork13.github.io/blog-api"}
                    />
                    {/* <ProjectTile
                        thumbnail={wishboxLogo} 
                        name={"WishBox"}
                        body={"Gaming app that allows users to search for and save games to a wishlist."}
                        github={"https://www.github.com/johnnyyork13/react-digital-game-app"}
                        liveLink={""}
                    /> */}
                    <ProjectTile
                        thumbnail={pokemonLogo} 
                        name={"Pokemon Deck Builder"}
                        body={"Virtual Pokemon card deck building application."}
                        github={"https://www.github.com/johnnyyork13/pokemon-deck-builder"}
                        liveLink={"https://johnnyyork13.github.io/pokemon-deck-builder"}
                    />
                    {/* <ProjectTile
                        thumbnail={battleshipLogo} 
                        name={"Battleship"}
                        body={"Battleship simulator where a player can compete against the computer to sink each other's ships."}
                        github={"https://www.github.com/johnnyyork13/battleship"}
                        liveLink={"https://johnnyyork13.github.io/battleship/public/index.html"}
                    />
                    <ProjectTile
                        thumbnail={reactcvLogo} 
                        name={"ReactCV"}
                        body={"CV creator that transforms input into a stylish resume."}
                        github={"https://www.github.com/johnnyyork13/react-cv"}
                        liveLink={"https://johnnyyork13.github.io/react-cv"}
                    /> */}
                </div>
            </div>
            <button className="close-container-btn close-projects-container-btn" onClick={() => props.setPage("")}>Close</button>
        </div>
    )
}