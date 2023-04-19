const hamburguer = document.querySelector('.hamburguer');
const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('nav');
const more = document.querySelector('.more');
const arrow = document.querySelector('.arrow');
const foods = {
  name: ['Salad', 'Sea Rice', 'Pasta', 'Second Salad', 'Soup', 'Pizza'],
  ingredientes: ['Chopped or sliced tomato, shredded, chopped red onion, red peppers, cubed beets, cold sliced red potato.',
    'oil, small onion, diced, Sea Farms, roughly diced, juice, diced tempeh, tofu, shrimp, lobster, or any leftover protein',
    'Tins (800g) Chopped or Plum Tomatoes, Onion, Garlic, Teaspoon Mixed Herbs, Dried Pasta, Reduced Fat Cheese (grated)',
    'Chopped or sliced tomato, shredded, chopped red onion, sliced red peppers, cubed beets, cold sliced red potato.',
    'Chicken. Vegetables: carrots, celery, and an onion,',
    'Tomatoes, Onion, Pepperoni, Basil, Corn, PepperBell'],
  made: ['Nice Engaging salas as first tasting', 'Now we go with the best Sea rice on city', 'A good italian pasta for pasta lovers',
    'Second salad for salad lover', 'A soup to warn your heart', 'A pizza for the kids'],
  images: ['./images/food1.jpg', './images/food2.jpg', './images/food3.jpg', './images/food4.jpg', './images/food5.jpg', './images/food6.jpg'],
  class: ['foods', 'foods', 'foods hidden', 'foods hidden', 'foods hidden', 'foods hidden'],
};
function addMenu() {
  const food = document.querySelector('.speakers');
  for (let i = 0; i < foods.name.length; i += 1) {
    food.innerHTML += `
  <div class="${foods.class[i]}">
    <img src=${foods.images[i]}>
    <div class="food-content">
      <p class="food-name">
          ${foods.name[i]}
      </p>
      <p class="food-contain">
          ${foods.ingredientes[i]}
      </p>
      <span class="food-span"></span>
      <h1> ${foods.made[i]}</h1>
    </div>
  </div>
  `;
  }
}
addMenu(foods);
hamburguer.addEventListener('click', () => {
  navBar.classList.toggle('active');
  hamburguer.classList.toggle('active');
});

document.querySelectorAll('.nav-bar').forEach((n) => n.addEventListener('click', () => {
  navBar.classList.remove('active');
}));
document.addEventListener('scroll', () => {
  navBar.classList.add('scroll');
});

window.onwheel = (e) => {
  if (e.deltaY >= 0) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
};
const foodSection = document.querySelectorAll('.hidden');
more.addEventListener('click', () => {
  foodSection.forEach((n) => n.classList.toggle('hidden'));
  arrow.classList.toggle('active');
});