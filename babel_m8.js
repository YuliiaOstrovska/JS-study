console.log('Каспіляція клда, Babel')
// Ісходний код - це той, що пишуть девелопери
// Код в продакшин - транспіляція коду від девелопера до браузера (типу, переклач від мови девелопера на мову, яку розуміє юраюзер)
// Наприклад класи - браузери не розуміють, що таке класи, стрілочні функції

const sum = (a, b) => a + b;

sum(2, 3);

class Hero {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    };
};
const h = new Hero('Mango');

// Для встановлення Babel, заходино на сайт https://babeljs.io/setup#installation і копіюємо шлях - npm install -D @babel/core @babel/cli
// Після встановлення зявиться в packega.json група. Це залежності розробки:
// "devDependencies": {
//     "@babel/cli": "^7.21.0",
//     "@babel/core": "^7.21.0"
//   }

// Далі додаємо в скрипт - "build": "babel src -d lib"
//  "scripts": {
// +     "build": "babel src -d lib"
// +   },
// визиває пакет babel, бере все, що є в пакеті src, створює нову папку lib
// Всі назви папок можемо задавати самі і створювати їх безліч

// npm run build - запускаємо команду.
// і створена папка lib і там лежить тільки один файл trans.js, тому що в папці src на початку був лише один файл

// Коли зайдемо в транспілеваний файл в папці lib, то ми побачимо, то там код без змін
// Це тому, що babel за замовчуванням нічого не робить, йому потрібно вказувати для якиї браузерів він буде робити компіляцію коду.
// Грубо кажучи - це preset (preset-env) - це набор плагінів (правил) по яким babel буде транспілірувати код.

// Для цього потрібно створити файл конфігурації babel.config.json
// Створбємо файл babel.config.json в корені проекту. Це звичайний .json файл
// команда npm install @babel/preset-env --save-dev - встановлює пакет
// після встановлення він повинен зявитись в
// "devDependencies": {
//     "@babel/cli": "^7.21.0",
//     "@babel/core": "^7.21.0",
//     "@babel/preset-env": "^7.20.2"
//   }
// Далі в файл babel.config.json прописуємо плагіни (правила):
// {
//   "presets": ["@babel/preset-env"]
// }

// npm run buid - ще раз запускаємо команду
// і в папці lib є файл trans.js - вже транспільований

// Якщо ми хочемо жостко регулювати для яких версій браузера потрібно транспілювати код, то використовуємо browserslist