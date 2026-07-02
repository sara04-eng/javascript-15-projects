// Questions (FAQ Accordion) - toggles answers when a question is clicked
const questions = [
  { id:1, title:'What is Vanilla JavaScript?', text:'Vanilla JavaScript refers to using plain JavaScript without any additional libraries such as jQuery or frameworks like React.' },
  { id:2, title:'Why practice with small projects?', text:'Small projects let you practice core concepts like the DOM, events, and array methods in a focused and manageable way.' },
  { id:3, title:'Do I need a build tool for this?', text:'No — every project in this set runs directly by opening the index.html file in a browser.' },
  { id:4, title:'Can I reuse this code?', text:'Yes, feel free to use, modify, and build on top of any of these mini projects.' }
];

const questionsContainer = document.getElementById('questions');

function renderQuestions(){
  let html = '';
  questions.forEach((item) => {
    html += `
      <article class="question" data-id="${item.id}">
        <div class="question-title">
          <h4>${item.title}</h4>
          <span class="icon">+</span>
        </div>
        <div class="question-text">
          <p>${item.text}</p>
        </div>
      </article>
    `;
  });
  questionsContainer.innerHTML = html;
}

renderQuestions();

questionsContainer.addEventListener('click', (e) => {
  const titleEl = e.target.closest('.question-title');
  if(!titleEl) return;
  const questionEl = titleEl.parentElement;
  questionEl.classList.toggle('show');
});
