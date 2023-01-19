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


console.log('---ПЕРЕБОР МАСИВІВ--- (L1 time code 1:02:39')