import React from 'react';
import '../styles/contact.css';
// import envelope from '../assets/envelope.png';
import envelopeFront from '../assets/envelope-two-stamps.png';
import envelopeBack from '../assets/envelope.png';
import envelopeBackCover from '../assets/envelope-back-cover.png';
import envelopeClosed from '../assets/envelope-closed.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import paper from '../assets/paper.png';

export default function Contact(props) {

    const [message, setMessage] = React.useState({
        body: "",
        from: "",
        email: "",
    })

    const [paperStyle, setPaperStyle] = React.useState({
        animationName: "",
    })

    const [envelopeStyle, setEnvelopeStyle] = React.useState({
        isBack: false,
        img: envelopeFront,
        style: {
            animationName: ""
        }
    })
    const [coverStyle, setCoverStyle] = React.useState({
        zIndex: 0,
    })

    const [messageSentModalStyle, setMessageSentModalStyle] = React.useState({
        animationName: "",
        visibility: "hidden",
    })

    function handleSetMessage(e) {
        setMessage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleSendLetter() {
        setPaperStyle({
            animationDuration: '2s',
            animationName: "paperLeave",
        })
        setEnvelopeStyle({
            isBack: true,
            img: envelopeBack,
            style: {
                animationName: ""
            }
        })
        setTimeout(() => {
            setCoverStyle({
                zIndex: 3,
            })
        }, 1000)
        setTimeout(() => {
            setEnvelopeStyle({
                isBack: true,
                img: envelopeClosed,
                style: {
                    animationName: "envelopeLeave"
                }
            })
            setPaperStyle({
                animationName: ""
            })
        }, 2000);
        setTimeout(() => {
            setMessageSentModalStyle({
                animationName: "moveMessageSentModal",
            })
        }, 4300);
    }

    function handleOpenSendMessage() {
        setPaperStyle({
            animationName: "paperEnter"
        })
    }

    function handleClosePaper() {
        setPaperStyle({
            animationName: ""
        })
    }

    function handleCloseEnvelope() {
        props.setPage("");
    }

    return (
        <div className={`contact-modal-container modal-container`}>
            <div className="message-sent-modal" style={messageSentModalStyle}>
                <div>
                    <p>Message Sent!</p>
                    <p>I will respond as soon as I can!</p>
                </div>
                <button className="close-message-sent-modal-btn" onClick={() => props.setPage("")}>CLOSE</button>
            </div>
            <div className="envelope-container">
                {(envelopeStyle.isBack && envelopeStyle.style.animationName === "") &&
                     <img
                        style={coverStyle} 
                        className="envelope-back-cover" 
                        src={envelopeBackCover} />}
                <img className="envelope" src={envelopeStyle.img} style={envelopeStyle.style}/>
                {!envelopeStyle.isBack && <><a className="github-icon" target="_blank" href="https://www.github.com/johnnyyork13"><GitHubIcon /></a>
                <button className="close-envelope-btn" onClick={handleCloseEnvelope}>CLOSE</button>
                <a className="linkedIn-icon" target="_blank" href="https://www.linkedin.com/in/johnny-york-a2a64b287"><LinkedInIcon /></a>
                <p className="envelope-text">Johnny York</p>
                <p className="envelope-text">Rome, GA 30161</p>
                <p className="envelope-text"><a href="mailto:me@johnnyyork.dev">Email Me</a></p> 
                <p className="envelope-text"><a onClick={handleOpenSendMessage}>Send a Direct Message</a></p></>}
                <div className="paper-container" style={paperStyle}>
                    <button className="close-paper-btn" onClick={handleClosePaper}>CLOSE</button>
                    <img src={paper} className="paper"/>
                    <p className="dear-p">Dear Johnny,</p>
                    <textarea 
                        className="paper-body" 
                        type="text" 
                        name="body" 
                        placeholder='Your Message'
                        onChange={handleSetMessage}
                    ></textarea>
                    <p>Sincerely,</p>
                    <input 
                        className="paper-from" 
                        type="text" 
                        name="from" 
                        placeholder="Your Name" />
                    <br></br>
                    <span className="email-span"><p>P.S. You can reach me at</p><input type="email" name="email" placeholder="Your Email"/></span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a 
                        className="paper-send-btn" 
                        onClick={handleSendLetter}
                    >Send Letter</a>
                </div>
            </div>
        </div>
    )
}