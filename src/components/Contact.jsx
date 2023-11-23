import React from 'react';

export default function Contact(props) {

    const [messageTemplate, setMessageTemplate] = React.useState({
        subject: null,
        body: null,
    })
    const [message, setMessage] = React.useState({
        subject: "",
        body: "",
    })

    function handleSetMessage(e) {
        setMessageTemplate({
            subject: null,
            body: null,
        })
        setMessage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    console.log(message.body);

    return (
        <div className="modal-container">
            <div className="contact-content">
                <p className="contact-header">Post Office</p>
                <input 
                    type="text" 
                    placeholder="Subject"
                    onChange={handleSetMessage}
                    className="contact-subject"
                    name="subject"
                    value={messageTemplate.subject ? messageTemplate.subject : message.subject}
                ></input>
                <textarea 
                    placeholder="Message"
                    onChange={handleSetMessage} 
                    value={messageTemplate.body ? messageTemplate.body : message.body}
                    className="contact-body"
                    name="body"
                ></textarea>
                <p className="message-buttons-header">Not sure of what to say? Try one of these templates:</p>
                <div className="contact-message-buttons-container">
                    <button onClick={() => setMessageTemplate(() => ({
                        subject: "Pixel Art is Life",
                        body: "I found your pixel art inspirational and have now decided to pursue the art of meticulously drawing pictures with blocks myself."
                        })
                    )}>Pixel-based Compliment</button>
                </div>
            </div>
            <button className="close-container-btn" onClick={() => props.setPage("")}>Close</button>
        </div>
    )
}