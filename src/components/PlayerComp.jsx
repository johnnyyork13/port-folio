import React from 'react';

export default function PlayerComp(props) {

    // const [moveClass, setMoveClass] = React.useState("");

    const style = {
        translate: `${props.movement.x}px ${props.movement.y}px`
    }

    React.useEffect(() => {
        document.onkeydown = function(e) {
                const ADJ_AMOUNT = 50;
                const xCoord = props.movement.coords[0];
                const yCoord = props.movement.coords[1];
                switch (e.code) {
                    case 'ArrowUp':
                        props.setMovement((prev) => 
                            ({
                                ...prev, 
                                y: prev.y -= ADJ_AMOUNT,
                                coords: [xCoord, yCoord - 1]
                            }));
                        break;
                    case 'ArrowDown':
                        props.setMovement((prev) => 
                            ({
                                ...prev, 
                                y: prev.y += ADJ_AMOUNT,
                                coords: [xCoord, yCoord + 1]
                            }));
                        break;
                    case 'ArrowLeft':
                        props.setMovement((prev) => 
                            ({
                                ...prev, 
                                x: prev.x -= ADJ_AMOUNT,
                                coords: [xCoord - 1, yCoord]
                            }));
                        break;
                    case 'ArrowRight':
                        props.setMovement((prev) => 
                            ({
                                ...prev, 
                                x: prev.x += ADJ_AMOUNT,
                                coords: [xCoord + 1, yCoord]
                            }));
                        break;
                }
        }
    }, []);

    return (
        <div className='player' style={style}></div>
    )
}