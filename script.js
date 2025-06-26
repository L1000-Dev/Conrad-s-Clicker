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

// Function to update UI states like upgrade button enabled/disabled
function updateUI() {
  counterDisplay.textContent = count;

  // Enable upgrade button if points >= 50 and not yet purchased
  if (count >= 50 && !upgradeButton.disabled && upgradeButton.textContent !== "Upgrade Purchased!") {
    upgradeButton.disabled = false;
  }
  
  if (count >= 50 && upgradeButton.disabled && upgradeButton.textContent !== "Upgrade Purchased!") {
    console.log("Enabling upgrade button!");
    upgradeButton.disabled = false;
  } else if (count < 50 && !upgradeButton.disabled && upgradeButton.textContent !== "Upgrade Purchased!") {
    console.log("Disabling upgrade button!");
    upgradeButton.disabled = true;
  }
}

clickButton.addEventListener("click", () => {
  count += pointsPerClick;

  // Show random quote every 10 clicks
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
    counterDisplay.textContent = count;

    upgradeButton.textContent = "Upgrade Purchased!";
    upgradeButton.disabled = true;
    upgradeButton.style.background = "#22c55e"; // green to show success
  }
});

// Initial UI setup on page load
updateUI();
