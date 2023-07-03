/* jshint esversion: 11, jquery: true */

// Game object storing the current state of the game
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

/* 
 * Adds event listener to sound button so it can toggle the sound on and off,
 * adds event listeners to menu, difficulty, sound, and high score buttons to play button click Audio,
 * loads the start of game modal, waits for level to be selected
 * adds event listener to high scores button so it can display the high scores modal
 */
document.addEventListener("DOMContentLoaded", function () {
    $('.sound').click(function () {
        $(".sound-icon").toggleClass("hidden");
        game.muted = !game.muted;
    });
    $('.menu, .sound, #reset-scores-btn, .difficulty').click(playButtonClickAudio);
    $('#startGameModal').modal('show');
    getLevel();
    $('.high-scores-btn').click(displayHighScoresModal);
});

// If sound is NOT muted: stops the current audio and plays the button click audio
function playButtonClickAudio() {
    if (!game.muted) {
        $('.currentAudio')[0].load();
        $('audio').removeClass('currentAudio');
        $('#buttonClickAudio')[0].play();
        $('#buttonClickAudio').addClass('currentAudio');
    }
}

// If sound is NOT muted: stops the current audio and plays the incorrect answer audio
function playIncorrectAudio() {
    if (!game.muted) {
        $('.currentAudio')[0].load();
        $('audio').removeClass('currentAudio');
        $('#incorrectAudio')[0].play();
        $('#incorrectAudio').addClass('currentAudio');
    }
}

// If sound is NOT muted: stops the current audio and plays the correct answer audio
function playCorrectAudio() {
    if (!game.muted) {
        $('.currentAudio')[0].load();
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
        $('.currentAudio')[0].load();
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

/* 
 * Resets the question and answer counts in the game object,
 * resets the stars and trophy in end of game modal
 * displays the options buttons and adds event listeners to them, 
 * shows the starting scores of 0,
 * then calls the newQuestion function
 */
function playGame() {
    game.correctAnswers = 0;
    game.incorrectAnswers = 0;
    game.questionCount = 0;
    resetEndOfGameModal();
    displayOptions();
    $('.option').on('click', function () {
        game.playerAnswer = this.innerText;
        checkAnswer();
    });
    showScore();
    newQuestion();
}

// Clears the options area and then creates a button for each of the 5 or 10 options
function displayOptions() {
    $('#options-area').empty();
    for (let i = 0; i < game.level; i++) {
        $('#options-area').append(`<button id="button-${i+1}" class="btn btn-lg btn-warning option">${i+1}</button>`);
    }
}

// Updates the screen with the scores stored in the game object
function showScore() {
    document.getElementById("correct").innerText = game.correctAnswers;
    document.getElementById("incorrect").innerText = game.incorrectAnswers;
}

/*
 * Clears previous question from the questionarea, 
 * selects random number from 1-5/1-10 depending on level chosen,
 * checks if it is the same as the previous question (and selects again if it is),
 * assigns it to game.currentQuestion,
 * then calls the displayQuestion function
 */
function newQuestion() {
    $('#question-area').empty();
    let nextQuestion = Math.floor((Math.random() * game.level) + 1);
    while (nextQuestion == game.currentQuestion) {
        nextQuestion = Math.floor((Math.random() * game.level) + 1);
    }
    game.currentQuestion = nextQuestion;
    displayQuestion();
}

// Selects an animal at random, checks if it is the same as the previous question, and selects again if it is
function selectAnimal() {
    let nextAnimal = game.animals[Math.floor(Math.random() * game.animals.length)];
    while (nextAnimal == game.currentAnimal) {
        nextAnimal = game.animals[Math.floor(Math.random() * game.animals.length)];
    }
    game.currentAnimal = nextAnimal;
}

/* Calls the selectAnimal function to select an animal,
 * adds the required number of animal images to the question area,
 * adds event listeners to play the appropriate animal sound when the animals are clicked
 */
function displayQuestion() {
    selectAnimal();
    for (let i = 0; i < game.currentQuestion; i++) {
        $('#question-area').append(`<img src="assets/images/${game.currentAnimal}.png" class="animal img-fluid" alt=${game.currentAnimal}>`);
    }
    $('.animal').click(playAnimalSound);
}

/*
 * checkAnswer() is called when a player clicks on one of the answer options buttons,
 * it checks if the answer the player has clicked is correct,
 * plays the appropriate audio (if the game is not muted),
 * increments the correct or incorrect answer count in the game object,
 * updates the score on the screen,
 * then checks if the game has finished (ie 10 questions have been answered),
 * and either loads the next question or calls the finishGame function()
 */
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

/*
 * Turns off the click listener on the options buttons,
 * calls updateStoredScores() to update the high score and average score in local storage,
 * calls updateEndOfGameModal() to display the correct trophy and number of stars,
 * shows the end of game modal (and plays the cheer audio if game is not muted),
 * adds a click listener to the play again button so user can trigger a new game
 */
function finishGame() {
    $('.option').off("click");
    updateStoredScores();
    updateEndOfGameModal();
    setTimeout(function () {
        $('#endOfGameModal').modal('show');
        playCheerAudio();
    }, 1000);
    $('#play-again').click(playGame);
}

// Calls the resetStars and resetTrophy to clear the end of game modal
function resetEndOfGameModal() {
    resetStars();
    resetTrophy();
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

// Calls the fillStars and displayTrophy function to display results of game 
function updateEndOfGameModal() {
    fillStars();
    displayTrophy();
}

// Fills the required number of stars based on player score out of 10
function fillStars() {
    let numberOfStars = Math.floor(game.correctAnswers / 2);
    for (let i = 0; i < numberOfStars; i++) {
        $(`#star${i+1}`).removeClass("fa-regular").addClass("fa-solid");
    }
    if (game.correctAnswers % 2 != 0) {
        $(`#star${numberOfStars+1}`).removeClass("fa-regular fa-star").addClass("fa-solid fa-star-half-stroke");
    }
}

// Check the number of correct answers and displays the appropriate bronze/silver/gold trophy
function displayTrophy() {
    let trophyColor = "";
    if (game.correctAnswers <= 4) {
        trophyColor = 'bronze';
    } else if (game.correctAnswers <= 7) {
        trophyColor = 'silver';
    } else {
        trophyColor = 'gold';
    }
    $('#trophy').append(`<img src="assets/images/${trophyColor}-trophy.png" alt=${trophyColor}-trophy>`);
}

/*
 * Calls checkForStoredScores to check if high scores already exist,
 * displays the scores stored in local storage,
 * adds a click listener to the reset scores button so it can reset the scores,
 * then shows the high scores modal
 */
function displayHighScoresModal() {
    checkForStoredScores();
    displayStoredScores();
    $('#reset-scores-btn').click(resetStoredScores);
    $('#highScoreModal').modal('show');
}

/*
 * Checks if there are any high scores in local storage for each level,
 * if not, it sets the high score to 0
 */
function checkForStoredScores() {
    if (localStorage.getItem('easyHighScore') === null) {
        localStorage.setItem('easyHighScore', 0);
    }
    if (localStorage.getItem('hardHighScore') === null) {
        localStorage.setItem('hardHighScore', 0);
    }
}

/*
 * For each level: checks if the current game score is higher than the stored high score,
 * if it is, then the stored high score is overwritten,
 * and a 'New High Score!' message is added to the modal.
 * Calculates a new average score incorporating the latest game score
 * and updates this average in local storage
 */
function updateStoredScores() {
    if (game.level == 5) {
        if (game.correctAnswers > localStorage.getItem('easyHighScore')) {
            localStorage.setItem("easyHighScore", game.correctAnswers);
            $('#newHighScore').append('<h3>New High Score!</h3>');
        }
        let easyTotal = ((localStorage.getItem('easyAverage') * localStorage.getItem('easyGames')) + game.correctAnswers);
        let incrementEasyGames = Number(localStorage.getItem('easyGames')) + 1;
        localStorage.setItem("easyGames", incrementEasyGames);
        let average = easyTotal / localStorage.getItem('easyGames');
        localStorage.setItem("easyAverage", average);
    }
    if (game.level == 10) {
        if (game.correctAnswers > localStorage.getItem('hardHighScore')) {
            localStorage.setItem("hardHighScore", game.correctAnswers);
        }
        let hardTotal = ((localStorage.getItem('hardAverage') * localStorage.getItem('hardGames')) + game.correctAnswers);
        let incrementHardGames = Number(localStorage.getItem('hardGames')) + 1;
        localStorage.setItem("hardGames", incrementHardGames);
        let average = hardTotal / localStorage.getItem('hardGames');
        localStorage.setItem("hardAverage", average);
    }
}

// Updates the high scores and average scores on the high scores modal, average score is rounded to 1 decimal place
function displayStoredScores() {
    $('#easy-high').text(`${localStorage.getItem('easyHighScore')}`);
    let roundedEasyAverage = Math.round(localStorage.getItem('easyAverage') * 10) / 10;
    $('#easy-average').text(`${roundedEasyAverage}`);
    $('#hard-high').text(`${localStorage.getItem('hardHighScore')}`);
    let roundedHardAverage = Math.round(localStorage.getItem('hardAverage') * 10) / 10;
    $('#hard-average').text(`${roundedHardAverage}`);
}

// Resets all scores stored in local storage to 0
function resetStoredScores() {
    localStorage.setItem("easyHighScore", 0);
    localStorage.setItem("hardHighScore", 0);
    localStorage.setItem("easyAverage", 0);
    localStorage.setItem("hardAverage", 0);
    localStorage.setItem("easyGames", 0);
    localStorage.setItem("hardGames", 0);
    displayStoredScores();
}