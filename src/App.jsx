import React from 'react';
import {v4 as uuidv4} from 'uuid';
import './styles/App.css'
import levels from './assets/levels';
import World from './utils/move';
import cloudOne from './assets/cloud-one.png';
import cloudTwo from './assets/cloud-two.png';
import palmTree from './assets/palm-tree.png';
import PlayerComp from './components/PlayerComp';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Tile from './components/Tile';

function App() {

  // console.log(levels.one.length, levels.one[0].length);

  const TILE_SIZE = 50;
  const centerMap = [Math.floor(levels.map[0].length/2), Math.floor(levels.map.length / 2)]
  const playerStart = [30, Math.floor(levels.map.length / 2)];
  const scaleAdjustment = window.innerHeight / levels.map.length * 2;

  //console.log(-(centerMap[0] - playerStart[0]) * TILE_SIZE)
  const [page, setPage] = React.useState("");
  const [level, setLevel] = React.useState([])
  const [movement, setMovement] = React.useState({
    // x: -(centerMap[0] - playerStart[0]) * TILE_SIZE,
    x: 1,
    y: 1,
    coords: playerStart,
  })
  // const [mapMovement, setMapMovement] = React.useState({
  //   x: (centerMap[0] + playerStart[0]) * TILE_SIZE,
  //   y: 0
  // })
  const [world, setWorld] = React.useState([]);
  const [clickedTile, setClickedTile] = React.useState({});
  const [shortestPath, setShortestPath] = React.useState([]);
  const [currentLevel, setCurrentLevel] = React.useState(levels.map);
  const [mapTranslate, setMapTranslate] = React.useState({
    player: 15,
    offsetMap: 15,
  })
  const [actualTileSize, setActualTileSize] = React.useState(0);

  const gridStyle = {
    transform: `scale(${scaleAdjustment}%)`,
    gridTemplateColumns: `repeat(${levels.map[0].length}, ${TILE_SIZE}px)`,
    gridTemplateRows: `repeat(${levels.map.length}, ${TILE_SIZE}px)`,
    translate: `${mapTranslate.offsetMap * actualTileSize}px`
    // translate: `-${movement.x * (scaleAdjustment / 100)}px`
  }


  React.useEffect(() => {
    setWorld(new World(currentLevel));
  }, [currentLevel]);


  //Rendered on screen
  React.useEffect(() => {
    if (world.world) {
      setLevel(function() {
        return world.world.map((row, y) => {
          return row.map(function(tile, x){
              // world.world[y][x].setValue(tile);
              if (x === movement.coords[0] && y === movement.coords[1]) { //set player tile
                world.world[y][x].setAsPlayer();
              }
              return <Tile
                        key={uuidv4()}
                        x={x}
                        y={y}
                        tile={tile}
                        TILE_SIZE={TILE_SIZE}
                        setClickedTile={setClickedTile}
                        setActualTileSize={setActualTileSize}
                      />
          }) 
        })
      })
    }
  }, [world, currentLevel])

  React.useEffect(() => {
    if (clickedTile.x > 0) {
      setShortestPath(world.movePlayerClick(movement, clickedTile));
    }
  }, [clickedTile])
  return (
    <div className="App">
      {/* <div className="mode-slider"></div> */}
      <div className="game-container" style={gridStyle}>
        <img src={cloudOne} className="cloud cloud-one"></img>
        <img src={cloudTwo} className="cloud cloud-two"></img>
        <img src={palmTree} className="tree tree-one"></img>
        <img src={palmTree} className="tree tree-two"></img>
        <img src={palmTree} className="tree tree-three"></img>
        <img src={palmTree} className="tree tree-four"></img>
        <img src={palmTree} className="tree tree-five"></img>
        <img src={palmTree} className="tree tree-six"></img>
        <img src={palmTree} className="tree tree-seven"></img>
        <img src={palmTree} className="tree tree-eight"></img>
        {level}
        <PlayerComp 
          movement={movement}
          setMovement={setMovement}
          TILE_SIZE={TILE_SIZE}
          shortestPath={shortestPath}
          setMapTranslate={setMapTranslate}
          setPage={setPage}
          page={page}
          actualTileSize={actualTileSize}
        />
      </div>
      {page === "about" &&
        <About
          setPage={setPage}
        />
      }
      {page === "projects" &&
        <Projects 
          setPage={setPage}
        />
      }
      {page === "skills" &&
        <Skills 
          setPage={setPage}
        />
      }
      {page === "contact" &&
        <Contact 
          setPage={setPage}
        />
      }
    </div>
  )
}

export default App
