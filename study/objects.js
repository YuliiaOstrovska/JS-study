// Обєкти - це словник. це можливість описати/охарактеризувати, згрупувати характеристики якоїсь однієї сущності (користувач, квартира, корзина товарів)

const playlist = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};
console.log(playlist);

// name, rating, tracks,trackCount - це ключі до характеристик обєкта.
 console.log('I.де ми можемо бачили літерал обєкта')
//  1. в операції прислоєння:
// const x = {}
// 2. при передачі функції:
// console.log({})
// 3. коли щось повертаємо з функції
// const rtfm = function (){
//     return {}
// }

console.log('II. Доступ до характеристок обєкта')
// a. через імя характеристики:
console.log(playlist.name);
console.log(playlist.tracks);
console.log(playlist.trackCount);
// b. через імя свойства як строка
console.log(playlist['name']);
// якщо в зміну обекта буде занесено нове свойство, не в записі обєкта, а щосб добавлене далі по коду:
const propertyName = 'tracks';
console.log(playlist[propertyName]);
// якщо в такому випадку ми напишемо: console.log(playlist.propertyName)  - він піде шукати свойство propertyName в обєкті playlist (3-я строка), а там такого немає

console.log('III. Короткий запис свойст. Коли потібно створити обєкт, ключі якого динамічні. Наприклад тег input, у нього є 2 атрибута name (для звязки форми) та value (значення, яке ввів користувач) Після відправки форми нам приходить значення, наприклад username та email і потрібно створити обєкт')
// значення, що приходять з форми:
const username = 'Mango';
const email = 'mango@gmail.com'; 
// потрібно створити такий обєкт:
// const signupData = {
//     username: userName,
//     email: email,

// }
// console.log(signupData);
// то ми можемо записати ключі та свойства в обєкті:
const signupData = {
    username,
    email,
}
console.log(signupData);
console.log('IV. Обчислювані властивості ')
// Написклад з форми прийшло значення <input name='color' value='tomato'
const inputName = 'color';
const inputValue = 'tonato';
// Задача: створити обєкт такого типу: імя ключа повино лежати в inputName (color), а свойство в inputValue (tonato). Фактично потрібно отримати запис такого обєкту:
// const colorPickerdata = {
//     color: 'tomato'
// }

// зміну, яка повина бути ключем вносимо в квадратні дужки []
const colorPickerdata = {
    [inputName]: inputValue,
}
console.log(colorPickerdata);
console.log('V. Добавлення елементів у вже створені обєкти ')

playlist.qwe = 5;
console.log(playlist);
// Якщо такого свойства ще немає - то воно буде створено, а якщо є - то перезаписане з новим значенням
playlist.rating = 10;
console.log(playlist);
console.log('VI. Сложні обєкти ')
// console.log([] === []) - зрівнюються силки на ячейку в памяті, де лежать обєкти, а не самі обєкти
const a = {x: 1, y: 2};
const b = a;
console.log({a: 1} === {a: 1});
console.log(a === b);

a.c = 100;
console.log(a);
console.log(b);
console.log('---МЕТОДИ МАСИВІВ---')

const playlistt = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};
console.log(playlistt);

// Ми можемо в обєкт добавити методи обєктів - використовуються для роботи зі свойствами. Тобто, обєкт зберігає в собі набір свойст та методів, які працюють з цими свойствами
const playlisttt = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
    // getName: function () {             - це старий запис метода. так не використовувати
    //     console.log('це функція');
    // },
    getName() {
        console.log('це функція'); 
    }, 
    // це новий запис і називажться - метод обєкта
};
// console.log(playlisttt);
playlisttt.getName();
// Методи обєктів записуються в тілі обєкта. вони працюють лише зі свойствами тільки цього обєкта, а не з якимись іншими

console.log('Метод зміни імені')
// В методі обєктів НІКОЛИ не використовувати імя самого обєкту, в нашому випадку playlisttt. Використовуємо ключове слово this
const playlistttt = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
        getName() {
        console.log('це функція'); 
    }, 
    changeName(newName) {
        this.name = newName;

    }
   
};

playlistttt.changeName('Нове імя');
console.log(playlistttt);
console.log('Добавляємо новий трек')
const playlistttts = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
        getName() {
        console.log('це функція'); 
    }, 
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
    },
   
};

playlistttts.addTrack('Новий трек');
console.log(playlistttts);
console.log('Оновлюємо рейтинг')
const playlisttttss = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
        getName() {
        console.log('це функція'); 
    }, 
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
    },
    updaterating(newRating) {
        this.rating = newRating;
    },
   
};

playlisttttss.updaterating(55);
console.log(playlisttttss);

console.log('Оновлюємо кількість треків, коли добавляємо нові')
// це рішення підходить, коли кількість треків потрібно хранити в обєкті
const playlisttttsst = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
        getName() {
        console.log('це функція'); 
    }, 
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
        this.trackCount = this.tracks.length;
    },
    updaterating(newRating) {
        this.rating = newRating;
    },
   
};
playlisttttsst.addTrack('трек5');
console.log(playlisttttsst);
// Як правило, ключ та свойство "кількість" не зберігають в обєктах. Кількість вираховують за межами обєктів. Кількість завжди є як довжина масиву. Тому ключ trackCount можемо видалити з обєкту і використавувати метод обєкту 
const playlisttttssts = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    getName() {
        console.log('це функція'); 
    }, 
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
        
    },
    updaterating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    }
   
};
playlisttttssts.addTrack('трек4');
console.log(playlisttttssts.getTrackCount());

playlisttttssts.addTrack('трек5');
console.log(playlisttttssts.getTrackCount());


console.log('---ПЕРЕБОР МАСИВІВ--- ')
// для перебора не використовувати for...in.
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}
let totalFeedback = 0;
let totalNumbers = 0;
// щоб достукатись до ключів обєкта є спеціальна конструкція Object.keys()

const keys = Object.keys(feedback);
console.log(keys);
// Після того як ми достукались до ключів, ми можемо їх перебрати:
for (const key of keys) {
    console.log(key);
    // щоб достукатись до властивостей ключа використовуємо квадратні дужки []
    console.log(feedback[key]);
    // порахуємо загальну кількість feedbacks. Для цього попередньо створюємо змінну let totalFeedback = 0;
    totalFeedback += (feedback[key]);
}
console.log(totalFeedback);

// Часто ключі нам не потрібні, а потрібні саме значення влючів. для цього використовуємо конструкцію: Object.values
const values = Object.values(feedback);
console.log(values);
// якщо задача сплюсувати всі значення, використовуємо просто Object.values, потім перебираємо for...of і далі плюсуємо
for (const value of values) {
    console.log(value);
    totalNumbers += value;
       
}
console.log(totalNumbers);

// є ще Object.entries - но він дуже рідко використовується. Це коли масив масива отримувати і ключі і значення.
// практично все в бекенді - це масив обєктів
console.log('---МАСИВ ОБЄКТІВ--- ')

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];
friends[1].newprop = 666;
console.table(friends);
// перебираємо масиви обєктів
for (const friend of friends) {
    console.log(friend);
    console.log(friend.name);
    console.log(friend.online);
    friend.newprop = 555;
    
}

console.table(friends);
// Обєкт - є сложним мавсивом. for...of ми достукались до кожного масива окремо. і ми можемо сам масив змінити (friend.newprop = 555;). Тобто, щоб добавити щось в кожен масив ми можемо використовувати for..of хоча він не дозволяє змінювати масиви прості.
// Якщо ми хочемо добавити нове значення лише одному масиву, то використовуємо індекс масиву - (friends[1].newprop = 555;) - використовуємо не одного друга, а саме масив друзів та індекс конкретного, який нам потрібен.

// Також ми можемо достукатись і до властивостей масивів, використовуючи конструкцію console.log(friend.name) console.log(friend.online)

console.log('ЗАДАЧА: Знайти друга по імені')
// Є функція і потрібно повернути значення true якщо знайшли і false якщо не знайшли. includes не підходить, тому що цей метод шукає значення в примітивах, а не масивах. 
// він буквально зрівнює { name: 'Mango', online: false } === 'Poly' - тому завжди буде false. він не шукає в глибину масива
const findFriendByName = function (allFriends, name) {
    for (const friend of allFriends) {
        // console.log(friend.name);
        if (friend.name === name) {
            return 'Знайшли!';
        }
    }
    return 'Не знайшли!';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));
// 1. перебираємо масив по ключу .name (console.log(friend.name) і добавляємо правило по якому шукаємо саме за ключом .name). 
console.log('ЗАДАЧА:Зі всього масиву друзів отримати всі імена друзів')
// 1. перебираємо for...of

const getAllNames = function (alllFriends){
    const names = [];
    for (const friend of alllFriends) {
        // console.log(friend.name);
        names.push(friend.name);
    
         
}
return names;

}
console.log(getAllNames(friends));
// Objects.value не можна, тому що вона і значення online добавить. Коли у нас є один обєкт   зі значеннями - тоді Objects.value
console.log('ЗАДАЧА: Отримати всих друзів, які онлайн. Не лише імяне, а весь масив')

const getOnlineFriends = function (allllFriends){
    const onlineFriends = [];
    for (const friend of allllFriends) {
        // console.log(friend);
        console.log(friend.online);
        if (friend.online) {
            onlineFriends.push(friend);
        };
      
};
return onlineFriends;

}
console.log(getOnlineFriends(friends));
console.log('ЗАДАЧА: Отримати всих друзів, які OFонлайн. Не лише імяне, а весь масив')
const getOfflineFriends = function (alllllFriends) {
    const offlineFriends = [];
    for (const friend of alllllFriends) {
        // console.log(friend);
        console.log(friend.online);
        if (!friend.online) {
            offlineFriends.push(friend);
        };
      
};
return offlineFriends;

}
console.log(getOfflineFriends(friends));
// Як вивести в одній функції друзів online  та offline не логічно, можна, але не логічно. Всі задачі писати для однакової функції = одна задача.
// Але можливо
const getFriendsByStatusLong = function (allSFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

for (const friend of allSFriends) {
    if (friend.online) {
        friendsByStatus.online.push(friend);
    } else {
        friendsByStatus.offline.push(friend);
    };
    
};
return friendsByStatus;
};

console.log(getFriendsByStatusLong(friends));

// Скорочений варіант коду
const getFriendsByStatusShort = function (allSFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

for (const friend of allSFriends) {
    if (friend.online) {
        friendsByStatus.online.push(friend);
        continue;
    };
    friendsByStatus.offline.push(friend);
};
return friendsByStatus;
};

console.log(getFriendsByStatusShort(friends));
console.log('ЗАДАЧА: Порахувати кількість значень')
 const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
 }
 console.log(Object.keys(x).length);

console.log('........MODUL3 LESSON 2......')
console.log('1. Розподіл колекції елементів spread (аналог concat. повний шлях до методу (array.prototype.concat() )) ')
// метод конкантинації - це два та більше масива зшити разом.
// const numbers = [1,2,3].concat([4,5,6], [7,8,9])
// console.log(numbers);

// Операція spread бере одну колекцію і розбиває її на окремі елементи. сучачний синтаксис
const numbers = [...[1,2,3]];
console.log(numbers);

// "...." перед масивом - це операція розпилення обєктів
const numberss = [0,5,10,...[1,2,3],50,60,80];
console.log(numberss);
// елементи, масиви та обєкти можна вставляти в любі місця де потрібно
const numbersss = [...[100,2000,300], 0,5,10,...[1,2,3],50,60,80,...[55,66,77]];
console.log(numbersss);
// якщо лежать прості елементи - то робить копію, а якщо сложні елементи - то вставляє силку на них

console.log('Знайти саме маленьке або велике число')
// саме велике число
console.log(Math.max(1,4,90,7));
// саме мале число
console.log(Math.min(1,4,90,7));
// якщо зробити так, то нічого не вийде. Тому що метод Math.min очікує незалежні елементи, а тут масив
const temps = [18,14,12,21,17,29,24];
console.log(Math.min(temps));
// якщо зробити так. то "..." розібє масив на окремі елементи і вже функція Math.min знайде з цих елементів найменьше число
console.log(Math.min(...temps));
// це копіювання по елементам. по значенням
const e = [1,2,3];
const y = [... e];
console.log(e);
console.log(y);

// це копіювання сложних типів по силці
const r = [{w: 1}, {f: 2}, {s: 3}];
const t = [...r];

console.log(r);
console.log(t);
// тобто, при копіювані силки, аргументи стають під індекс 0. при такому зрівнянні результат буде true. тому що в обєкт t копіюється силка на обєкт r
console.log(r[0] === t[0]);
// так false
console.log(r === t);
//  при заміні одного значення елементу x - зміни відображаються в обох масивах
r[0].x = 1000;
console.log(r);
console.log(t);

console.log('ЗАДАЧА: зшити декілька масивів')
const lastWeekTemps = [1,2,3];
const currentWeekTemps = [4,5,6];
const nextWeekTemps = [7,8,9];

// 1. за допомогою spread
const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
console.log(allTemps);
// 2. 1. за допомогою concat
const allTempsCon = lastWeekTemps.concat(currentWeekTemps, nextWeekTemps);
console.log(allTempsCon);

// Краще звикати до spread, concat не юзати

console.log('1.1. РОЗПИЛЕННЯ ОБЄКТІВ')
console.log('Object.prototy.assign() i spread')

// Розпилення Object.prototy.assign() 
const aa = { x: 1, y: 2};
const bb = { x: 0, z: 3};

const cc = Object.assign(aa, bb);
console.log(cc);

// x: цей ключ є в обох обєктах, тому при розпилені, властивість в ключ х запишеться з останього обєкта, що розпиляється. В нашому випадку з обєкта bb
// записи, передачі в Object.assign можуть бути різні
// а) const cc = Object.assign({x:5 }aa, bb); - можуть бути оригінальні ключі та властивості обєкта сс
// б) const cc = {};
// Object.assign(cc, aa,bb);
// console.log(cc) - типу значення сс - вивести окремо в змінну
console.log('Розпилення обєкта з різними типами даних')
const aaa = { x: 1, y: 2, g:{hello: 'world'}};
const bbb = { x: 0, z: 3};

const ccc = Object.assign(aaa, bbb);
console.log(ccc);

console.log('Розпилення строки')
console.log(...'qwe');

// розпилення обєкта за допомогою spread
const aaaa = { x: 1, y: 2,};
const bbbb = { x: 0, z: 3};

const cccc = {...aaaa, ...bbbb};
console.log(cccc);
// якщо в обєкті, в який потрібно розпилити свойста інших обєктів, вжє є свої свойста, то запис такий

const ccсct = {...aaaa, names: 'Mango', ...bbbb};
console.log(ccсct);

console.log('usercase по росподіленю')
// зміна настойок пользователя
// настройки браузера
const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
};
const userSettings = {
    showNotifications: false,
    hideSidebar: true,
};
const finaleSettings = {
    ...defaultSettings, 
    ...userSettings,
};
console.log(finaleSettings);


// в finaleSettings запушуться
// theme: 'light', - це базова настройка, яка не була змінена
// showNotifications: false, - ця базова настройка, яка була змінена і тобу в фінальній версії показана зміна
// hideSidebar: true,- ця базова настройка, яка була змінена і тобу в фінальній версії показана зміна

console.log('2. ДЕСТРУКТИРИЗАЦІЯ ОБЄКТА. буквально: розпаковки чи розархівування обєктів')

const playylist = {
    name: 'Мій плейлист',
    rating: 5,
    tracks: ['track-1','track-2','track-3',],
    trackCount: 3,
}
// якщо ми захочено звернутись до кожного свойства обєкта, то код буде не дуже гарний, важкий
// console.log(playylist.name,playylist.rating,playylist.tracks,playylist.trackCount);

// в такому записі ми 4 рази повторюємо playylist.
// const { } = playylist - пузаті скобки зліва від = -  це не літерал обєкта, є операція деструктиризація! в скобки запусуються зміні обєкта в локальну зміну. 
// деструктиризація масива записується в квадратні скобки зліва від = - const []= [1,2,3]
const { rating,tracks,name,trackCount } = playylist;
console.log(rating,tracks,name,trackCount)

// timecode 39:00




 





















 console.log('ЗАДАЧА: Корзина товарів. методи: getItems, add, remove, clear, countTotalPrice, increaseQuantity, decreaseQuantity')

 const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},

 };


 cart.add({ name: 'apple', price: 50 });
 cart.add({ name: 'lime', price: 60 });
 cart.add({ name: 'lime', price: 60 });
 cart.add({ name: 'strawberry', price: 110 });
