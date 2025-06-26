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

  const upgrade1Exists = upgrade1Button && document.body.contains(upgrade1Button);
  const upgrade2Exists = upgrade2Button && document.body.contains(upgrade2Button);

  if (upgrade1Exists) {
    upgrade1Button.disabled = count < 50;
  }

  if (!upgrade1Exists && upgrade2Exists) {
    upgrade2Button.disabled = count < 200;
  }
}

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

    upgrade1Button.remove();
    updateUI();
  }
});

upgrade2Button.addEventListener("click", () => {
  if (count >= 200) {
    count -= 200;
    pointsPerSecond = 2;

    upgrade2Button.remove();
    updateUI();
  }
});

updateUI();
