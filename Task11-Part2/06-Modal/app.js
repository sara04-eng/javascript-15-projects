// Modal - opens/closes via button, X icon, or clicking outside the modal box
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const closeModalBtn2 = document.getElementById('close-modal-2');
const modalOverlay = document.getElementById('modal-overlay');

function openModal(){
  modalOverlay.classList.add('show-modal');
}
function closeModal(){
  modalOverlay.classList.remove('show-modal');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
closeModalBtn2.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay){
    closeModal();
  }
});
