let count = 0;
let pointsPerClick = 1;
let pointsPerSecond = 0; // new passive income

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

  // Upgrade 1 button disappears after purchase
  // So only enable it if it exists and not purchased
  if (upgrade1Button) {
    if (count >= 50) {
      upgrade1Button.disabled = false;
    } else {
      upgrade1Button.disabled = true;
    }
  }

  // Upgrade 2 button enabled only if upgrade 1 bought (removed) and points >= 200
  // We check if upgrade1Button is gone, meaning purchased
  if (!upgrade1Button) {
    if (count >= 200) {
      upgrade2Button.disabled = false;
    } else {
      upgrade2Button.disabled = true;
    }
  }
}

// Passive points adding every second
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

    // Remove the upgrade 1 button from DOM (disappear)
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
    upgrade2Button.style.background = "#22c55e"; // green for success

    updateUI();
  }
});

// Initial UI setup
updateUI();
