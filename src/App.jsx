import React from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css'
import levels from './assets/levels';
import World from './utils/move';

//import Block from './assets/Block';
//import PlayerClass from './assets/Player';
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
  const [page, setPage] = React.useState("none");
  const [level, setLevel] = React.useState([])
  const [movement, setMovement] = React.useState({
    // x: -(centerMap[0] - playerStart[0]) * TILE_SIZE,
    x: 0,
    y: 0,
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
    x: 500,
  })

  console.log(scaleAdjustment);

  const gridStyle = {
    transform: `scale(${scaleAdjustment}%)`,
    gridTemplateColumns: `repeat(${levels.map[0].length}, ${TILE_SIZE}px)`,
    gridTemplateRows: `repeat(${levels.map.length}, ${TILE_SIZE}px)`,
    translate: `-${movement.x * (scaleAdjustment / 100)}px`
  }

  // React.useEffect(() => {
  //   if (initialMove) {
  //     setMapTranslate((prev) => ({x: -movement.x}));
  //   } else {
  //     setInitialMove(true)
  //   }
  // }, [movement])

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
      <div className="game-container" style={gridStyle}>
        {level}
        <PlayerComp 
          movement={movement}
          setMovement={setMovement}
          TILE_SIZE={TILE_SIZE}
          shortestPath={shortestPath}
          setCurrentLevel={setCurrentLevel}
        />
      </div>
      {page === "about" &&
        <About />
      }
      {page === "projects" &&
        <Projects />
      }
      {page === "skills" &&
        <Skills />
      }
      {page === "contact" &&
        <Contact />
      }
    </div>
  )
}

export default App
