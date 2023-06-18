let game = {
    level: 5,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    choices: ["button-1", "button-2", "button-3", "button-4", "button-5"]
};


document.addEventListener("DOMContentLoaded", function() {
    $('#startGameModal').modal('show');
    $('#reset').click(playGame());
    playGame();
});

function playButtonClickAudio() {
    $('#buttonClickAudio')[0].play();
};

function playIncorrectAudio() {
    $('#incorrectAudio')[0].play();
};

function playCorrectAudio() {
    $('#correctAudio')[0].play();
};

function playCheerAudio() {
    $('#cheerAudio')[0].play();
};

function setLevel() {
    difficulty = document.getElementsByClassName("difficulty");
    for (let level of difficulty) {
        level.addEventListener("click", function(){
            if (this.getAttribute("id") === "easy-level") {
                game.level = 5;
                playGame();
            } else if (this.getAttribute("id") === "hard-level") {
                game.level = 10;
                playGame();
            };
        });
    };
};

function playGame() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionCount = 0;
    setLevel();
    document.getElementById("options-area").innerHTML = "";
    displayOptions();
    let options = document.getElementsByClassName("option");
    for (let option of options) {
        option.addEventListener("click", function() {
            game.playerAnswer = this.innerText;
            checkAnswer()
        });
    };
    $('.btn').click(function() {
        playButtonClickAudio();
    });
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
        playCorrectAudio();
    } else {
        playIncorrectAudio();
    };
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
};

function showScore() {
    document.getElementById("correct").innerText = game.correctAnswers;
    document.getElementById("incorrect").innerText = game.incorrectAnswers;
};

function finishGame() {
    $('#cheerAudio')[0].play();
    $('#endOfGameModal').modal('show');
    $('#finalScore').html(`Your score is ${game.correctAnswers} out of ${game.questionCount}`);
    $('#play-again').click(playGame());
};

