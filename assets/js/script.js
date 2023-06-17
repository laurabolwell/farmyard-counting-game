let game = {
    level: 10,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    choices: ["button-1", "button-2", "button-3", "button-4", "button-5"]
};

document.addEventListener("DOMContentLoaded", function() {
    playGame();
    let options = document.getElementsByClassName("option");
    for (let option of options) {
        option.addEventListener("click", function() {
            game.playerAnswer = this.innerText;
            checkAnswer()
        });
    };
    // set difficulty level here
});

function playGame() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionCount = 0;
    document.getElementById("options-area").innerHTML = "";
    displayOptions();
    showScore();
    newQuestion();
};

//clear question-area, selects random number from 1-5/1-10 and assigns it to game.currentQuestion, then calls the displayQuestion function
function newQuestion() {
    document.getElementById("question-area").innerHTML = "";
    game.currentQuestion = Math.floor((Math.random() * game.level) + 1)
    displayQuestion();
};

//takes value selected in newQuestion and displays the required number of pictures
function displayQuestion() {
    for (let i = 0; i < game.currentQuestion; i++) {
        let questionArea = document.getElementById("question-area")
        let animal = document.createElement("div");
        animal.innerHTML = "<img src='assets/images/sheep.png' alt='sheep'>";
        questionArea.appendChild(animal);
    }
};

function displayOptions() {
    for (let i=0; i < game.level; i++) {
        let optionsArea = document.getElementById("options-area");
        let optionButton = document.createElement("div");
        optionButton.classList.add("row");
        optionButton.innerHTML = `<button id="button-${i+1}" class="btn option">${i+1}</button>`;
        optionsArea.appendChild(optionButton);
    };
};

function checkAnswer() {
    //listens for user answer and checks if it is correct
    // if yes increment game.correctAnswers
    // if no increment game.incorrectAnswers
    let isCorrect = game.currentQuestion == game.playerAnswer;
    if (isCorrect) {
        alert("Well done!");
    } else {
        alert("Try again")
    }
    updateScore(isCorrect);
    if (game.questionCount < 10) {
        newQuestion();
    } else {finishGame();}
};

function updateScore(isCorrect) {
    if (isCorrect) {
        game.correctAnswers++;
    } else {
        game.incorrectAnswers++;
    }
    game.questionCount = game.correctAnswers + game.incorrectAnswers;
    showScore();
}

function finishGame() {
    alert(`You have finished the game.
    Your score is ${game.correctAnswers} out of ${game.questionCount}`);
    playGame();
};

function showScore() {
    document.getElementById("correct").innerText = game.correctAnswers;
    document.getElementById("incorrect").innerText = game.incorrectAnswers;
};