let count = 0;
let pointsPerClick = 1;
let pointsPerSecond = 0;

const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clicker");
const quoteDisplay = document.getElementById("conrad-quote");
const upgrade1Button = document.getElementById("upgrade-1");
const upgrade2Button = document.getElementById("upgrade-2");

const quotes = [
  "Keep clicking, legend!",
  "Conrad believes in you!",
  "Every click counts!",
  "You're a click machine!",
  "Unstoppable clicker!"
];

function updateUI() {
  counterDisplay.textContent = count;

  // Check if upgrade1Button is currently in the DOM
  const upgrade1Exists = upgrade1Button && document.body.contains(upgrade1Button);

  // Enable upgrade1 if enough points and button exists
  if (upgrade1Exists) {
    upgrade1Button.disabled = count < 50;
  }

  // Enable upgrade2 only if upgrade1 purchased (button removed) and points >= 200
  if (!upgrade1Exists) {
    upgrade2Button.disabled = count < 200;
  }
}

// Passive points every second
setInterval(() => {
  if (pointsPerSecond > 0) {
    count += pointsPerSecond;
    updateUI();
  }
}, 1000);

clickButton.addEventListener("click", () => {
  count += pointsPerClick;

  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }

  updateUI();
});

upgrade1Button.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;

    // Remove button from DOM
    upgrade1Button.remove();

    updateUI();
  }
});

upgrade2Button.addEventListener("click", () => {
  if (count >= 200) {
    count -= 200;
    pointsPerSecond = 2;

    upgrade2Button.textContent = "Upgrade Purchased!";
    upgrade2Button.disabled = true;
    upgrade2Button.style.background = "#22c55e";

    updateUI();
  }
});

// Initial UI setup
updateUI();
