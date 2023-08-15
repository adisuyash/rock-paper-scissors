let numberOfImages = document.querySelectorAll("img").length;
for (let i = 0; i < numberOfImages; i++) {
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        let clickedWeapon = this.alt;
        document.getElementById("player").innerHTML = clickedWeapon;
        compareWeapon(clickedWeapon);
    });
}

function compareWeapon(weapon) {
    let weapons = ["Rock", "Paper", "Scissors"];
    let computerChoice = weapons[Math.floor(Math.random() * 3)];
    document.getElementById("computer").innerHTML = computerChoice;

    if (weapon === "Rock") {
        if (computerChoice === "Paper") {
            youLost()
        }
        else if (computerChoice === "Scissors") {
            youWon()
        }
        else {
            tie();
        }
    }
    else if (weapon === "Paper") {
        if (computerChoice === "Scissors") {
            youLost()
        }
        else if (computerChoice === "Rock") {
            youWon()
        }
        else {
            tie()
        }
    }
    else {
        if (computerChoice === "Rock") {
            youLost()
        }
        else if (computerChoice === "Paper") {
            youWon()
        }
        else {
            tie()
        }
    }
}

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

function checkScoreCount() {
    if (playerScore === 5) {
        document.getElementById("scoreFinal").innerHTML = "🧒 won the Game 🏆";
    } else if (computerScore === 5) {
        document.getElementById("scoreFinal").innerHTML = "💻 won the Game 🏆";
    }
}
function youLost() {
    document.getElementById("final-winner").innerHTML = "💻 won this round";
    computerScore += 1;
    console.log(`loss Player score ${playerScore}`);
    console.log(`loss Player score ${computerScore}`);
    checkScoreCount();
}
function youWon() {
    document.getElementById("final-winner").innerHTML = "🧒 won this round";
    playerScore += 1;
    console.log(`won Player score ${playerScore}`);
    console.log(`won Player score ${computerScore}`);
    checkScoreCount();
}
function tie() {
    document.getElementById("final-winner").innerHTML = "Round Tie !"
}
