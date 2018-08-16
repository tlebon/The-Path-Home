// Board with (hopefully) random variations of the following tiles:
//      S - Sorcerer     // max 10 per board
//      V - river       // only a limited number of rivers and must be adjacent to at least two others of the same kind //will have a bridge
//      H - Bridge
//      R - rock 
//      P - player      // player tile is only random on the Y axis
//      T - tree
//      W - windmill     //1 and two, with blades (hopefully)
//      D - wolf        // drops meat upon defeating
//      Y - potion      // 3 per board
//      M - meat        // increases attack
//      L - mushroom    // placed randomly and with random effects (some kill, some increase both stats, some change color of the background)
//      B - boss        // only one on the board
//      G - grass


var sorcererNames = ["Karl", "Josef", "Inigo", "Lucius", "Bafilda", "Riddle"]  //Build a Sorcerer


// Game

function Game() {
  this.board = [
    ["G", "T", "R", "R", "R", "T", "G", "G", "T", "R", "R", "R", "T", "R", "R", "R", "R", "R", "T"],
    ["G", "G", "T", "R", "G", "G", "G", "T", "G", "T", "G", "G", "G", "G", "M", "T", "M", "G", "T"],
    ["R", "G", "G", "R", "T", "G", "G", "R", "G", "G", "R", "T", "G", "G", "R", "S", "R", "G", "R"],
    ["R", "G", "G", "G", "G", "T", "G", "G", "G", "R", "G", "G", "G", "T", "G", "G", "R", "G", "G"],
    ["T", "G", "R", "G", "T", "T", "G", "G", "R", "T", "T", "T", "S", "R", "G", "G", "G", "G", "R"],
    ["T", "G", "R", "G", "G", "S", "G", "R", "G", "R", "G", "G", "G", "G", "R", "G", "G", "G", "G"],
    ["G", "T", "R", "R", "G", "R", "G", "G", "G", "G", "G", "R", "R", "G", "G", "G", "R", "T", "R"],
    ["G", "R", "G", "T", "T", "R", "G", "T", "R", "R", "S", "T", "R", "T", "T", "R", "T", "G", "R"],
    ["R", "G", "G", "G", "M", "T", "G", "R", "G", "G", "G", "G", "G", "R", "G", "G", "G", "G", "P"],
    ["T", "G", "R", "R", "T", "R", "G", "G", "G", "T", "G", "T", "G", "T", "G", "T", "R", "T", "G"],
    ["G", "G", "G", "G", "G", "T", "G", "T", "G", "G", "G", "T", "S", "G", "G", "T", "T", "G", "G"],
    ["R", "T", "G", "T", "G", "T", "G", "G", "W2", "G", "R", "R", "R", "R", "T", "G", "G", "G", "G"],
    ["T", "G", "G", "G", "G", "G", "G", "R", "W", "G", "G", "R", "T", "M", "G", "G", "T", "R", "G"]
  ];
  this.player = {
    y: 8,
    x: 18,
  };


  // this.skelos = {
  //   y: getRandomInt(10),
  //   x: getRandomInt(16),
  //   direction: "right"
  // };
};

var player = new Game();
var tim = new Hero("Tim", 200, 200);

//Movement controls//

// var leftPos = 576;
// var topPos = 384;



/////BUTTONS//////


// Gender button
$(".gender").on('click', function () {
  $("#player").toggleClass('male female')
  $(".player").toggleClass('male female')
  if ($(".player").hasClass('female')) {
    $(".log").prepend('You feel. . . lighter!<br><br>')
  }
  else {
    $(".log").prepend('Your hair is blue now, shrug.<br><br>')
  }
})
//currently not saving


// $(".gender").on('click', function () {
//   $(".player").toggleClass('male female')
//  if ($(".player").hasClass('female'))
//   })
//    $(".log").prepend('You feel. . . lighter!<br><br>')
//  }
//  else {
//   $(".log").prepend('Your hair is blue now, shrug.<br><br>')
//  }
// })

//Mute music button
$(".music").on('click', function () {

  if ($("audio").prop('muted') === true) {
    $("audio").prop('muted', false)
    $(".log").prepend('The birds are singing again.<br><br>')
    $(".music").html("Turn Off Music")
  } else {
    $("audio").prop('muted', true)
    $(".log").prepend('The forest has fallen strangely silent. . .<br><br>')
    $(".music").html("Turn On Music")
  }
})


//Restart Game Button
$(".restart").on('click', function () {
  player = 0;
  player = new Game();
  tim = 0;
  tim = new Hero();   //hero doesnt reset properly
  updateBoard();
  $(".log").html('Try again!<br><br>')
  // if (moveCounter < 0) {
  //   location.reload();
  // };
})


//Movement key response

$(window).on('keydown', function (evt) {
  // $("#11-8").removeClass("windmill-two")
  if ($("#11-8").hasClass("windmill-blades")) {
    $("#11-8").removeClass("windmill-blades")
    $("#11-8").addClass("windmill-two")
  }                                               //Windmill movement!
  else if ($("#11-8").hasClass("windmill-two")) {

    $("#11-8").addClass("windmill-blades-two")
    $("#11-8").removeClass("windmill-two")
  } else {
    $("#11-8").removeClass("windmill-blades-two")
    $("#11-8").addClass("windmill-blades")
  }
  event.preventDefault(evt)
  switch (evt.which) {
    case 37:
      player.moveLeft();
      break;
    case 38:
      player.moveUp();
      break;
    case 39:
      player.moveRight();
      break;
    case 40:
      player.moveDown();
      break;
    case 87:
      $(".mountains").toggle({ background: "linear-gradient(to bottom, #ff7f04 23%,#ffb76b 61%)" })
      $(".log").prepend('Whoops!<br><br>')
      break;
    default:
      $(".log").prepend('Unsupported key.<br><br>')
      break;
  }
  updateBoard();
  countdown();

})






////
///RESPONSE FUNCTIONS////
/////
function countdown() {

}
function cantGo() {
  $(".log").prepend('To go any further in this direction would be to court madness.<br><br>')
}
function cantTree() {
  $(".log").prepend('A gnarled tree considers your quest, but cannot move for you.<br><br>')

}
function cantRock() {
  $(".log").prepend('A large boulder regards you impassively, but does not let you move forward.<br><br>')

}
function windmill() {
  $(".log").prepend('An old abandoned windmill sways mockingly in the breeze.<br><br>')
}
function windmill() {
  $(".log").prepend('An old abandoned windmill sways mockingly in the breeze.<br><br>')
}
function victory() {
  $(".log").prepend('A familiar smell fills your nose as your home comes into view. Dinner must be ready.Hurry!<br><br>')
  $("#" + 4 + "-" + 0).addClass("homeTop");
  $("#" + 5 + "-" + 0).addClass("homeBottom");
  player.player.x = 1;
}
function realVictory() {
  $(".log").prepend('Home at Last! Your spouse hugs you enthusiasitcally<br><br>')
  // $("#" + 3 + "-" + 1).addClass("player male");
 
}

function fight() {
  var wizard = new Sorcerer(sorcererNames[getRandomInt(sorcererNames.length)], getRandomInt(250), getRandomInt(200));
  $(".log").prepend('The sorcerer ' + wizard.name + ' eyes you mockingly.<br><br>')
  $('.e-name').html(wizard.name)
  while (tim.health > 0 && wizard.health > 0) {
    wizard.health -= tim.strength;
    tim.health -= wizard.strength;
    if (tim.health <= 0) {
       $(".log").prepend('You died!<br><br>')
     }
    else if (wizard.health <= 0) {
      $(".log").prepend('You win!<br><br>')
      var timer = setTimeout(function () {
        player.clearBoard();
        },50)
      // updateBoard();
    }
    $('.h-health').html("Health = " + tim.health+ "<br>")
    $('.h-strength').html("Strength= " + tim.strength)
  }
}
function magic() {
  tim.health += 50;
  $(".log").prepend('Your body is imbued with a strange energy.Your health increases by 50!<br><br>')
  $('.h-health').html("Health = " + tim.health+ "<br>")
  var timer = setTimeout(function () {
  player.clearBoard();
  },50)

}
//Board clear after fights
////
//need to figure out how to remove sorcerer class from tiles rather than simply changing the tile
Game.prototype.clearBoard = function () {
  if (this.board[this.player.y][this.player.x - 1] === "S" ||this.board[this.player.y][this.player.x - 1] === "M" ) {
    (this.board[this.player.y][this.player.x - 1] = "G")
  }
  else if (this.board[this.player.y][this.player.x + 1] === "S" || this.board[this.player.y][this.player.x + 1] === "M" ) {
    (this.board[this.player.y][this.player.x + 1] = "G")
  }
  else if (this.board[this.player.y - 1][this.player.x] === "S") {
    (this.board[this.player.y - 1][this.player.x] = "G")
  }
  else if (this.board[this.player.y + 1][this.player.x] === "S") {
    (this.board[this.player.y + 1][this.player.x] = "G")
  }
}
// MOVEMENT CONTROLS

Game.prototype.moveUp = function () {
  $(".player").css({ "background-image": "" });

  if (this.player.y == this.board.length - 1) {
    cantGo();
  }
  if (this.board[this.player.y - 1][this.player.x] === "R") {
    cantRock();
  }
  else if (this.board[this.player.y - 1][this.player.x] === "T") {
    cantTree();

  }
  else if (this.board[this.player.y - 1][this.player.x] === "S") {
    fight();

  }

  else {
    this.player.y = this.player.y - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y + 1][this.player.x] = "G";
  }
  // $(".movements-left").text(moveCounter);
}


Game.prototype.moveDown = function () {
  $(".player").css({ "background-image": "" });
  if (this.player.y == 12) {
    cantGo();
  }
  else if (this.board[this.player.y + 1][this.player.x] === "R") {
    cantRock();
  }
  else if (this.board[this.player.y + 1][this.player.x] === "T") {
    cantTree();
  }
  else if (this.board[this.player.y + 1][this.player.x] === "S") {
    fight();
  }
  else if (this.board[this.player.y + 1][this.player.x] === "W2") {
    windmill();
  }
  else {
    this.player.y = this.player.y + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y - 1][this.player.x] = "G";
  }
  // $(".movements-left").text(moveCounter);
}


Game.prototype.moveLeft = function () {
  $(".player").css({ "background-image": "" });

  if (this.player.x == 0) {
    victory();
  
  }
  if (this.player.x == 1 && (this.player.y ==5 || this.player.y ==4) &&
  $("#" + 4 + "-" + 0).hasClass("homeTop") &&
  $("#" + 5 + "-" + 0).hasClass("homeBottom")){
    realVictory();
  }
  else if (this.board[this.player.y][this.player.x - 1] === "R") {
    cantRock();
  }
  else if (this.board[this.player.y][this.player.x - 1] === "T") {
    cantTree();
  }
  else if (this.board[this.player.y][this.player.x - 1] === "S") {
    fight();
  }
  else if (this.board[this.player.y][this.player.x - 1] === "W") {
    windmill();
  }
  else if (this.board[this.player.y][this.player.x - 1] === "W2") {
    windmill();
  }
  else if (this.board[this.player.y][this.player.x - 1] === "M") {
    magic();

  }
  else {
    this.player.x = this.player.x - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x + 1] = "G";
  }
  // $(".movements-left").text(moveCounter);
}


Game.prototype.moveRight = function () {
  $(".player").css({ "background-image": "" });
  if (this.player.x == 18) {
    cantGo();
  }
  else if (this.board[this.player.y][this.player.x + 1] === "R") {
    cantRock();
  }
  else if (this.board[this.player.y][this.player.x + 1] === "T") {
    cantTree();
  }
  else if (this.board[this.player.y][this.player.x + 1] === "S") {
    fight();
  }
  else if (this.board[this.player.y][this.player.x + 1] === "W2") {
    windmill();
  }
  else if (this.board[this.player.y][this.player.x + 1] === "M") {
    magic();

  }
  else {
    this.player.x = this.player.x + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x - 1] = "G";
  }
  // $(".movements-left").text(moveCounter);
}



//////////////////////////////////////////////////////////
//////////////// CREATING GAME BOARD DIVS ////////////////

for (var i = 0; i < 13; i++) {
  for (var j = 0; j < 19; j++) {
    var newDiv = $("<div id='" + i + "-" + j + "' class='tile'></div>");
    $(".game").append(newDiv);
  }
}




//////////////////////////////////////////////////////////
//////////////// GIVING TILES APPEARANCE /////////////////

function updateBoard() {
  $(".tile").removeClass("player male female");


  for (var i = 0; i < 13; i++) {
    for (var j = 0; j < 19; j++) {
      if ((player.board[i][j] == "P")) {
        $("#" + i + "-" + j).addClass("player female");
        // $(".player").toggleClass("female male");
      }
      if (player.board[i][j] == "G") {
        $("#" + i + "-" + j).removeClass("sorcerer");
        $("#" + i + "-" + j).removeClass("magical-pillar");
      }
      if (player.board[i][j] == "S") {
        $("#" + i + "-" + j).addClass("sorcerer");
      }
      if (player.board[i][j] == "R") {
        $("#" + i + "-" + j).addClass("rock");
      }
      if (player.board[i][j] == "T") {
        $("#" + i + "-" + j).addClass("tree");
      }
      if (player.board[i][j] == "M") {
        $("#" + i + "-" + j).addClass("magical-pillar");
      }
      if (player.board[i][j] == "W") {
        $("#" + i + "-" + j).addClass("windmill");
      }
      if (player.board[i][j] == "W2") {
        // $("#" + i + "-" + j).toggleClass("windmill-two");
      }
    }
  }
}
updateBoard();


//change the sky color as the character travels across the board
function updateSky() {
  $(".mountains").css({ background: "linear-gradient(to bottom, #ff7f04 23%,#ffb76b 61%)" })

}



function getRandomColorString() {
  return 'rgb(' + getRandomInt(256) + ',' + getRandomInt(256) + ',' + getRandomInt(256) + ')';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
