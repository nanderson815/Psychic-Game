
// Variables used for slecting random letter
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = "";

// Array to hold this list of guesses.
var guessList = [];

// Variable to count wins
var winScore = 0;

// Variable to count losses.
var lossScore = 0;

// Variable that counts remaining guesses
var guessesRemaining = 9;

// variables that link to HTML Ids.
var userGuesses = document.getElementById("userGuesses");
var guessesCounter = document.getElementById("guessesCounter");
var winCounter = document.getElementById("winCounter");
var lossesCounter = document.getElementById("lossesCounter");

document.onkeydown = function (event) {

    // Generates a random letter - "computerGuess"
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);

    // Counts down remaining guesses.
    guessesRemaining -= 1;
    guessesCounter.innerHTML = guessesRemaining;

    // Logs up to 9 user guesses
    if (guessList.length < 9) {
        // sets guess var to user input.
        var guess = event.key;
        // if guess is correct, alert user, add 1 to wins, reset guess list, resets guess counter.
        if (guess == computerGuess) {
            alert("The answer was " + guess + ", you win!");
            winScore += 1;
            winCounter.innerHTML = winScore;
            guessList = [];
            userGuesses.innerHTML = guessList;
            guessesRemaining = 9;
            guessesCounter.innerHTML = 9;
            // If guesses are incorret, display each incorrect guess.
        } else {
            guessList.push(guess);
            userGuesses.innerHTML = guessList;
        }
    }

}
// Once guesses run out - alert user, empty guessList, increase loss score by 1, resets guess counter.
// Function uses onkeyup so no 7th keypress is required.
document.onkeyup = function (event) {
    if (guessList.length == 9) {
        alert("You lose!");
        guessList = [];
        userGuesses.innerHTML = guessList;
        lossScore += 1;
        lossesCounter.innerHTML = lossScore;
        guessesRemaining = 9;
        guessesCounter.innerHTML = 9;
    }
}