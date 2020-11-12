let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const FRMTIME = 1000 / 30;
const WIDTH = 160;
const HEIGHT = 144;

setInterval(gameLoop, FRMTIME);

function gameLoop()
{
    console.log("test");
}