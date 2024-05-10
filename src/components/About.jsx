import React from 'react';
import '../styles/modals.css';
import '../styles/about.css';
import {v4 as uuidv4} from 'uuid';

export default function About(props) {

    function statBar(score) {
        const scoreLimit = 10;
        const gridArr = [];
        for (let i = 0; i < scoreLimit; i++) {
            if (i < score) {
                gridArr.push({filled: true});
            } else {
                gridArr.push({filled: false});
            }
        }
        return gridArr;
    }

    const perception = statBar(6).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)
    const intelligence = statBar(6).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)
    const creativity = statBar(8).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)
    const passion = statBar(10).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)
    const teamwork = statBar(10).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)
    const humor = statBar(10).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)

    return (
        <div className="modal-container about-modal-container">
            <div className="about-content content">
                <aside className="about-sidebar">
                    <div className="about-img"></div>
                    <div className="about-sidebar-info-section">
                        <p className="about-header">Name:</p>
                        <p className="about-body">Johnny York</p>
                    </div>
                    <div className="about-sidebar-info-section">
                        <p className="about-header">Level:</p>
                        <p className="about-body">32</p>
                    </div>
                    <div className="about-sidebar-info-section">
                        <p className="about-header">Class:</p>
                        <p className="about-body">Full-Stack Developer</p>
                    </div>
                </aside>
                <section className="about-summary">
                    <div className="about-info-section">
                        <p className="about-info-header">About Me</p>
                        <p className="about-body">I'm Johnny York, a full stack developer with a passion for creating innovative solutions. Currently, I am studying at Mercer University where I am constantly honing my skills and expanding my knowledge in the tech world.

When I'm not behind my computer, you can find me in my woodworking shop creating unique pieces of furniture or getting lost in a good book. I also have a love for drawing pixel art and taking long rides on my cruiser bike through the beautiful countryside.</p>
                    </div>
                    <div className="about-info-section">
                        <p className="about-info-header">Character Stats</p>
                        <div className="about-stats-body">
                            <div className="about-stat">
                                <p className="stat-name">Perception</p>
                                <div className="stat-body">{perception}</div>
                            </div>
                            <div className="about-stat">
                                <p className="stat-name">Intelligence</p>
                                <div className="stat-body">{intelligence}</div>
                            </div>
                            <div className="about-stat">
                                <p className="stat-name">Creativity</p>
                                <div className="stat-body">{creativity}</div>
                            </div>
                            <div className="about-stat">
                                <p className="stat-name">Passion</p>
                                <div className="stat-body">{passion}</div>
                            </div>
                            <div className="about-stat">
                                <p className="stat-name">Teamwork</p>
                                <div className="stat-body">{teamwork}</div>
                            </div>
                            <div className="about-stat">
                                <p className="stat-name">Humor</p>
                                <div className="stat-body">{humor}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <button className="close-container-btn about-close-container-btn" onClick={() => props.setPage("")}>Close</button>
        </div>
    )
}