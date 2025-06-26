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

clickButton.addEventListener("click", () => {
  count += pointsPerClick;
  counterDisplay.textContent = count;

  // Show random quote every 10 clicks
  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }

  // Enable upgrade if player has enough points
  if (count >= 50) {
    upgradeButton.disabled = false;
  }
});

upgradeButton.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;
    counterDisplay.textContent = count;

    upgradeButton.textContent = "Upgrade Purchased!";
    upgradeButton.disabled = true;
    upgradeButton.style.background = "#22c55e"; // green to show success
  }
});
