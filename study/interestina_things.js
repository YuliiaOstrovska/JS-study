console.log('Автоматично добачиляти кнопк')

const addBtn = document.querySelector('.js-add-btn');
const container = document.querySelector('.js-container');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClack);

function onAddBtnClack() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter += 1;
};


console.log('Якщо НЕ');
// Якщо нам потрібно додати перевірку чогось, наприклад, додатки кнопку, но якщо це не є кнопкию, то виходь з функції
// nodeName - це назва в js тегів, пишеться великими буквами
function onAddBtnClack(evt) {
    if(evt.target.nodeName !== 'BUTTON') {
        return;
    };
}

console.log('Заміна if в пошуку властивостей');
// 1. Короткі властивості
// було
if(currentActiveBtn) {   // знімаємо активний клас - якщо вісить слухач подій const currentActiveBtn = document.querySelector('.tags__btn--active'), то зніми з нього подію currentActiveBtn.classList.remove('tags__btn--active');
    currentActiveBtn.classList.remove('tags__btn--active');
};
// стало
// currentActiveBtn?.classList.remove('tags__btn--active');

// 2. Вложені властивості

const settings = {
    theme: {
        userDefined: {
            color: 'red'
        }
    }
}

// було
if(settings && settings.theme && settings.theme.userDefined) {
    console.log(settings.theme.userDefined)
}
// якщо settings - це обєкт І settings.theme - це обєкт І settings.theme.userDefined - це обєкт - то візьми у нього властивість userDefined

// Стало
settings?.theme?.userDefined?.color
console.log(settings?.theme?.userDefined?.color)

console.log('Зібрати в масив активні елементи, якщо їх активність змінюється')
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


console.log('Пошуки')
console.log('1. шукаємо батьківський елемент')
console.log('1.1. parentNode - це властивість яка зберігає дані батьківського елементу, типу першиого на верх')
const swatchEl = evt.target;
const parentColorCard = swatchEl.parentNode

console.log('1.2. шукаємо предка з певним css класом. Якщо між нашим елементом та елементом що шукаємо є ще декілька, які нам не потрібні')
// така розмітка і нам потрібно знайти предка нашого елемента class="color-swatch", а це є class="color-card"
{/* <div class="color-card">
    <div class="color1">
        <div class="color2">
            <div class="color-swatch"></div>
        </div>
    </div>
</div> */}

const swatchEl2 = evt.target;
const parentColorCard2 = swatchEl2.closest('.color-card')


console.log('2. якщо потрібно знайти в глубину - використовуємо querySelector')

swatchEl3.querySelector

console.log('Повісити слухача подій на всі елементи:')

// Повісити слухача подій на всі елементи:
// перебрати масив forEach і на кожен повісити слухача подій
const lazyImages = document.querySelectorAll('img[loading="lazy"]');  // вибрати всі елементи з властивістю певною


lazyImages.forEach(image => {  // перебрати масив forEach і на кожен повісити слухача подій
    image.addEventListener('load', onImageLoaded);
});

function onImageLoaded(evt) {
    console.log(onImageLoaded);
};

