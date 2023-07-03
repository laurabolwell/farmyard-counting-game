/* jshint esversion: 11, jquery: true */

let game = {
    level: 5,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0,
    questionCount: 0,
    playerAnswer: 0,
    animals: ['pig', 'sheep', 'horse', 'goat', 'cow', 'chicken'],
    currentAnimal: 0,
    muted: true
};

// Adds event listeners to reset, sound buttons and menu buttons, then launches the startGame modal
document.addEventListener("DOMContentLoaded", function() {
    $('.sound').click(function() {
        $(".sound-icon").toggleClass("hidden");
        game.muted = !game.muted;
    });
    $('.menu, .sound, .reset, .difficulty').click(playButtonClickAudio);
    $('#startGameModal').modal('show');
    getLevel();
    checkForStoredScores();
    displayStoredScores();
    $('.high-scores-btn').click(function() {
        $('#highScoreModal').modal('show');
    });
    $('#reset-scores-btn').click(resetStoredScores);
});

function checkForStoredScores() {
    if (localStorage.getItem('easyHighScore') === null) {
        localStorage.setItem('easyHighScore', 0);
    }
    if (localStorage.getItem('hardHighScore') === null) {
        localStorage.setItem('hardHighScore', 0);
    }
}

function resetStoredScores() {
localStorage.setItem("easyHighScore", 0);
localStorage.setItem("hardHighScore", 0);
localStorage.setItem("easyAverage", 0);
localStorage.setItem("hardAverage", 0);
localStorage.setItem("easyGames", 0);
localStorage.setItem("hardGames", 0);
displayStoredScores();
}

// If sound is NOT muted: stops the current audio and plays the button click audio
function playButtonClickAudio() {
    if (!game.muted) {
        $('.currentAudio')[0].load()
        $('audio').removeClass('currentAudio');
        $('#buttonClickAudio')[0].play();
        $('#buttonClickAudio').addClass('currentAudio')  
    }
}

// If sound is NOT muted: stops the current audio and plays the incorrect answer audio
function playIncorrectAudio() {
    if (!game.muted) {
        $('.currentAudio')[0].load()
        $('audio').removeClass('currentAudio');
        $('#incorrectAudio')[0].play();
        $('#incorrectAudio').addClass('currentAudio') 
    }
}

// If sound is NOT muted: stops the current audio and plays the correct answer audio
function playCorrectAudio() {
    if (!game.muted) {
        $('.currentAudio')[0].load()
        $('audio').removeClass('currentAudio');
        $('#correctAudio')[0].play();
        $('#correctAudio').addClass('currentAudio');
    }
}

// If sound is NOT muted: plays the children cheering audio
function playCheerAudio() {
    if (!game.muted) {
        $('#cheerAudio')[0].play();
    }
}

// If sound is NOT muted: stops the current audio and plays the audio of the animal in the current question
function playAnimalSound() {
    if (!game.muted) {
        $('.currentAudio')[0].load()
        $('audio').removeClass('currentAudio');
        $(`#${game.currentAnimal}Audio`)[0].play();
        $(`#${game.currentAnimal}Audio`).addClass('currentAudio');
    }
}

// Adds event listener to the level buttons on the startGame modal and calls the setLevel function when they are clicked
function getLevel() {
    let difficulty = document.getElementsByClassName("difficulty");
    for (let level of difficulty) {
        level.addEventListener("click", setLevel);
    }
}

// Updates the level in the game object and then starts a new game
function setLevel() {
  if (this.getAttribute("id") === "easy-level") {
    game.level = 5;
    playGame();
  } else if (this.getAttribute("id") === "hard-level") {
    game.level = 10;
    playGame();
  }
}

// Resets the question and answer counts in the game object, displays the options buttons and adds event listeners to them, 
// shows the starting score of 0 and then calls the newQuestion function
function playGame() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionCount = 0;
    resetStars();
    resetTrophy();
    displayOptions();
    $('.option').on('click', function() {
        game.playerAnswer = this.innerText;
        checkAnswer();
    });
    showScore();
    newQuestion();
}

//Clears question-area, selects random number from 1-5/1-10 (reselects if it is the same as the last question),
// assigns it to game.currentQuestion, then calls the displayQuestion function
function newQuestion() {
    $('#question-area').empty();
    let nextQuestion = Math.floor((Math.random() * game.level) + 1);
    while (nextQuestion == game.currentQuestion) {
        nextQuestion = Math.floor((Math.random() * game.level) + 1);
    }
    game.currentQuestion = nextQuestion;
    displayQuestion();
}

// Selects an animal at random and reselects if it is the same as the last question
function selectAnimal() {
    let nextAnimal = game.animals[Math.floor(Math.random() * game.animals.length)];
    while (nextAnimal == game.currentAnimal) {
        nextAnimal = game.animals[Math.floor(Math.random() * game.animals.length)];
    }
    game.currentAnimal = nextAnimal;
}

// Displays the number of animals required for the current question
function displayQuestion() {
    selectAnimal();
    for (let i = 0; i < game.currentQuestion; i++) {
        if (game.level == 5) {
            $('#question-area').append(`<img src="assets/images/${game.currentAnimal}.png" class="animal img-fluid" alt=${game.currentAnimal}>`);  
        } else if (game.level == 10) {
            $('#question-area').append(`<img src="assets/images/${game.currentAnimal}.png" class="animal img-fluid" alt=${game.currentAnimal}>`);
        }
    }
    $('.animal').click(playAnimalSound);
}

// Clears the options area and then creates a button for each of the 5 or 10 options
function displayOptions() {
    $('#options-area').empty();
    for (let i=0; i < game.level; i++) {
        $('#options-area').append(`<button id="button-${i+1}" class="btn btn-lg btn-warning option">${i+1}</button>`);
    }
}

// Listens for user answer and checks if it is correct, then increments game.correctAnswers or game.incorrectAnswers
function checkAnswer() {
    let isCorrect = game.currentQuestion == game.playerAnswer;
    if (isCorrect) {
        playCorrectAudio();
        game.correctAnswers++;
    } else {
        playIncorrectAudio();
        game.incorrectAnswers++;
    }
    showScore();
    game.questionCount = game.correctAnswers + game.incorrectAnswers;
    if (game.questionCount < 10) {
        newQuestion();
    } else {
        finishGame();
    }
}

// Updates the screen with the scores stored in the game object
function showScore() {
    document.getElementById("correct").innerText = game.correctAnswers;
    document.getElementById("incorrect").innerText = game.incorrectAnswers;
}

// Fills the required number of stars based on player score out of 10
function fillStars() {
let numberOfStars = Math.floor(game.correctAnswers / 2);
    for (let i=0; i < numberOfStars; i++) {
        $(`#star${i+1}`).removeClass("fa-regular").addClass("fa-solid");
    }
    if (game.correctAnswers % 2 != 0) {
        $(`#star${numberOfStars+1}`).removeClass("fa-regular fa-star").addClass("fa-solid fa-star-half-stroke");
    }
}

function displayTrophy() {
    let trophyColor = "";
    if (game.correctAnswers <= 4) {
        trophyColor = 'bronze';
    }
    else if (game.correctAnswers <= 7) {
        trophyColor = 'silver';
    }
    else {
        trophyColor = 'gold';
    }
    $('#trophy').append(`<img src="assets/images/${trophyColor}-trophy.png" alt=${trophyColor}-trophy>`);
}

function updateStoredScores() {
    if (game.level == 5) {
        if (game.correctAnswers > localStorage.getItem('easyHighScore')) {
            localStorage.setItem("easyHighScore", game.correctAnswers);
            $('#newHighScore').append('<h3>New High Score!</h3>');
        }
        let easyTotal = ((localStorage.getItem('easyAverage') * localStorage.getItem('easyGames')) + game.correctAnswers);
        let incrementEasyGames = Number(localStorage.getItem('easyGames')) + 1
        localStorage.setItem("easyGames", incrementEasyGames);
        let average = easyTotal / localStorage.getItem('easyGames');
        localStorage.setItem("easyAverage", average);
    }
    if (game.level == 10) {
        if (game.correctAnswers > localStorage.getItem('hardHighScore')) {
            localStorage.setItem("hardHighScore", game.correctAnswers);
        }
        let hardTotal = ((localStorage.getItem('hardAverage') * localStorage.getItem('hardGames')) + game.correctAnswers);
        let incrementHardGames = Number(localStorage.getItem('hardGames')) + 1
        localStorage.setItem("hardGames", incrementHardGames);
        let average = hardTotal / localStorage.getItem('hardGames');
        localStorage.setItem("hardAverage", average);
    }
}

function displayStoredScores() {
    $('#easy-high').text(`${localStorage.getItem('easyHighScore')}`)
    let roundedEasyAverage = Math.round(localStorage.getItem('easyAverage')*10)/10;
    $('#easy-average').text(`${roundedEasyAverage}`)
    $('#hard-high').text(`${localStorage.getItem('hardHighScore')}`)
    let roundedHardAverage = Math.round(localStorage.getItem('hardAverage')*10)/10;
    $('#hard-average').text(`${roundedHardAverage}`)
}

// Resets the stars to all empty
function resetStars() {
    $('.score-star').removeClass('fa-solid fa-star-half-stroke');
    $('.score-star').addClass('fa-regular fa-star');
}

// Removes the trophy from the modal
function resetTrophy() {
    $('#trophy').empty();
    $('#newHighScore').empty();
}

// Calls the fillStars function, then displays the endofGame modal
function finishGame() {
    $('.option').off("click");
    displayTrophy();
    fillStars();
    updateStoredScores();
    displayStoredScores();
    setTimeout(function() {
        $('#endOfGameModal').modal('show');
        playCheerAudio();
    }, 1000);
    // $('#finalScore').html(`Your score is ${game.correctAnswers} out of ${game.questionCount}`);
    $('#play-again').click(playGame);
}

