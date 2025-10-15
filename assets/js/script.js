// All JavaScript written by Mathias Sohl Emilsson
// Font Awesome icons sourced from https://fontawesome.com

// Reference to board and score
const board = document.getElementById("board");
const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");

// emoji list for cards
const emojis = ["👻","🥂","✨","🎁","🎟️","🎭"];

// Font Awesome icons list
const icons = [
    '<i class="fa-solid fa-ghost"></i>',
    '<i class="fa-solid fa-champagne-glasses"></i>',
    '<i class="fa-solid fa-star"></i>',
    '<i class="fa-solid fa-gift"></i>',
    '<i class="fa-solid fa-ticket"></i>',
    '<i class="fa-solid fa-masks-theater"></i>'
];

let useIcons = false;

let cards = [];
let flipped = [];
let matched = [];
let attempts = 0;

function startGame() {
    messageDisplay.textContent = "";

    const symbols = useIcons ? icons : emojis;
    cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

    flipped = [];
    matched = [];
    attempts = 0;
    updateScore();


    drawBoard();

}

function drawBoard() {
    board.innerHTML = "";
    cards.forEach((symbol, index) => {
        const div = document.createElement("div");
        div.classList.add("card");
// hidden car
        if(!flipped.includes(index) && !matched.includes(index)) {
            div.classList.add("hidden");
            div.innerHTML = `<span class="back-text">MSE Memory</span>`; // text on the backside of card
        } else {
            //  Show emojis or Font Awesome icons when flipped
            div.innerHTML = symbol;
        }

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
    const firstCard = cards[first];
    const secondCard = cards[second];
    
    if (firstCard === secondCard) {
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

function useFontAwesome() {
    useIcons = true;
    startGame();
}

function useEmojis() {
    useIcons = false;
    startGame();
}

startGame();
// function restartGame() {

// }

// function setDifficulty() {

// }

// function chooseTheme() {

// }