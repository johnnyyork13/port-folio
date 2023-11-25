import React from 'react';
import '../styles/contact.css';
// import envelope from '../assets/envelope.png';
import envelopeFront from '../assets/envelope-front.png';

export default function Contact(props) {

    const [message, setMessage] = React.useState({
        body: "",
        from: "",
        email: "",
    })
    const [animationClass, setAnimationClass] = React.useState({
        letter: "",
        envelope: "",
        button: "",
    })

    function handleSetMessage(e) {
        setMessage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleSendLetter() {
        console.log(message);
        setAnimationClass({
            letter: "move-letter",
            envelope: "move-envelope",
            button: "hide-btn"
        });
        setTimeout(() => {
            props.setPage("");
        }, 5000);
    }

    return (
        <div className={`contact-modal-container modal-container`}>
            <div className="envelope-front">
                <img src={envelopeFront} />
                <p className="envelope-text">Johnny York</p>
                <p className="envelope-text">me@johnnyyork.dev</p>
                <p className="envelope-text">Rome, GA</p>
            </div>
            <button className="send-message-btn">Send Me a Message</button>
        </div>
    )
}