// declaring variable
var randomloc = Math.floor(Math.random() *5);
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game logic

while (isSunk == false){

if (guess==null) {
    alert("Ako si vICENTE DAKO AKO");
    break;
}
    guess = prompt("Ready!. Aim!. Fire! (enter number 0-6)");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid cell number!");
    }else {
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            alert ("hits")
            if (hits == 3) {
                inSunk = true;
                alert("You sank my battleship!")
            }
        }
        else{
            alert("Miss!")
        }
    }
}

var accuracy = (guess > 0 ? (hits / guesses) * 100 : 0).toFixed(3);
var stats = "You tooooook" +guesses + "guesses to sink the battleship!" + "\n" + "Accuracy" +accuracy + "%";


var stats = "You sank my battleship at: " + guesses + "guesses" + "and your accuracy is: " + (3/guesses);

alert(stats);