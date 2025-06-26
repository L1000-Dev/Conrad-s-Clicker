let count = 0;
let pointsPerClick = 1;
let pointsPerSecond = 0;
let autoClickerInterval;

const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clicker");
const quoteDisplay = document.getElementById("conrad-quote");
const upgrade1 = document.getElementById("upgrade-1");
const upgrade2 = document.getElementById("upgrade-2");
const clickEffects = document.getElementById("click-effects");

const quotes = [
  "Keep clicking, legend!",
  "Conrad believes in you!",
  "Every click counts!",
  "You're a click machine!",
  "Unstoppable clicker!"
];

// Main click handler
clickButton.addEventListener("click", () => {
  count += pointsPerClick;

  // Show quote every 10 points
  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }

  showClickEffect(`+${pointsPerClick}`);
  updateUI();
});

// Upgrade 1: 2 points per click
upgrade1.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;
    upgrade1.disabled = true;
    upgrade1.textContent = "Upgrade Purchased!";
    upgrade1.style.background = "#22c55e";
    setTimeout(() => upgrade1.remove(), 1000);
    updateUI();
  }
});

// Upgrade 2: 2 points per second
upgrade2.addEventListener("click", () => {
  if (count >= 200) {
    count -= 200;
    pointsPerSecond = 2;
    startAutoClicker();
    upgrade2.disabled = true;
    upgrade2.textContent = "Auto Upgrade Purchased!";
    upgrade2.style.background = "#22c55e";
    setTimeout(() => upgrade2.remove(), 1000);
    updateUI();
  }
});

// Floating +X animation near button
function showClickEffect(text) {
  const effect = document.createElement("div");
  effect.className = "click-float";
  effect.textContent = text;

  // Position near the click button
  const rect = clickButton.getBoundingClientRect();
  effect.style.left = rect.left + rect.width / 2 + "px";
  effect.style.top = rect.top + "px";

  clickEffects.appendChild(effect);
  setTimeout(() => effect.remove(), 1000);
}

// Auto-increment logic
function startAutoClicker() {
  clearInterval(autoClickerInterval);
  autoClickerInterval = setInterval(() => {
    count += pointsPerSecond;
    updateUI();
  }, 1000);
}

// Update UI and button enable/disable state
function updateUI() {
  counterDisplay.textContent = count;
  if (count >= 50 && pointsPerClick === 1) {
    upgrade1.disabled = false;
  }
  if (count >= 200 && pointsPerSecond === 0) {
    upgrade2.disabled = false;
  }
}
