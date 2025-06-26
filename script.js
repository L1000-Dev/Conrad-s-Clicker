let count = 0;
let pointsPerClick = 1;
let autoClickerRunning = false;

const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clicker");
const quoteDisplay = document.getElementById("conrad-quote");
const upgrade1 = document.getElementById("upgrade-1");
const upgrade2 = document.getElementById("upgrade-2");
const clickSound = document.getElementById("click-sound");

const quotes = [
  "Keep clicking, legend!",
  "Conrad believes in you!",
  "Every click counts!",
  "You're a click machine!",
  "Unstoppable clicker!"
];

// Handle click
clickButton.addEventListener("click", () => {
  count += pointsPerClick;
  updateCounter();

  // Play sound
  clickSound.currentTime = 0;
  clickSound.play();

  // Show quote every 10 clicks
  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }

  // Trigger +X animation
  createClickAnimation();

  // Check upgrade availability
  checkUpgrades();
});

// Upgrade 1: 2 points per click
upgrade1.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    pointsPerClick = 2;
    updateCounter();

    upgrade1.textContent = "Upgrade Purchased!";
    upgrade1.disabled = true;
    upgrade1.style.background = "#22c55e";
    upgrade1.style.display = "none"; // Hide after purchase
  }
});

// Upgrade 2: Auto clicker
upgrade2.addEventListener("click", () => {
  if (count >= 200 && !autoClickerRunning) {
    count -= 200;
    updateCounter();
    autoClickerRunning = true;

    setInterval(() => {
      count += 2;
      updateCounter();
    }, 1000);

    upgrade2.textContent = "Auto Clicker Purchased!";
    upgrade2.disabled = true;
    upgrade2.style.background = "#22c55e";
    upgrade2.style.display = "none"; // Hide after purchase
  }
});

function updateCounter() {
  counterDisplay.textContent = count;
}

function checkUpgrades() {
  if (count >= 50 && upgrade1.disabled === false) {
    upgrade1.disabled = false;
  }
  if (count >= 200 && upgrade2.disabled === false && !autoClickerRunning) {
    upgrade2.disabled = false;
  }
}

// Click animation
function createClickAnimation() {
  const anim = document.createElement("div");
  anim.textContent = `+${pointsPerClick}`;
  anim.style.position = "absolute";
  anim.style.left = `${clickButton.offsetLeft + clickButton.offsetWidth / 2}px`;
  anim.style.top = `${clickButton.offsetTop}px`;
  anim.style.transform = "translate(-50%, -50%)";
  anim.style.color = "#ffffff";
  anim.style.fontWeight = "bold";
  anim.style.pointerEvents = "none";
  anim.style.zIndex = "1000";
  anim.style.transition = "all 0.8s ease-out";
  document.body.appendChild(anim);

  setTimeout(() => {
    anim.style.top = `${clickButton.offsetTop - 60}px`;
    anim.style.opacity = "0";
  }, 10);

  setTimeout(() => {
    document.body.removeChild(anim);
  }, 800);
}
