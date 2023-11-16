import React from 'react';
import spritesheet from '../assets/tiles.png';

export default function Tile(props) {

    let color;
    let specialStyle;
    let needsZIndex = false;

    (function setColor(){
        switch(props.value) {
            case 0:
                const randomGrassSprite = (Math.ceil(Math.random() * -10)) * 50;
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `${randomGrassSprite}px 0px`,
                }
                break;
            case 2:
                color = "blue"; //about door
                break;
            case 3:
                color = "blue"; //projects door
                break;
            case 4:
                color = "blue"; //skills door
                break;
            case 5:
                color = "blue"; //contact door
                break;
            case 7:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `0px -50px`,
                }
                break;
            case 8: {
                color = "brown"; //house collision
                break;
            }
            case 9:
                color = "black"; //border collision
                break;
            case 10: //TREE ONE
                needsZIndex = true;
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `0px -100px`,
                }
                break;
            case 11:
                needsZIndex = true;
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-50px -100px`,
                }
                break;
            case 12:
                needsZIndex = true;
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `0px -150px`,
                }
                break;
            case 13:
                needsZIndex = true;
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-50px -150px`,
                }
                break;
            case 14:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `0px -200px`,
                }
                break;
            case 15:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-50px -200px`,
                }
                break;
            case 16: //TREE 2
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `0px -250px`,
                }
                break;
            case 17:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-50px -250px`,
                }
                break;
            case 18:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `0px -300px`,
                }
                break;
            case 19:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-50px -300px`,
                }
                break;
            case 20:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `0px -350px`,
                }
                break;
            case 21:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-50px -350px`,
                }
                break;
            case 22:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-100px -250px`,
                }
                break;
            case 23:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-100px -300px`,
                }
                break;
            case 24:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-100px -350px`,
                }
                break;
            case 25:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-150px -250px`,
                }
                break;
            case 26:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-150px -300px`,
                }
                break;
            case 27:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-150px -350px`,
                }
                break;
            case 28:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-200px -250px`,
                }
                break;
            case 29:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-250px -250px`,
                }
                break;
            case 30:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-200px -300px`,
                }
                break;
            case 31:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-250px -300px`,
                }
                break;
            case 32:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-200px -350px`,
                }
                break;
            case 33:
                specialStyle = {
                    backgroundImage: `url('${spritesheet}')`,
                    backgroundPosition: `-250px -350px`,
                }
                break;
            
            
        }    
    })();

    const style = {
        backgroundColor: color,
        zIndex: needsZIndex ? '2' : ''
    }

    function  handleTileClick() {
        console.log(props.x, props.y);
    }

    //console.log(specialStyle);

    return (
        <div 
            className="tile" 
            onClick={handleTileClick}
            style={style}
        >
            <div className="tile-image" style={specialStyle}></div>
        </div>
    )
}