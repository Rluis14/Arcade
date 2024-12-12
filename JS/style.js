function playGuessingGame() {
    // Generate a random number between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessCount = 0;
    let guessedCorrectly = false;

        while (!guessedCorrectly) {
            // Display the user for a guess
            let userGuess = prompt("Guess a number between 1 and 10:");
            userGuess = userGuess ? userGuess.trim().toLowerCase() : "";
            let guessNumber = parseInt(userGuess, 10);
            guessCount++;

            // Check if guess is correct
        if (!isNaN(guessNumber)) {
            if (guessNumber === randomNumber){
                alert(`You guessed it in ${guessCount} guesses!`);
                guessedCorrectly = true;
            } else if (userGuess < randomNumber) {
                alert("Guess was too low, guess again.");
            } else if (userGuess > randomNumber) {
                alert("Guess was too high, guess again.");
            } else {
                alert("Invalid input, please enter a number between 1 and 10.");
            }
        } else {
                alert("Invalid input, please enter a number between 1 and 10.");
            }
        }
        console.log(`The random number was: ${randomNumber}`);
    }

function playMagicBall() {
startSession('magicBallActive'); // starts this game session

let giveAnswer = flase;

const answers = [
"Yes, absolutely!",
"No, definitely not.",
"Ask again later.",
"It is certain.",
"Don't count on it.",
"My sources say no.",
"Outlook is good.",
"Reply hazy, try again."
];

while(arcade.magicBallActive) {
// the user cancelled the prompt  
if(userInput === null) {
  alert(errors.nullInput); // show error
  userInput = undefined; // reset user input
  giveAnswer = false; // reset answer mode

// input is empty
} else if(userInput?.trim() === '') {
  alert(errors.emptyInput); // show error
  userInput = undefined; // reset user input
  giveAnswer = false; // reset answer mode

// is answer mode, and the question is valid 
} else if(giveAnswer) {
  // get random index
  const index = Math.floor(Math.random() * 20);
  alert(answers[index]); // show answer
  giveAnswer = false; // reset mode
  userInput = undefined;

  continuePrompt(`${arcade.playerName}, ${prompts.game.endGame}`);

  if(userInput?.toLowerCase() === 'no') {
    endSession('magicBallActive');
  }

// input is valid, assume is a question
} else {
  // prompt and save user input
  userInput = prompt(`${prompts.magicBall.questionText}`);
  // set answer mode to true
  giveAnswer = true;
}

}
}

function playBNH () {
const choicesArray = ["Bear", "Ninja", "Hunter"];
const playerChoice = prompt("Who are you: Bear, Ninja, or Hunter?");
const display = document.getElementById("bnh-section-display");

if (playerChoice) {
    const standardizedChoice = playerChoice.trim().toLowerCase().replace(/^\w/, c => c.toUpperCase());
    if (!choicesArray.includes(standardizedChoice)) {
        display.textContent = "Invalid choice. Please choose Bear, Ninja, or Hunter.";
        return;
    }

    const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    let result;

    if (standardizedChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (standardizedChoice === "Bear" && computerChoice === "Ninja") ||
        (standardizedChoice === "Ninja" && computerChoice === "Hunter") ||
        (standardizedChoice === "Hunter" && computerChoice === "Bear")
    ) {
        result = `You win! ${standardizedChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${standardizedChoice}.`;
    }

    display.innerHTML = `
        <p>You chose ${standardizedChoice}.</p>
        <p>The computer chose ${computerChoice}.</p>
        <p>${result}</p>
    `;
} else {
    display.textContent = "You must make a choice to play!";
}
}