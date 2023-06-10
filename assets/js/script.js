let game = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    choices: ["button-1", "button-2", "button-3", "button-4", "button-5"]
}

function playGame() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionCount = 0
    showScore()
    //check syntax of this: for (i in Range(10)) {
        playerTurn()
    }
    
}

function playerTurn() {
    newQuestion()
    displayQuestion()
    checkAnswer()
    showScore()
}

function newQuestion() {
    //??clear player answer?
    //selects random number from 1-5 and assigns it to game.currentQuestion
    game.currentQuestion = Math.floor((Math.random() * 5)+1)
}

function displayQuestion() {
    //takes value selected in newQuestion and displays the required number of pictures
}

function checkAnswer() {
    //listens for user answer and checks if it is correct
    // if yes increment game.correctAnswers
    // if no increment game.incorrectAnswers
}

function showScore() {
    document.getElementById("correct").innerText = game.correctAnswers;
    document.getElementById("incorrect").innerText = game.incorrectAnswers;
}