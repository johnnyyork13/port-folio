import React from 'react';
import drawSprites from '../utils/draw';

export default function Tile(props) {

    function  handleTileClick() {
        console.log(props.x, props.y);
    }

    const drawStyles = drawSprites(props.value);

    const style = {
        zIndex: drawStyles.needsZIndex ? '2' : ''
    }

    return (
        <div 
            className="tile" 
            onClick={handleTileClick}
            style={style}
        >
            <div className="tile-image" style={drawStyles.specialStyle}></div>
        </div>
    )
}