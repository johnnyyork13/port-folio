class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = null;
        this.clickable = null;
        this.distance = null;
        this.parent = null;
        this.player = false;
        this.isDoor = null;
        this.sprite = null;
    }

    setID(id) {
        this.id = id;
    }

    setSprite(sprite) {
        this.sprite = sprite;
    }

    setAsPlayer() {
        this.player = true;
    }

    setClickable() {
        this.clickable = true;
    }

    setValue(val) {
        this.val = val;
    }

    setDistance(distance) {
        this.distance = distance;
    }

    setParent(parent) {
        this.parent = parent;
    }

    setPlayerPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setAsDoor() {
        this.isDoor = true;
    }
}

export default class World {
    constructor(level) {
        // this.clickableTiles = [0, 2, 3, 7, 143, 244, 245, 337, 338, 421] //hard code allowed tiles - refer to key for ID's
        // this.doorTiles = [2, 143, 244, 245, 337, 338, 421]
        this.level = level;
        this.world = [];
        this.TILE_SIZE = 50;
        this.createObjects();
    }

    createObjects() {
        this.world = [];
        for (let y = 0; y < this.level.length; y++) {
            const row = [];
            for (let x = 0; x < this.level[y].length; x++) {
                const spriteMapLocation = this.level[y][x];
                const setTile = () =>  {
                    for (let i = 0; i < spriteMapLocation.sprites.length; i++) {
                        const tile = new Tile(x, y);
                        tile.setID(this.level[y][x].id);
                        tile.setClickable(spriteMapLocation.clickable);
                        if (tile.id === 0) {
                            tile.setSprite(spriteMapLocation.sprites[Math.floor(Math.random() * spriteMapLocation.sprites.length)]);
                            row.push(tile);
                            return;
                        } else {
                            tile.setSprite(spriteMapLocation.sprites[i]);
                        }
                        row.push(tile);
                    }
                }
                setTile();
                
                // if (this.doorTiles.includes(pos)) {
                //     tile.setAsDoor();
                // }

            }
            this.world.push(row);
        }
        //console.log("CREATING", this.world);
    }

    movePlayerClick(playerOld, clicked) {
        this.createObjects();
        this.world[playerOld.coords[1]][playerOld.coords[0]].setAsPlayer();
        return this.recursivelyFindBestPath(playerOld, clicked);
    }

    recursivelyFindBestPath(playerOld, clicked) {
        const playerX = playerOld.coords[0];
        const playerY = playerOld.coords[1];
        const x = clicked.x;
        const y = clicked.y;
        const clickedTile = this.world[y][x];
        let queue = [];
        if (clickedTile.clickable) {
            queue.push(clickedTile);
        }
        while (queue.length > 0) {
            const tile = queue.shift();

            if (tile.distance === null) {
                tile.setDistance(0);
            }
            //check left
            if (this.world[tile.y][tile.x - 1] && this.world[tile.y][tile.x - 1].distance === null) {
                const nextTile = this.world[tile.y][tile.x - 1];
                nextTile.setParent(tile);
                nextTile.setDistance(tile.distance + 1);

                if (nextTile.clickable) {
                    queue.push(nextTile);
                }
                if (nextTile.player) {
                    break;
                }
            }
            //check right
            if (this.world[tile.y][tile.x + 1] && this.world[tile.y][tile.x + 1].distance === null) {
                const nextTile = this.world[tile.y][tile.x + 1];
                nextTile.setParent(tile);
                nextTile.setDistance(tile.distance + 1);
                if (nextTile.clickable) {
                    queue.push(nextTile);
                }
                if (nextTile.player) {
                    break;
                }
            }
            //check up
            if (this.world[tile.y - 1] && this.world[tile.y - 1][tile.x].distance === null) {
                const nextTile = this.world[tile.y - 1][tile.x];
                nextTile.setParent(tile);
                nextTile.setDistance(tile.distance + 1);
                if (nextTile.clickable) {
                    queue.push(nextTile);
                }
                if (nextTile.player) {
                    break;
                }
            }
            //check down
            if (this.world[tile.y + 1] && this.world[tile.y + 1][tile.x].distance === null) {
                const nextTile = this.world[tile.y + 1][tile.x];
                nextTile.setParent(tile);
                nextTile.setDistance(tile.distance + 1);
                if (nextTile.clickable) {
                    queue.push(nextTile);
                }
                if (nextTile.player) {
                    break;
                }
            }
        }
        return this.getShortestPathValues(this.world[playerY][playerX])
        
    }

    getShortestPathValues(parent) {
        let parentTile = parent;
        const shortestPath = [];
        while (parentTile) {
            // shortestPath.push({x: parentTile.x, y: parentTile.y});
            shortestPath.push(parentTile);
            parentTile = parentTile.parent;
        }
        return shortestPath;
    }
    
}