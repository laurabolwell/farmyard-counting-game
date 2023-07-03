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
| --- | --- | --- |
| XS Mobile (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Small Mobile (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Medium Mobile (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Large Mobile (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Small Tablet (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Laptop (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Large Laptop (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| Desktop (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| XL Monitor (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| 4K Monitor (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| iphone 11 (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |
| ipad (DevTools) | ![screenshot](documentation/responsiveness-testing/xs-mobile-main.png) | ![screenshot](documentation/responsiveness-testing/xs-mobile-start.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-end.png) |![screenshot](documentation/responsiveness-testing/xs-mobile-scores.png) |Works as expected |

## Lighthouse Audit

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/lighthouse-home-mobile.png) | No major issues |
| Home | Desktop | ![screenshot](documentation/lighthouse-home-desktop.png) | No major issues |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Location | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Start Game Modal | | | | |
| | Click outside of startGameModal  | Modal will not close | Pass | User forced to select a level button to continue |
| | Click on 'Counting to 5'  | Game starts on easy level | Pass | Options buttons and animals load as expected |
| | Click on 'Counting to 10'  | Game starts on easy level | Pass | Options buttons and animals load as expected |

| Main game area | | | | |
| | Click on sound button | Icon changes from muted speaker to speaker with sound and audio is turned on | Pass |  Button click sound heard to confirm|
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
| | Click on Contact link in navbar | Redirection to Contact page | Pass | |
| | Enter first/last name | Field will accept freeform text | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter message in textarea | Field will accept freeform text | Pass | |
| | Click the Submit button | Redirects user to form-dump | Pass | User must click 'Back' button to return |
| High Scores Modal | | | | |
| | Click on Sign Up button | Redirection to Sign Up page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password (twice) | Field will only accept password format | Pass | |
| | Click on Sign Up button | Asks user to confirm email page | Pass | Email sent to user |
| | Confirm email | Redirects user to blank Sign In page | Pass | |
| Log In | | | | |
| | Click on the Login link | Redirection to Login page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password | Field will only accept password format | Pass | |
| | Click Login button | Redirects user to home page | Pass | |
| Log Out | | | | |
| | Click Logout button | Redirects user to logout page | Pass | Confirms logout first |
| | Click Confirm Logout button | Redirects user to home page | Pass | |
| Profile | | | | |
| | Click on Profile button | User will be redirected to the Profile page | Pass | |
| | Click on the Edit button | User will be redirected to the edit profile page | Pass | |
| | Click on the My Orders link | User will be redirected to the My Orders page | Pass | |
| | Brute forcing the URL to get to another user's profile | User should be given an error | Pass | Redirects user back to own profile |

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

Repeat for all other tests, as applicable to your own site.
The aforementioned tests are just an example of a few different project scenarios.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

## User Story Testing

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature01.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature02.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature03.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature04.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature05.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature06.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature07.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature08.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature09.png) |
| repeat for all remaining user stories | x |

## Automated Testing

I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

### JavaScript (Jest Testing)

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

Adjust the code below (file names, etc.) to match your own project files/folders.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

I have used the [Jest](https://jestjs.io) JavaScript testing framework to test the application functionality.

In order to work with Jest, I first had to initialize NPM.

- `npm init`
- Hit `enter` for all options, except for **test command:**, just type `jest`.

Add Jest to a list called **Dev Dependencies** in a dev environment:

- `npm install --save-dev jest`

**IMPORTANT**: Initial configurations

When creating test files, the name of the file needs to be `file-name.test.js` in order for Jest to properly work.

Due to a change in Jest's default configuration, you'll need to add the following code to the top of the `.test.js` file:

```js
/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const { function1, function2, function3, etc. } = require("../script-name");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
```

Remember to adjust the `fs.readFileSync()` to the specific file you'd like you test.
The example above is testing the `index.html` file.

Finally, at the bottom of the script file where your primary scripts are written, include the following at the bottom of the file.
Make sure to include the name of all of your functions that are being tested in the `.test.js` file.

```js
if (typeof module !== "undefined") module.exports = {
    function1, function2, function3, etc.
};
```

Now that these steps have been undertaken, further tests can be written, and be expected to fail initially.
Write JS code that can get the tests to pass as part of the Red-Green refactor process.

Once ready, to run the tests, use this command:

- `npm test`

**NOTE**: To obtain a coverage report, use the following command:

- `npm test --coverage`

Below are the results from the tests that I've written for this application:

| Test Suites | Tests | Coverage | Screenshot |
| --- | --- | --- | --- |
| 1 passed | 16 passed | 55% | ![screenshot](documentation/js-test-coverage.png) |
| x | x | x | repeat for all remaining tests |

#### Jest Test Issues

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

Use this section to list any known issues you ran into while writing your Jest tests.
Remember to include screenshots (where possible), and a solution to the issue (if known).

This can be used for both "fixed" and "unresolved" issues.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

## Bugs

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

### GitHub **Issues**

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

An improved way to manage bugs is to use the built-in **Issues** tracker on your GitHub repository.
To access your Issues, click on the "Issues" tab at the top of your repository.
Alternatively, use this link: https://github.com/laurabolwell/farmyard-counting-game/issues

If using the Issues tracker for your bug management, you can simplify the documentation process.
Issues allow you to directly paste screenshots into the issue without having to first save the screenshot locally,
then uploading into your project.

You can add labels to your issues (`bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s).

Once you've sorted the issue, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following format:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/laurabolwell/farmyard-counting-game/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/laurabolwell/farmyard-counting-game/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/laurabolwell/farmyard-counting-game/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/laurabolwell/farmyard-counting-game/issues/3) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/laurabolwell/farmyard-counting-game/issues).

| Bug | Status |
| --- | --- |
| [JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).](https://github.com/laurabolwell/farmyard-counting-game/issues/4) | Open |
| [Python `E501 line too long` (93 > 79 characters)](https://github.com/laurabolwell/farmyard-counting-game/issues/5) | Open |

## Unfixed Bugs

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

Some examples:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

There are no remaining bugs that I am aware of.
 