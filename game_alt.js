let level = 0;
const gamePattern = [];
const buttonColors = ["red", "green", "blue", "yellow"];

window.addEventListener("keypress", () => {
    alert("Game started!");
    let gameOn = true;
    level = 1;
    if (gameOn === true) {
        console.log(`The level is ${level}`);
        document.querySelector("#level-title").innerHTML = `Level ${level}!`;
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(`The random number is: ${randomNumber}`);
    }
});
