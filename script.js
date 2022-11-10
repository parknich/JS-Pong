//global variables
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var key = document.addEventListener('keydown');
// ----define functions----


// ball
var ball = {
    new: function ballMovement() {
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            x += dx;
            y += dy;
          }
          
    }
}

// the game
function initializeGame() {

}
//----end define functions----

window.game = () => {
    window.requestAnimationFrame(main);
    ballMovement.draw(1,1)
    console.log('HELP')
  };
