console.log('chatty events')

// Досить часто необхідно обробити зміну розміру вікна, скрол, переміщення миші або текстове введення користувача.
// Це може бути сортування колекції і відображення результатів, анімація елемента, маніпуляції з DOM - деревом та інше.
// Все це покращує UX(user experience), але, на жаль, має велике навантаження на браузер,
// оскільки обробники подій спрацьовують надто часто.Такі події неофіційно називають «chatty events».

// Наприклад, якщо додати слухача події до скролу, то під час прокручування сторінки мишкою можна викликати близько 30 подій на секунду.
// Повільне прокручування(свайп) у смартфоні може викликати до 100 подій на секунду.
// Якщо обробник події скролу виконує важкі обчислення та інші DOM - маніпуляції, гарантовано виникнуть проблеми з продуктивністю.

// Throttle і Debounce - це два схожих, але різних за поведінкою прийоми, що дозволяють контролювати кількість разів,
//     яку ми дозволяємо виконувати функції з часом.
// Використовуємо їх реалізацію з бібліотеки Lodash https://lodash.com/.



console.log('Задача: Mousemove и throttle')
console.log('throttle - визивай функцію не частіше 1 раз в декілька млсек')
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', onMouseMove); - при такому записі браузер виконує функцію при кожному русі мишки - це може бути безкінечно і інші функції не виконуюються і сторінка вісне
// window.addEventListener('mousemove', onMouseMove);  
window.addEventListener('mousemove', _.throttle(onMouseMove, 250)); // ця функція заторможує виконання нашої функції. кліки браузер ловить, але визиває функцію 1 раз за 250млсек

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

console.log('debounce - відкладений визов. Буквально кажемо - при потоці подій функцію не визивай, а визви коли потім подій зупиниться на певний час')


const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
console.log('throttle - викосторуємо при скролі, resize, dregin перетаскування,')
console.log('throttle - викосторуємо при скролі, resize, dregin перетаскування,')


console.log('Мастерська фільтр(пошук)')

const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

// Шаги:
// 1. Рендеримо розмітку елементів списку і добавляємо в розмітку
// 2. Робимо фільтр. в input вписуємо значення і воно повино шукати збіги в нашими лішками і залишати лише ті, що підходять
const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));  // функцію onFilterChange можна записати з затримкою вибору. можна і _.throttle(onFilterChange, 300)
const listItemsMarup = createListItemsMarkup(tech);

// refs.list.innerHTML = listItemsMarup;  // добавляємо в розмітку в ul. Через innerHTML - томущо в розмітці пусто і нам не потрібно нічого видаляти чи замінювати. insertHTML якщо в розмітці щось є і ми вносимо зміні
populateList(listItemsMarup); // замінюємо дії рендеринга (refs.list.innerHTML = listItemsMarup;), окремою функцією populateList


function createListItemsMarkup(items) {    
    return items.map(item => `<li>${item.label}</li>`).join('');  // функція createListItemsMarkup повертає список промапаних tech по кожному масиву в li
};

function onFilterChange(evt) {
    const filter = evt.target.value.toLowerCase();  // приводимо всі таргети введених даних до нижнього регістру. щоб наш пошук не був чутливий до введених даних користувачем

    const filteredItems = tech.filter(t => t.label.toLocaleLowerCase().includes(filter),); //  перебираємо весь масив tech. фільтруємо його по умові(для кожного елементу(t) =>є t.label.toLocaleLowerCase()(дуже важливо привести до нижнього регісту, щоб не заважав пошуку регістр).includes(filter)(якщо в попередньому виразі лежать елементи з відфільтрованого списку9нового списку, що ввів користувач)
    const listItemsMarup = createListItemsMarkup(filteredItems); //     то виведи мені вибрані елементи користувачем 
    // refs.list.innerHTML = listItemsMarup;  //    і  зарендери новий список в розмітку, що вже зроблену з новими значеннями)
    populateList(listItemsMarup);  // замінюємо дії рендеринга (refs.list.innerHTML = listItemsMarup;), окремою функцією populateList
};
// виносимо окрему функцію для рендерингу списків. ця функція буде перевикористовуватись
function populateList(markup) {
    refs.list.innerHTML = markup;
}

console.log(listItemsMarup);

// замінюємо дії рендеринга, окремою функцією populateList


console.log('Розяснення формул')
// перебираємо весь масив tech. 
// фільтруємо його по умові(для кожного елементу(t) =>
//     є t.label.toLocaleLowerCase()(дуже важливо привести до нижнього регісту, щоб не заважав пошуку регістр)
//     .includes(filter)(якщо в попередньому виразі лежать елементи з відфільтрованого списку9нового списку, що ввів користувач) 
//     то виведи мені елементи в розмітку, що вже зроблену з новими значеннями)

// const filteredItems = tech.filter(t => t.label.toLocaleLowerCase().includes(filter),); 
// const listItemsMarup = createListItemsMarkup(filteredItems);