const userClickedPattern = [];
const gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;
gameOn = true;

//returns the of the button that's clicked
const clickSelectID = () => {
    const buttonList = document.querySelectorAll(".btn");
    for (let button of buttonList) {
        button.addEventListener("click", () => {
            return button.getAttribute("id");
        });
    }
};

const playSound = (soundName) => {
    let audio = new Audio(`/sounds/${soundName}.mp3`);
    audio.play();
};

const animatePress = (currentColor) => {
    let pressedButton = document.querySelector(`#${currentColor}`);
    pressedButton.classList.add("pressed");
    setTimeout( () => pressedButton.classList.remove("pressed"), 100);
};

const nextSequence = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    console.log("The next color is")    
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log("The pattern to follow is: ");
    console.log(gamePattern);

    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    chosenColor = document.querySelector(`#${randomChosenColor}`);
    console.log("Chosen Element: ");
    console.log(chosenColor);
    // plays the sound first
    playSound(randomChosenColor);
    //adds effect and then hides it in 100 ms
    chosenColor.classList.add("hide");
    console.log("Class List before Timeout: ");
    console.log(chosenColor.classList);
    setTimeout(() => chosenColor.classList.remove("hide"), 100);
    console.log("Class List after Timeout: ");
    console.log(chosenColor.classList);
    level++;
    console.log(`The current level is: ${level}`);
    // header = document.querySelector("#level-title");
    // header.innerHTML = `Level ${level}`;
    // console.log(gamePattern);
};

// const checkAnswer = (currentLevel) => {
//     // if (userClickedPattern[answerIndex] === gamePattern[answerIndex]) {
//     //     console.log("success");
//     // } else {
//     //     console.log("wrong");
//     //     }
//     for (let x = currentLevel - 1; x <= 0; x--) {
//         if (userClickedPattern[x] === gamePattern[x]) {
//             continue
//         } else {
//             playSound("wrong");
//             document.querySelector("body").classList.add("game-over");
//             setTimeout(() => {
//                 document.querySelector("body").classList.remove("game-over")
//             }, 200);
//             document.querySelector("#level-title").innerHTML = "Game Over, Press Any Key to Restart";
//             // play wrong sound
//             gameOn = false; 
//         }
//     }
//     setTimeout(nextSequence(), 1000); // Problem could be here, not sure when to use () in function call
//     //     setTimeout(nextSequence, 1000);            
//     userClickedPattern.length = [];
// };

// const listenButton = () => {
//     buttonList = document.querySelectorAll(".btn");
//     for (let button of buttonList) {
//         button.addEventListener("click", () => {
//             userChosenColor = button.getAttribute("id");
//             playSound(userChosenColor);
//             animatePress(userChosenColor);
//             userClickedPattern.push(userChosenColor);
//         });
//     }
//     console.log(userClickedPattern);
// }

// while (gameOn != false) { // this is to initialize game
console.log("Waiting for a keyboard signal...")
document.addEventListener("keydown", () => {
    if (level === 0) {
        initHeader = document.querySelector("#level-title");
        initHeader.innerHTML = "Level 0";
        nextSequence(); // changes level from 0 to 1
    }
});
console.log("Waiting for a click...")
let colorID = clickSelectID();
console.log("colorID is: ");
console.log(colorID);
playSound(colorID);
animatePress(colorID);
console.log(userClickedPattern);



// while (level > 0) { // This is when you keep getting the pattern right


// TODO: Need to change gameon to false to break out of outermost loop
// }
// }
// checkAnswer(level);
// gameOn = input("Continue? ")



/* At this point, it might be worth reviewing how the Simon game works.

Firstly, the game shows the first colour in the sequence (blue). The user clicks on the blue button.

Next, the game shows the next colour (red), the user has to remember the sequence is blue, red and so on and so forth.

If the user messes up the sequence, then the game ends. */