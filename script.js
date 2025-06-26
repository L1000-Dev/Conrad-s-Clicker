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

// Update UI, especially upgrade button state
function updateUI() {
  counterDisplay.textContent = count;

  // Enable upgrade button if count >= 50 AND upgrade not yet purchased
  if (count >= 50 && upgradeButton.textContent !== "Upgrade Purchased!") {
    upgradeButton.disabled = false;
  } else if (count < 50 && upgradeButton.textContent !== "Upgrade Purchased!") {
    upgradeButton.disabled = true;
  }
}

clickButton.addEventListener("click", () => {
  count += pointsPerClick;

  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }

  updateUI();
});

upgradeButton.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;

    upgradeButton.textContent = "Upgrade Purchased!";
    upgradeButton.disabled = true;
    upgradeButton.style.background = "#22c55e"; // green to show success

    updateUI();
  }
});

// Run UI update once on page load (in case count starts above 0)
updateUI();
