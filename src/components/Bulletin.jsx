import React from 'react';
import '../styles/bulletin.css';
import bulletinPattern from '../assets/bulletin-pattern.png';

export default function Bulletin(props) {

    const [sendBulletinMessage, setSendBulletinMessage] = React.useState(false);
    const [bulletinMessage, setBulletinMessage] = React.useState({
        body: "",
        name: "",
    })
    const [bulletinMessageError, setBulletinMessageError] = React.useState({
        body: false,
        name: false,
    })
    const [bulletinList, setBulletinList] = React.useState([]);

    React.useEffect(() => {
        try {
            async function getBulletinMessages() {
                const url = props.root + '/bulletin';
                await fetch(url, {
                    mode: "cors",
                    credentials: "include",
                }).then((res) => res.json())
                .then((res) => {
                    setBulletinList(res);
                })
            }
            getBulletinMessages();
        } catch(err) {
            console.log(err);
        }
    }, [sendBulletinMessage])

    React.useEffect(() => {
        if (sendBulletinMessage) {
            try {
                async function postNewBulletinMessage() {
                    const url = props.root + '/bulletin';
                    await fetch(url, {
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        headers: {
                            "Content-Type":"application/json",
                        },
                        body: JSON.stringify(bulletinMessage)
                    }).then((res) => res.json())
                    .then((res) => {
                        setBulletinMessage({
                            body: "",
                            name: "",
                        })
                        setSendBulletinMessage(false)
                    })
                }
                postNewBulletinMessage();
            } catch(err) {
                console.log(err);
            }
        }
    }, [sendBulletinMessage])

    function handleBulletinMessageChange(e) {
        setBulletinMessage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleBulletinMessageSubmit() {
        let allFieldsHaveValues = true;
        for (const key in bulletinMessage) {
            if (bulletinMessage[key] === "") {
                allFieldsHaveValues = false;
                setBulletinMessageError((prev) => ({
                    ...prev,
                    [key]: true,
                }))
            } else {
                setBulletinMessageError((prev) => ({
                    ...prev,
                    [key]: false,
                }))
            }
        }

        if (allFieldsHaveValues) {
            setSendBulletinMessage(true);
        }
    }

    const mappedBulletinList = bulletinList.map((message) => {
        return <div className="bulletin-message">
            <p className="bulletin-message-name">By: {message.name}</p>
            <p className="bulletin-message-body">{message.body}</p>
        </div>
    })

    return (
        <div className="bulletin-container">
            <p className="bulletin-header">Message Board</p>
            <div className="bulletin">
                <div className="bulletin-section bulletin-left">
                    <div className="bulletin-pins-container bulletin-pins-container-left">
                        <div className="bulletin-pin-left bulletin-pin"></div>
                        <div className="bulletin-pin-left bulletin-pin"></div>
                    </div>
                    <div className="bulletin-sub-section bulletin-comments-section">
                        <p className="bulletin-section-header">Comments</p>
                        {mappedBulletinList}
                    </div>
                    <div className="bulletin-message-input-container">
                        <input 
                            type="text" 
                            name="body" 
                            placeholder='What would you like to say?' 
                            onChange={handleBulletinMessageChange}
                            value={bulletinMessage.body}
                            className={bulletinMessageError.body ? "bulletin-message-error" : ""}
                        />
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="What's your name?"
                                onChange={handleBulletinMessageChange}
                                value={bulletinMessage.name}
                                className={bulletinMessageError.name ? "bulletin-message-error" : ""}
                            />
                            <button
                                onClick={handleBulletinMessageSubmit}
                                className="bulletin-message-submit-btn"
                            >Submit</button>
                        </div>
                    </div>
                </div>
                <div className="bulletin-section bulletin-top-right">
                    <div className="bulletin-pins-container bullet-pins-container-top-right">
                        <div className="bulletin-pin-top-right bulletin-pin"></div>
                        <div className="bulletin-pin-top-right bulletin-pin"></div>
                    </div>
                    <p className="bulletin-section-header">Credits</p>
                    <p className="bulletin-top-right-body">Character Sprite: ConcernedApe - Modified Stardew Valley Character</p>
                </div>
                <div className="bulletin-section bulletin-bottom-right">
                    <div className="bulletin-pins-container bullet-pins-container-bottom-right">
                        <div className="bulletin-pin-bottom-right bulletin-pin"></div>
                        <div className="bulletin-pin-bottom-right bulletin-pin"></div>
                    </div>
                    <p>Thank you for visiting!</p>
                </div>
            </div>
            <button 
                className="close-bulletin-container-btn"
                onClick={() => props.setPage("")}
            >Close</button>
        </div>
    )
}