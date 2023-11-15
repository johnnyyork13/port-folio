import React from 'react';
import levels from '../assets/levels.json';

export default function PlayerComp(props) {

    const x = 6;
    const y = 4;

    const style = {
        width: props.tileSize,
        height: props.tileSize,
        left: `${x * props.tileSize}px`,
        top: `${y * props.tileSize}px`,
        translate: `${-props.movement.x}px ${-props.movement.y}px`
    }

    function checkCollision(x, y) {
        try {
            switch (levels.one[y] && levels.one[y][x] && levels.one[y][x]) {
                case 2: 
                    props.setPage("about");
                    return false;
                case 3:
                    props.setPage("projects");
                    return false;
                case 9: //black block
                    return true;
                case undefined: //no block
                    return true;
                default:
                    props.setPage("none");
                    return false;
            }
        } catch(err) {
            console.log(err);
            return true;
        }
        
    }

    React.useEffect(() => {
        document.onkeydown = function(e) {
                const ADJ_AMOUNT = props.tileSize;
                const xCoord = props.movement.coords[0];
                const yCoord = props.movement.coords[1];
                switch (e.code) {
                    case 'ArrowUp':
                        //console.log("BEFORE", yCoord);
                        !checkCollision(xCoord, yCoord - 1) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                y: prev.y += ADJ_AMOUNT,
                                coords: [xCoord, yCoord - 1]
                            }));
                        break;
                    case 'ArrowDown':
                        !checkCollision(xCoord, yCoord + 1) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                y: prev.y -= ADJ_AMOUNT,
                                coords: [xCoord, yCoord + 1]
                            }));
                        break;
                    case 'ArrowLeft':
                        !checkCollision(xCoord - 1, yCoord) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                x: prev.x += ADJ_AMOUNT,
                                coords: [xCoord - 1, yCoord]
                            }));
                        break;
                    case 'ArrowRight':
                        !checkCollision(xCoord + 1, yCoord) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                x: prev.x -= ADJ_AMOUNT,
                                coords: [xCoord + 1, yCoord]
                            }));
                        break;
                }
        }
    }, [props.movement]);

    return (
        <div className='player tile' style={style}></div>
    )
}