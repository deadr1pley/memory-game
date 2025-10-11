// Reference to board and score
const board = document.getElementById("board");
const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");

// emoji list for cards
const emojis = ["🎃","🎈","✨","🎁","🎀","🎭"];

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

function flipCard(index) {
    if (flipped.includes(index) || matched.includes(index))return;

    flipped.push(index);
    drawBoard();

    if (flipped.length === 2) {
        attempts++;
        updateScore();
        setTimeout(checkMatch, 800);
    }
}    

function checkMatch() {
    const [first, second] = flipped;
    
    if (cards[first] === cards[second]) {
        matched.push(first, second);
    }

    flipped =[];
    drawBoard();

    // all cards found
    if (matched.length === cards.length) {
        setTimeout(() => {
        messageDisplay.textContent = `🎊 You won in ${attempts} attempts!`;
        messageDisplay.style.color = "#8B0000";
        messageDisplay.style.fontWeight = "bold";
        }, 200);
    }
}

function updateScore() {
    scoreDisplay.textContent = `Attempts: ${attempts}`;
}

messageDisplay.textContent = "";
startGame();
// function restartGame() {

// }

// function setDifficulty() {

// }

// function chooseTheme() {

// }