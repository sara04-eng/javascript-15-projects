// Countdown - counts down to a user-selected date
const dateForm = document.getElementById('date-form');
const datePicker = document.getElementById('date-picker');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const message = document.getElementById('message');

let countdownDate = null;
let intervalId = null;

function updateCountdown(){
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if(distance < 0){
    clearInterval(intervalId);
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
    message.textContent = 'Countdown has ended!';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

dateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!datePicker.value){
    message.textContent = 'Please select a valid date.';
    return;
  }
  countdownDate = new Date(datePicker.value).getTime();
  if(countdownDate < new Date().getTime()){
    message.textContent = 'Please select a future date.';
    return;
  }
  message.textContent = '';
  clearInterval(intervalId);
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

// Default: count down 7 days from now
const defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + 7);
countdownDate = defaultDate.getTime();
updateCountdown();
intervalId = setInterval(updateCountdown, 1000);
