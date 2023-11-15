import React from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css'
import tiles from './assets/tiles.png';
import levels from './assets/levels.json';

import Block from './assets/Block';
import PlayerClass from './assets/Player';
import PlayerComp from './components/PlayerComp';

import Tile from './components/Tile';

function App() {

  const [level, setLevel] = React.useState([])
  const [renderLevel, setRenderLevel] = React.useState([]);
  const [movement, setMovement] = React.useState({
    x: 0,
    y: 0,
    coords: [6,4]
})

  //set up level and add keyboard event
  React.useEffect(() => {
    setLevel(() => {
      return levels.one.map(function(row, y) {
        return row.map(function(col, x) {
          if (col !== 1) {
            const block = new Block(x, y)
            if (col === 1) {
              block.collision = true;
            }
            block.component = <Tile key={uuidv4()} x={x} y={y} value={col}/>
            return block;
          } else {
            const player = new PlayerClass(x, y);
            player.component = <PlayerComp 
                                  key={uuidv4()} 
                                  setMovement={setMovement}
                                  movement={movement}
                                  x={x} 
                                  y={y} 
                                  value={col} 
                              />
            return player;
          }
        }) 
      })
    })
  }, [])

  console.log(movement);

  //render components to screen
  React.useEffect(() => {
    if (level.length > 0) {
      setRenderLevel(() => {
        return level.map((row) => {
          return row.map((block) => block.component)
        })
      })
    }
  }, [level])

  return (
    <div className="App">
      <div className="game-container">
        {renderLevel}
      </div>
    </div>
  )
}

export default App
