import React from 'react';
import drawSprites from '../utils/draw';

export default function Tile(props) {

    function  handleTileClick() {
        //console.log([props.x, props.y])
        props.setClickedTile({
            x: props.x, 
            y: props.y
        });
    }

    const widthRef = React.useRef(null);

    React.useEffect(() => {
        if (widthRef.current) {
            props.setActualTileSize(widthRef.current.getBoundingClientRect().width);
        }
    }, [])

    const drawStyles = drawSprites(props.tile);

    const style = {
        zIndex: drawStyles.needsZIndex ? '2' : ''
    }

    return (
        <div 
            className={`tile ${props.tile.id === 120 ? "water" : ""} ${props.tile.id === 100 ? "sky" : ""}`} 
            onClick={handleTileClick}
            style={style}
            ref={widthRef}
        >
            <div className="tile-image" style={drawStyles}></div>
        </div>
    )
}