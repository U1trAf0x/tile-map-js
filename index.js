let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const FRMTIME = 1000 / 30;
const WIDTH = 160;
const HEIGHT = 144;
const TILE = 5 * 16;

setInterval(gameLoop, FRMTIME);

class Speed
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

class Player
{
    constructor(spdX, spdY, x, y)
    {
        this.speed = new Speed(spdX, spdY);
        this.x = x;
        this.y = y;
    }
}

var player = new Player(5, 5, 0, 0);

console.log(player.x, player.y, player.speed.x, player.speed.y);

function gameLoop()
{
    drawPlayer(player);
    inputHandle(player);
    console.log("test");
}

function drawPlayer(player)
{
    ctx.fillStyle = "#f00";
    ctx.fillRect(player.x, player.y, TILE, TILE);
}

function inputHandle(player)
{

}