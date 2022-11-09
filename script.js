//global variables
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var key = document.addEventListener('keydown');
// ----define functions----


// ball
var ball = {
    new: function ballMovement() {
        
    }
}

// the game
function initializeGame() {

}
//----end define functions----

window.game = () => {
    window.requestAnimationFrame(main);
        
  };