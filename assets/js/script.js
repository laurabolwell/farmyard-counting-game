let game = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    choices: ["button1", "button2", "button3", "button4", "button5"]
}

function playGame() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionCount = 0
    showScore()
    //while question count <= 10, newQuestion(), checkAnswer()
    
}

function newQuestion() {
    //??clear player answer?
    //selects random number from 1-5 and assigns it to game.currentQuestion
    game.currentQuestion = Math.floor((Math.random() * 5)+1)
    //displayQuestion()
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