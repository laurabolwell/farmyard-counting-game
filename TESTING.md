# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Flaurabolwell.github.io%2Ffarmyard-counting-game%2Findex.html) | ![screenshot](documentation/testing/code-validation/html-validation.png) | Pass: no errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flaurabolwell.github.io%2Ffarmyard-counting-game) | ![screenshot](documentation/testing/code-validation/css-validation.png) | Pass: All errors shown are from the imported Bootstrap library |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/testing/code-validation/js-validation.png) | Pass: no errors |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/testing/browser-testing/chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation//testing/browser-testing/firefox.png) | Works as expected |
| Edge | ![screenshot](documentation/testing/browser-testing/edge.png) | Works as expected |
| Safari (on ipad) | ![screenshot](documentation/testing/browser-testing/safari.png) | Cheering audio does not play, otherwise works as expected |
| Brave | ![screenshot](documentation/testing/browser-testing/brave.png) | Works as expected |
| Opera | ![screenshot](documentation/testing/browser-testing/opera.png) | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshow Main | Screenshot Start | Screenshot End | Screen Scores | Notes |
| --- | --- | --- | --- | --- | --- |
| XS Mobile (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/mobile-xs-main.png) | ![screenshot](documentation/testing/responsiveness-testing/mobile-xs-start.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-xs-end.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-xs-scores.png) |Works as expected |
| Small Mobile (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/mobile-small-main.png) | ![screenshot](documentation/testing/responsiveness-testing/mobile-small-start.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-small-end.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-small-scores.png) |Works as expected |
| Medium Mobile (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/mobile-medium-main.png) | ![screenshot](documentation/testing/responsiveness-testing/mobile-medium-start.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-medium-end.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-medium-scores.png) |Works as expected |
| Large Mobile (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/mobile-large-main.png) | ![screenshot](documentation/testing/responsiveness-testing/mobile-large-start.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-large-end.png) |![screenshot](documentation/testing/responsiveness-testing/mobile-large-scores.png) |Works as expected |
| Small Tablet (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/tablet-small-main.png) | ![screenshot](documentation/testing/responsiveness-testing/tablet-small-start.png) |![screenshot](documentation/testing/responsiveness-testing/tablet-small-end.png) |![screenshot](documentation/testing/responsiveness-testing/tablet-small-scores.png) |Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/tablet-main.png) | ![screenshot](documentation/testing/responsiveness-testing/tablet-start.png) |![screenshot](documentation/testing/responsiveness-testing/tablet-end.png) |![screenshot](documentation/testing/responsiveness-testing/tablet-scores.png) |Works as expected |
| Laptop (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/laptop-main.png) | ![screenshot](documentation/testing/responsiveness-testing/laptop-start.png) |![screenshot](documentation/testing/responsiveness-testing/laptop-end.png) |![screenshot](documentation/testing/responsiveness-testing/laptop-scores.png) |Works as expected |
| Large Laptop (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/laptop-large-main.png) | ![screenshot](documentation/testing/responsiveness-testing/laptop-large-start.png) |![screenshot](documentation/testing/responsiveness-testing/laptop-large-end.png) |![screenshot](documentation/testing/responsiveness-testing/laptop-large-scores.png) |Works as expected |
| Desktop | ![screenshot](documentation/testing/responsiveness-testing/desktop-main.png) | ![screenshot](documentation/testing/responsiveness-testing/desktop-start.png) |![screenshot](documentation/testing/responsiveness-testing/desktop-end.png) |![screenshot](documentation/testing/responsiveness-testing/desktop-scores.png) |Works as expected |
| XL Monitor (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/monitor-xl-main.png) | ![screenshot](documentation/testing/responsiveness-testing/monitor-xl-start.png) |![screenshot](documentation/testing/responsiveness-testing/monitor-xl-end.png) |![screenshot](documentation/testing/responsiveness-testing/monitor-xl-scores.png) | Minor scaling issues |
| 4K Monitor (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/monitor-4k-main.png) | ![screenshot](documentation/testing/responsiveness-testing/monitor-4k-start.png) |![screenshot](documentation/testing/responsiveness-testing/monitor-4k-end.png) |![screenshot](documentation/testing/responsiveness-testing/monitor-4k-scores.png) | Minor scaling issues |
| iphone 11 (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/iphone11-main.png) | ![screenshot](documentation/testing/responsiveness-testing/iphone11-start.png) |![screenshot](documentation/testing/responsiveness-testing/iphone11-end.png) |![screenshot](documentation/testing/responsiveness-testing/iphone11-scores.png) |Works as expected |
| ipad (DevTools) | ![screenshot](documentation/testing/responsiveness-testing/ipad-main.png) | ![screenshot](documentation/testing/responsiveness-testing/ipad-start.png) |![screenshot](documentation/testing/responsiveness-testing/ipad-end.png) |![screenshot](documentation/testing/responsiveness-testing/ipad-scores.png) |Works as expected |

## Lighthouse Audit

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/testing/lighthouse-testing/lighthouse-mobile.png) | No major issues |
| Home | Desktop | ![screenshot](documentation/testing/lighthouse-testing/lighthouse-desktop.png) | No major issues |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Location | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Start Game Modal | | | | |
| | Click outside of start modal  | Modal will not close | Pass | User forced to select a level button to continue |
| | Click on 'Counting to 5'  | Game starts on easy level | Pass | Options buttons and animals load as expected |
| | Click on 'Counting to 10'  | Game starts on easy level | Pass | Options buttons and animals load as expected |
| Main game area | | | | |
| | Click on sound button | Icon changes from muted speaker to speaker with sound and audio is turned on | Pass |  Button click sound heard to confirm |
| | Click on 'Menu' button | StartGameModal loads, button click audio heard | Pass | |
| | Click on 'High scores' button | HighScoresModal loads, button click audio heard | Pass | |
| | Click on animal | Appropriate animal audio plays | Pass | Animal sounds can be played in quick succession |
| | Click on scores counter | Nothing | Pass | No hover effects as required |
| | Click on correct option button (less than 10 questions answered) | Correct audio plays, correct score counter increments, next question loads | Pass | Audio works when buttons clicked in quick succession |
| | Click on incorrect option button (less than 10 questions answered) | Incorrect audio plays, incorrect score counter increments, next question loads | Pass | Audio works when buttons clicked in quick succession |
| | Click on correct option button (10th question) | Correct audio plays, correct score counter increments, endOfGameModal loads | Pass | |
| | Click on incorrect option button (10th question) | Incorrect audio plays, incorrect score counter increments, endOfGameModal loads | Pass | |
| | Click on option button (after 10th question) | No sound, no score incremented, endOfGameModal loads| Pass | |
| End of Game Modal | | | | |
| | Click outside of modal | Modal will not close | Pass | User forced to click 'Play Again!' and trigger the new game |
| | Click on 'Play Again!' button | Modal closes and new game begins | Pass | |
| High Scores Modal | | | | |
| | Click outside of modal | Modal closes | Pass | Game continues as expected |
| | Click 'Close' button | Modal closes | Pass | Game continues as expected |
| | Click 'Reset High Scores' button | High scores all set to zero | Pass | High and average scores all set to 0 and instantly updated on modal|
| | Click on 'High Scores' button (after 10th question but before endOfGameModal loads) | High score modal shows, then endOfGameModal still loads as expected | Pass | Need to click 'Play again' on endOfGameModal to trigger the new game and close the modal, when this happens the high scores modal is visible underneath with the updated score |


## User Story Testing

| User Story | Screenshot | Comment |
| --- | --- | --- |
| As a player, I would like to easily find and understand the controls, so that I can play independently. | ![screenshot](documentation/features/options-buttons-five.png) | Game starts automatically |
| As a player, I would like easy to operate controls, so that my little fingers can use them. | ![screenshot](documentation/features/options-buttons-five.png) | All bright easy to spot buttons, with good spacing between to avoid accidental presses |
| As a player, I would like the game to be fun, so that I want to keep playing. | ![screenshot](documentation/features/game-area.png) | Bright colours, fun images and sounds |
| As a player, I would like to see bright images and fun sounds, so that I want to keep playing. | ![screenshot](documentation/features/game-area.png) | Bright colours, fun images and sounds |
| As a player, I would like the game to have minimal text on the screen, as I am too young to read it. | ![screenshot](documentation/features/game-area.png) | Only buttons for parental use have text |
| As a player, I would like to be rewarded for correct answers, so that I can see the progress I am making. | ![screenshot](documentation/features/end-of-game-modal.png) | Audio feedback for each correct answer, audio and visual feedback at end of game |
| As a player, I would like the game to be robust enough to handle my unpredictable use of it. | ![screenshot](documentation/features/start-of-game-modal.png) | Cannot start game without selecting a level, cannot click options after game has finished, can click multiple buttons in quick succession without 'breaking' the game. See defensive programming section for more details |
| As a parent, I would like the game to have clear static objects to count, so that my child can improve their counting skills. | ![screenshot](documentation/features/game-area.png) | Can choose between up to 5 objects or up to 10 objects|
| As a parent, I would like the game to have clear written digits to choose answers from, so that my child can improve their number recognition skills. | ![screenshot](documentation/features/options-buttons-five.png) | Can choose between numbers to 5 or numbers to 10 |
| As a parent, I would like the game to store scores from previous games, so that I can see how my child is progressing. | ![screenshot](documentation/features/high-scores-modal.png) | Shows high score and average score for each level of difficulty |
| As a parent, I would like the game to have different levels of difficulty, so that it has longevity. | ![screenshot](documentation/features/start-of-game-modal.png) | Must select level at the start of the game |
| As a parent, I would like to have a mute button, so that I can turn the sound off when playing in a public place (or when it becomes annoying!). | ![screenshot](documentation/features/mute-button.png) | |
| As a parent, I would like the game to be easily operated and not able to be broken by a toddler playing it, so that my child can play independently without regular input from me. | ![screenshot](documentation/features/game-area.png) | Cannot start game without selecting a level, cannot click options after game has finished, can click multiple buttons in quick succession without 'breaking' the game. See defensive programming section for more details |

## Automated Testing

I have conducted some automated tests on my application. I have tested whether the game object contains the correct keys for the game to run and have also tested whether the playGame function correctly resets the correct answer, incorrect answer and question counters at the beginning of each game. 

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

### JavaScript (Jest Testing)


I have used the [Jest](https://jestjs.io) JavaScript testing framework to test the application functionality.

In order to work with Jest, I first had to initialize NPM.

- `npm init`
- Hit `enter` for all options, except for **test command:**, just type `jest`.

Add Jest to a list called **Dev Dependencies** in a dev environment:

- `npm install --save-dev jest`

**IMPORTANT**: Initial configurations

When creating test files, the name of the file needs to be `script.test.js` in order for Jest to properly work.

Due to a change in Jest's default configuration, you'll need to add the following code to the top of the `.test.js` file:

```js
/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const { game, playGame } = require("../script"); 
const { beforeAll } = require("jest-circus");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
```

Finally, at the bottom of the script file where your primary scripts are written, include the following at the bottom of the file.
Make sure to include the name of all of your functions that are being tested in the `.test.js` file.

```js
if (typeof module !== "undefined") module.exports = {
    game, playGame
};
```

Once ready, to run the tests, use this command:

- `npm test`

**NOTE**: To obtain a coverage report, use the following command:

- `npm test --coverage`

Below are the results from the tests that I've written for this application:

| Test Suites | Tests | Coverage | Screenshot |
| --- | --- | --- | --- |
| 1 passed | 11 passed | 2.66% | ![screenshot](documentation//testing/jest.png) |

## Bugs

### GitHub **Issues**

I have tracked bugs through the development process using github [issues](https://github.com/laurabolwell/farmyard-counting-game/issues).


**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/laurabolwell/farmyard-counting-game/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [Clicks not registering after first question](https://github.com/laurabolwell/farmyard-counting-game/issues/1) | Closed |
| [Score not updating on last question](https://github.com/laurabolwell/farmyard-counting-game/issues/2) | Closed |
| [startGameModal not opening on page load](https://github.com/laurabolwell/farmyard-counting-game/issues/3) | Closed |
| [Incorrect audio file not playing](https://github.com/laurabolwell/farmyard-counting-game/issues/4) | Closed |
| [Correct answer audio not playing if 2 correct answers given in quick succession](https://github.com/laurabolwell/farmyard-counting-game/issues/5) | Closed |
| [Game accepting clicks on options buttons after game has finished](https://github.com/laurabolwell/farmyard-counting-game/issues/6) | Closed |
| [Modal toggle not working correctly](https://github.com/laurabolwell/farmyard-counting-game/issues/7) | Closed |

**Open Issues**

There are no remaining open [issues](https://github.com/laurabolwell/farmyard-counting-game/issues).

## Unfixed Bugs

There are no remaining bugs that I am aware of.

Return back to the [README.md](README.md) file.