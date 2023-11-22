import spritesheet from '../assets/tiles.png';
import spriteSheet from '../assets/sprite-sheet.png';
import house from '../assets/house.png';
import bank from '../assets/bank.png';
import gym from '../assets/gym.png';
import postOffice from '../assets/postoffice.png';

export default function drawSprites(tile) {
    let needsZIndex;
    const TILE_SIZE = 50;
    const SPRITE_GRID_WIDTH = 20;

    function getStyle() {
        let spriteX = tile.id % SPRITE_GRID_WIDTH;
        let spriteY = Math.floor(tile.id / SPRITE_GRID_WIDTH);
        if (tile.id === 0) {
           spriteX = Math.floor(Math.random() * 9); //9 is the number of different grass tiles
        } else if (tile.id === 120) {
           spriteX = Math.floor(Math.random() * 9); //9 is the number of different water tiles
        }
        return {
            backgroundImage: `url('${spriteSheet}')`,
            backgroundPosition: `-${spriteX * TILE_SIZE}px -${spriteY * TILE_SIZE}px`
        }
    }

    return getStyle();
}