import React from 'react';
import levels from '../assets/levels.json';

export default function PlayerComp(props) {

    const x = Math.floor(levels.one[0].length / 2);
    const y = Math.floor(levels.one.length / 2);

    const [walkClass, setWalkClass] = React.useState("standing-down");

    const style = {
        width: props.TILE_SIZE,
        height: props.TILE_SIZE,
        left: `${x * props.TILE_SIZE}px`,
        top: `${y * props.TILE_SIZE}px`,
        translate: `${-props.movement.x}px ${-props.movement.y}px`
    }

    React.useEffect(() => {
        document.onkeydown = function(e) {
                const xCoord = props.movement.coords[0];
                const yCoord = props.movement.coords[1];
                switch (e.code) {
                    case 'ArrowUp':
                        //console.log("BEFORE", yCoord);
                        setWalkClass("walk-up");
                        !props.checkCollision(xCoord, yCoord - 1) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                y: prev.y += props.TILE_SIZE,
                                coords: [xCoord, yCoord - 1]
                            }));
                        break;
                    case 'ArrowDown':
                        setWalkClass("walk-down");
                        !props.checkCollision(xCoord, yCoord + 1) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                y: prev.y -= props.TILE_SIZE,
                                coords: [xCoord, yCoord + 1]
                            }));
                        break;
                    case 'ArrowLeft':
                        setWalkClass("walk-left");
                        !props.checkCollision(xCoord - 1, yCoord) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                x: prev.x += props.TILE_SIZE,
                                coords: [xCoord - 1, yCoord]
                            }));
                        break;
                    case 'ArrowRight':
                        setWalkClass("walk-right");
                        !props.checkCollision(xCoord + 1, yCoord) && props.setMovement((prev) => 
                            ({
                                ...prev, 
                                x: prev.x -= props.TILE_SIZE,
                                coords: [xCoord + 1, yCoord]
                            }));
                        break;
                }
        }
        document.onkeyup = function(e) {
            switch(e.code) {
                case 'ArrowUp':
                    setWalkClass('standing-up');
                    break;
                case 'ArrowLeft':
                    setWalkClass('standing-left');
                    break;
                case 'ArrowDown':
                    setWalkClass('standing-down');
                    break;
                case 'ArrowRight':
                    setWalkClass('standing-right');
                    break;
            }
        }
    }, [props.movement]);

    return (
        <div className={`player tile ${walkClass}`} style={style}></div>
    )
}