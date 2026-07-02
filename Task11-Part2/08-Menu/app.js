// Menu - filter menu items by category
const menuData = [
  { id:1, title:'buttermilk pancakes', category:'breakfast', price:15.99, icon:'🥞', desc:'Fluffy pancakes served with maple syrup and butter.' },
  { id:2, title:'diced spring chicken', category:'breakfast', price:19.99, icon:'🍳', desc:'Spring chicken with scrambled eggs and toast.' },
  { id:3, title:'caramel bacon french toast', category:'breakfast', price:16.99, icon:'🍞', desc:'French toast topped with caramel and crispy bacon.' },
  { id:4, title:'grilled t-bone steak', category:'lunch', price:35.99, icon:'🥩', desc:'Grilled t-bone steak served with fries and salad.' },
  { id:5, title:'seasonal fruit salad', category:'lunch', price:12.99, icon:'🥗', desc:'A fresh mix of seasonal fruit and greens.' },
  { id:6, title:'chicken alfredo pasta', category:'lunch', price:21.99, icon:'🍝', desc:'Creamy alfredo pasta topped with grilled chicken.' },
  { id:7, title:'oreo dream extreme shake', category:'shakes', price:9.99, icon:'🥤', desc:'A rich oreo shake topped with whipped cream.' },
  { id:8, title:'salted caramel milkshake', category:'shakes', price:8.99, icon:'🍨', desc:'Sweet and salty milkshake made fresh daily.' }
];

const btnContainer = document.getElementById('btn-container');
const menuItemsContainer = document.getElementById('menu-items');

function displayMenuItems(items){
  let html = '';
  items.forEach((item) => {
    html += `
      <article class="menu-item">
        <div class="photo">${item.icon}</div>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <p class="price">$${item.price}</p>
          </header>
          <p>${item.desc}</p>
        </div>
      </article>
    `;
  });
  menuItemsContainer.innerHTML = html;
}

function displayButtons(){
  const categories = ['all', ...new Set(menuData.map(item => item.category))];
  let html = '';
  categories.forEach((category) => {
    html += `<button class="filter-btn${category === 'all' ? ' active' : ''}" data-id="${category}">${category}</button>`;
  });
  btnContainer.innerHTML = html;
}

btnContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const category = btn.dataset.id;
  if(category === 'all'){
    displayMenuItems(menuData);
    return;
  }
  const filteredItems = menuData.filter(item => item.category === category);
  displayMenuItems(filteredItems);
});

displayButtons();
displayMenuItems(menuData);
