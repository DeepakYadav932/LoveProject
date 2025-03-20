const heartContainer = document.getElementById("heart-container");
const textElement = document.querySelector('.text');

// Array of colors for the hearts
const heartColors = ['#FF3366', '#FF6633', '#33FF66', '#3366FF', '#9933FF', '#FF33FF', '#FF9933'];

function getRandomColor() {
  // Randomly choose a color from the heartColors array
  const randomIndex = Math.floor(Math.random() * heartColors.length);
  return heartColors[randomIndex];
}

function getRandomTextColor() {
  const randomColors = ['#FF3366', '#FF6633', '#33FF66', '#3366FF', '#9933FF', '#FF33FF', '#FF9933', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  return randomColors[randomIndex];
}

function changeTextColor() {
  textElement.style.color = getRandomTextColor();
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const heartEmojis = ['💞', '💚', '💜', '❤️', '🌺', '🌹', '💖', '💓', '🤍', '💐'];
  heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  // Set a random color for each heart
  heart.style.color = getRandomColor();

  // Random position on the x-axis
  const xPosition = Math.random() * window.innerWidth;
  heart.style.left = `${ xPosition }px`;

  // Random animation duration
  const animationDuration = Math.random() * 3 + 2; // 2 to 5 seconds
  heart.style.animationDuration = `${ animationDuration } s`;

  // Append heart to the heart container
  heartContainer.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, animationDuration * 1000);
}

// Create hearts more frequently by reducing the interval (e.g., every 200ms)
setInterval(createHeart, 50);

// Change text color every 2 seconds
setInterval(changeTextColor, 1000);