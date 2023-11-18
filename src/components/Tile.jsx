import React from 'react';
import drawSprites from '../utils/draw';

export default function Tile(props) {

    function  handleTileClick() {
        props.setClickedTile({
            x: props.x, 
            y: props.y
        });
    }

    const drawStyles = drawSprites(props.tile);

    const style = {
        zIndex: drawStyles.needsZIndex ? '2' : ''
    }

    return (
        <div 
            className="tile" 
            onClick={handleTileClick}
            style={style}
        >
            <div className="tile-image" style={drawStyles}></div>
        </div>
    )
}