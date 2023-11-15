import React from 'react';
import url from '../assets/tiles.png';

export default function Tile(props) {

    const style = {
        backgroundColor: props.value === 9 ? "black" : "white",
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