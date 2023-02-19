console.log('Делегування подій');
console.log('Якщо у нас є колекція чогось, наприклад кнопок, і їх 100 шт - то вішати подію на кожну кнопку довго та заберає память');
console.log('Ми можемо повісити делегування подій на батьківський div для всієї колекції, для кожної кнопки')

const container = document.querySelector('.js-container');
container.addEventListener('click', onClick); // ось тут ставимо слухателя подій, на весь контейнер


function onClick(evt){
    // console.log(evt);
    // console.log(evt.target);  // можемо дізнатись, на який елемент відбулась подія клік в батьківському div
    // console.log(evt.target.textContent);  // можемо дізнатись, текст елементу на який нажали
    // console.log(evt.target.nodeName);  // можемо дізнатись, назву тегу в js


    if(evt.target.nodeName !== 'BUTTON') {  // прописуємо функцію, клікає лише на тег кнопка, якщо інше пропискає
        return;
    };

    // if(evt.target.classList !== 'js-btn') {
    //     return;
    // };
    console.log(evt.target.textContent);  // можемо дізнатись, текст елементу на який нажали

};


// Функція додавання нової кнопки! 
// Якщо ми добавляємо нову кнопку - то і на нових кнопка буде діяти делегування
const addBtn = document.querySelector('.js-add-btn');

let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClack);

function onAddBtnClack() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter += 1;
};

console.log('Мастерська теги');
console.log('Задача: У нас є фільтр тегів (кнопки) і потрібно статі з таким тегом відфільтрувати');

console.log('Варіант 1, один з багатьох')

// const tagsContainar = document.querySelector('.js-tags');

// let selectedTag = null;  // зберігаємо активну кнопку в глобальній змінній.  Задаємо початкове значення null, так як перше значення при виборі кнопки буде null

// tagsContainar.addEventListener('click',onTagsContainerClick);

// function onTagsContainerClick(evt){
// // console.log(evt.target);
// if(evt.target.nodeName !== 'BUTTON') {
//     return;
// };
// const currentActiveBtn = document.querySelector('.tags__btn--active'); // вішаємо слухача подій на активний клас. Прослухуватись події будуть лише на тих кнопках, де є цей клас
// // console.log(currentActiveBtn);

// if(currentActiveBtn) {   // знімаємо активний клас - якщо вісить слухач подій const currentActiveBtn = document.querySelector('.tags__btn--active'), то зніми з нього подію currentActiveBtn.classList.remove('tags__btn--active');
//     currentActiveBtn.classList.remove('tags__btn--active');
// };

// // currentActiveBtn?.classList.remove('tags__btn--active'); // це є заміна if (if(currentActiveBtn)) . запис ліво?.право - читаємо: якщо в лівій частині є обєкті, не null - то виконає умову в правій частині. а якщо в лівій частині null - то праву не виконає. Не всі if можна замінити, лише коли умова при доступі до свойста 

// const nextActiveBtn = evt.target;
// nextActiveBtn.classList.add('tags__btn--active');  // вішаємо активний клас на кнопку. але вибирати буде всі кнопки на які ми нажимаємо, автоматично не знімає попередньо нажаті
// selectedTag = nextActiveBtn.dataset.value;

// console.log(selectedTag);
// // був запис так: evt.target.classList.add('tags__btn--active'); замінили на:
// // const nextActiveBtn = evt.target;
// // nextActiveBtn.classList.add('tags__btn--active'); 
// }


// // Варіант, один з багатьох

// // вішаємо слухача подій на активний клас. Прослухуватись події будуть лише на тих кнопках, де є цей клас
// // знімаємо активний клас - якщо вісить слухач подій const currentActiveBtn = document.querySelector('.tags__btn--active'), то зніми з нього подію currentActiveBtn.classList.remove('tags__btn--active');
// // добавляємо функцію для наступної активної кнопки: const nextActiveBtn = evt.target;
// // робимо зміну let selectedTag = null; для того щоб зберігати значення активної кнопки
// // selectedTag = nextActiveBtn.dataset.value; (69 строка) - у кожної кнопки є значення data-value="__" і ми по ній будемо взнавати активний клас і консолити його
// // currentActiveBtn?.classList.remove('tags__btn--active'); -це є заміна if. запис ліво?.право - читаємо: якщо в лівій частині є обєкті, не null - то виконає умову в правій частині. а якщо в лівій частині null - то праву не виконає. Не всі if можна замінити, лише коли умова при доступі до свойста 

console.log('Варіант 2, декілька з багатьох')

const tagsContainar = document.querySelector('.js-tags');
const selectedTags = [];

tagsContainar.addEventListener('click',onTagsContainerClick);

function onTagsContainerClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    evt.target.classList.toggle('tags__btn--active');  // toggle робить таке - якщо на активній кнопці класу немає - добавить, а якщо є - знімить

    selectedTags.push(evt.target.dataset.value);
    console.log(selectedTags);
};

// Зберігаємо вибрані теги в масив. Попередньо створюємо в змінній пустий масив
// пушимо їх в новий масив selectedTags.push(evt.target.dataset.value);
// Є проблема, якщо ми знімаємо клас у вже вибраної кнопки(клацаємо її 2 рази), то вона зберігається в масиві 2 рази
//  при віділені - добавити в масив, а при знятті - видалити з масиву
// використовуємо для цього new Set () - він дозволяє записувати унікальні елементи в масив

const tagsContainar1 = document.querySelector('.js-tags');
const selectedTags1 = new Set();

tagsContainar1.addEventListener('click',onTagsContainerClick1);

function onTagsContainerClick1(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    evt.target.classList.toggle('tags__btn--active');  // toggle робить таке - якщо на активній кнопці класу немає - добавить, а якщо є - знімить

    selectedTags1.add(evt.target.dataset.value); // добавляє унікальні, але не видаляє ті значення, що зняті
    // console.log(selectedTags1);
}

console.log('Записуємо код при якому провіряє чи є клас і записує в новий масив')


const tagsContainar2 = document.querySelector('.js-tags');
const selectedTags2 = new Set();

tagsContainar2.addEventListener('click',onTagsContainerClick2);

function onTagsContainerClick2(evt) {
// провіряємо, що клікаємо саме на кнопку, а не на div 
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
// виносимо змінні
    const btn = evt.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');
// провірка чи є на кнопці активний клас
    if (isActive) {   
        selectedTags2.delete(tag);  // якщо на поточній кнопці є клас tags__btn--active, і клікаємо на неї ще раз -  то видаляємо її зі змінної
    } else {
        selectedTags2.add(tag);  // в іншому випадку - добавляємо в масив
    };
// заносимо активні елементи в новий масив
    btn.classList.toggle('tags__btn--active');  // масив записуємо в новий з унікальними елементами
    console.log(selectedTags2);
};





