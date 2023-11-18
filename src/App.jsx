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

  const [page, setPage] = React.useState("none");
  const [level, setLevel] = React.useState([])
  const [movement, setMovement] = React.useState({
    x: 0,
    y: 0,
    coords: [Math.floor(levels.one[0].length/2), Math.floor(levels.one.length / 2)]
  })
  const [mapMovement, setMapMovement] = React.useState({
    x: 0,
    y: 0
  })
  const [world, setWorld] = React.useState([]);
  const [clickedTile, setClickedTile] = React.useState({});
  const [shortestPath, setShortestPath] = React.useState([]);
  const [currentLevel, setCurrentLevel] = React.useState(levels.one);

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


  React.useEffect(() => {
    setMapMovement((prev) => ({
      x: (movement.coords[0] >= 11 && movement.coords[0] < levels.one[0].length - 7) ? prev.x = movement.x : prev.x,
      y: (movement.coords[1] >= 2 && movement.coords[1] < levels.one.length ) ? prev.y = movement.y : prev.y,
    }))
  }, [movement])

  const gridStyleSize = {
    width: `${levels.one[0].lenght * TILE_SIZE}px`,
    height: `${levels.one.length * TILE_SIZE}px`,
    gridTemplateColumns: `repeat(${levels.one[0].length}, ${TILE_SIZE}px)`,
    gridTemplateRows: `repeat(${levels.one.length}, ${TILE_SIZE}px)`,
    translate: `${-mapMovement.x}px ${-mapMovement.y}px`
  }

  return (
    <div className="App">
      <div className="game-container" style={gridStyleSize}>
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
