import spritesheet from '../assets/tiles.png';
import house from '../assets/house.png';
import bank from '../assets/bank.png';
import gym from '../assets/gym.png';
import postOffice from '../assets/postoffice.png';

export default function drawSprites(val) {
    let specialStyle;
    let needsZIndex;
    let color;

    switch(val) {
        case 0:
            const randomGrassSprite = (Math.ceil(Math.random() * -10)) * 50;
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `${randomGrassSprite}px 0px`,
            }
            break;
        case 2:
            specialStyle = {
                backgroundColor: "blue"
             } //about door
            break;
        case 3:
            specialStyle = {
                backgroundColor: "blue"
             }  //projects door
            break;
        case 4:
            specialStyle = {
                backgroundColor: "blue"
             }  //skills door
            break;
        case 5:
            specialStyle = {
                backgroundColor: "blue"
             }  //contact door
            break;
        case 7:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `0px -50px`,
            }
            break;
        case 8: {
            specialStyle = {
                backgroundColor: "brown"
             }  //house collision
            break;
        }
        ////////////////////////////////////////TREES /////////////////////////////////////////////////////////
        case 10: //TREE ONE
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `0px -100px`,
            }
            break;
        case 11:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-50px -100px`,
            }
            break;
        case 12:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `0px -150px`,
            }
            break;
        case 13:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-50px -150px`,
            }
            break;
        case 14:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `0px -200px`,
            }
            break;
        case 15:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-50px -200px`,
            }
            break;
         ////////////////////////////////////////BORDER TREES /////////////////////////////////////////////////////////
        case 16: //TREE 2
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `0px -250px`,
            }
            break;
        case 17:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-50px -250px`,
            }
            break;
        case 18:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `0px -300px`,
            }
            break;
        case 19:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-50px -300px`,
            }
            break;
        case 20:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `0px -350px`,
            }
            break;
        case 21:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-50px -350px`,
            }
            break;
        case 22:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-100px -250px`,
            }
            break;
        case 23:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-100px -300px`,
            }
            break;
        case 24:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-100px -350px`,
            }
            break;
        case 25:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-150px -250px`,
            }
            break;
        case 26:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-150px -300px`,
            }
            break;
        case 27:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-150px -350px`,
            }
            break;
        case 28:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-200px -250px`,
            }
            break;
        case 29:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-250px -250px`,
            }
            break;
        case 30:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-200px -300px`,
            }
            break;
        case 31:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-250px -300px`,
            }
            break;
        case 32:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-200px -350px`,
            }
            break;
        case 33:
            specialStyle = {
                backgroundImage: `url('${spritesheet}')`,
                backgroundPosition: `-250px -350px`,
            }
            break;
         ////////////////////////////////////////BUILDINGS /////////////////////////////////////////////////////////

          ////////////////////////////////////////HOUSE /////////////////////////////////////////////////////////
        case 101:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-50px -0px`,
            }
            break;
        case 102:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-100px -0px`,
            }
            break;
        case 103:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-150px -0px`,
            }
            break;
        case 111:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-0px -50px`,
            }
            break;
        case 112:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-50px -50px`,
            }
            break;
        case 113:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-100px -50px`,
            }
            break;
        case 114:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-150px -50px`,
            }
            break;
        case 115:
            needsZIndex = true;
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-200px -50px`,
            }
            break;
        case 121:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-0px -100px`,
            }
            break;
        case 122:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-50px -100px`,
            }
            break;
        case 123:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-100px -100px`,
            }
            break;
        case 124:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-150px -100px`,
            }
            break;
        case 125:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-200px -100px`,
            }
            break;
        case 126:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-250px -100px`,
            }
            break;
        case 127:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-300px -100px`,
            }
            break;
        case 131:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-0px -150px`,
            }
            break;
        case 132:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-50px -150px`,
            }
            break;
        case 133:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-100px -150px`,
            }
            break;
        case 134:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-150px -150px`,
            }
            break;
        case 135:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-200px -150px`,
            }
            break;
        case 136:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-250px -150px`,
            }
            break;
        case 137:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-300px -150px`,
            }
            break;
        case 141:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-0px -200px`,
            }
            break;
        case 142:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-50px -200px`,
            }
            break;
        case 143:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-100px -200px`,
            }
            break;
        case 144:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-150px -200px`,
            }
            break;
        case 145:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-200px -200px`,
            }
            break;
        case 146:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-250px -200px`,
            }
            break;
        case 147:
            specialStyle = {
                backgroundImage: `url('${house}')`,
                backgroundPosition: `-300px -200px`,
            }
            break;

////////////////////////////////////////HOUSE /////////////////////////////////////////////////////////
        
        case 201:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-50px -0px`,
            }
            break;
        case 202:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-100px -0px`,
            }
            break;
        case 203:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-150px -0px`,
            }
            break;
        case 204:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-200px -0px`,
            }
            break;
        case 205:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-250px -0px`,
            }
            break;
        case 206:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-300px -0px`,
            }
            break;
        case 211:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-0px -50px`,
            }
            break;
        case 212:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-50px -50px`,
            }
            break;
        case 213:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-100px -50px`,
            }
            break;
        case 214:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-150px -50px`,
            }
            break;
        case 215:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-200px -50px`,
            }
            break;
        case 216:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-250px -50px`,
            }
            break;
        case 217:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-300px -50px`,
            }
            break;
        case 218:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-350px -50px`,
            }
            break;
        case 221:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-0px -100px`,
            }
            break;
        case 222:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-50px -100px`,
            }
            break;
        case 223:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-100px -100px`,
            }
            break;
        case 224:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-150px -100px`,
            }
            break;
        case 225:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-200px -100px`,
            }
            break;
        case 226:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-250px -100px`,
            }
            break;
        case 227:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-300px -100px`,
            }
            break;
        case 228:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-350px -100px`,
            }
            break;
        case 231:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-0px -150px`,
            }
            break;
        case 232:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-50px -150px`,
            }
            break;
        case 233:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-100px -150px`,
            }
            break;
        case 234:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-150px -150px`,
            }
            break;
        case 235:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-200px -150px`,
            }
            break;
        case 236:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-250px -150px`,
            }
            break;
        case 237:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-300px -150px`,
            }
            break;
        case 238:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-350px -150px`,
            }
            break;
        case 241:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-0px -200px`,
            }
            break;
        case 242:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-50px -200px`,
            }
            break;
        case 243:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-100px -200px`,
            }
            break;
        case 244:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-150px -200px`,
            }
            break;
        case 245:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-200px -200px`,
            }
            break;
        case 246:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-250px -200px`,
            }
            break;
        case 247:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-300px -200px`,
            }
            break;
        case 248:
            specialStyle = {
                backgroundImage: `url('${bank}')`,
                backgroundPosition: `-350px -200px`,
            }
            break;

////////////////////////////////////////////////////////GYM/////////////////////////////////////////////
        case 301:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-0px -0px`,
            }
            break;
        case 302:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-50px -0px`,
            }
            break;
        case 303:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-100px -0px`,
            }
            break;
        case 304:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-150px -0px`,
            }
            break;
        case 305:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-200px -0px`,
            }
            break;
        case 306:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-250px -0px`,
            }
            break;
        case 307:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-300px -0px`,
            }
            break;
        case 308:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-350px -0px`,
            }
            break;
        case 309:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-400px -0px`,
            }
            break;
        case 311:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-0px -50px`,
            }
            break;
        case 312:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-50px -50px`,
            }
            break;
        case 313:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-100px -50px`,
            }
            break;
        case 314:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-150px -50px`,
            }
            break;
        case 315:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-200px -50px`,
            }
            break;
        case 316:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-250px -50px`,
            }
            break;
        case 317:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-300px -50px`,
            }
            break;
        case 318:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-350px -50px`,
            }
            break;
        case 319:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-400px -50px`,
            }
            break;
        case 321:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-0px -100px`,
            }
            break;
        case 322:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-50px -100px`,
            }
            break;
        case 323:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-100px -100px`,
            }
            break;
        case 324:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-150px -100px`,
            }
            break;
        case 325:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-200px -100px`,
            }
            break;
        case 326:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-250px -100px`,
            }
            break;
        case 327:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-300px -100px`,
            }
            break;
        case 328:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-350px -100px`,
            }
            break;
        case 329:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-400px -100px`,
            }
            break;
        case 331:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-0px -150px`,
            }
            break;
        case 332:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-50px -150px`,
            }
            break;
        case 333:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-100px -150px`,
            }
            break;
        case 334:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-150px -150px`,
            }
            break;
        case 335:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-200px -150px`,
            }
            break;
        case 336:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-250px -150px`,
            }
            break;
        case 337:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-300px -150px`,
            }
            break;
        case 338:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-350px -150px`,
            }
            break;
        case 339:
            specialStyle = {
                backgroundImage: `url('${gym}')`,
                backgroundPosition: `-400px -150px`,
            }
            break;
///////////////////////////////////////////////////////POST OFFICE///////////////////////////////////////
        case 401:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-0px -0px`,
            }
            break;
        case 402:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-50px -0px`,
            }
            break;
        case 403:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-100px -0px`,
            }
            break;
        case 404:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-150px -0px`,
            }
            break;
        case 405:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-200px -0px`,
            }
            break;
        case 406:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-250px -0px`,
            }
            break;
        case 411:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-0px -50px`,
            }
            break;
        case 412:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-50px -50px`,
            }
            break;
        case 413:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-100px -50px`,
            }
            break;
        case 414:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-150px -50px`,
            }
            break;
        case 415:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-200px -50px`,
            }
            break;
        case 416:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-250px -50px`,
            }
            break;
        case 421:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-0px -100px`,
            }
            break;
        case 422:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-50px -100px`,
            }
            break;
        case 423:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-100px -100px`,
            }
            break;
        case 424:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-150px -100px`,
            }
            break;
        case 425:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-200px -100px`,
            }
            break;
        case 426:
            specialStyle = {
                backgroundImage: `url('${postOffice}')`,
                backgroundPosition: `-250px -100px`,
            }
            break;




        }
          return {
            specialStyle: specialStyle,
            needsZIndex: needsZIndex
        }
}