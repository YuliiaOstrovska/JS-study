console.log('1.4. ')
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  
  const result = makePizza('');
  const pointer = (makePizza);
  
  console.log('2.4. ')
//   Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

//   Оголошена функція deliverPizza
//   Оголошена функція makePizza
//   Оголошена функція makeMessage
//   Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
//   Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
//   Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  // Chande code below this line
  function makeMessage(pizzaName, callback) {
      return callback(pizzaName);
  }
  console.log('3.4. ')
//   Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

//   Оголошена функція makePizza
//   Функція makePizza приймає два параметри
//   Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName

  function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line
  
  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}.`);
  });
  
  
  
  console.log('4.4. ')
//   Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

  const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, makePizza, onOrderError) {
      if (this.pizzas.includes(pizzaName)) {
        return makePizza(pizzaName);
      };
    return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    }
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  
  // Method calls with callbacks
  console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
  pizzaPalace.order("Four meats", makePizza, onOrderError);
  console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
  console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

  console.log('5.4. метод forEach')
  // Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

  // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line
  
  orderedItems.forEach(function (number, index) {
     totalPrice += number;
    });
  
    // Change code above this line
    return totalPrice;
  };
  

  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log('6.4. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ')
  
  // Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

  // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
    
  numbers.forEach(function(number, index) {
    if(numbers[index] > value) {
      filteredNumbers.push(numbers[index]);
    };
  });
    
  
    // Change code above this line
    return filteredNumbers;
  };
  
  console.log(filterArray([1, 2, 3, 4, 5], 3));

console.log('7.4. СПІЛЬНІ ЕЛЕМЕНТИ')

// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// БУЛО
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }

  return commonElements;
  // Change code above this line
}

// СТАЛО
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(function(number, i) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  })

  return commonElements;
  // Change code above this line
}

console.log('8.4. СТРІЛОЧНІ ФУНКЦІЇ')
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// БУЛО
function calculateTotalPrice(quantity, pricePerItem) {
  // Change code above this line
  return quantity * pricePerItem;
}
// СТАЛО
const calculateTotalPrice2 = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
}
console.log('9.4. СТРІЛОЧНІ ФУНКЦІЇ. неявне повернення')
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
const calculateTotalPrice9 = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
// Change code above this line
// СТАЛО
// Change code below this line
const calculateTotalPrice10 = (quantity, pricePerItem) => quantity * pricePerItem;

// Change code above this line
console.log('10.4. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.')
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.


// Change code below this line
const calculateTotalPrice101 = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line

console.log('11.4. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0 Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.')
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
// було
// Change code below this line
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
// стало
// Change code below this line
const filterArray11 = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
console.log('12.4. СПІЛЬНІ ЕЛЕМЕНТИ 2.0. Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.')
//  було
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
// стало
// Change code below this line
const getCommonElements12 = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
console.log('13.4. Функція з побічними ефектами ')

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// було
function changeEven(numbers, value) {
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Change code above this line
}
// стало
function changeEven(numbers, value) {
  // Change code below this line
   newArray =[];

  
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else 
    newArray.push(number)
  })
  return newArray
  // Change code above this line
}
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

console.log('14.4. map(callback) ')
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);

console.log('15.4. map(callback) ')
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція
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

const titles = books.map(book => book.title);

console.log('16.4. flatMap ')
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебирання масиву books використовується метод flatMap()

const books1 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books1.flatMap(book => book.genres);

console.log('17.4. метод Map ')

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
const getUserNames = users => {
  const result = users.map(userName => {
  return userName.name;
});
  return result;

};

console.log('18.4. метод Map ')
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

const getUserEmails = users => {
  const result = users.map(userEmail => {
    return userEmail.email;
  });
    return result;

  };
  console.log('19.4. метод filter ')

  // Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

  // масив.filter((element, index, array) => {
  //   // Тіло колбек-функції
  // });
  // Не змінює оригінальний масив.
  // Поелементо перебирає оригінальний масив.
  // Повертає новий масив.
  // Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
  // Якщо колбек повернув true, елемент додається у масив, що повертається.
  // Якщо колбек повернув false, елемент не додається у масив, що повертається.
  // Якщо жоден елемент не задовольнив умову, повертає порожній масив.
  // const values = [51, -3, 27, 21, -68, 42, -37];
  
  // const positiveValues = values.filter(value => value >= 0);
  // console.log(positiveValues); // [51, 27, 21, 42]
  
  // const negativeValues = values.filter(value => value < 0);
  // console.log(negativeValues); // [-3, -68, -37]
  
  // const bigValues = values.filter(value => value > 1000);
  // console.log(bigValues); // []
  
  // // Оригінальний масив не змінився
  // console.log(values); // [51, -3, 27, 21, -68, 42, -37]
  // Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true, додає поточний елемент у новий масив.

  // Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

  // Оголошена змінна numbers
  // Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
  // Оголошена змінна evenNumbers
  // Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
  // Оголошена змінна oddNumbers
  // Значення змінної oddNumbers - це масив [17, 61, 47, 73]
  // Для перебирання масиву numbers використаний метод filter()

  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log('20.4. метод flatMap та filter. Пошук унікальних елементів')
// Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином, що у ньому залишаться тільки унікальні елементи. Цей прийом працює тільки з масивом примітивних значень - не об'єктів.

// Повернемося до групи студентів і масиву усіх відвідуваних предметів, які ми отримали методом flatMap().

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// У змінній allCourses зберігається масив усіх відвідуваних предметів, які можуть повторюватися. Завдання полягає у тому, щоб створити новий масив, в якому будуть тільки унікальні предмети, тобто без повторень.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного елемента course і отримуємо його індекс в оригінальному масиві усіх курсів. В параметрі index зберігається індекс поточного елемента course, перебираючи масив методом filter.

// Якщо результат indexOf() і значення index рівні - це унікальний елемент, тому що таке значення зустрічається в масиві вперше, і на поточній ітерації фільтр обробляє саме його.

// # Масив усіх курсів
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Для елемента "mathematics" під індексом 0:

// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 0.
// Вони рівні, а отже, це унікальний елемент.
// Для елемента "mathematics" під індексом 3:

// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 3.
// Вони не рівні, а отже, це повторюваний - не унікальний елемент.


// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()

const books20 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books20.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, allGenres) => allGenres.indexOf(genres)===index);

console.log('21.4. метод filter. ')
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()

const books21 = [
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

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books21.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books21.filter(book => book.author === AUTHOR);

console.log('22.4. метод filter з двома параметрами. ')

// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// Оголошена змінна getUsersWithEyeColor
// Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

const getUsersWithEyeColor = (users, color) => users.filter(users => users.eyeColor === color);

console.log('23.4. метод filter з трьома параметрами, що потрапляє у проміжок від minAge до maxAge. ')
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно, функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно, функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
const users =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
const getUsersWithAge = (users, minAge, maxAge) => 
  users.filter(user => user.age >= minAge && user.age <= maxAge);

  console.log('24.4. метод filter з трьома параметрами, що потрапляє у проміжок від minAge до maxAge. ')
