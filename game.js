// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];

// function nextSequence() {

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   //1. Use jQuery to select the button with the same id as the randomChosenColour
//   //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//   //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }

const userClickedPattern = [];
const gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
buttonList = document.querySelectorAll(".btn");
console.log(buttonList);

const playSound = (soundName) => {
    const audio = new Audio(`/sounds/${soundName}.mp3`);
    audio.play();
};

const animatePress = (currentColor) => {
    pressedButton = document.querySelector(`#${currentColor}`);
    pressedButton.classList.add("pressed");
    setTimeout( () => pressedButton.classList.remove("pressed"), 100);
};

const nextSequence = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    // console.log(randomChosenColor);
    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    chosenColor = document.querySelector(`#${randomChosenColor}`);
    // console.log(chosenColor);
    // plays the sound first
    playSound(randomChosenColor);
    //adds effect and then hides it in 100 ms
    chosenColor.classList.add("hide");
    setTimeout(() => chosenColor.classList.remove("hide"), 100);
};

// Why is this returning blue if I leave off 'let'? Question for Devin.
for (let button of buttonList) {
    button.addEventListener("click", () => {
        buttonID = button.getAttribute("id");
        console.log(buttonID);
        // console.log(button.getAttribute("id"));
        // console.log("The pressed button inside loop is: ");
        // console.log(button);
        playSound(buttonID);
        animatePress(buttonID);
    });
}
    