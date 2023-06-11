document.addEventListener("DOMContentLoaded", function() {
    let options = document.getElementsByClassName("option");

    for (let option of options) {
        option.addEventListener("click", function() {
            game.playerAnswer = this.innerText;
            console.log(game.playerAnswer);
            checkAnswer()
        });
    };
});

let game = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    choices: ["button-1", "button-2", "button-3", "button-4", "button-5"]
};

function playGame() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionCount = 0;
    
    // showScore();
    playerTurn(); //just for testing, remove and add into loop once checkAnswer function completed
    // for (let i=0; i<10; i++) {
    //     playerTurn();
    // };   
};

function playerTurn() {
    newQuestion()
    displayQuestion()
//    checkAnswer()
//    showScore()
};

function newQuestion() {
    //selects random number from 1-5 and assigns it to game.currentQuestion
    game.currentQuestion = Math.floor((Math.random() * 5)+1)
};

//takes value selected in newQuestion and displays the required number of pictures
function displayQuestion() {
    for (let i=0; i<game.currentQuestion; i++) {
        let questionArea = document.getElementById("question-area")
        let animal = document.createElement("div");
        animal.innerHTML = "<img src='assets/images/sheep.png' alt='sheep'>";
        questionArea.appendChild(animal);
        }
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
};



function showScore() {
    document.getElementById("correct").innerText = game.correctAnswers;
    document.getElementById("incorrect").innerText = game.incorrectAnswers;
};