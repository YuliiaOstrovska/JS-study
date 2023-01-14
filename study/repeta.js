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
  
  
