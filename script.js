let count = 0;
let pointsPerClick = 1;
let autoClickerActive = false;

const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clicker");
const quoteDisplay = document.getElementById("conrad-quote");
const upgrade1Button = document.getElementById("upgrade-1");
const upgrade2Button = document.getElementById("upgrade-2");

// Optional click sound (must exist in root or adjust path)
const clickSound = new Audio("click.mp3");
clickSound.volume = 0.3;

const quotes = [
  "Keep clicking, legend!",
  "Conrad believes in you!",
  "Every click counts!",
  "You're a click machine!",
  "Unstoppable clicker!"
];

// Click handler
clickButton.addEventListener("click", () => {
  count += pointsPerClick;
  counterDisplay.textContent = count;

  // Play click sound
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }

  // Floating click animation
  const anim = document.createElement("div");
  anim.className = "click-anim";
  anim.textContent = `+${pointsPerClick}`;
  document.body.appendChild(anim);

  // Position near button
  const rect = clickButton.getBoundingClientRect();
  anim.style.left = `${rect.left + rect.width / 2}px`;
  anim.style.top = `${rect.top}px`;

  setTimeout(() => anim.remove(), 1000);

  // Show quote every 10
  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }

  // Enable upgrades if thresholds met
  if (count >= 50 && !upgrade1Button.disabled && !upgrade1Button.upgraded) {
    upgrade1Button.disabled = false;
  }
  if (count >= 200 && !upgrade2Button.disabled && !upgrade2Button.upgraded) {
    upgrade2Button.disabled = false;
  }
});

// Upgrade 1 – Increase points per click
upgrade1Button.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;
    counterDisplay.textContent = count;

    upgrade1Button.textContent = "Upgrade Purchased!";
    upgrade1Button.disabled = true;
    upgrade1Button.upgraded = true;
    upgrade1Button.style.background = "#22c55e";
    setTimeout(() => upgrade1Button.remove(), 1000);
  }
});

// Upgrade 2 – Auto-clicker
upgrade2Button.addEventListener("click", () => {
  if (count >= 200 && !autoClickerActive) {
    count -= 200;
    counterDisplay.textContent = count;

    autoClickerActive = true;
    upgrade2Button.textContent = "Auto-Clicker Active!";
    upgrade2Button.disabled = true;
    upgrade2Button.upgraded = true;
    upgrade2Button.style.background = "#22c55e";
    setTimeout(() => upgrade2Button.remove(), 1000);

    // Start interval for auto-click
    setInterval(() => {
      count += 2;
      counterDisplay.textContent = count;
    }, 1000);
  }
});
