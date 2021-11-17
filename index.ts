
const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
  AIR,
  FLUX,
  UNBREAKABLE,
  PLAYER,
  STONE, FALLING_STONE,
  BOX, FALLING_BOX,
  KEY1, LOCK1,
  KEY2, LOCK2
}

interface Tile {
isAir: boolean;
isFlux: boolean;
isUnbreakable: boolean;
isPlayer: boolean;
isStone: boolean;
isFallingStone: boolean;
isBox: boolean;
isFallingBox: boolean;
isKey1: boolean;
isLock1: boolean;
isKey2: boolean;
isLock2: boolean;
}

class Air implements Tile {
  isAir: boolean = true;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Flux implements Tile {
  isAir: boolean = false;
  isFlux: boolean = true;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Unbreakable implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = true;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Player implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = true;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Stone implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = true;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class FallingStone implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = true;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Box implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = true;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class FallingBox implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = true;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Key1 implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = true;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Key2 implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = true;
  isLock2: boolean = false;
}

class Lock1 implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = true;
  isKey2: boolean = false;
  isLock2: boolean = false;
}

class Lock2 implements Tile {
  isAir: boolean = false;
  isFlux: boolean = false;
  isUnbreakable: boolean = false;
  isPlayer: boolean = false;
  isStone: boolean = false;
  isFallingStone: boolean = false;
  isBox: boolean = false;
  isFallingBox: boolean = false;
  isKey1: boolean = false;
  isLock1: boolean = false;
  isKey2: boolean = false;
  isLock2: boolean = true;
}



let playerx = 1;
let playery = 1;
let rawMap: RawTile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];

let map: Tile[][];
function transformTile(tile: RawTile) {
  switch (tile) {
    case Tile.Air:
      return new Air();
    case RawTile.Flux:
      return new Flux();
    case RawTile.Unbreakable:
      return new Unbreakable();
    case RawTile.Player:
      return new Player();
    case RawTile.Stone:
      return new Stone();
    case RawTile.FallingStone:
      return new FallingStone();
    case RawTile.Box:
      return new Box();
    case RawTile.FallingBox:
      return new FallingBox();
    case RawTile.Key1:
      return new Key1();
    case RawTile.Key2:
      return new Key2();
    case RawTile.Lock1:
      return new Lock1();
    case RawTile.Lock2:
      return new Lock2();
    default: return new Air();
  }
  
}

function transformMap(){
  map = new Array(rawMap.length);
  for (let y = 0; y < rawMap.length; y++) {
    map[y] = new Array(rawMap[y].length);
    for (let x = 0; x < rawMap[y].length; x++) {
      map[y][x] = transformTile(rawMap[y][x]);
    }
  }
}
  
let inputs: Input[] = [];

function removeLock1() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock1()) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock2() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock2()) {
        map[y][x] = new Air();
      }
    }
  }
}

function moveToTile(newx: number, newy: number) {
  map[playery][playerx].isAIR;
  map[newy][newx].isPLAYER;
  playerx = newx;
  playery = newy;
}

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx].isFLUX
    || map[playery][playerx + dx].isAIR) {
    moveToTile(playerx + dx, playery);
  } else if ((map[playery][playerx + dx].isSTONE
    || map[playery][playerx + dx].isBOX)
    && map[playery][playerx + dx + dx].isAIR
    && !map[playery + 1][playerx + dx].isAIR) {
    map[playery][playerx + dx + dx] = map[playery][playerx + dx];
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKEY1) {
    removeLock1();
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKEY2) {
    removeLock2();
    moveToTile(playerx + dx, playery);
  }
}

function moveVertical(dy: number) {
  if (map[playery + dy][playerx].isFLUX
    || map[playery + dy][playerx].isAIR) {
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isKEY1) {
    removeLock1();
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isKEY2) {
    removeLock2();
    moveToTile(playerx, playery + dy);
  }
}

function update() {
  handleInputs();
  updateMap();
}

function handleInputs() {
  while (inputs.length > 0) {
    let current = inputs.pop();
    handleInput(current);
  }
}

function handleInput(input: Input) {
  if (input === Input.LEFT)
      moveHorizontal(-1);
    else if (input === Input.RIGHT)
      moveHorizontal(1);
    else if (input === Input.UP)
      moveVertical(-1);
    else if (input === Input.DOWN)
      moveVertical(1);
}

function updateMap() {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      updateTile(x, y);
    }
  }
<<<<<<< HEAD
=======
}

function updateTile(x: number, y: number) {
  if ((map[y][x] === Tile.STONE || map[y][x] === Tile.FALLING_STONE)
        && map[y + 1][x] === Tile.AIR) {
        map[y + 1][x] = Tile.FALLING_STONE;
        map[y][x] = Tile.AIR;
      } else if ((map[y][x] === Tile.BOX || map[y][x] === Tile.FALLING_BOX)
        && map[y + 1][x] === Tile.AIR) {
        map[y + 1][x] = Tile.FALLING_BOX;
        map[y][x] = Tile.AIR;
      } else if (map[y][x] === Tile.FALLING_STONE) {
        map[y][x] = Tile.STONE;
      } else if (map[y][x] === Tile.FALLING_BOX) {
        map[y][x] = Tile.BOX;
      }
>>>>>>> 64fd8c61dac00a893179c7b494b753c97db9131b
}
  

  


<<<<<<< HEAD
function updateTile(x: number, y: number) {
  if ((map[y][x].isSTONE || map[y][x].isFallingStone())
    && map[y + 1][x].isAIR()) {
    map[y + 1][x].isFallingStone();
    map[y][x].isAIR();
  } else if ((map[y][x].isBox() || map[y][x].isFallingBox())
    && map[y + 1][x].isAir()) {
    map[y + 1][x].isFallingBox();
    map[y][x].isAir();
  } else if (map[y][x].isFallingStone()) {
    map[y][x].isStone();
  } else if (map[y][x].isFallingBox()) {
    map[y][x] = new Box();
  }
}

=======
>>>>>>> 64fd8c61dac00a893179c7b494b753c97db9131b
function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}
<<<<<<< HEAD

function draw() {
  let g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      colorOfTile(y, x, g);
      if (!map[y][x].isAir() && !map[y][x].isPlayer())
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
=======

function draw(){
  let g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}
  function drawMap(g: CanvasRenderingContext2D) {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === Tile.FLUX)
          g.fillStyle = "#ccffcc";
        else if (map[y][x] === Tile.UNBREAKABLE)
          g.fillStyle = "#999999";
        else if (map[y][x] === Tile.STONE || map[y][x] === Tile.FALLING_STONE)
          g.fillStyle = "#0000cc";
        else if (map[y][x] === Tile.BOX || map[y][x] === Tile.FALLING_BOX)
          g.fillStyle = "#8b4513";
        else if (map[y][x] === Tile.KEY1 || map[y][x] === Tile.LOCK1)
          g.fillStyle = "#ffcc00";
        else if (map[y][x] === Tile.KEY2 || map[y][x] === Tile.LOCK2)
          g.fillStyle = "#00ccff";
  
        if (map[y][x] !== Tile.AIR && map[y][x] !== Tile.PLAYER)
          g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
>>>>>>> 64fd8c61dac00a893179c7b494b753c97db9131b
    }
  }
}

function colorOfTile(y: number, x: number, g: CanvasRenderingContext2D) {
  if (map[y][x].isFlux)
    g.fillStyle = "#ccffcc";
  else if (map[y][x].isUnbreakable)
    g.fillStyle = "#999999";
  else if (map[y][x].isSTONE || map[y][x].isFallingStone)
    g.fillStyle = "#0000cc";
  else if (map[y][x].isBOX || map[y][x].isFallingBox)
    g.fillStyle = "#8b4513";
  else if (map[y][x].isKEY1 || map[y][x].isLOCK1)
    g.fillStyle = "#ffcc00";
  else if (map[y][x].isKEY2 || map[y][x].isLOCK2)
    g.fillStyle = "#00ccff";
}

  function drawPlayer(g: CanvasRenderingContext2D) {
    g.fillStyle = "#ff0000";
    g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


function gameLoop() {
  let before = Date.now();
  update();
  createGraphics();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";

window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

