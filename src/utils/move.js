class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.val = null;
        this.clickable = null;
        this.distance = null;
        this.parent = null;
        this.player = false;
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
}

export default class World {
    constructor(level) {
        this.clickableTiles = [0, 7] //hard code allowed tiles
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
                const pos = this.level[y][x];
                const tile = new Tile(x, y);
                if (this.clickableTiles.includes(pos)) {
                    tile.setClickable();
                }
                row.push(tile);
            }
            this.world.push(row);
        }
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
        let queue = [this.world[y][x]];
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
                queue.push(nextTile);
                if (nextTile.player) {
                    break;
                }
            }
            //check right
            if (this.world[tile.y][tile.x + 1] && this.world[tile.y][tile.x + 1].distance === null) {
                const nextTile = this.world[tile.y][tile.x + 1];
                nextTile.setParent(tile);
                nextTile.setDistance(tile.distance + 1);
                queue.push(nextTile);
                if (nextTile.player) {
                    break;
                }
            }
            //check up
            if (this.world[tile.y - 1] && this.world[tile.y - 1][tile.x].distance === null) {
                const nextTile = this.world[tile.y - 1][tile.x];
                nextTile.setParent(tile);
                nextTile.setDistance(tile.distance + 1);
                queue.push(nextTile);
                if (nextTile.player) {
                    break;
                }
            }
            //check down
            if (this.world[tile.y + 1] && this.world[tile.y + 1][tile.x].distance === null) {
                const nextTile = this.world[tile.y + 1][tile.x];
                nextTile.setParent(tile);
                nextTile.setDistance(tile.distance + 1);
                queue.push(nextTile);
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