let game = {
    level: 5,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    animals: ['pig', 'sheep', 'horse', 'goat', 'cow', 'chicken']
};


document.addEventListener("DOMContentLoaded", function() {
    $('#reset').click(playGame());
    $('#startGameModal').modal('show');
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
// function displayQuestion() {
//     let animalChoice = game.animals[Math.floor(Math.random() * 6)]
//     for (let i = 0; i < game.currentQuestion; i++) {
//         let questionArea = document.getElementById("question-area")
//         let animal = document.createElement("div");
//         if (game.level == 5) {
//             animal.innerHTML = `<img src='assets/images/${animalChoice}.png' class='large-img' alt=${animalChoice}>`;  
//         } else if (game.level == 10) {
//             animal.innerHTML = `<img src='assets/images/${animalChoice}.png' class='small-img' alt=${animalChoice}>`;
//         };
//         questionArea.appendChild(animal);
//     }
// };

function displayQuestion() {
    let animalChoice = game.animals[Math.floor(Math.random() * 6)]
    for (let i = 0; i < game.currentQuestion; i++) {
        if (game.level == 5) {
            $('#question-area').append(`<div><img src="assets/images/${animalChoice}.png" class="large-img" alt=${animalChoice}></div>`);  
        } else if (game.level == 10) {
            $('#question-area').append(`<div><img src="assets/images/${animalChoice}.png" class="small-img" alt=${animalChoice}></div>`);
        };
    }
};

function displayOptions() {
    for (let i=0; i < game.level; i++) {
        let optionsArea = document.getElementById("options-area");
        let optionButton = document.createElement("div");
        // optionButton.classList.add("row");
        optionButton.innerHTML = `<button id="button-${i+1}" class="btn btn-lg btn-warning option">${i+1}</button>`;
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

