let count = 0;
let pointsPerClick = 1;
let autoClickerActive = false;

const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clicker");
const quoteDisplay = document.getElementById("conrad-quote");

const upgrade1 = document.getElementById("upgrade-1");
const upgrade2 = document.getElementById("upgrade-2");

const quotes = [
  "Keep clicking, legend!",
  "Conrad believes in you!",
  "Every click counts!",
  "You're a click machine!",
  "Unstoppable clicker!"
];

// === CLICK HANDLER ===
clickButton.addEventListener("click", () => {
  count += pointsPerClick;
  updateDisplay();
  maybeShowQuote();
  maybeEnableUpgrades();
  showClickAnimation();
  playClickSound();
});

// === UPGRADE 1: 2 Points/Click ===
upgrade1.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;
    updateDisplay();
    upgrade1.disabled = true;
    upgrade1.textContent = "Purchased!";
    setTimeout(() => upgrade1.remove(), 500);
  }
});

// === UPGRADE 2: Auto Clicker +2/sec ===
upgrade2.addEventListener("click", () => {
  if (count >= 200 && !autoClickerActive) {
    count -= 200;
    updateDisplay();
    autoClickerActive = true;
    upgrade2.disabled = true;
    upgrade2.textContent = "Auto-Clicker Active!";
    setTimeout(() => upgrade2.remove(), 500);

    setInterval(() => {
      count += 2;
      updateDisplay();
      maybeEnableUpgrades();
    }, 1000);
  }
});

// === DISPLAY ===
function updateDisplay() {
  counterDisplay.textContent = count;
}

function maybeEnableUpgrades() {
  if (count >= 50 && upgrade1 && upgrade1.disabled) upgrade1.disabled = false;
  if (count >= 200 && upgrade2 && upgrade2.disabled && !autoClickerActive) upgrade2.disabled = false;
}

function maybeShowQuote() {
  if (count % 10 === 0) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = quote;
  }
}

// === CLICK ANIMATION ===
function showClickAnimation() {
  const anim = document.createElement("div");
  anim.className = "click-anim";
  anim.textContent = `+${pointsPerClick}`;
  document.body.appendChild(anim);

  const rect = clickButton.getBoundingClientRect();
  anim.style.left = `${rect.left + rect.width / 2}px`;
  anim.style.top = `${rect.top}px`;

  setTimeout(() => anim.remove(), 1000);
}

// === SOUND ===
function playClickSound() {
  const clickSound = new Audio("click.mp3");
  clickSound.volume = 0.3;
  clickSound.play();
}
