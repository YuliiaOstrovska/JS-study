console.log('----1.Пошук елементів----')

// для запису змінних, що не путатись, краще записувати так змінні:
// const navEl - для елементів
// const navRef - для ссилок

const navEl = document.querySelector('ul');  // шукає один елемент. якщо буде багато елементів, наприклад li, то знайде перший елемент
console.log(navEl);

const navLinksEl = document.querySelectorAll('.site-nav_link');  // шукає колекцію всіх елементів з однаковим селектором класу по всьому документі. якщо у нас будуть ще елементи з таким селектором - він знайде всі
console.log(navLinksEl);

const navLinksEl2 = navEl.querySelectorAll('li');  // якщо нам потрібно знайти всі елементи в певному місці, а не у всьому документі використовуємо так
console.log(navLinksEl2);

const navLinksEl3 = navEl.querySelectorAll('.site-nav .site-nav_link');  // якщо нам потрібно знайти всі елементи в певному місці, а не у всьому документі використовуємо так
console.log(navLinksEl3);   // або задати для пошуку 2 селектори батька а потім нащадка. Щоб не використовувати 2 querySelector для пошуку.

// const magicBtn = document.querySelector('js-magic-btn');
// magicBtn.addEventListener('click', () => {
//     const navEl3 = document.querySelector('ul');  // шукає один елемент. якщо буде багато елементів, наприклад li, то знайде перший елемент
// console.log(navEl3);

// const navLinksEl4 = navEl3.querySelectorAll('.site-nav .site-nav_link');  // якщо нам потрібно знайти всі елементи в певному місці, а не у всьому документі використовуємо так
// console.log(navLinksEl4);
// });

console.log('----2.Свойства елементів----')

const heroImgEl = document.querySelector('.hero_image');
console.log(heroImgEl);
// в js ця картинка є обєктом і в неї є свойства: alt, src.
// ми можемо достукатись до свойст картинки
console.log(heroImgEl.src);

heroImgEl.src = 'https://img.freepik.com/free-photo/wooden-picture-frame-shelf-with-cactus_53876-134302.jpg';
heroImgEl.alt = 'це картинка';
const heroTitleEl = document.querySelector('.hero_title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'Картина';
console.log(heroTitleEl.textContent);


// // це запис, щоб змінити картинку кнопкою

const magicBtn = document.querySelector('.js-magic-btn');  // шукаємо кнопку в html документі
// console.log(magicBtn);


magicBtn.addEventListener('click', () => {    // вішаємо на кнопку дію addEventListener('click' і функцію, що повино виконатись при цьому кліку на кнопку
    const heroImgEl = document.querySelector('.hero_image');
console.log(heroImgEl);
console.log(heroImgEl.src);
heroImgEl.src = 'https://img.freepik.com/free-photo/wooden-picture-frame-shelf-with-cactus_53876-134302.jpg';
heroImgEl.alt = 'це картинка';
// Заміна текстового контенту  .textContent : 
const heroTitleEl = document.querySelector('.hero_title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'Картина';
console.log(heroTitleEl.textContent);

});

console.log('----Набір методів для роботи з атрибутами----')
console.log('1. getAttribute')

// Ці два записи є ідентичні. 
console.log(heroImgEl.getAttribute('src'));  // цей запис появився раніше і являється стандартом
console.log(heroImgEl.src);  // цей запис новіший і використовувати його. цей ще не являється стандартом, но його браузери вже читають

console.log('2. setAttribute')

// elem.setAttribute(name, value) - встановлює атрибут.

console.log('get та setAttribute практично не використовуються. їх можна замінити простішими записами: елемент.властивість (елемент.src)');

console.log('3. removeAttribute')
// elem.removeAttribute(name) - видаляє атрибут.
console.log(heroImgEl.removeAttribute('alt'));


console.log('4. hasAttribute')
console.log(heroImgEl.hasAttribute('src'));
// true - якщо є данний атрибут
// false - якщо немає.

console.log('----3. data-атрибути----')
console.log('data-атрибути - це атрибути, які не html розмітці вже зазначенні, а які спеціально для js')

const actions = document.querySelectorAll('.js-action button');  // якщо нам потрібно знайти саме кнопки з даним селектором то фактично і пишемо: селектор кнопка ('.js-action button');
console.log(actions);
console.log(actions[1].dataset);  // так можна добитись до кнопки по номеру індекса і визвати його атрибут за допомогою "елемент.dataset"

console.log('У input атрибут - це value')

magicBtn.addEventListener('click', () => {    // вішаємо на кнопку дію addEventListener('click' і функцію, що повино виконатись при цьому кліку на кнопку
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl.value);  // вводимо текст в поле для інпуту і отримуємо значення в консолі
    inputEl.value = 'hgjgjgj';  // вносимо зміні в js і виводиться в браузер
    
});

console.log('----Робота з класами----')
console.log('У кожного елемента є спеціальний інтерфейс, який називається classlist - це свойство в якому зберігається обєкт, у якого в прототипі є багато методів ')



magicBtn.addEventListener('click', () => {    // вішаємо на кнопку дію addEventListener('click' і функцію, що повино виконатись при цьому кліку на кнопку
    const siteNavEl = document.querySelector('.site-nav');   // отримуємо ссилку на всю навігацію
    console.log(siteNavEl);
    console.log(siteNavEl.classList);
    
    siteNavEl.classList.add('super-cool', 'superpuper'); // add - добавляємо клас
    siteNavEl.classList.remove('super-cool');  // remove - видаляємо клас
    siteNavEl.classList.toggle('not-cool');  // toggle - добавляємо клас, якщо є - видаляємо, якщо немає
    siteNavEl.classList.replace('superpuper', 'goot');  // replace - заміняємо старий клас на новий
    console.log(siteNavEl.classList.contains('goot'));  // contains - каже, чи є такий клас.  поверне буль: true - якщо є false якщо немає
});
console.log('Задача: підсвітити активну сторінку')
// уявляємо, що ми знаємо яка нам потрібна сторінка
const currentPageUrl = '/contacts';
// як знайти елемент по селектору атрибута?
// 1. .site-nav_link - шукаємо такий атрибут, в якому є href - [href=" "] і в " " запишуємо шаблоним рядком змінну currentPageUrl яку оголосили як поточну сторінку
// const linkEll = document.querySelector('.site-nav_link[href="${currentPageUrl}"]');
const linkEll = document.querySelector('.site-nav_link[href="/contacts"]');
console.log(linkEll);
linkEll.classList.add('site-nav_link---current');

console.log('----Навігація по DOM----')
console.log('Це швидкий пошук кусочків елементів по дереву. Це як коротший запис querySelector.')
console.log('дійсно полезні будуть:firstElementChild, lastElementChild, children - всі інші використовуються рідко ')


const navEl4 = document.querySelector('.site-nav');
const siteNavFirst1 = document.querySelector('.site-nav_link');
const siteNavFirst2 = navEl4.firstElementChild;
console.log(siteNavFirst1);
console.log(siteNavFirst2);

console.log('----Створення елементів----')
console.log('Створені елементи не відразу записуються в html розмітку. вони зберігаються в памяті, тільки після повного оформлення всего елементу, можна його вставляти в документ')
console.log('Створення заголовку. при створені елементів, потрібно задавати валідатні теги: h1, span, img, а не qwe. Томущо створеться саме тег qwe, а він є невалідним')

const titleEl = document.createElement('h1');  // створюємо елемент (заголовок)
titleEl.classList.add('page-list');  // добавляємо в елемент клас
titleEl.textContent = 'Це заголовок сторінки';

console.log(titleEl);
// після створення елементу, потрібно його добавити в html розмітку
console.log('Методи добавляння елементів');
console.log('appendChild - цей метод добавляє дитячий елемент і батьківський. для цього потрібно щоб вже був створений батьківський елемент'); 
console.log('для нашого title, батьком є body тому ми вибираємо його. Але цей метод вставляє елемент як останній, внизу документа!'); 

document.body.appendChild(titleEl);



console.log('Створюємо і добавляємо новий пункт меню');

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav_item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav_link');
navLinkEl.textContent = 'Особисттий кабінет';
navLinkEl.href = '/profile';

console.log(navItemEl);
console.log(navLinkEl);
// зараз це нежалежні елементи, які не знають один про одного
// 1. вставляємо а в li
navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

// 2. вставляємо li в ul

const navEl1 = document.querySelector('.site-nav');
navEl.appendChild(navItemEl);

console.log(navEl1);
console.log('Вставити елемент першим у список');
// 1. insertBefore (який елемент вставляємо,  перед яким вставляємо(шукаємо елементи за допомогою "first/lastChild"))

navEl.insertBefore(navItemEl, navEl.firstChild);

// Якщо потрібно поставити між 2 та 3. Використовуємо children та індекс
navEl.insertBefore(navItemEl, navEl.children[2]);

console.log('Створюємо картинку та добавляємо її в hero');

console.log('1. html розмітці створюємо контейнер hero');
// 14 строка
console.log('2. js створюємо картинку, та добавляємо їй атрибути');

const imageEl = document.createElement('img');
imageEl.src = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg';
imageEl.alt = 'Ранковий ліс'
console.log(imageEl.width);  // провіряємо чи є у картинки властивість width. Якщо є, то консоль виведе 0 і ми можемо змінювати це значення
console.log(imageEl.hasAttribute);  // другий варіант провіряємо чи є у картинки властивість width. Якщо є, то консоль виведе 0 і ми можемо змінювати це значення
imageEl.width = 640;// змінюємо розмір
console.log(imageEl.width);  // провіряємо чи змінився розмір

imageEl.setAttribute('width', 540);  // ще один варіант додавання властивостей через атрибути, але він громоздкий
console.log(imageEl);
document.body.appendChild(imageEl);


console.log('3. js створюємо title для hero');

const titleHeroEl = document.createElement('h2');
titleHeroEl.classList.add('hero-title');
titleHeroEl.textContent = 'Morning wood';

console.log('4. js групуємо всі елементи hero: img title');
const heroNewEl = document.querySelector('.hero');
// console.log(heroNewEl);
// heroNewEl.appendChild(titleHeroEl);
// heroNewEl.appendChild(imageEl);

console.log('Проблема цього методу в тому. що ми прописала дві операції. DOM не любить коли йому приходить багато запитів для змін');
console.log('Можемо використати фрагменти. Є в конспекті');
console.log('Або append. (prepend  uppend)За цей один метода ми можемо добавити необхідну кількість елементів. Але головне слідкувати за порядком додавання: як прописали в формулі append так і добавиться в html');
heroNewEl.append(titleHeroEl, imageEl);


console.log('Ітого: appendChild та insert використовуємо, коли потрібно вставити группу елементів(гроздь винограда) повязані елементи. Їх спочатку групуємо, а потім верхній елемент вставляємо в html розмітку ');
console.log('Ітого:  append - використовує тоді, коли нам потрібно вставити неповязані між собою елементи');

console.log('----Створення колекції елементів----')
console.log('Розмітка масива. це є 99% всіх задач')

// Є масив, який приходить з backend. і в залежності від дії, у нас повинен змінюватись колі кнопки
// Потрібно створити для кожного масиву кнопку
const colorPickerOptions = [
    {label: 'red', color: '#F44336'},
    {label: 'green', color: '#4CAF50'},
    {label: 'blue', color: '#2196F3'},
    {label: 'grey', color: '#607D8B'},
    {label: 'pink', color: '#E91E63'},
    {label: 'indigo', color: '#3F51B5'},
];
// створююємо макет кнопки

const option = colorPickerOptions[0];  // це силка на один масив, поки так, в подальшому буде ця інфа приходити з backend

const buttonEl = document.createElement('button');  // створили кнопку
buttonEl.type = 'button';   // добавили атрибут тип
buttonEl.textContent = option.label;   // добавили атрибут надпис на кнопці
// звернення до свойства Style
// якщо нам потрібно створити inlinestyle, ми не можемо знати в css весь набор стилів, наприклад кольори, вони можеть приходити з backend. Тому ми стилі можемо заінлайнити
buttonEl.style.backgroundColor = option.color;  // це колір фону, колір буде приходити з бекенду

console.log(buttonEl);
console.log('створююємо масив кнопок олдскульним методом за допомогою цикла for')

// const colorPickerOldEl = document.querySelector('.js-color-picker');   // в знаходимо цей елемент 258 строка 
// const elementsOld = [];
// for (let i = 0; i < colorPickerOptions.length; i +=1) {
//     const option = colorPickerOptions[i];  
//     const buttonEl = document.createElement('button');  
//     buttonEl.type = 'button';  
//     buttonEl.classList.add('color-picker__option');  // без крапки перед назвою класу
//     buttonEl.textContent = option.label;  
//     buttonEl.style.backgroundColor = option.color;

//     elementsOld.push(buttonEl);
// };
// console.log(elementsOld); // отримали масив з 6 кнопок

// colorPickerOldEl.append(...elements);  // і добавляємо в нбого елементи 269 строка. (...elements - методом розпилення spread )
// і потім вішаємо його. берез з розмітки html клас js-color-picker
// в знаходимо цей елемент 258 строка 
// і добавляємо в нього елементи 268 строка

// десь в css у нас є клас .color-picker__option і ми добавляємо в наш макет кнопки ссилку на цей клас, 264 строка

console.log('створююємо масив кнопок сучасним методом map')
// const colorPickerEl = document.querySelector('.js-color-picker');    
// const elements = colorPickerOptions.map(option => {   // перебираємо масив за допомогою map і в ньому створюємо макет для кнопки (282-286 строки)
//     const buttonEl = document.createElement('button');   // створюємо кнопки і набираємо їй властивості.
//     buttonEl.type = 'button';  
//     buttonEl.classList.add('color-picker__option');  // без крапки перед назвою класу
//     buttonEl.textContent = option.label;  
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;  // повертаємо кнопки
// });

// console.log(elements); // отримали масив з 6 кнопок

// colorPickerEl.append(...elements);  // і добавляємо в нбого елементи 281 строка. (...elements - методом розпилення spread )

console.log('спишемо функцію яка буде отримувати масив опцій та повертати масив кнопок. timecode 1:45:00 Лекція Репети 1 модуль 6')
console.log('всі колекції робляться так')

const colorPickerEl = document.querySelector('.js-color-picker'); 
const makeColorPickerOptions = options => {
    return options.map(option => {   // це функція яка отримує options  // ця функція return результат map - це масив елементів 
        const buttonEl = document.createElement('button');   // створюємо кнопки і набираємо їй властивості.
        buttonEl.type = 'button';  
        buttonEl.classList.add('color-picker__option');  // без крапки перед назвою класу
        buttonEl.textContent = option.label;  
        buttonEl.style.backgroundColor = option.color;
    
        return buttonEl; // цей return потрібен, щоб з соллбек (результату) з map повернути в новий масив
});
};
const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerEl.append(...elements);

console.log('---ПРАКТИКА---')
console.log('1. Створення колекції товарів. Винесла в окремий js файл m6testproducts')

console.log('---Парс строк innerHTML ---')
console.log('як робити значно легше розмітку строк')
console.log('innerHTM. Читаємо строки')

const titleInnerEl = document.querySelector('.titleI-inner');
console.log(titleInnerEl.textContent);
console.log(titleInnerEl.innerHTML);

console.log('innerHTM. Записуємо строки')

// titleInnerEl.innerHTML = '<a href="">Додаємо в html за допомогою innerHTM</a>';

console.log('innerHTM. плюси та мінуси')
console.log('innerHTM. плюси - дуже легко очистити контент тега')

// titleInnerEl.innerHTML = ''; // так видаляє повністю все
titleInnerEl.innerHTML = '<a href="">Додаємо в html за допомогою innerHTM</a>';   // так перезапише тег
titleInnerEl.innerHTML += '<a href="">Додаємо в html за допомогою innerHTM</a>'; // а якщо добавити += то до існуючого тега добавить новий

console.log('innerHTM. мінуси - якщо використовувати += браузер спочатку все видаляє, а потім створює нове і добавляє новий тег/елемент. це дуже погана операція для проізводітельності.дуже загружає браузер ')
console.log('innerHTM. використовуємо для додавання і видалення, але не для += ')

console.log('---Метод insertAdjacentHTML() ---')
console.log('цей метод для того, щоб не очистити і не для заміни. Він лише для того, щоб додати щось нове, не змінюючи старі значення')

titleInnerEl.insertAdjacentHTML('beforeend', '<p class="insert">insertAdjacentHTML</p>');


// "beforebegin" - перед elem
// "afterbegin" - всередині elem, перед усіма дітьми
// "beforeend" - всередині elem, після усіх дітей
// "afterend" - після elem

console.log('---Мастерская таблиць транзакцій---')
console.log('Перенесла в окремий js файл')
