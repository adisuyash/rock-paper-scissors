
let numberOfImages = document.querySelectorAll("img").length;
for (let i = 0; i < numberOfImages; i++) {
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        let clickedWeapon = this.alt;
        setToCompare(clickedWeapon);
    })
}

let nobitaScore = 0;
let giyanScore = 0;

let weapons = ["rock", "paper", "scissors"];
let giyanChoice = weapons[Math.floor(Math.random() * 3)];

// let giyanArray=[];
// for (let i = 0; i < 5; i++) {
//     let giyanChoice = weapons[Math.floor(Math.random() * 3)];
//     giyanArray.push(giyanChoice);
// }


function setToCompare(weapon){

    if(weapon==="rock"){
        if(giyanChoice==="paper"){
            document.getElementById("para3").innerHTML = "You lose, Giyan will beat Nobita 💔"
        }
        else if (giyanChoice==="scissors"){
            document.getElementById("para3").innerHTML = "You saved Nobita from Giyan ❤️"
        }
        else {
            document.getElementById("para3").innerHTML = "Match Tie !!"
        }
    }
    else if(weapon==="paper"){
        if(giyanChoice==="scissors"){
            document.getElementById("para3").innerHTML = "You lose, Giyan will beat Nobita 💔"
        }
        else if (giyanChoice==="rock"){
            document.getElementById("para3").innerHTML = "You saved Nobita from Giyan ❤️"
        }
        else {
            document.getElementById("para3").innerHTML = "Match Tie !!"
        }
    }
    else{
        if(giyanChoice==="rock"){
            document.getElementById("para3").innerHTML = "You lose, Giyan will beat Nobita 💔"
        }
        else if (giyanChoice==="paper"){
            document.getElementById("para3").innerHTML = "You saved Nobita from Giyan ❤️"
        }
        else {
            document.getElementById("para3").innerHTML = "Match Tie !!"
        }
    }
}

// function compareWeapon(weapon) {
//     while ((nobitaScore || giyanScore) < 5) {
//         if (weapon === "rock") {
//             if (giyanChoice === "paper") {
//                 giyanScore++;
//                 document.getElementById("you").innerHTML = giyanScore;
//             }
//             else if (giyanChoice === "scissors") {
//                 nobitaScore++;
//                 document.getElementById("giyan").innerHTML = nobitaScore;
//             }
//             else {
//                 // continue;
//             }
//         }
//     }
//     if (nobitaScore > giyanScore) {
//         document.getElementById("para3").innerHTML = "You saved Nobita from Giyan ❤️"
//     }
//     else {
//         document.getElementById("para3").innerHTML = "You lose, Giyan will beat Nobita 💔"
//     }
//     console.log(weapon)
// }