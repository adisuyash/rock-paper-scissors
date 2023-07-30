let numberOfImages = document.querySelectorAll("img").length;
for (let i = 0; i < numberOfImages; i++) {
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        let clickedWeapon = this.alt;
        document.getElementById("player").innerHTML=clickedWeapon;
        compareWeapon(clickedWeapon);
    });
}

function compareWeapon(weapon) {
    let weapons = ["Rock", "Paper", "Scissors"];
    let computerChoice = weapons[Math.floor(Math.random() * 3)];
    document.getElementById("computer").innerHTML=computerChoice;

    if (weapon === "Rock") {
        if (computerChoice === "Paper") {
            document.getElementById("final-winner").innerHTML = "Computer won 💻";
        }
        else if (computerChoice === "Scissors") {
            document.getElementById("final-winner").innerHTML = "You won 🏆";
        }
        else {
            document.getElementById("final-winner").innerHTML = "Match Tie !";
        }
    }
    else if (weapon === "Paper") {
        if (computerChoice === "Scissors") {
            document.getElementById("final-winner").innerHTML = "Computer won 💻";
        }
        else if (computerChoice === "Rock") {
            document.getElementById("final-winner").innerHTML = "You won 🏆";
        }
        else {
            document.getElementById("final-winner").innerHTML = "Match Tie !"
        }
    }
    else {
        if (computerChoice === "Rock") {
            document.getElementById("final-winner").innerHTML = "Computer won 💻";
        }
        else if (computerChoice === "Paper") {
            document.getElementById("final-winner").innerHTML = "You won 🏆";
        }
        else {
            document.getElementById("final-winner").innerHTML = "Match Tie !"
        }
    }
}