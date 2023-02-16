console.log('1 События слушателя')

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
// console.log('Клік');
// });

// Найменування функцій для подій. є 3 варіанта. Не важливо який вибрати, головне щоб у всьому проекті був один паттерн назв

// function handlerTargetButtonClick() {
//     console.log('Клік');
// };

// function targetButtonClickHandler() {
//     console.log('Клік');
// };

// function onTargetButtonClick() {
//     console.log('Клік');
// };

// далі цю функцію передаємо як callback в ліснер



// targetBtn.addEventListener('click', onTargetButtonClick);

console.log('при передачі події, краще функцію події виносити окремо і передавати її як callback в подію. для того, щоб при видалені видалилась саме та функція що потрібно')

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', () => {
    console.log('Вішаю слухача подій на кнопкуцільову кнопку');
    targetBtn.addEventListener('click', onTargetButtonClick);

});

removeListenerBtn.addEventListener('click', () => {
    console.log('Знімаю слухача подій по кнопці Снять слушателя');
    targetBtn.removeEventListener('click', onTargetButtonClick);
});
function onTargetButtonClick() {
    console.log('Клік по цільовій кнопці');
};

// 1. вішаю на кнопку addListenerBtn слухача подій. в cаllback функцію передаю, що на кнопці  targetBtn відпрацбовує функція onTargetButtonClick. Типу, без кліку на кнопку addListenerBtn, кнопка targetBtn не відпрацює
// 2. на кнопку removeListenerBtn вішаю слухача подій. в cаllback функцію передаю, що при нажиманні на цю кнопку, у кнопки  targetBtn відбудеться видалення події targetBtn.removeEventListener('click', onTargetButtonClick);, тобне не буде працювати функція onTargetButtonClick
// 3. Найкращим способом передавати cаllback через функції, типу onTargetButtonClick, а не анонімними стрілочними функціями, у тому випадку якщо потрібно буде видалляти, щоб ми мали змогу відразу знайти початкову функцію по ссилці

console.log('Кожна подія передає event.');
console.log('---event form----');

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit );

function onFormSubmit(event) {
    event.preventDefault();   // у випадку, коли нам не потрібно перезагружати сторінку після відправки форми, ми прописуємо таке правило

    console.log('Це сабміт форми');
    // console.dir(event.currentTarget.elements.subscription.value); // таким запитом можна доступитись до значення value, що вибрав користувач. в html ці значення записані так - <input type="radio" name="subscription" value="pro"> цей запис можна записати коротше:

    // це потрібно, щоб доступитись до значення елементів, а не збирати їх
// const formElements = event.currentTarget.elements; // виводить в консоль всі інпути та значення 
// console.dir(formElements)

// const mail = formElements.email.value;  // бере у введеного mail значення input
// const password = formElements.password.value;  // бере у введеного password значення input
// const subscription = formElements.subscription.value; 

// console.dir(mail); // отримуємо значення введеної пошти
// console.dir(password); // отримуємо значення введеного паролю
// console.dir(subscription); // отримуємо значення введеного паролю

// щоб зібрати дані та відправити на сервер, використовуємо Data
// const formData = {
//     mail,
//     password,
//     subscription,
// };
// console.log(formData);


console.log(FormData);
// є клас const formData = new FormData(event.currentTarget); що збирає дані
// щоб їх подивитись: formData.forEach((x, y) => {
//     console.log(x);
//     console.log(y);
// })


// якщо полів у формі буде 50, а не 3  і прописувати це все буде не реально, тому потрібно використовувати 
// Щоб зібрати всі дані з форми є спеціальний клас class.formData
const formData = new FormData(event.currentTarget);
console.log(formData);
// Таку formData можна відправляти на сервер і не дивитись, що там є
// на цьому етапі консоль виводить пустий масив.
// але якщо потрібно подивитись, то для цього в класі formData є спеціальний метод forEach(це не такий метод як для переборів обєтів)
formData.forEach((x, y) => {
    console.log(x);
    console.log(y);
})

};
// formData -проходиться по всії інтерактивних елементах і збирає данні введені користувачем


console.log('Події Input. ТОбто полів ввода');


console.log('Задача:')
console.log('1. при введені імені в поле ввода, на кнопці змінюється імя з Анонім на те, що ввели.')
console.log('2. Після нажимання на checkbox "Приймаю ліцензійні умови" кнопка "Зареєструватись як..." стає активною')

// 1. Робимо ссилки на всі елементи

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// Паттерн обєктів ссилок

const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};
// Перша подія інпута focus та blur
refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

function onInputFocus () {
    console.log('Інпут получив фокус - подія focus');
};
function onInputBlur() {
    console.log('Інпут зняв фокус - подія blur');
};

// отримати значення інпута: input та change
// change - не використовуються на інпутах, а більше на checkbox та radiobutton
refs.input.addEventListener('change', onInputChange);

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
// };

// Подія input - значення отримуємо кожен раз, коли змінюється значення введене в інпут

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
// };

// виконання задачі
// 1. зміна значення Аноніма

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
};
// 2. Зробити активну кнопку після того як чекнули чекбокс


refs.licenseCheckbox.addEventListener('change', onLicenseChange);  // на радіобатон та чекбоксах подія працює change - ми відлавлюємо подію, а не введений текс

function onLicenseChange (event) {
    console.log(event.currentTarget.checked);  // event.cbrrentTarget.checked - 'checked' - дає результат буль true- коли активна(вибрали) false - коли не активна(зняли галочку)
    refs.btn.disabled = !event.currentTarget.checked; // refs.btn.disabled = !event.currentTarget.checked; - кнопка не активна, коли НЕ спрацьовує подія checked
};


console.log('Події клавіатури');

const refs2 = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

// події клавіатури ловлять не на документі, а на всому вікні
window.addEventListener('keypress', onKeypress);  // keypress - відлавлюю події, лише нажатих кнопок символів та пробілу
// window.addEventListener('keydown', onKeypress);  // keydown - вілавлюють події нажатих всіх кнопок, включно з службовими


function onKeypress(event) {
    // console.log(event);
    console.log('код клавіші:', event.code);
    console.log('значення клавіші:', event.key);

    refs2.output.textContent += event.key;  // цей запис виведе на екрані що ввів користувач
};



// очистити напис, за допомогою кнопки 

refs2.clearBtn.addEventListener('click', onClearOutput);  // вішаємо подію на кнопку clearBtn і коллбеком передаємо їй функцію, що на події екрану - видай мені пусту строку
function onClearOutput () {
    refs2.output.textContent = '';  // що на події екрану - видай мені пусту строку

};

console.log('Події миші');

const boxRef = document.querySelector('.js-box');


// console.log('mouseenter та mouseleave');

// boxRef.addEventListener('mouseenter', onMouseEnter); // при наведені миші (ХОВЕР) добавляє новий клас, що прописаний вже в css
// boxRef.addEventListener('mouseleave', onMouseLeave);  // при наведені миші (ХОВЕР) видаляє новий клас, що прописаний вже в css
// // boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter (event) {  
//     const box = event.currentTarget;
//     box.classList.add('box--active');  // при наведені миші (ХОВЕР) добавляє новий клас, що прописаний вже в css
// };

// function onMouseLeave (event) {
//     const box = event.currentTarget;
//     box.classList.remove('box--active'); // при наведені миші (ХОВЕР) видаляє новий клас, що прописаний вже в css
// };
// function onMouseMove (event) {
//     console.log(event);
// };


console.log('mouseover та mouseout');

boxRef.addEventListener('mouseover', onMouseEnter); // при наведені миші (ХОВЕР) добавляє новий клас, що прописаний вже в css
boxRef.addEventListener('mouseout', onMouseLeave);  // при наведені миші (ХОВЕР) видаляє новий клас, що прописаний вже в css
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter (event) {  
    const box = event.currentTarget;
    box.classList.add('box--active');  // при наведені миші (ХОВЕР) добавляє новий клас, що прописаний вже в css
};

function onMouseLeave (event) {
    const box = event.currentTarget;
    box.classList.remove('box--active'); // при наведені миші (ХОВЕР) видаляє новий клас, що прописаний вже в css
};
function onMouseMove (event) {
    console.log(event);
};

