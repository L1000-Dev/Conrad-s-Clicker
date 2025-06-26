let count = 0;
const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clicker");
const quoteDisplay = document.getElementById("conrad-quote");

const quotes = [
  "Keep clicking, slave!",
  "Conrad does not believe in you!",
  "Keep clicking like a good boyyy",
  "You're a click machine!",
  "Please stop!",
  "Conrad is angry",
  "You are not beating this game!",
  "There is no hope for you!",
  "Stop clicking while you can!"
];

clickButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;

  if (count % 10 === 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  }
});
