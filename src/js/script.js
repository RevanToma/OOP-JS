import Deck from "./views/deckView.js";
import colorView from "./views/colorView.js";
import {
  CARD_VALUE_MAP,
  computerCardSlot,
  playerCardSlot,
  computerDeckElement,
  playerDeckElement,
  text,
} from "./config.js";
import * as model from "./model.js";
import {
  toggleCardGameBoard,
  playGameHandler,
  displayRules,
} from "./helper.js";

let playerDeck, computerDeck, round, stop;

function controllGame() {
  if (stop) {
    startGame();
    return;
  }

  if (round) {
    cleanBeforeRound();
  } else {
    flipCards();
  }
}

startGame();
function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
  round = false;
  stop = false;

  cleanBeforeRound();
}

function cleanBeforeRound() {
  round = false;
  computerCardSlot.innerHTML = "";
  playerCardSlot.innerHTML = "";
  text.innerText = "";

  updateDeckCount();
}

function flipCards() {
  round = true;

  const playerCard = playerDeck.pop();
  const computerCard = computerDeck.pop();

  playerCardSlot.insertAdjacentHTML("afterbegin", playerCard.getHTML());
  computerCardSlot.insertAdjacentHTML("afterbegin", computerCard.getHTML());

  updateDeckCount();

  if (isRoundWinner(playerCard, computerCard)) {
    text.innerText = "You Won 🏆";
    playerDeck.push(playerCard);
    playerDeck.push(computerCard);
  } else if (isRoundWinner(computerCard, playerCard)) {
    text.innerText = "You lost 😥";
    computerDeck.push(playerCard);
    computerDeck.push(computerCard);
  } else {
    text.innerText = "Draw 🤝";
    playerDeck.push(playerCard);
    computerDeck.push(computerCard);
  }

  if (isGameOver(playerDeck)) {
    text.innerText = "You Lose!!";
    stop = true;
  } else if (isGameOver(computerDeck)) {
    text.innerText = "You Win!!";
    stop = true;
  }
}

function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards;
  playerDeckElement.innerText = playerDeck.numberOfCards;
}

function isRoundWinner(cardOne, cardTwo) {
  return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value];
}

function isGameOver(deck) {
  return deck.numberOfCards === 0;
}
const controlLocalStorage = function () {
  model.saveUserColor();
};
const constrolCopyToClipboard = function (text) {
  navigator.clipboard.writeText(text);
};
const init = function () {
  colorView.generateColorHandler(controlLocalStorage);
  colorView.copyToClipboardHandler(constrolCopyToClipboard);
  playGameHandler(controllGame);
  toggleCardGameBoard();
  displayRules();
};
init();
