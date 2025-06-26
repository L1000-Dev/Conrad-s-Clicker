// ==== Variables ====
let count = 0;
let pointsPerClick = 1;

const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clicker");
const quoteDisplay = document.getElementById("conrad-quote");
const upgradeButton = document.getElementById("upgrade-1");

const quotes = [
  "Keep clicking, legend!",
  "Conrad believes in you!",
  "Every click counts!",
  "You're a click machine!",
  "Unstoppable clicker!"
];

// ==== Event Listeners ====
clickButton.addEventListener("click", handleClick);
upgradeButton.addEventListener("click", purchaseUpgrade);

// ==== Click Logic ====
function handleClick() {
  count += pointsPerClick;
  counterDisplay.textContent = count;

  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }

  if (count >= 50 && pointsPerClick === 1) {
    upgradeButton.disabled = false;
  }
}

// ==== Upgrade Logic ====
function purchaseUpgrade() {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;
    counterDisplay.textContent = count;

    upgradeButton.textContent = "Upgrade Purchased!";
    upgradeButton.disabled = true;
    upgradeButton.style.background = "#22c55e";
  }
}
