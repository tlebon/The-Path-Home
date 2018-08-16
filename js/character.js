
//Player / NPC contructor

function Animal(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  }
  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
  }
}

//Player
function Hero(name, health, strength) {
  Animal.call(this);
  this.name = name;     //to be asked for at beginning and used for death screens, etc
  this.health = health;
  this.strength = strength;
  $('.h-health').html("Health = " + this.health + "<br>")
  $('.h-strength').append(this.strength)
  this.receiveDamage = function (damage, enemy) {
    this.health = this.health - damage;
    if (this.health <= 0 && enemy === "sorcerer") {
      return this.name + " was killed by a wayward Skëllos";
    }
    if (this.health <= 0 && enemy === "wolf") {
      return this.name + " was eaten alive by a wild Wołłf";
    }
    if (this.health <= 0 && enemy === "mushroomBad") {
      return this.name + " ate a bad mushroom";
    }
    else {
      return this.name + " has received " + damage + " points of damage"
    }
  }
  this.eatFood = function (health, strength, foodtype) {
    this.health = this.health + health;
    this.strength = this.strength + strength;
    if (foodtype === "meat") {
      return this.name + " ate a delicious piece of meat and gained " + strength + "Strength"
    }
    if (foodtype === "mushroomGood") {
      return this.name + " ate a enticing mushroom and gained " + strength + "Strength"
    }
    if (foodtype === "potion") {
      return this.name + " drank a sparkling, mesmerizing potion and gained " + health + "Health"
    }
  }

}
Hero.prototype = Object.create(Animal.prototype);



//Enemies
function Sorcerer(name, health, strength) {
  Animal.call(this);
  this.name = name;
  this.health = health;
  this.strength = strength;
  // $('.e-name').html(this.name)
  $('.e-health').html("Health = " + this.health + "<br>")
  $('.e-strength').text("Strength = " + this.strength)
  this.receiveDamage = function (damage, enemy) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      return "Skëllos returned to dust";
    }
    else {
      // attack again 
      return "Skëllos has received " + damage + " points of damage and its anger consumes"
    }

  }
}
Sorcerer.prototype = Object.create(Animal.prototype);



function Wolf(health, strength) {
  Animal.call(this);
  this.health = health;
  this.strength = strength;
  this.receiveDamage = function (damage, enemy) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      //   drop meat   add meat item to board (random value)
      return "The slain Wołłf still has some meat on his bones";

    }
    else {
      // attack again 
      return "Wołłf has received " + damage + " points of damage and is upset"
    }

  }
}
Wolf.prototype = Object.create(Animal.prototype);


// function Mushroom(){
//  var type=  getRandomInt(3);
//   switch(type){
//     case 1:

//   }
// }
