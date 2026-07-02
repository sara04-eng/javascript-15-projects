// Scroll - shows a "back to top" button after scrolling, smooth scroll on click
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 300){
    scrollTopBtn.classList.add('show-btn');
  } else {
    scrollTopBtn.classList.remove('show-btn');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});
