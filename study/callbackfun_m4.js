// ------ТЕОРІЯ------
// Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

// Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

const fnA = function (message, callback) {
    console.log(message);

    console.log(callback);
    callback(100);
};

const fnB = function (number) {
    console.log('Це лог при визові fnB', number);
};

fnA('qweqwe', fnB);

// 1. записуємо в змінну Функція вищого порядку fnA, яка приймає аргументи message, callback.
// 2. в Функція вищого порядку fnA консолим message та callback і окремо, можемо задати аргумент для callback();
// 3. записуємо в зміну Функція зворотного виклику fnB.
// 4. при визові Функція вищого порядку fnA (17 строка) передаємо аргументи fnA('qweqwe', fnB); 
// 5. fnB другий аргумент в визові функції і є аргументом const fnA = function (message, callback) callback!

console.log('Приклад')

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

const add = function (x, y) {
    return x + y;
};
doMath(2, 3, add);

// 1. обявили функцію add, яка каже сумувати значення, аргументи x та y
// 2. ви визов функції doMath внесли як аргумент doMath(2, 3, add);
// 3. функція const doMath = function (a, b, callback) приймає функцію add як паремент функції doMath
// 4. в тілі функції doMath визиваємо onst result = callback(a, b);
// a - бере аргумент x з функції add, b - бере аргумент y з функції add
// 5. при визові функції doMath(2, 3, add); (36 строка) 
// 2 - це а як параметр функції const doMath = function (a, b, callback); 
// 3 - це b як параметр функції const doMath = function (a, b, callback)

console.log('До нашої функції можемо добавити другу, третю ітд функцію')
const sub = function (x, y) {
    return x - y;
};
doMath(2, 3, add);
doMath(10, 8, sub);

console.log('Внутрішню логіку функції const doMath = function (a, b, callback) можемо перевикористовувати декілька разів. В тілі функції записана якась загальна логіка: вирахувати результат і залогірувати його')
console.log('Функції callback можуть бути анонімні, типу, не записані в змінні. Це є "Літерал функції" inline функція (вбудована)')
doMath(4, 3, function (x, y) {
    return x + y});
doMath(20, 8, function (x, y) {
    return x - y});

console.log('-----ПРИКЛАДИ-----')   
console.log('1.Отложений визов: реєстрація собитія. (коли пользователь клікає на кнопку, на бек передається інфо, що на кнопку нажали') 
console.log('це єдиний спосіб зареєструвати виконання якогось коду в js по собитію. handleBtnClick - це функція callback')  
// document.querySelector - за допомогою, ми можено отримати доступ до документа на HTML файлі
const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function() {
    console.log('Клік по кнопці' + Date.now());
};
// Date.now() - це час
// щоб зареєструвати слушателя собитий addEventLisner() - буквально каже: 
// перший аргумент - ти скажи, на якому собітії я повинен виконати кусок коду. В нашому випадку це 'click'
// другий аргумент - передай мені функцію, код, яку я буду виконувати кожен раз коли юзер клікає на кнопку
buttonRef.addEventListener('click', handleBtnClick);

// console.log(buttonRef) - це отримуємо силку на кнопку
// console.dir(buttonRef) - отримуємо кнопку js як обєкт і можемо подивитись всі його свойств та методи

console.log('Можна записати як inline функцію');
buttonRef.addEventListener('click', function() {
    console.log('Клік по кнопці' + Date.now())});

console.log('2.Получити геопозицію користувача') 
// буквально на обєкті window., є спеціальне свойство navigator., в якому є свойство geolocation., в якому є метод getCurrentPosition()

// window.navigator.geolocation.getCurrentPosition()


const onGetPositionSuccess = function (position) {
    console.log(position);
};
const onGetPositionError = function (error) {
    console.log(error);
};
window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);
console.log('3. Інтервали. Виконання функції з відложеним часом')

const callback = function () {
    console.log('через 2 секунди запуститься функція');
};

console.log('В коді перед таймаутом');
setTimeout(callback, 2000);
console.log('В коді після таймаута');

