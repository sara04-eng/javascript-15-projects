// Grocery Bud - add / complete / edit / delete grocery items with localStorage persistence
const groceryForm = document.getElementById('grocery-form');
const groceryInput = document.getElementById('grocery-input');
const groceryList = document.getElementById('grocery-list');
const clearBtn = document.getElementById('clear-btn');

let items = [];
let editItemId = null;

function loadFromStorage(){
  const stored = localStorage.getItem('groceryItems');
  items = stored ? JSON.parse(stored) : [];
}

function saveToStorage(){
  localStorage.setItem('groceryItems', JSON.stringify(items));
}

function renderItems(){
  if(items.length === 0){
    groceryList.innerHTML = '<p class="empty-msg">No items yet, add one above.</p>';
    return;
  }
  groceryList.innerHTML = items.map(item => `
    <li class="grocery-item${item.completed ? ' completed' : ''}" data-id="${item.id}">
      <span>${item.text}</span>
      <div class="item-actions">
        <button class="edit-btn" data-action="toggle">${item.completed ? '↺' : '✔'}</button>
        <button class="edit-btn" data-action="edit">✎</button>
        <button class="delete-btn" data-action="delete">🗑</button>
      </div>
    </li>
  `).join('');
}

groceryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = groceryInput.value.trim();
  if(!value) return;

  if(editItemId !== null){
    items = items.map(item => item.id === editItemId ? { ...item, text: value } : item);
    editItemId = null;
    groceryForm.querySelector('.btn').textContent = 'Add Item';
  } else {
    items.push({ id: Date.now(), text: value, completed: false });
  }

  groceryInput.value = '';
  saveToStorage();
  renderItems();
});

groceryList.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if(!btn) return;
  const li = e.target.closest('.grocery-item');
  const id = Number(li.dataset.id);
  const action = btn.dataset.action;

  if(action === 'delete'){
    items = items.filter(item => item.id !== id);
  } else if(action === 'toggle'){
    items = items.map(item => item.id === id ? { ...item, completed: !item.completed } : item);
  } else if(action === 'edit'){
    const item = items.find(item => item.id === id);
    groceryInput.value = item.text;
    editItemId = id;
    groceryForm.querySelector('.btn').textContent = 'Save Edit';
    groceryInput.focus();
  }

  saveToStorage();
  renderItems();
});

clearBtn.addEventListener('click', () => {
  items = [];
  saveToStorage();
  renderItems();
});

loadFromStorage();
renderItems();
