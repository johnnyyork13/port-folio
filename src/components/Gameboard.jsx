import React from 'react';

export default function Gameboard(props) {

    const scaleAdjustment = window.innerHeight / props.gridWidth * 2;

    const [mapTranslate, setMapTranslate] = React.useState(500);

    const gridStyle = {
        transform: `scale(${scaleAdjustment}%)`,
        gridTemplateColumns: `repeat(${props.gridWidth}, ${props.TILE_SIZE}px)`,
        gridTemplateRows: `repeat(${props.gridHeight}, ${props.TILE_SIZE}px)`,
        // translate: `${mapTranslate}px`
      }

    return (
        <div className="gameboard" style={gridStyle}>
            {props.level}
        </div>
    )
}