// const { required } = require("joi")

// console.log('Helo')
// console.log('Node.js - серверна реалізація язика JS без браузера')
// console.log('node -v - перевірити наявність встановленого і його версію')
// console.log('node m8.js - виконати код в файлі')

// console.log('node -v')
// console.log('npm')
// console.log('npm - це пакетний менеджер для Node.js')
// console.log('npm -v - це перевірки чи становлений і яка версія')
// console.log('Ініціалізація npm - потрібно лише раз в самому початку роботи провести процедуру ініціалізації. команда:')
// console.log('npm init ініціалізує пакетний менеджер, в кінці записатє чи створювати файл packege.json')
// console.log('npm init -y (з флагом у) ініціалізує пакетний менеджер, і в кінці вже сам створить файл packege.json (потрібно буде зайти і подивитись в discription')
// console.log('npmjs.com - це сайт з бібліотеками. звідти будемо встановлювати пакети собі в проект')
// console.log('Встановлення пакетів:')
// console.log('Знаходимо на сайті потрібной пакет, наприклад joi- це бібліотека для валідації')
// console.log('в правій частині екрану буде поле install -- там прописана команда для встановлення пакету')
// console.log('в терміналі, в проекті прописуємо цю команду: npm install joi (npm i joi - скорочений запис, замість install => i) ')
// console.log('Що зявиться у проекті:')
// console.log('1. в файлі package.json внизу буде запис "dependecies" в якій буде записано назву пакета та його версія')
// console.log('2. в корні поекту автоматично створиться папка node.modules - в цій папці зберігаються папки скачених проектів')
// console.log('3. якщо потрібно видалити якийсь пакет, в терміналі прописуємо команду: npm remove joi (joi - назва пакету)')
// console.log('4. папку node.modules, не потрібно пушити в репозиторій на GITHub, тому в папку .gitignore потрібно записати: node_modules/')
// console.log('Використовуємо в коді пакети')
// валідція паролю


// прописуємо змінну passwordScheme = бібліотека.метод строка().min(3)значення1(аргумент).max(10)значення2(аргумент).alphanum()тільки букви та цифри
const Joi = require('joi');  // визов бібіотеки

// прописуємо змінну passwordScheme = бібліотека.метод строка().min(3)значення1(аргумент).max(10)значення2(аргумент).alphanum()тільки букви та цифри
const passwordScheme = Joi.string().min(3).max(10).alphanum();
console.log(passwordScheme.validate('g'));
// визов функції. в терміналі прописуємо команду node m8 і отримуємо результат 
// {
//   value: 'g',
//   error: [Error [ValidationError]: "value" length must be at least 3 characters long] {
//     _original: 'g',
//     details: [ [Object] ]
//   }
// }
// Генерація випадкого паролю
const shortid = require('shortid');
 
console.log(shortid.generate());


console.log('npm-скрипти')
console.log('В файлі packege.json в полі "scripts" ми можемо записати любу команду, типу шортхенд команд. Щоб не писати щоразу node m8')
console.log('наприклад, записати команду так: "m8": "node m8.js" І в терміналі запускати npm run m8')
console.log('команди start та test не потрібно запускати з run - npm start/ npm test. Всі інші тільки з run')
console.log('pre post скрипти')
console.log('В файлі packege.json в полі "scripts" ми можемо записати команди, які автоматично будуть виконуватись перед головною комнадою pre або після закінчення головної команди post скрипти')
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "prem8": "echo \"Це preкоманда\"",
//     "postm8": "echo \"Це postкоманда\"",
//     "m8": "node m8.js"
//   },
console.log('Полезно, коли до виконання якоїсь події нам попередньо потрібно зробити ще якість дїі - називаємо цю команду pre...і вона автоматично буде запускатись')
console.log('Полезно, коли після виконання якоїсь події нам потрібно зробити ще якість дїі(видалити непотрібні файли, доаплодити) - називаємо цю команду post...і вона автоматично буде запускатись')

console.log('pre post скрипти сложний запис')
// "script-1": "echo \"Це script-1\"",
//     "script-2": "echo \"Це script-2\"",
//     "all": "npm run script-1 && npm run script-2"


// console.log('npm пакети:')
// console.log('joi - бібліотека валідації')
// console.log('shortid - id генерація')
// console.log('express - фреймворк для створення веб-приложеній (з цим пакетом загрузились ще 50 різних пакетів тому що що ця бібілотека використовує залежності з інших пакетів і всі вони зберіглись в папку node_modules, хоча в packege.json запис лише однієї залежності)')
// console.log('uuid - генерація унікальних ідентифікаторів(потрібно версію подивитись')
// console.log('Якщо ми скачуємо якийсь проект з гітхаб, то в тому проекті не буде файла node_modules але в файлі package.json всі залежно по проекту записані. Тому перед початком роботи з проектом потрібно встановити всі бібліотеки, що є в проекті')
// console.log('Error: Cannot find module 'joi'')
// console.log('Команда npm install')

// Серверна частина. 
const express = require('express');

const app = express();

app.use('*', (req, res) => {
    console.log('Був запит на браузер');
    res.send('<h1>Відповідь </h1>')
});

const listener = app.listen(4444, () => {
    console.log(`Веб-сервер запущений на порту ${listener.adress().port}`);
});

// В браузері набираємо запит http://localhost:4444/ і бачимо відповідь на єекрані


