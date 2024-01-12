import React from 'react';
import levels from '../assets/levels';
import checkCollision from '../utils/collision.js';
import World from '../utils/move';

export default function PlayerComp(props) {

    
    const [defaultPos, setDefaultPos] = React.useState({
        left: `${props.movement.coords[0] * props.TILE_SIZE}px`,
        top: `${props.movement.coords[1] * props.TILE_SIZE}px`
    })

    const [walkClass, setWalkClass] = React.useState("standing-down");
    const [resetWalkingAnimation, setResetWalkingAnimation] = React.useState(false);
    const [walking, setWalking] = React.useState(false);

    const style = {
        width: props.TILE_SIZE,
        height: props.TILE_SIZE,
        left: defaultPos.left,
        top: defaultPos.top,
        translate: `${props.movement.x}px ${props.movement.y}px`
    }
    // React.useEffect(() => {
    //     const playerX = props.movement.coords[0];
    //     const playerY = props.movement.coords[1];
    //     if ()
    // }, [props.movement])

    React.useEffect(() => {
        if (props.shortestPath.length > 0 && !walking) {
            setWalking(true);
            const shortestPath = props.shortestPath.slice(1);
            const playerTile = props.shortestPath[0];
            let inDoor = false;
            let doorNumber;
            function movePlayer() {
                setTimeout(function() {
                    if (shortestPath.length > 0) {               
                        const nextMove = shortestPath.shift();

                        if (nextMove.isDoor) {
                            inDoor = true;
                            doorNumber = nextMove.id;
                        }
                        //move up
                        if (nextMove.x === playerTile.x && nextMove.y < playerTile.y) {
                            props.setMovement((prev) => ({...prev, y: prev.y -= props.TILE_SIZE, coords: [prev.coords[0], prev.coords[1] - 1]}));
                            playerTile.setPlayerPosition(playerTile.x, playerTile.y - 1);
                            setWalkClass("walk-up");
                        //move down
                        } else if (nextMove.x === playerTile.x && nextMove.y > playerTile.y) {
                            props.setMovement((prev) => ({...prev, y: prev.y += props.TILE_SIZE, coords: [prev.coords[0], prev.coords[1] + 1]}));
                            playerTile.setPlayerPosition(playerTile.x, playerTile.y + 1);
                            setWalkClass("walk-down");
                        //move left
                        } else if (nextMove.y === playerTile.y && nextMove.x < playerTile.x) {
                            props.setMovement((prev) => ({...prev, x: prev.x -= props.TILE_SIZE, coords: [prev.coords[0] - 1, prev.coords[1]]}));
                            props.setMapTranslate(function(prev){
                                const totalScreenTiles = Math.ceil(levels.map[0].length / 2);
                                const leftLimit = totalScreenTiles - ((window.innerWidth / props.actualTileSize) / 2 + 1);
                                if (prev.player + 1 <= leftLimit && prev.player + 1 > prev.offsetMap) {
                                    return {
                                        offsetMap: prev.offsetMap + 1,
                                        player: prev.player + 1}
                                } else {
                                    return {
                                        ...prev,
                                        player: prev.player + 1,
                                    };
                                }
                            })
                            playerTile.setPlayerPosition(playerTile.x - 1, playerTile.y);
                            setWalkClass("walk-left");
                        //move right
                        } else if (nextMove.y === playerTile.y && nextMove.x > playerTile.x) {
                            props.setMovement((prev) => ({...prev, x: prev.x += props.TILE_SIZE, coords: [prev.coords[0] + 1, prev.coords[1]]}));
                            props.setMapTranslate(function(prev){
                                const totalScreenTiles = Math.ceil(levels.map[0].length / 2);
                                const rightLimit = -(totalScreenTiles - ((window.innerWidth / props.actualTileSize) / 2 + 1));
                                if (prev.player - 1 >= rightLimit && prev.player - 1 < prev.offsetMap) {
                                    return {
                                        offsetMap: prev.offsetMap -1,
                                        player: prev.player - 1
                                    }
                                } else {
                                    return {
                                        ...prev,
                                        player: prev.player -1,
                                    };
                                }
                            })
                            playerTile.setPlayerPosition(playerTile.x + 1, playerTile.y);
                            setWalkClass("walk-right");
                        }
                        movePlayer();     
                    } else {
                        setResetWalkingAnimation((prev) => !prev);
                        setWalking(false);
                    }
                }, 50);
                if (inDoor) {
                    switch(doorNumber) {
                        case 362: 
                            console.log("DOOR");
                            props.setPage("about");
                            break;
                        case 370: 
                            props.setPage("skills");
                            break;
                        case 371:
                            props.setPage("skills");
                            break;
                        case 266:
                            props.setPage("projects");
                            break;
                        case 267:
                            props.setPage("projects");
                            break;
                        case 269:
                            props.setPage("contact");
                            break;
                        default:
                            props.setPage("home");
                    }
                } else if (props.page !== "") {
                    props.setPage("");
                }
            }
            movePlayer();
        }
    }, [props.shortestPath]);

    React.useEffect(() => {
        switch(walkClass) {
            case "walk-up":
                setWalkClass("standing-up");
                break;
            case "walk-down":
                setWalkClass("standing-down");
                break;
            case "walk-left":
                setWalkClass("standing-left");
                break;
            case "walk-right":
                setWalkClass("standing-right");
                break;
            // default:
            //     setWalkClass("standing-down")
        }
    }, [resetWalkingAnimation])

    // React.useEffect(() => {
    //     document.onkeydown = function(e) {
    //             const xCoord = props.movement.coords[0];
    //             const yCoord = props.movement.coords[1];
    //             switch (e.code) {
    //                 case 'ArrowUp':
    //                     //console.log("BEFORE", yCoord);
    //                     setWalkClass("walk-up");
    //                     !props.checkCollision(xCoord, yCoord - 1) && props.setMovement((prev) => 
    //                         ({
    //                             ...prev, 
    //                             y: prev.y += props.TILE_SIZE,
    //                             coords: [xCoord, yCoord - 1]
    //                         }));
    //                     break;
    //                 case 'ArrowDown':
    //                     setWalkClass("walk-down");
    //                     !props.checkCollision(xCoord, yCoord + 1) && props.setMovement((prev) => 
    //                         ({
    //                             ...prev, 
    //                             y: prev.y -= props.TILE_SIZE,
    //                             coords: [xCoord, yCoord + 1]
    //                         }));
    //                     break;
    //                 case 'ArrowLeft':
    //                     setWalkClass("walk-left");
    //                     !props.checkCollision(xCoord - 1, yCoord) && props.setMovement((prev) => 
    //                         ({
    //                             ...prev, 
    //                             x: prev.x += props.TILE_SIZE,
    //                             coords: [xCoord - 1, yCoord]
    //                         }));
    //                     break;
    //                 case 'ArrowRight':
    //                     setWalkClass("walk-right");
    //                     !props.checkCollision(xCoord + 1, yCoord) && props.setMovement((prev) => 
    //                         ({
    //                             ...prev, 
    //                             x: prev.x -= props.TILE_SIZE,
    //                             coords: [xCoord + 1, yCoord]
    //                         }));
    //                     break;
    //             }
    //     }
    //     document.onkeyup = function(e) {
    //         switch(e.code) {
    //             case 'ArrowUp':
    //                 setWalkClass('standing-up');
    //                 break;
    //             case 'ArrowLeft':
    //                 setWalkClass('standing-left');
    //                 break;
    //             case 'ArrowDown':
    //                 setWalkClass('standing-down');
    //                 break;
    //             case 'ArrowRight':
    //                 setWalkClass('standing-right');
    //                 break;
    //         }
    //     }
    // }, [props.movement]);

    return (
        <div className={`player-container tile`} style={style}>
            <div className={`${walkClass} player`}></div>
        </div>
    )
}