const gameRulesContainer = document.querySelector(".gameRules");
const displayGameRulesBtn = document.querySelector(".displayGameRulesBtn");
const displayPlayCardGame = document.querySelector(".displayCardGame");
const main = document.querySelector(".main");

export const toggleCardGameBoard = function () {
  displayPlayCardGame.addEventListener("click", () => {
    // checkHidden(main);
    if (
      main.classList.contains("hidden")
        ? (displayPlayCardGame.textContent = "Close Game")
        : (displayPlayCardGame.textContent = "Card Game")
    )
      main.classList.toggle("hidden");
  });
};
export const playGameHandler = function (handler) {
  document.querySelector(".playBtn").addEventListener("click", handler);
};

export const displayRules = function () {
  const markup = `
    <ul class="textRules">
    <p>Rules are simple!</p>
    <li><p>The player who draws the highest card, wins the round🏆!</p></li>
    <li><p>The Winner takes their opponents card and adds it to their own deck.</p></li>
    <li><p>The game continues until eaither player manages to take all their 
    opponents cards! Good luck 😅!</p></li>
    </ul>
    `;
  gameRulesContainer.insertAdjacentHTML("beforeend", markup);
  displayGameRulesBtn.addEventListener("click", () => {
    gameRulesContainer.classList.toggle("hidden");
  });
};
