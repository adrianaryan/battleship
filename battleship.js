// var location1 = 3;
// var location2 = 4;
// var location3 = 5;
var randomLoc = Math.floor(Math.random() * 5); //randomizing the number
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) { // while ship is not sunk enter the number
  guess = prompt("Ready, aim fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  // if the guess number is less than 0 or greater than 6 it's not a valid number.
} else { // otherwise number of guesses increases by 1
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!"); // either it is equal to any of location 1 or 2 or 3 says HIT!
      hits = hits + 1;
      if (hits == 3) { // hit until it reaches 3
        isSunk = true; // when it hits 3 my battleship sank
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS"); // if i don't guess right it says miss
    }
  }
}

//after I finished the loop say ....
var stats = "You took " + guesses + " guesses to sink the battleship, " +
  "which means your shooting accuracy was " + (3 / guesses);
alert(stats);
