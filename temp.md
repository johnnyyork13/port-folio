  set up level and add keyboard event
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


    //render components to screen
  React.useEffect(() => {
    if (level.length > 0) {
      setRenderLevel(() => {
        return level.map((row) => {
          return row.map((block) => block.component)
        })
      })
    }
  }, [level, movement])