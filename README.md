# FARMYARD COUNTING

Farmyard Counting is a counting game aimed at young children of pre-school age and those just starting out in school. It has minimal and easy-to-operate controls, bright colors, two levels of difficulty and fun sound effects so that children can practise their counting and number recognition skills in an enjoyable way.

The game is designed to be fully responsive, allowing it to be played on a wide range of devices.

![screenshot](documentation/amiresponsive-screenshot.png)

I used http://ui.dev/amiresponsive[http://ui.dev/amiresponsive](https://ui.dev/amiresponsive?url=https://laurabolwell.github.io/farmyard-counting-game) to create this image.

## UX

The main goal of Farmyard Counting is to encourage young children to practise their counting and number recognition skills in a fun and enjoyable way. It is aimed at children aged 2-5, and must also appeal to their parents who will be the ones selecting the games that their children play. 

### Colour Scheme

![screenshot](documentation/coolors-palette.png)

The game uses bright, child-friendly colours. I used [coolors.co](https://coolors.co/67c93e-dc3545-ffc107-ffd65c) to generate my colour palette.

- `#FFC107` used for answer buttons and to highlight the score count.
- `#DC3545` used for game control buttons.
- `#FFD65C` used for background colour of modals.
- `#67C93E` is the main colour of the main game background image and also used as the background for trophy display.

I've used CSS `:root` variables to easily update the global colour scheme by changing only one value, instead of everywhere in the CSS file.

```css
:root {
    --red: #DC3545;
    --amber: #FFC107;
    --light-amber: #FFD65C;
    --green: #67C93E;
}
```

### Typography

- [Short stack](https://fonts.google.com/specimen/Short+Stack) was used for all text on the game screen and the modals.

- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as sound icon and the score counters.

### Other design choices

- Minimal use of text, instructions etc. The game is designed to be so simple to understand and navigate that there is no need for lengthy written instructions. The target audience of the game cannot yet read so I have chosen not to clutter the screen with unnecessary text.

- Removed reset button from main game screen. I had originally positioned a reset button on the bottom corner of the screen which was useful during the development of the game, but completely unnecessary for game play for children. Parents can easily reset the game if they so wish by clicking the menu button and reselecting the level.

## User Stories

### Players (age 2-5)

- As a player, I would like to easily find and understand the controls, so that I can play independently.
- As a player, I would like easy to operate controls, so that my little fingers can use them.
- As a player, I would like the game to be fun, so that I want to keep playing.
- As a player, I would like to see bright images and fun sounds, so that I want to keep playing.
- As a player, I would like the game to have minimal text on the screen, as I am too young to read it.
- As a player, I would like to be rewarded for correct answers, so that I can see the progress I am making.
- As a player, I would like the game to be robust enough to handle my unpredictable use of it.

### Parents of players

- As a parent, I would like the game to have clear static objects to count, so that my child can improve their counting skills.
- As a parent, I would like the game to have clear written digits to choose answers from, so that my child can improve their number recognition skills.
- As a parent, I would like the game to store scores from previous games, so that I can see how my child is progressing.
- As a parent, I would like the game to have different levels of difficulty, so that it has longevity.
- As a parent, I would like to have a mute button, so that I can turn the sound off when playing in a public place (or when it becomes annoying!).
- As a parent, I would like the game to be easily operated and not able to be broken by a toddler playing it, so that my child can play independently without regular input from me.


## Wireframes

To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Start of Game Modal Wireframes

<details>
<summary>Click to see the Start of Game Modal Wireframes</summary>

| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](documentation/wireframes/mobile-start-modal.png) |
| Tablet | ![screenshot](documentation/wireframes/tablet-start-modal.png) |
| Desktop | ![screenshot](documentation/wireframes/desktop-start-modal.png) |

</details>

### Main Game Page Wireframes

<details>
<summary>Click to see the Main Game Page Page Wireframes</summary>

| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](documentation/wireframes/mobile-main.png) |
| Tablet | ![screenshot](documentation/wireframes/tablet-main.png) |
| Desktop | ![screenshot](documentation/wireframes/desktop-main.png) |

</details>

### End of Game Modal Wireframes

<details>
<summary>Click to see the End of Game Modal Wireframes</summary>

| Size | Screenshot |
| --- | --- |
| Mobile | ![screenshot](documentation/wireframes/mobile-end-modal.png) |
| Tablet | ![screenshot](documentation/wireframes/tablet-end-modal.png) |
| Desktop | ![screenshot](documentation/wireframes/desktop-end-modal.png) |

</details>

## Features

### Existing Features

- **Start of Game Modal**

    - This modal pops up when the page is loaded.+
    - Gives the user the choice of 2 levels of difficulty
    - Has no close button and has a static backdrop so that the user cannot progress without choosing a level of difficulty
    - Minimal text and a large obvious button for each level so that children can proceed with the game even if parents are not present to select the level

![screenshot](documentation/features/start-of-game-modal.png)

- **Menu button**

    - Positioned prominently in the top left corner of the screen
    - Reloads the start of game modal at any point during play

![screenshot](documentation/features/menu-button.png)

- **Mute button**

    - Positioned in the top right corner of the screen
    - Speaker icons used rather than text
    - This button toggles the sound on and off

![screenshot](documentation/features/mute-button.png)

- **Score area**

    - Thumbs up and thumbs down icons to show the number of correct and incorrect answers
    - Button to display high scores modal

![screenshot](documentation/features/score-area.png)


- **Options buttons**

    - Buttons are spaced out vertically to avoid accidental clicking of wrong buttons
    - Different audio sounds are played each time an answer is clicked to indicate if it was correct or incorrect

![screenshot](documentation/features/options-buttons-five.png)
![screenshot](documentation/features/options-buttons-ten.png)

- **Game area**

    - Bright, eye-catching farm background picture
    - For each question an animal is randomly selected and a random number of them are displayed on the game area
    - Two consecutive questions will never have the same animal or the same number
    - The appropriate animal sound is played when an animal is clicked (I have chosen not to play the animal noise audio on hover too as this may become too distracting if the child is using the pointer to count the animals)

![screenshot](documentation/features/game-area.png)

- **End of game modal**

    - Once the player has finished the game (10 questions), this modal will display on the screen
    - Displays a bronze, silver, or gold trophy depending on the number of correct answers
    - Displays a visual representation as a number of stars (out of 5)
    - Displays a 'New High Score' comment to the modal if the player has beaten the previous high score
    - Plays audio of children cheering
    - 'Play again' button to reset the game and start another series of questions
    - Static backdrop so that a player cannot close the modal without triggering a new game

![screenshot](documentation/features/end-of-game-modal.png)

- **High scores modal**

    - Displays a high score for both levels of difficulty
    - Displays an average score for both levels of difficulty (rounded to one decimal place of accuracy)
    - Has a prominent close button at the bottom of the modal but this can also be closed by clicking anywhere on the screen

![screenshot](documentation/features/high-scores-modal.png)

- **Button click audio**

    - Button click audio on all buttons in game gives the player feedback when they have clicked on something


### Future Features

- Expanded to additional levels of difficulty
    - The game could be extended to provide an 'Counting to 20' option.
- Option to display the answer choices as words
    - The answer choices buttons could be displayed as words rather than digits (ie 'one' rather than '1') so that children can practice recognising numbers written in words. This would make the game suitable for a wider age range.

## Tools & Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS :root variables](https://www.w3schools.com/css/css3_variables.asp) used for reusable styles throughout the site.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [Bootstrap](https://getbootstrap.com) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [jQuery](https://jquery.com/) javascript library used for user interaction on the site.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.
- [Markdown Builder by Tim Nelson](https://traveltimn.github.io/markdown-builder/) used to help generate the Markdown files.
- [Tiny PNG](tinypng.com) used to compress images.
- [Favicon.io](favicon.io) used to create favicon.
- [Am I Responsive?](https://ui.dev/amiresponsive) used to show the website on a range of devices.


## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/laurabolwell/farmyard-counting-game), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://laurabolwell.github.io/farmyard-counting-game)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/laurabolwell/farmyard-counting-game) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/laurabolwell/farmyard-counting-game.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/laurabolwell/farmyard-counting-game)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/laurabolwell/farmyard-counting-game)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local VS Deployment

There are no known differences between the local and the deployed version.

## Credits

### Content

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://traveltimn.github.io/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) | contact page | interactive pop-up (modal) |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Grid Garden](https://cssgridgarden.com) | entire site | modern responsive layouts |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [YouTube](https://www.youtube.com/watch?v=YL1F4dCUlLc) | leaderboard | using `localStorage()` in JS for high scores |
| [YouTube](https://www.youtube.com/watch?v=u51Zjlnui4Y) | PP3 terminal | tutorial for adding color to the Python terminal |
| [strftime](https://strftime.org) | CRUD functionality | helpful tool to format date/time from string |
| [Tutorials Point](hhttps://www.tutorialspoint.com/How-can-I-round-a-number-to-1-decimal-place-in-JavaScript#:~:text=round()%20function%20rounds%20number,number%20to%20n%20decimal%20place.) | high score modal | how to round the average score to 1dp |

### Media

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |
| [Pexels](https://www.freepik.com/free-vector/farm-landscape_985059.htm#&position=0&from_view=search&track=ais) | entire site | image | background image |
| [Favicon.io](https://favicon.io/emoji-favicons/tractor) | entire site | favicon | favicon |
| [Clipartmax](https://www.clipartmax.com/middle/m2i8i8N4G6K9d3N4_transparent-background-sheep-clipart/) | main game | image | sheep |
| [Clipartmax](https://www.clipartmax.com/middle/m2i8H7A0G6Z5m2H7_cow-with-black-spots-clip-art-image-cute-white-cow-white-and/) | main game | image | cow |
| [Clipartmax](https://www.clipartmax.com/middle/m2K9A0d3m2d3Z5K9_cute-goat-pictures-lyrics-goat-cartoon/) | main game | image | goat |
| [Clipartmax](https://www.clipartmax.com/middle/m2K9A0d3N4d3d3A0_open-chicken-cartoon/) | main game | image | chicken |
| [Clipartmax](https://www.clipartmax.com/middle/m2K9A0d3m2Z5N4G6_short-horse-transparent-background-horse-clipart/) | main game | image | horse |
| [Clipartmax](https://www.clipartmax.com/middle/m2K9A0m2G6N4m2K9_clipart-of-pig-pigs-cartoon-kid-pigs-pinterest-clip-art-of-a/) | main game | image | pig |
| [IMGBIN](https://imgbin.com/download/GD9iY2nY) | end of game modal | image | trophy |
| [Clipartmax](https://www.clipartmax.com/middle/m2i8K9i8m2i8G6m2_police-clipart-philip-martin-filipino-farmer-clipart/) | start game modal | image | farmer |
| [Zapsplat](https://www.zapsplat.com/music/five-english-children-under-the-age-of-10-years-old-cheering-in-a-happy-or-excited-way/) | end of game modal | audio | children cheering |
| [Zapsplat](https://www.zapsplat.com/music/bright-button-click-1/) | entire site | audio | button click |
| [Zapsplat](hhttps://www.zapsplat.com/music/correct-answer-ping-chime-1/) | main game page | audio | correct answer |
| [Zapsplat](https://www.zapsplat.com/music/game-sound-basic-digital-retro-incorrect-wrong-error-negative-tone-1/) | main game page | audio | incorrect answer |
| [Zapsplat](https://www.zapsplat.com/music/sheep-baa/) | main game page | audio | sheep sound |
| [Zapsplat](https://www.zapsplat.com/music/cow-moo-mooing-close-up-1/) | main game page | audio | cow sound |
| [Zapsplat](https://www.zapsplat.com/music/horse-whinny-2/) | main game page | audio | horse sound |
| [Zapsplat](https://www.zapsplat.com/music/cockerel-single-cluck-1/) | main game page | audio | chicken sound |
| [Zapsplat](https://www.zapsplat.com/music/pig-grunting-designed-5/) | main game page | audio | pig sound |
| [Zapsplat](https://www.zapsplat.com/music/goat-sheep-bleat-external/) | main game page | audio | goat sound |

### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my phusband, for believing in me, and supporting me in making this transition into software development.
