import React from 'react';
import '../styles/modals.css';
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
    const passion = statBar(9).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)
    const teamwork = statBar(10).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)
    const humor = statBar(10).map((e) => <div key={uuidv4()} className={`score-grid ${e.filled ? 'score-grid-filled' : 'score-grid-empty'}`}></div>)

    return (
        <div className="about-container container">
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
                        <p className="about-body">Full-stack Developer</p>
                    </div>
                </aside>
                <section className="about-summary">
                    <div className="about-info-section">
                        <p className="about-header">Character Summary:</p>
                        <p className="about-body">Currently studying Software Application Development at Mercer University. 
                            While not building modern, responsive web applications, this player enjoys woodworking, reading, and riding his motorcycle.</p>
                    </div>
                    <div className="about-info-section">
                        <p className="about-info-header">Character Stats:</p>
                        <p className="about-stats-body">
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
                        </p>
                    </div>
                </section>
            </div>
            <button className="close-container-btn" onClick={() => props.setPage("")}>Close</button>
        </div>
    )
}