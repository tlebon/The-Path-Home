// Board with (hopefully) random variations of the following tiles:
//      S - skellos     // max 10 per board
//      V - river       // only a limited number of rivers and must be adjacent to at least two others of the same kind //will have a bridge
//      H - Bridge
//      R - rock 
//      P - player      // player tile is only random on the Y axis
//      T - tree
//      W - wolf        // drops meat upon defeating
//      Y - potion      // 3 per board
//      M - meat        // increases attack
//      L - mushroom    // placed randomly and with random effects (some kill, some increase both stats, some change color of the background)
//      B - boss        // only one on the board
//      G - grass





//Game
// function Game() {
//   this.board = [
//     ["G", "T", "G", "G", "G", "H", "G", "P", "V", "G", "G", "G", "T", "G", "G", "G", "G", "G", "T"],
//     ["G", "T", "G", "R", "G", "V", "G", "T", "V", "T", "L", "G", "G", "G", "G", "R", "G", "G", "R"],
//     ["G", "G", "G", "R", "G", "V", "G", "R", "V", "G", "R", "G", "G", "G", "R", "S", "R", "G", "R"],
//     ["G", "G", "W", "G", "G", "G", "V", "G", "V", "R", "G", "G", "R", "T", "G", "G", "R", "G", "G"],
//     ["G", "G", "R", "G", "T", "G", "V", "V", "R", "T", "T", "T", "S", "R", "G", "G", "G", "G", "G"],
//     ["G", "G", "R", "G", "G", "G", "V", "R", "G", "G", "R", "G", "G", "G", "R", "G", "G", "G", "G"],
//     ["G", "T", "R", "R", "G", "R", "V", "G", "G", "G", "G", "R", "R", "W", "G", "G", "R", "R", "R"],
//     ["G", "R", "G", "T", "T", "R", "V", "T", "R", "R", "S", "T", "R", "T", "T", "R", "T", "G", "G"],
//     ["G", "G", "G", "G", "G", "R", "V", "R", "W", "G", "G", "G", "G", "R", "G", "G", "G", "R", "P"],
//     ["B", "G", "R", "R", "R", "T", "V", "G", "G", "T", "G", "T", "G", "T", "W", "T", "T", "T", "G"],
//     ["G", "G", "G", "G", "G", "T", "V", "T", "G", "G", "G", "T", "S", "G", "G", "T", "T", "G", "G"],
//     ["R", "T", "G", "T", "G", "T", "H", "G", "G", "G", "R", "R", "R", "R", "R", "G", "G", "G", "R"]
//   
//   ];
//   this.player = {
//     y: getRandomInt(19),
//     x: 19,
//     direction: "left"
//   };


//   this.skelos = {
//     y: getRandomInt(10),
//     x: getRandomInt(16),
//     direction: "right"
//   };
// };

// var player = new Game();


//Movement controls//

var leftPos = 576;
var topPos = 384;

var body = document.querySelector("body");

//Buttons

$(".gender").on('click', function () {
  $("#player").toggleClass('male female')
})
$(".music").on('click', function () {
  $("audio").prop('muted','true')
})

$(window).on('keydown', function (evt) {
  event.preventDefault(evt)
  switch (evt.which) {
    case 37:
      movePlayer('left')
      break;
    case 38:
      movePlayer('up')
      break;
    case 39:
      movePlayer('right')
      break;
    case 40:
      movePlayer('down')
      break;
    default:
      console.log('unsupported key')
      break;
  }
  // updateBoard();
  // removeOos();
  // countdown();

})
//change the sky color as the character travels across the board
function updateSky() {
  $(".mountains").css({ background: "linear-gradient(to bottom, #ff7f04 23%,#ffb76b 61%)" })

}


//Movement continued
function movePlayer(direction) {
  switch (direction) {
    case 'left':
      leftPos -= 32;
      break;
    case 'up':
      topPos -= 32;
      break;
    case 'right':
      leftPos += 32;
      break;
    case 'down':
      topPos += 32;
      break;
  }
  if (leftPos < 0) leftPos = 0
  if (leftPos > 576) leftPos = 576
  if (topPos < 0) topPos = 0
  if (topPos > 384) topPos = 384

  $('#player').css({
    top: topPos + 'px',
    left: leftPos + 'px',
  })

}

function countdown() {

}






function getRandomColorString() {
  return 'rgb(' + getRandomInt(256) + ',' + getRandomInt(256) + ',' + getRandomInt(256) + ')';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}





//extra rows for the map
//     ["G", "G", "G", "G", "G", "V", "V", "R", "G", "G", "G", "R", "R", "G", "G", "G", "G", "R", "G"],
//     ["G", "G", "T", "G", "S", "V", "G", "G", "T", "G", "G", "G", "G", "G", "G", "R", "T", "G", "R"],
//     ["G", "G", "R", "R", "G", "V", "T", "G", "G", "G", "G", "T", "G", "W", "T", "G", "G", "G", "G"],
//     ["G", "G", "G", "G", "G", "V", "G", "G", "G", "G", "L", "G", "G", "G", "G", "G", "G", "R", "G"],
//     ["G", "G", "G", "T", "G", "V", "V", "G", "G", "G", "G", "T", "G", "G", "G", "T", "G", "G", "G"],
//     ["G", "G", "G", "G", "T", "G", "V", "R", "P", "G", "T", "G", "G", "R", "G", "S", "G", "G", "G"],
//     ["R", "R", "G", "G", "G", "R", "V", "G", "G", "G", "R", "R", "G", "G", "R", "R", "G", "R", "G"]