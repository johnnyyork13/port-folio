import React from 'react';
import '../styles/contact.css';
// import envelope from '../assets/envelope.png';

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
        <div className={`contact-modal-container modal-container ${animationClass.envelope}`}>
            <div className="letter-container">
                <div className={`contact-letter ${animationClass.letter}`}>
                    <div className="contact-content">
                        <p className="contact-content-header">Dear Johnny,</p>
                        <div className="contact-body-container contact-input">
                            <textarea
                                placeholder="Your Message"
                                onChange={handleSetMessage}
                                className="contact-body"
                                name="body"
                                value={message.body}
                            ></textarea>
                        </div>
                        <div className="contact-from-container contact-input">
                            <label htmlFor="from">Sincerely,</label>
                            <input
                                type="text"
                                onChange={handleSetMessage}
                                className="contact-from"
                                name="from"
                                placeholder="Your Name"
                                value={message.from}
                            ></input>
                        </div>
                        <div className="contact-email-container contact-input">
                            <label htmlFor="email">P.S. You can reach me at</label>
                            <input
                                type="text"
                                onChange={handleSetMessage}
                                className="contact-email"
                                name="email"
                                placeholder="your_email@email.com"
                                value={message.email}
                            ></input>
                        </div>
                        {/* <p className="message-buttons-header">Not sure of what to say? Try one of these templates:</p>
                        <div className="contact-message-buttons-container">
                            <button onClick={() => setMessageTemplate(() => ({
                                subject: "Pixel Art is Life",
                                body: "I found your pixel art inspirational and have now decided to pursue the art of meticulously drawing pictures with blocks myself."
                                })
                            )}>Pixel-based Compliment</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <button className={`close-container-btn ${animationClass.button}`} onClick={() => props.setPage("")}>Close</button>
            <button className={`send-letter-btn ${animationClass.button}`} onClick={handleSendLetter}>Send</button>
        </div>
    )
}