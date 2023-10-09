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
        document.getElementById("scoreFinal").innerHTML = "🧒 Wow! you won the game 🏆";
        document.getElementById("refresh").style.display = "block";
    } else if (computerScore === 5) {
        document.getElementById("scoreFinal").innerHTML = "💻 Oops! Computer won the game 😔";
        document.getElementById("refresh").style.display = "block";
    }
}

function youLost() {
    document.getElementById("final-winner").style.color = "#ffffff";
    document.getElementById("final-winner").innerHTML = "...";
    computerScore += 1;
    checkScoreCount();
    setTimeout(() => {
        document.getElementById("final-winner").style.color = "#ffb0e5";
        document.getElementById("final-winner").innerHTML = "Computer won this round";
    }, 250);
}
function youWon() {
    document.getElementById("final-winner").style.color = "#ffffff";
    document.getElementById("final-winner").innerHTML = "...";
    playerScore += 1;
    checkScoreCount();
    setTimeout(() => {
        document.getElementById("final-winner").style.color = "#6fff5c";
        document.getElementById("final-winner").innerHTML = "You won this round";
    }, 250);
}
function tie() {
    document.getElementById("final-winner").style.color = "#ffffff";
    document.getElementById("final-winner").innerHTML = "...";
    setTimeout(() => {
        document.getElementById("final-winner").innerHTML = "Round Tie !";
    }, 250);
}
