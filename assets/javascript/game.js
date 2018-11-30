
// Variables used for slecting random letter
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = "";

// Array to hold this list of guesses.
var guessList = [];

var score = 0;

// variables that link to HTML Ids.
var userGuesses = document.getElementById("userGuesses");
var guessesCounter = document.getElementById("guessesCounter");
var winCounter = document.getElementById("winCounter");
var lossesCounter = document.getElementById("lossesCounter");

document.onkeyup = function (event) {
    
    // Generates a random letter - "computerGuess"
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);

    // Generates up to 6 user guesses
    if (guessList.length < 6) {
        var guess = event.key;
        if (guess == computerGuess){
            alert("The answer was " + guess + ", you win!");
            score += 1;
            winCounter.innerHTML = score;
            guessList = [];
            userGuesses.innerHTML = guessList;
        } else {
        guessList.push(guess);
        userGuesses.innerHTML = guessList;
        }
    }
}