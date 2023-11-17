import React from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css'
import levels from './assets/levels.json';

//import Block from './assets/Block';
//import PlayerClass from './assets/Player';
import PlayerComp from './components/PlayerComp';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Tile from './components/Tile';

function App() {


  const TILE_SIZE = 50;

  const [page, setPage] = React.useState("none");
  const [level, setLevel] = React.useState([])
  const [renderLevel, setRenderLevel] = React.useState([]);
  const [movement, setMovement] = React.useState({
    x: 0,
    y: 0,
    coords: [Math.floor(levels.one[0].length/2), Math.floor(levels.one.length / 2)]
  })
  const [mapMovement, setMapMovement] = React.useState({
    x: 0,
    y: 0
  })

  React.useEffect(() => {
    //console.log('here');
    setLevel(function() {
      return levels.one.map((row, y) => {
        return row.map((tile, x) => {
            return <Tile
                      key={uuidv4()}
                      x={x}
                      y={y}
                      value={tile}
                      TILE_SIZE={TILE_SIZE}
                    />
        }) 
      })
    })
  }, []);

  React.useEffect(() => {
    setMapMovement((prev) => ({
      x: (movement.coords[0] >= 11 && movement.coords[0] < levels.one[0].length - 7) ? prev.x = movement.x : prev.x,
      y: (movement.coords[1] >= 2 && movement.coords[1] < levels.one.length ) ? prev.y = movement.y : prev.y,
    }))
  }, [movement])

  function checkCollision(x, y) {
    try {
        switch (levels.one[y] && levels.one[y][x] && levels.one[y][x]) {
            case 0:
                setPage("none");
                return false;
            case 2: 
                setPage("about");
                return false;
            case 3:
                setPage("projects");
                return false;
            case 4:
                setPage("skills");
                break;
            case 5:
                setPage("contact");
                break;
            case 7:
                setPage("none");
                return false;
            case 10: return false; //Tree Tops
            case 11: return false; //Tree Tops
            case 12: return false; //Tree Tops
            case 13: return false; //Tree Tops
            case 101: return false; //house top
            case 102: return false; //house top
            case 103: return false; //house top
            case 111: return false; //house top
            case 112: return false; //house top
            case 113: return false; //house top
            case 114: return false; //house top
            case 115: return false; //house top
            default:
                setPage("none");
                return true;
        }
    } catch(err) {
        console.log(err);
        return true;
    }
    
}

  const gridStyleSize = {
    width: `${levels.one[0].lenght * TILE_SIZE}px`,
    height: `${levels.one.length * TILE_SIZE}px`,
    gridTemplateColumns: `repeat(${levels.one[0].length}, ${TILE_SIZE}px)`,
    gridTemplateRows: `repeat(${levels.one.length}, ${TILE_SIZE}px)`,
    translate: `${mapMovement.x}px ${mapMovement.y}px`
  }

  // const gridStyleSize = {
  //   width: `${tileSize * 10}px`,
  //   height: `${tileSize * 10}px`,
  //   gridTemplateColumns: `repeat(11, ${tileSize}px)`,
  //   gridTemplateRows: `repeat(11, ${tileSize}px)`,
  //   translate: `${movement.x}px ${movement.y}px`
  // }

  return (
    <div className="App">
      <div className="game-container" style={gridStyleSize}>
        {level}
        <PlayerComp 
          movement={movement}
          setMovement={setMovement}
          checkCollision={checkCollision}
          TILE_SIZE={TILE_SIZE}
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
