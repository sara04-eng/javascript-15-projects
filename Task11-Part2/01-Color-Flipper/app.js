// Color Flipper - generates a random RGB color and applies it to the body background
const btn = document.getElementById('btn');
const colorText = document.getElementById('color-text');

function getRandomNumber(){
  return Math.floor(Math.random() * 256);
}

function randomRGB(){
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {
  const color = randomRGB();
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});
