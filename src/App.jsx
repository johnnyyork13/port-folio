import React from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css'
import levels from './assets/levels.json';

//import Block from './assets/Block';
//import PlayerClass from './assets/Player';
import PlayerComp from './components/PlayerComp';
import About from './components/About';
import Projects from './components/Projects';

import Tile from './components/Tile';

function App() {

  const tileSize = Math.floor(window.innerHeight / 11);
  //console.log(tileSize);

  const [page, setPage] = React.useState("none");
  const [level, setLevel] = React.useState([])
  const [renderLevel, setRenderLevel] = React.useState([]);
  const [movement, setMovement] = React.useState({
    x: 0,
    y: 0,
    coords: [6,4]
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
                    />
        }) 
      })
    })
  }, [movement]);

  const gridStyleSize = {
    width: `${tileSize * 10}px`,
    height: `${tileSize * 10}px`,
    gridTemplateColumns: `repeat(11, ${tileSize}px)`,
    gridTemplateRows: `repeat(11, ${tileSize}px)`,
    translate: `${movement.x}px ${movement.y}px`
  }

  return (
    <div className="App">
      <div className="game-container" style={gridStyleSize}>
        {level}
        <PlayerComp 
          movement={movement}
          setMovement={setMovement}
          setPage={setPage}
          tileSize={tileSize}
        />
      </div>
      {page === "about" &&
        <About />
      }
      {page === "projects" &&
        <Projects />
      }
    </div>
  )
}

export default App
