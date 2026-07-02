// Counter - increment / decrement / reset with color feedback
const value = document.getElementById('value');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');

let count = 0;

function updateDisplay(){
  value.textContent = count;
  if(count > 0){
    value.style.color = '#27ae60';
  } else if(count < 0){
    value.style.color = '#c0392b';
  } else {
    value.style.color = '#333';
  }
}

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
