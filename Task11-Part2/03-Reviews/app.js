// Reviews - cycles through an array of review objects
const reviews = [
  { id:1, name:'sara nabil', job:'web developer', text:'I\'m really happy building small projects like this one, they teach me a lot about front end fundamentals!' },
  { id:2, name:'haya ahmad', job:'web designer', text:'Working through these mini projects keeps me consistent and helps me actually retain what I learn.' },
  { id:3, name:'leen mohammad', job:'intern', text:'This kind of practice is exactly what beginners need — small, focused, and rewarding.' },
  { id:4, name:'sereen nabil', job:'the boss', text:'Consistency beats intensity. Keep shipping small projects and the skills compound quickly.' }
];

const avatar = document.getElementById('avatar');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

function showPerson(index){
  const item = reviews[index];
  avatar.textContent = item.name.charAt(0).toUpperCase();
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function checkNumber(number){
  if(number > reviews.length - 1){
    return 0;
  }
  if(number < 0){
    return reviews.length - 1;
  }
  return number;
}

nextBtn.addEventListener('click', () => {
  currentItem = checkNumber(currentItem + 1);
  showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem = checkNumber(currentItem - 1);
  showPerson(currentItem);
});

randomBtn.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * reviews.length);
  currentItem = randomNumber;
  showPerson(currentItem);
});

// Initialize
showPerson(currentItem);
