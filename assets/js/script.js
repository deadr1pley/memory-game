// Reference to board and score
const board = document.getElementById("board");
const scoreDisplay = document.getElementById("score");

// emoji list for cards
const emojis = ["🎃","🎈","✨","🎁"];

let cards = [];
let flipped = [];
let matched = [];
let attempts = [];

function startGame() {
    cards =[...emojis, ...emojis].sort(() => Math.random() - 0.5);
    flipped = [];
    matched = [];
    attempts = 0;
    uppdateScore();

    let cols =Math.ceil(Math.sqrt(cards.lenght));
    board.style.gridTemplateColumns = `repeat(${cols}, 80px)`;

    drawBoard();

}

function drawBoard() {

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