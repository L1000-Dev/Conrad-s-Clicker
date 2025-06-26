let count = 0;
let pointsPerClick = 1;
let autoClickerEnabled = false;

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
  updateCounter();
  checkUpgrades();
  showQuote();
  animateClick();
  playClickSound();
});

// === UPGRADE 1: 2 Points Per Click ===
upgrade1.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;
    updateCounter();
    upgrade1.disabled = true;
    upgrade1.textContent = "Purchased!";
    upgrade1.style.background = "#22c55e";
    setTimeout(() => upgrade1.remove(), 1000);
  }
});

// === UPGRADE 2: AUTO CLICK ===
upgrade2.addEventListener("click", () => {
  if (count >= 200 && !autoClickerEnabled) {
    count -= 200;
    autoClickerEnabled = true;
    updateCounter();
    upgrade2.disabled = true;
    upgrade2.textContent = "Auto-Clicker Active!";
    upgrade2.style.background = "#22c55e";
    setTimeout(() => upgrade2.remove(), 1000);

    setInterval(() => {
      count += 2;
      updateCounter();
      checkUpgrades();
    }, 1000);
  }
});

// === UTILITIES ===
function updateCounter() {
  counterDisplay.textContent = count;
}

function checkUpgrades() {
  if (count >= 50 && upgrade1 && !upgrade1.disabled) upgrade1.disabled = false;
  if (count >= 200 && upgrade2 && !upgrade2.disabled && !autoClickerEnabled) upgrade2.disabled = false;
}

function showQuote() {
  if (count % 10 === 0) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = quote;
  }
}

function animateClick() {
  const anim = document.createElement("div");
  anim.className = "click-anim";
  anim.textContent = `+${pointsPerClick}`;
  document.body.appendChild(anim);
  const rect = clickButton.getBoundingClientRect();
  anim.style.left = `${rect.left + rect.width / 2}px`;
  anim.style.top = `${rect.top}px`;
  setTimeout(() => anim.remove(), 1000);
}

function playClickSound() {
  const sound = new Audio("click.mp3");
  sound.volume = 0.3;
  sound.play();
}
