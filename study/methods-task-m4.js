console.log('Метод forEach')
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

console.log('Метод map')
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
