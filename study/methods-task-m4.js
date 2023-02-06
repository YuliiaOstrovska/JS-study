console.log('-----Метод forEach-----')
// це не деструктивний код. Він не змінює оригінальний масив, а лише робить новий на основі старого.

// 1. Поєтапно перебирає оригінальний масив
// 2. Нічого не повертає
// 3. Заміняє класичний for, якщо не потрібно переривати цикл. forEach - це заміна класичного for

const numbers = [5, 10, 15, 20, 25];

// 1. метод forEach викликає callback функцію 
// 2. function (number, index, array) - це функція обратного визова, вона буде визиватись для кожного елемента окремо
// 3. в параметри функції можемо оголосити 3 параметри:
// а) текущее значение - в нашому випадку записуємо number так як у нас колекція цифр
// б) index
// в) силка на сам оригінальний масив, array

numbers.forEach(function (number, index, array) {
    console.log('number', number);
});

console.log('в методі forEach є 2 аргументи: callback (currentValue, index, array) та thisArg - обєкт в контексті якого визивається callback')

console.log('-----Метод map-----')
// 1. Поелементно перебирає оригінальний масив
// 2. Не змінює оригінальний масив
// 3. Повертає новий масив той самої довжини, що і оригінальний

const numbersM = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(function () {
    console.log('qwe');

});
// визвалось 5 раз qwe тому що в масиві 5 елементів
const doubledNums1 = numbers.map(function (number) {
    console.log(number);
    // return 555;  // якщо не буде задано return в тілі функції - то визве undefine 5 раз
    return number * 2;   // поверне новий масив, кожне число якого помножене на 2
});
console.log(doubledNums1);
// перебираємо елементи масиву

// Переписуємо на стрілочні функції 
const doubledNums2 = numbers.map(number2 => {
    console.log(number2);
    
    return number2 * 3;   // поверне новий масив, кожне число якого помножене на 3
});
console.log(doubledNums1);

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];
console.log("Повертаємо масив всіх імен користовачів")
const playerNames = players.map(player => {
    console.log(player);
    return player.name;
});
console.log('playerNames', playerNames);

// неявние повернення в стрілочних функціях
const playerNames1 = players.map(player => player.name); // player - сігнатура чи підпис функції, набір параметрів. player.name - це те що потрібно повернути (return)
console.log('playerNames', playerNames1);

console.log("Повертаємо масив всіх id користовачів")

const playerIds = players.map(player => player.id); // player - сігнатура чи підпис функції, набір параметрів. player.name - це те що потрібно повернути (return)
console.log('playerIds', playerIds);

console.log("Якщо потрібно декілька властивостей вивести з обєктів")

const res = players.map(player => {
    return {
        name: player.name,
        online: player.online
    };
}); 
console.log('res', res);
// Можемо використати деструктиризацію та shorthand

const res1 = players.map(({name, online}) => ({name, online}));
console.log('res', res);


console.log("Збільшуємо кількість поінтів для кожного користувача на 10%")

const updatePlayers = players.map(player => {
    return {
        ...player,  // повертаємо новий масив зі старими значеннями, розпилюючи
        points: player.points * 1.1,   // в новому масиві збільшуємо поінти
    };
});
console.table(updatePlayers);
console.log(updatePlayers);

// скорочений запис, неявний ретурн
const updatePlayers1 = players.map(player => ({
    ...player,  
    points: player.points * 1.1,  
}));
console.table(updatePlayers1);
console.log(updatePlayers1);


console.log("Збільшуємо кількість годин на 100 тільки player-3, по id")

const playerIdToUpdate = 'player-3';

const updatePlayers2 = players.map(player => {
    if (playerIdToUpdate === player.id) {    // якщо пошукове значення playerIdToUpdate співпадає з id ігрока, то...
    return {
        ...player,  // повертаємо новий масив зі старими значеннями, розпилюючи
        timePlayed: player.timePlayed + 100,   // в новому масиві знаходимо playerIdToUpdate і добавляємо йому в timePlayed + 100
    };
}
    
    return player;    // якщо умова if не виконується - повертаємо старий масив без змін
});
console.table(updatePlayers2);
console.log(updatePlayers2);
// Тернарник

const updatePlayers3 = players.map(player => {
    return playerIdToUpdate === player.id ?   { //  якщо рівні
        ...player,  
        timePlayed: player.timePlayed + 100,    // то поверни: 1) розпили оригінальний масив в новий, та заміни timePlayed+100
    }
        : player;    // якщо не рівні, то поверни оригінальний масив
});

console.table(updatePlayers3);
console.log(updatePlayers3);

// Ще коротший запис, неявне повернення
const updatePlayers4 = players.map(player => 
    playerIdToUpdate === player.id 
    ? { ...player, timePlayed: player.timePlayed + 100,}
    : player,  
);
console.table(updatePlayers4);
console.log(updatePlayers4);
console.log('-----Метод flatMap-----')

// Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

// масив.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });
// У масиві students зберігається список студентів зі списком предметів, які відвідує студент, у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

students.map(student => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив. Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений масив і є результатом роботи flatMap().

console.log('-----Метод filter-----')
// 1. Поелементно перебирає оригінальний масив
// 2. Повертає новий масив (з елементами чи пустий)
// 3. Добавляє в повернений масив елементи які задовольняють умови коллбек-функції
// 4. якщо колл-бек повернув true елемент добавляє в повернений масив
// 5. якщо колл-бек повернув false елемент НЕ добавляє в повернений масив

console.log('В фільтр можна задаввати безліч умов if, головне так, щоб вони відповідали true чи false. Якщо true - то результат поверне в новий масив')
console.log('В житті використовуються в виборі "холодильники" на сайті, типу розетки')

const numbersF = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => {
console.log(number);   // так, поверне пустий масив, так як не задано умови фільтрації

// return number < 15;  // так поверне 5 та 10 тому що у нас умова повернути цифри мені за 15
return number < 10 || number >20; // меньше 10 чи більше 20

});
console.log(filteredNumbers)
// Запис зі стрілками
const filteredNumbers2 = numbers.filter(number => number < 10 || number > 20); // меньше 10 чи більше 20);
console.log(filteredNumbers2)

const players2 = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];
console.log('Повернути всих гравців онлайн')
// 1)
const onlinePlayers = players.filter(player => {
    return player.online;
    });
    
    console.log(onlinePlayers);
// 2)
const onlinePlayers2 = players.filter(player => player.online)
     console.log(onlinePlayers);
//  3) можна використатит метод диструктаризації

console.log('Повернути всих гравців оффлайн')

const offlinePlayers = players.filter(player => !player.online)
console.log(offlinePlayers);

console.log('Повернути всих гравців з часом більше 250')

const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.log(hardcorePlayers);

console.log('-----Метод find-----')
console.log('Використовується для пошуку унікального елемента в колекції')
console.log('Використовується для пошуку по ідентифікатору чи імені клієнта')
// 1. Поелементно перебирає масив
// 2. Повертає перший елемент, що задовольняє умовучи, якщо ні - undefined

const numbers2 = [5, 10, 15, 20, 25];

const number = numbers2.find(number => number > 10);
console.log(number);

const players3 = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];
console.log('Повернути гравця по id')

const playerToFind = 'player-3';

const playerWithId = players3.find(player => playerToFind === player.id);

console.log(playerWithId);

// запис по деструктиризації
const playerWithId2 = players3.find(({id}) => id === playerToFind);

console.log(playerWithId2);

console.log('Повернути гравця по імені')
const playerNameToFind = 'Poly';

const playerWithName = players2.find(player => player.name === playerNameToFind);
console.log(playerWithName);

console.log('Повернути гравця по id. ЗАПИС В ФУНКЦІЇ')

const findPlayerById = (allPlayer, playerId) => {
return allPlayer.find(player => player.id === playerId);

};
console.log(findPlayerById(players, 'player-4'));
console.log(findPlayerById(players, 'player-1'));
console.log(findPlayerById(players, 'player-5'));

console.log('-----Метод every some-----')

console.log('-----Метод every -----')
console.log('Буквально шукає чи всі елементи задовольняють пошук! якщо всі - то повертає true, а якщо хоч один ні - false')
const players4 = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];

const playersOnLine = players4.every(player => player.online);
console.log(playersOnLine);

const playersTimeLine = players4.every(player => player.timePlayed > 10);
console.log(playersTimeLine);

console.log('-----Метод some -----')
console.log('Буквально шукає чи хоча б один елемент задовольняє пошук! якщо хоча б один - то повертає true, а якщо ні один - false')
console.log('Чи є гравці онлайн')
const isOnline = players4.some(player => player.online);
console.log(isOnline);

console.log('Чи є хардкордові гравці')
console.log('Типу в грі можна так підсвічувати гравців зеленим, щоб всі бачили, що вони хардкор')
const isHardPlayers = players4.some(player => player.timePlayed > 250);
console.log(isHardPlayers);


console.log('-----Метод reduce-----')
console.log('Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.')
// масив.reduce((перший аргумент - аккомулятор, другий аргумент (number у нашому випадку) - це елемент масиву (5, 10, 15 і тд)) => 
// аккомулятора - це значення, яке з попереднього значення функції буде передаватись в наступне. Потрфбно задавати початкове значення аккомулятора, якщо його не задати - то функція візьме перше значення в масиві.  
            //  початкове значення аккомулятора задают як друге значення reduce. масив.reduce((acc, number) => {}, початкове значення аккомулятора);
    

// Поелементно перебирає оригінальний масив
// Повертає все що завгодно
// Замінює все на світі
const numbersRed = [5, 10, 15, 20, 25];


console.log('Просумувати весь масив')

// повний запис
const total = numbersRed.reduce((acc, number) => {
    console.log('acc', acc);
    console.log('number', number);
    
    return acc + number;
}, 0);
console.log(total);

// короткий запис

const total1 = numbersRed.reduce((acc, number) => acc + number, 0);
console.log(total1);

console.log('Просумувати загальну ЗП')
// так як нам потрібно просумувати саме значення ключів в обєкті, то використовуємо Object.values(salary), а потім їх сумуємо

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((total, value) => {
    return total + value;
}, 0);
console.log(totalSalary);

const players5 = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];

console.log('Просумувати загальну кількість часів в обєктах масива')

const totalTimePlayed = players.reduce((totalTime, player) => {
    return totalTime + player.timePlayed;
}, 0);
console.log(totalTimePlayed);

// totalTime - це ми називаємо, що сумуємо
// player - це силка на кожен окремий масив в обєкті (id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false) або (id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: tru)
// Короткий запис
const totalTimePlayed1 = players.reduce(
    (totalTime, player) => totalTime + player.timePlayed,
    0,
);
console.log(totalTimePlayed1);

console.log('Загальна сума товарів в корзині')

const card = [
    {label: 'Apples', price: 100, quantity: 2},
    {label: 'Bananas', price: 120, quantity: 3},
    {label: 'Lemons', price: 70, quantity: 4},
];

const totalAmount = card.reduce(
    (totalSpend, item) => totalSpend + item.price * item.quantity,
    0,
);
console.log(totalAmount);
// дестрикторизуємо рішення
console.log('дестрикторизуємо рішення');
const totalAmount1 = card.reduce(
    (totalSpend, {price, quantity}) => totalSpend + price * quantity,
    0,
);
console.log(totalAmount1);

console.log('Зібрати всі теги з твітів')

const tweets = [
    {id: '000', likes: 5, tags: ['js', 'nodejs']},
    {id: '001', likes: 2, tags: ['html', 'css']},
    {id: '002', likes: 17, tags: ['html', 'js', 'nodejs']},
    {id: '003', likes: 8, tags: ['css', 'react']},
    {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];
const allTags = tweets.reduce((tags, tweet) => {
    tags.push(...tweet.tags);
    return tags;
}, []);                  // аккомулятором тут виступає пустий масив [], тому що потрібно нові елементи записати в масив
console.log(allTags);

console.log('Запис, щоб пропускали літератори коду. Літератори коду, коли змінюють пареметри функції')

const allTags1 = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], [] );                 
console.log(allTags1);

// 1. На кожну ітерацію створюємо масив []
// 2. Спочатку туди розпилюємо старий аккумулятор [...tags,]
// 3. І потім розпилити туди теги [...tags,...tweet.tags]

console.log('Ведемо статистику тегів')
// логіка рішення задачі
// 1. якщо свойство з ключем tag є, то збільшити його значення на 1
// 2. якщо свойство з ключем tag немає, то зробити і записати 1

const tagsStatus = allTags.reduce((acc, tag) => {
    // console.log(acc);
if (acc[tag]) {
    acc[tag] +=1;
    return acc;
};
acc[tag] = 1;
return acc;
}, {});
console.log(tagsStatus);

console.log('Переписуємо цей код немутабельно (щоб лінтери  не сварились). Тобто - на кожній ітерації потрібно створити новий обєкт аккумулятора')

const tagsStatus1 = allTags.reduce((acc, tag) => {
    // console.log(acc);
if (acc[tag]) {
    // acc[tag] +=1;
    // return acc;

    return {
        ...acc, 
        [tag]: acc[tag] +1,
    };
};
// acc[tag] = 1;
// return acc;
return {
    ...acc, 
    [tag]: 1,
    };

}, {});
console.log(tagsStatus1);

console.log('Переписуємо цей код тернарник')

const tagsStatus2 = allTags.reduce((acc, tag) => {
    // console.log(acc);
// if (acc[tag]) {
//     return {
//         ...acc, 
//         [tag]: acc[tag] +1,
//     };
// };
// return {
//     ...acc, 
//     [tag]: 1,
//     };

// }, {});

return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] +1 : 1,
};
}, {});
console.log(tagsStatus2);

console.log('Переписуємо цей код тернарник без return')

const tagsStatus3 = allTags.reduce(
    (acc, tag) => ({
            ...acc,
            [tag]: acc[tag] ? acc[tag] +1 : 1,
        }),
        {},
);
console.log(tagsStatus3);

console.log('-----Метод sort-----')

// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

// Сортує і змінює вихідний масив.
// Повертає змінений масив, тобто посилання на відсортований вихідний.
// За замовчуванням сортує за зростанням.
// Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
// Такий масив чисел буде відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// students.sort();
// console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ["A", "B", "C", "a", "b", "c"]
// Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Використаний метод sort()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log('метод sort. Для зазначення свого порядку сортування методу sort(compareFunction)')
// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами. Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод sort() буде викликати її для двох довільних елементів.

// масив.sort((a, b) => {
//   // Callback function body
// });
// a - перший елемент для порівняння.
// b - другий елемент для порівняння.
// Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів. Але взагалі неважливо, що повертати, якщо їх взаємний порядок не має значення.

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Використаний метод sort()

const releaseDates39 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates39 = [...releaseDates39].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates39].sort((a, b) => b - a);

console.log('метод sort. Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare()')

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

// firstString.localeCompare(secondString)
// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0
// Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
// Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
// Якщо рядки однакові, повертається нуль.
// Це зручно використовувати для сортування рядків, оскільки метод sort() очікує такі самі значення від колбек-функції.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод sort()

const authors40 = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors40].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors40].sort((a, b) => b.localeCompare(a));

console.log('метод sort. Під час роботи з масивом обєктів, сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив обєктів за зростанням і спаданням кількості балів, і за імям студента.')
// Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));;

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

console.log('----групування викликів методів у ланцюжки----')

// У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];
// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень властивості name з відсортованого масиву.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
// Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore - зайва і необхідна тільки для зберігання проміжного результату.

// Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
// Робимо копію вихідного масиву перед сортуванням.
// На копії викликаємо метод sort().
// До результату роботи методу sort() застосовуємо метод map().
// Змінній names присвоюється результат роботи методу map().
// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
// На результаті методу filter() викликаємо sort().
// Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
// Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій. По-перше, перебираючі методи використовуються для порівняно простих операцій над колекцією. По-друге, виклик кожного наступного методу - це додаткове перебирання масиву, що за великої кількості, може позначитися на продуктивності.

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter, map, sort

const books5 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books5.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
