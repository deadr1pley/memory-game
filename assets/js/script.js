// Reference to board and score
const board = document.getElementById("board");
const scoreDisplay = document.getElementById("score");

// emoji list for cards
const emojis = ["🎃","🎈","✨","🎁"];

let cards = [];
let flipped = [];
let matched = [];
let attempts = 0;

function startGame() {
    cards =[...emojis, ...emojis].sort(() => Math.random() - 0.5);
    flipped = [];
    matched = [];
    attempts = 0;
    updateScore();

    let cols =Math.ceil(Math.sqrt(cards.length));
    board.style.gridTemplateColumns = `repeat(${cols}, 80px)`;

    drawBoard();

}

function drawBoard() {
    board.innerHTML = "";
    cards.forEach((symbol, index) => {
        const div = document.createElement("div");
        div.classList.add("card");

        if(!flipped.includes(index) && !matched.includes(index)) {
            div.classList.add("hidden");
        }

        div.textContent = symbol;
        div.addEventListener("click", () => flipCard(index));
        board.appendChild(div);
    });
}

function flipCard() {

}

function CheckMatch() {

}

function updateScore() {

}

// function restartGame() {

// }

// function setDifficulty() {

// }

// function chooseTheme() {

// }