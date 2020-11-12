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
        this.spd = new Speed(spdX, spdY);
        this.x = x;
        this.y = y;
    }
}

var player = new Player(0.001, 0.001, 0.0, 0.0);

function gameLoop()
{
    drawPlayer(player);
    inputHandle(player);
}

function drawPlayer(player)
{
    ctx.clearRect(0, 0, 10 * TILE, 9 * TILE);
    ctx.fillStyle = "#f00";
    ctx.fillRect(player.x * TILE, player.y * TILE, TILE, TILE);
}

function inputHandle(player)
{
    document.addEventListener("keydown", event =>
    {
        console.log(event.keyCode);
        switch (event.keyCode)
        {
            case 38:
                player.y -= player.spd.y;
                break;
            case 40:
                player.y += player.spd.y;
                break;
            case 39:
                player.x += player.spd.x;
                break;
            case 37:
                player.x -= player.spd.x;
                break;
        }
    });
    if (player.x > 9)
    {
        player.x = 9;
    }
    if (player.x < 0)
    {
        player.x = 0;
    }
    if (player.y > 8)
    {
        player.y = 8;
    }
    if (player.y < 0)
    {
        player.y = 0;
    }
}