console.log('-----CALLBACK ФУНКЦІЇ-----')
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
    // console.log(position);
};
const onGetPositionError = function (error) {
    console.log(error);
};
window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);
console.log('3. Інтервали. Виконання функції з відложеним часом')

const callback = function () {
    // console.log('через 2 секунди запуститься функція');
};

console.log('В коді перед таймаутом');
setTimeout(callback, 2000);
console.log('В коді після таймаута');

console.log('3. Фільтрація масиву. Приклад: з масиву цифр повернути які більше 3, в другому випадку - меньше 2')

// 1. потрібно передати функцію
// 2. функція отримує елемент масиву
// 3. якщо елемент масиву задовольняє умову, то функція поверне true
// 3. якщо елемент масиву НЕ задовольняє умову, то функція поверне false


const filter = function (array, test) {
    const filteredArray = []; // 1.  const filteredArray = []; - створюємо новий пустий масив, в який будемо записувати результат
    for (const el of array) {
        console.log(el); // перебираємо масив по елементам

        const passed = test(el); // створюємо зміну для елементу пройшов чи не пройшов тест
        if (passed) {
            filteredArray.push(el); // якщо пройшов, то пушимо його в filteredArray,
        }
    }
    return filteredArray; // повертаємо новий масив
}
// функція для першої умови, більше чи рівно 3
const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

// функція для другої умови умови, меньше чи рівно 4
const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

console.log('Це рішення є маштабоване і може перевикористовуватись для різних задач.')
const fruits = [
    { name: 'apples', guantity: 200, isFresh: true },
    { name: 'grapes', guantity: 150, isFresh: false },
    { name: 'bananas', guantity: 100, isFresh: true },
];
// повертає фрукти, в яких властивість кількість більше 120
const getFruitsWithQuantity = function (fruit) {    // function (fruit) - fruit - це локальна зміна лише для цієї функції, це є весь масив { name: 'apples', guantity: 200, isFresh: true }
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

// тут використовуємо цю зміну для звернення до властивості guantity - fruit.quantity

console.log('-----ЗАМИКАННЯ-----')

console.log('теорія')
console.log('Замикання - це возможность функції fnB1, яку ви вернули з іншої функції fnA1, продовжувати отримувати доступ до локальних змінних батьківської функції fnA1: parameter, innerVariable')


const fnA1 = function (parameter) {
    const innerVariable = 'Значення внутрішньої змінної функції fnA';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Це визов innerVariable');
    };
    return innerFunction;
};

const fnB1 = fnA1(555);

fnB1 ();
console.log(fnB1);

console.log('Задача ПОВАРЕНОК')
//  загальна, батьківська функція
// const makeDish = function (sheffName, dish) {
//     console.log('${sheffName} готовить ${dish}');
// };
//  makeDish('Mango', 'pie');
//  makeDish('Mango', 'apple');
//  makeDish('Mango', 'cake');

//  makeDish('Poly', 'котлета');
//  makeDish('Poly', 'суп');
//  makeDish('Poly', 'чай');
// пишемо другу функцію, в якій передаємо імя шефа  function (name)
// а результатом цієї функції ми будемо повертати результат функції батьківської makeDish, яка в замиканні буде отримувати імя шефа
 const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log('${name} готовить ${dish}');
    };
    return makeDish;
 };

 const mango = makeSheff('Mango');


// визов функцій
mango('pie');
mango('cake');

const poly =  makeSheff('Poly');

poly('суп');
poly('чай');
 
// 1. const mango = makeSheff('Mango') (201 строка) - визиває всю велику функцію makeSheff (194 строка) яка повертає з себе функцію makeDish, і в const mango - записується саме функція makeDish
// 2. коли записуємо визов mango('pie'); - ми передаємо значення блюда, pie - в функцію, makeDish в значення dish "const makeDish = function (dish)" 
// 3. а імя const makeSheff = function (name) отримуємо з const mango = makeSheff('Mango');  - саме це замикання






