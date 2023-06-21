let game = {
    level: 5,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    animals: ['pig', 'sheep', 'horse', 'goat', 'cow', 'chicken'],
    muted: false
};

document.addEventListener("DOMContentLoaded", function() {
    $('.reset').click(playGame);
    $('.sound').click(function() {
        print("sound button clicked");
        $(".sound-icon").toggleClass("hidden");
    })
    $('#startGameModal').modal('show');
    setLevel();
})

function playButtonClickAudio() {
    if (!game.muted) {
        $('#buttonClickAudio')[0].play();
    }
}

function playIncorrectAudio() {
    if (!game.muted) {
        $('#incorrectAudio')[0].play();
    }
}

function playCorrectAudio() {
    if (!game.muted) {
        $('#correctAudio')[0].play();
    }
}

function playCheerAudio() {
    if (!game.muted) {
        $('#cheerAudio')[0].play();
    }
}

function setLevel() {
    let difficulty = document.getElementsByClassName("difficulty");
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
    $('#question-area').empty();
    game.currentQuestion = Math.floor((Math.random() * game.level) + 1)
    displayQuestion();
};

//selects an animal at random, displays the number of animals required for the current question
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

//clears the options area and then creates a button for each of the 5/10 options
function displayOptions() {
    $('#options-area').empty();
    for (let i=0; i < game.level; i++) {
        let optionsArea = document.getElementById("options-area");
        let optionButton = document.createElement("div");
        optionButton.innerHTML = `<button id="button-${i+1}" class="btn btn-lg btn-warning option">${i+1}</button>`;
        optionsArea.appendChild(optionButton);
    };
};

//listens for user answer and checks if it is correct, then increments game.correctAnswers or game.incorrectAnswers
function checkAnswer() {
    let isCorrect = game.currentQuestion == game.playerAnswer;
    if (isCorrect) {
        playCorrectAudio();
        game.correctAnswers++;
    } else {
        playIncorrectAudio();
        game.incorrectAnswers++;
    };
    showScore()
    game.questionCount = game.correctAnswers + game.incorrectAnswers;
    if (game.questionCount < 10) {
        newQuestion();
    } else {finishGame();}
};

function showScore() {
    document.getElementById("correct").innerText = game.correctAnswers;
    document.getElementById("incorrect").innerText = game.incorrectAnswers;
};

function fillStars() {
let numberOfStars = Math.floor(game.correctAnswers / 2);
    for (let i=0; i < numberOfStars; i++) {
        $(`#star${i+1}`).removeClass("fa-regular").addClass("fa-solid");
    };
    if (game.correctAnswers % 2 != 0) {
        $(`#star${numberOfStars+1}`).removeClass("fa-regular fa-star").addClass("fa-solid fa-star-half-stroke");
    }
};

function finishGame() {
    fillStars();
    $('#endOfGameModal').modal('show');
    playCheerAudio();
    $('#finalScore').html(`Your score is ${game.correctAnswers} out of ${game.questionCount}`);
    $('#play-again').click(playGame());
};

