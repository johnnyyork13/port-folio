import React from 'react';
import '../styles/bulletin.css';
import bulletinPattern from '../assets/bulletin-pattern.png';

export default function Bulletin(props) {

    return (
        <div className="bulletin-container">
            <p className="bulletin-header">Useful Information</p>
            <div className="bulletin">
                <div className="bulletin-section bulletin-left">
                    <div className="bulletin-pins-container bulletin-pins-container-left">
                        <div className="bulletin-pin-left"></div>
                        <div className="bulletin-pin-left"></div>
                    </div>
                </div>
                <div className="bulletin-section bulletin-top-right">
                    <div className="bulletin-pins-container bullet-pins-container-top-right">
                        <div className="bulletin-pin-top-right"></div>
                        <div className="bulletin-pin-top-right"></div>
                    </div>
                </div>
                <div className="bulletin-section bulletin-bottom-right">
                    <div className="bulletin-pins-container bullet-pins-container-bottom-right">
                        <div className="bulletin-pin-bottom-right"></div>
                        <div className="bulletin-pin-bottom-right"></div>
                    </div>
                </div>
            </div>
            <button 
                className="close-bulletin-container-btn"
                onClick={() => props.setPage("")}
            >Close</button>
        </div>
    )
}