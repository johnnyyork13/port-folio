import React from 'react';
import url from '../assets/tiles.png';

export default function Tile(props) {

    let color;

    (function setColor(){
        switch(props.value) {
            case 2:
                color = "brown"; //about door
                break;
            case 3:
                color = "yellow"; //projects door
                break;
            case 9:
                color = "black";
                break;
        }    
    })();

    const style = {
        backgroundColor: color
    }

    function  handleTileClick() {
        console.log(props.x, props.y);
    }

    return (
        <div 
            className="tile" 
            onClick={handleTileClick}
            style={style}
        ></div>
    )
}