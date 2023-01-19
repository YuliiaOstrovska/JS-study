console.log('1. Основи масивів')
// Пустий масив
const friends = ['mango', 'kiwi', 'poly'];
// визов масива в консоль
console.log(friends);
// виводить масив у вигляді таблиці: індекс - назва
console.table(friends);
// індекс останього елементу. Довжина -1
const lastIndex = friends.length - 1
console.log(lastIndex);
// звернення до елементу масива. назва масиву і в квадратні дужики вказати номер індексу
console.log(friends[2]);
// перезаписати елемент в масиві
friends[1] = 'orange';
friends[2] = 123
console.table(friends);

console.log('2. Примітиви та сложні типи') 
// 2.1. примітивний тип - це коли const вносимо значення. 
// Передача по значенню. Так копіюються прості зміні: числа, строки, NaN і потім вони ніяк не звязані.
let a = 10;
console.log(a);

// коли ми записуємо const b = a; - це ми копіюємо значення а. формується ячейка в пямяті і туди копіюється значення а
let b = a;
console.log(b);

// якщо ми перезапишемо значення а = 20. значення а змінить на 20, але b так і залишиться 10.
a = 20;
console.log(a);
console.log(b);
// при перевірці, в консоль виведеться значення буль - false.
console.log(a === b);


// 2.2. Передача по ссилці. Щоб при змінні значення в масиві змінювалось і всі інші змінні в подальшому.
// в перемінній с положили сложний тип, масив. Якщо ми створюємо сложний тип, то під неї виділяється окремо місце в памяті.
// після чого створюється змінна с в якій вказана ссилка на місце в памяті, де лежить масив.
// якщо ми const d = c; то це фактично копіювання ссилки, яка вказана в const c =. Копіює не значення, а саме ссилку яка лежить в змінній с 
// Так копіюємо сложний тип - масив.
const c = [1, 2, 3]
const d = c;
console.log(c);
console.log(d);
// якщо ми змінимо елемент в масиві, то ці змінні будуть видно в кожній змінні в якій є ссилка на масив
c[0] = 500;
d[1] = 100;
console.log(c);
console.log(d);
// щоб перевірити чи рівні значення. в консолі виведеться буль true. так як зрівнюються силки на один і тей самий масив.
console.log(c === d);

// якщо записати порівняння масивів так, то буль виведе false. Тому що порівнюються не значення в масивах, а саме ссилка (шлях) до масива
console.log([1,2,3] === [1,2,3]);


console.log('3. Перебори та і-терація масивів')
// console.log(fruits[i]); - це звернення до кожного і/індексу елементу в масиві
console.log('3.1 Якщо потрібно знайти індекс та змінити кожен елемент масиву - то потрібно використовувати цикл for')
const fruits = ['kiwi', 'orange', 'apple']
console.log(fruits);

for (let i = 0; i<=fruits.length -1; i += 1) {
    console.log(fruits[i]);
}
// можемо добавити щось до кожного значення
for (let i = 0; i <= fruits.length -1; i +=1) {
    fruits[i] += '-1';
}
console.table(fruits);

console.log('Задача:Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.')
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7
const start = 3;
const end = 7;

for (let i = start; i <= end; i +=1 ) { // Change this line
  console.log(i);
}

console.log('Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.')

//   Оголошена функція calculateTotal(number)
//   Виклик функції calculateTotal(1) повертає 1
//   Виклик функції calculateTotal(3) повертає 6
//   Виклик функції calculateTotal(7) повертає 28
//   Виклик функції calculateTotal(18) повертає 171
//   Виклик функції calculateTotal(24) повертає 300



  function calculateTotal(number) {
    
    let total = 0;
    const start = 0;
    const end = number;
   for (let i = start; i <= number; i+=1) {
    //  console.log(i);
     total += i;
   }
   return total;
   
   }
   console.log(calculateTotal(1));
   console.log(calculateTotal(3));
   console.log(calculateTotal(7));
   console.log(calculateTotal(18));
   console.log(calculateTotal(24));



console.log('3.2 Цикл for ... of перебирає масив. Якщо не потрібен індекс та нічого не потрібно добавляти, а лише перебрати та вивезти елементи масиву')
// for (const variable of iterable) {
  // тіло циклу
// }
// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
// iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив.
const pets = ['cat', 'dog', 'bird']
for (const pet of pets) {
    console.log(pet);

}
console.log('ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА')
// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

function findLongestWord(string) {
    
  let wordsString = string.split(' ');
    let longestWord = wordsString[0];
  
    for (const word of wordsString) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
      
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWord("Google do a roll"));
  



console.log('Метод масивів join(delimiter)');

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'

// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"
function makeStringFromArray(array, delimiter) {
    let string;
    // Change code below this line
  string = array.join(delimiter);
  
  
    // Change code above this line
    return string;
  }
  console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
  console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
  console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


console.log('Задача. Зробити slug - slugify("Arrays for begginers") повертає "arrays-for-begginers"');

// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

function slugify(title) {
    // Change code below this line
//   const normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(' ');
//   const slug = words.join('-');

  return title.toLowerCase().split(' ').join('-');
    
  
    // Change code above this line
  }
  console.log(slugify("Arrays for begginers"));
  console.log(slugify("English for developer"));

console.log('Метод масиву slice')
// Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

// Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
// Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
// Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// Задача.
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами


const fruit = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruit.slice(0, 2);
const nonExtremeEls = fruit.slice(1, 4);
const lastThreeEls = fruit.slice(-3);

console.log('Метод concat')
// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// Задача

// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line
console.log(allClients);


console.log('ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ');


// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

function makeArray(firstArray, secondArray, maxLength) {
    // 1. Робимо метод concat, щоб зєднати всі масиви
let newArray = firstArray.concat(secondArray);
// 2. задаємо провірку на maxLength
  if (newArray > maxLength) {
    newArray.slice(maxLength);
  }


  return newArray.slice(newArray, maxLength);
    // Change code above this line
  }
  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


  
  console.log('Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються')

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']


console.log('Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.')

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

function createArrayOfNumbers(min, max) {
    const numbers = [];
    // 1. перераховуємо всі цифри від min до max. і в тілі вписуємо, що перераховані елементи потрібно вставити в масив
  for (let i = min; i <= max; i += 1 ) {
  numbers.push(i)  
  }
    
    return numbers;
  }

//   Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push
  
  
console.log('ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ');
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

function filterArray(numbers, value) {
  
 let newArray =[];
for (let number of numbers) {
 if (number > value) {
   newArray.push(number);
 }
}
return newArray
}
console.log('Метод includes(value)')
// Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно. Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція (індекс).

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

const plane = ["Earth", "Mars", "Venus"];

console.log(plane.includes("Earth")); // true
console.log(plane.includes("Mars")); // true
console.log(plane.includes("Venus")); // true
console.log(plane.includes("Jupiter")); // false

// console.log('Задача на пошук логіна. includs та тернарник')
// // знайти логін
// const logins = ['m4ngoDoge', 'k1widab3st', 'avocod3r'];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind) ? 'Пользователь ${loginToFind} найден.' : 'Пользователь ${loginToFind} не найден.'
// }
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));







console.log("Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.")
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));

console.log('Задача: знайти спільні цифри в двох масивах.В циклі for використовувалися методи includes і push')
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push
function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];
  for (let number of array1) {
    if (array2.includes(number)) {
      newArray.push(number);
    }
  }

  return newArray


 // Change code above this line
}

console.log('Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).')

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив
function getEvenNumbers(start, end) {
  // Change code below this line
let newArray = [];
 for (let i = start; i <= end; i += 1){
   if (i % 2 === 0){
     newArray.push(i);
   }
 }
 return newArray;
 }
 console.log('Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break,') 
//  який повністю припиняє виконання циклу і передає управління на рядок за його тілом.

//  У прикладі шукаємо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний)
//  for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

console.lof('Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.')

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes
function includes(array, value) {
  // Change code below this line
for (let numbers of array) {
  if ( numbers === value) {
    return true;
  }
}
  return false;
  // Change code above this line
}