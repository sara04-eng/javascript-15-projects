// Lorem Ipsum Generator - generates N paragraphs of placeholder text
const loremForm = document.getElementById('lorem-form');
const amountInput = document.getElementById('amount');
const paragraphsContainer = document.getElementById('paragraphs');

const paragraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
  'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Curabitur pretium tincidunt lacus, nulla gravida orci a odio.',
  'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
  'Nullam quis ante etiam sit amet orci eget eros faucibus tincidunt. Duis leo sed fringilla mauris sit amet nibh donec sodales sagittis magna.'
];

function generateParagraphs(amount){
  let html = '';
  for(let i = 0; i < amount; i++){
    const index = i % paragraphs.length;
    html += `<p>${paragraphs[index]}</p>`;
  }
  paragraphsContainer.innerHTML = html;
}

loremForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let amount = parseInt(amountInput.value);
  if(isNaN(amount) || amount < 1) amount = 1;
  if(amount > 10) amount = 10;
  generateParagraphs(amount);
});

// Generate default paragraphs on load
generateParagraphs(3);
