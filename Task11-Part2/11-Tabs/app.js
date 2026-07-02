// Tabs - clicking a tab button reveals the corresponding job info
const jobsData = [
  {
    id:'company-1', company:'facebook', date:'2019 - present', title:'front-end developer',
    duties:['review, debug, and revise the front-end code base', 'communicate with clients about site content', 'collaborate with the design team']
  },
  {
    id:'company-2', company:'apple', date:'2017 - 2019', title:'junior front-end developer',
    duties:['worked closely with the senior developer', 'built responsive UI components', 'assisted with QA testing across browsers']
  },
  {
    id:'company-3', company:'google', date:'2015 - 2017', title:'intern developer',
    duties:['learned modern JavaScript fundamentals', 'contributed to internal documentation', 'shadowed senior engineers on live projects']
  }
];

const btnContainer = document.getElementById('btn-container');
const jobInfo = document.getElementById('job-info');

function displayJobInfo(job){
  jobInfo.innerHTML = `
    <h3>${job.title}</h3>
    <p class="job-date">${job.company} &middot; ${job.date}</p>
    <ul>
      ${job.duties.map(duty => `<li>${duty}</li>`).join('')}
    </ul>
  `;
}

function displayButtons(){
  let html = '';
  jobsData.forEach((job, index) => {
    html += `<button class="job-btn${index === 0 ? ' active-btn' : ''}" data-id="${job.id}">${job.company}</button>`;
  });
  btnContainer.innerHTML = html;
}

btnContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.job-btn');
  if(!btn) return;
  document.querySelectorAll('.job-btn').forEach(b => b.classList.remove('active-btn'));
  btn.classList.add('active-btn');
  const job = jobsData.find(j => j.id === btn.dataset.id);
  displayJobInfo(job);
});

displayButtons();
displayJobInfo(jobsData[0]);
