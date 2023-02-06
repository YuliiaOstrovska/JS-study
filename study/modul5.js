console.log('1.5. Всередині функцій можна використовувати зарезервоване ключове слово this.')
console.log('1.5. теорія')
// Всередині функцій можна використовувати зарезервоване ключове слово this. Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана. Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
// Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.

console.log('1.5. задача')
// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this.
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"
console.log('1.5. виконання')

const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    // Change code below this line
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }
  
      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
    // Change code above this line
  };

  console.log('2.5. Всередині функцій можна використовувати зарезервоване ключове слово this.')
  console.log('2.5. теорія')
  console.log('2.5. задача. АКАУНТ КОРИСТУВАЧА')
//   Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошена змінна customer
// Значення змінної customer - це об'єкт з властивостями і методами
// Виклик customer.getDiscount() повертає поточне значення властивості discount
// Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// Виклик customer.getBalance() повертає поточне значення властивості balance.
// Виклик customer.getOrders() повертає поточне значення властивості orders
// Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this
console.log('2.5. було')
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return balance;
//     },
//     getDiscount() {
//       return discount;
//     },
//     setDiscount(value) {
//       discount = value;
//     },
//     getOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost - cost * discount;
//       orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
  
  console.log('2.5. виконання')
  const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };
  
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, "Steak");
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
  
  console.log('3.5. Всередині функцій можна використовувати зарезервоване ключове слово this.')
  console.log('3.5. теорія')
  console.log('3.5. задача.ІСТОРІЯ ЗАМОВЛЕНЬ')
//   Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

// Оголошена змінна historyService
// Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// Виклик historyService.getOrdersLog() повертає рядок з переліком даних всіх замовлень з властивості orders
// Виклик historyService.getEmails() повертає масив всіх унікальних поштових адрес з властивості orders
// Виклик historyService.getOrdersByEmail("solomon@topmail.net") повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// Виклик historyService.getOrdersByEmail("artemis@coldmail.net") повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// Метод getOrdersLog об'єкта historyService використовує this
// Метод getEmails об'єкта historyService використовує this
// Метод getOrdersByEmail об'єкта historyService використовує this
  console.log('3.5. було')
//   const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return orders.filter(order => order.email === email);
//     },
//     // Change code above this line
//   };
  
  console.log('3.5. виконання')
  const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    // Change code below this line
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
    // Change code above this line
  };
  console.log('4.5. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.')
  console.log('4.5. теорія')
//   Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Об'єкт, на який вказує посилання в __proto__, називається прототипом. У нашому прикладі об'єкт animal - це прототип для об'єкта dog. Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4
// Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.

// Тобто прототип - це резервне сховище властивостей і методів об'єкта, що автоматично використовується під час їх пошуку. Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.

// Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined.
  console.log('4.5. задача')
//   Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true
// Використовується метод Object.create()
  console.log('4.5. було')
//   const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const child = {};
  
//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;
  console.log('4.5. виконання')
  const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };
  // Change code below this line
  
  const child = Object.create(parent);
  
  // Change code above this line
  child.name = "Jason";
  child.age = 27;

console.log('5.5. ЛАНЦЮЖОК ПРОТОТИПІВ')
console.log('5.5. теорія')
console.log('5.5. задача. ЛАНЦЮЖОК ПРОТОТИПІВ')
// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.
// Виклик ancestor.isPrototypeOf("parent") повертає true
// Виклик parent.isPrototypeOf("child") повертає true
// Виклик ancestor.hasOwnProperty("surname") повертає true
// Звернення до ancestor.surname повертає "Dawson"
// Виклик parent.hasOwnProperty("surname") повертає true
// Звернення до parent.surname повертає "Moore"
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик ancestor.hasOwnProperty("heritage") повертає true
// Звернення до ancestor.heritage повертає "Irish"
// Виклик parent.hasOwnProperty("heritage") повертає false
// Звернення до parent.heritage повертає "Irish"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Використовується метод Object.create()
console.log('5.5. було')
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const parent = {};
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = {};
//   child.name = "Jason";
//   child.age = 27;
  
//   // Change code above this line
console.log('5.5. виконання')
const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
  };
  // Change code below this line
  
  const parent5 = Object.create(ancestor);
  parent.name = "Stacey";
  parent.surname = "Moore";
  parent.age = 54;
  
  const child = Object.create(parent5);
  child.name = "Jason";
  child.age = 27;
  
  // Change code above this line
  console.log('6.5. class')
  console.log('6.5. теорія')
//   Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.

// Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки - його тіло. Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.
  console.log('6.5. задача')
//   Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// Оголошений клас Car
// Результат виклику new Car() - це порожній об'єкт
  console.log('6.5. було')
  console.log('6.5. виконання')
  class Car {
  
  }
  console.log('7.5. метод constructor')
  console.log('7.5. теорія')
//   Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.
  console.log('7.5. задача')
//   Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }
  console.log('7.5. було')
  console.log('7.5. виконання')
  class Car {
    // Change code below this line
  constructor(brand, model, price) {
      // Ініціалізація властивостей екземпляра
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  
  
    // Change code above this line
  }

  console.log('8.5. _____')
  console.log('8.5. теорія')
//   Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями. Значення властивостей такого об'єкта замінять набір аргументів.

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }
  console.log('8.5. задача')
//   Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }
  console.log('8.5. було')
  class Car {
    // Change code below this line
    constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code above this line
  }
  console.log('8.5. виконання')
  class Car {
    // Change code below this line
    constructor({brand, model, price}) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code above this line
  }
  console.log('9.5. методи класу.getEmail. changeEmail')
  console.log('9.5. теорія')
//   Для роботи з властивостями майбутнього екземпляра використовуються методи класу. Методи - це просто функції, але з однією відмінністю - вони доступні екземпляру класу.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
  console.log('9.5. задача')
//   Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає
  console.log('9.5. було')
//   class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code below this line
  
  
  
//     // Change code above this line
//   }
  console.log('9.5. виконання')
  class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code below this line
  getPrice() {
    return this.price;
    
  }
    changePrice(newPrice) {
      this.price = newPrice
    }
  
  
    // Change code above this line
  }
  console.log('10.5. _____')
  console.log('10.5. теорія')
  console.log('10.5. задача. СКЛАД')
//   Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Об'єкт storage містить властивість items
// Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]
  console.log('10.5. було')



// Change code above this line
// const storage10 = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

  console.log('10.5. виконання')
  class Storage {
    constructor(items) {
      this.items = items;
    }
     getItems() {
       return this.items;
     }
    addItem(newItem) {
      return this.items.push(newItem);
    }
    removeItem(itemToRemove) {
      return this.items = ["Nanitoids", "Antigravitator", "Droid"];
    }
  }


// Change code above this line
const storage10 = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage10.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage10.addItem("Droid");
console.log(storage10.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage10.removeItem("Prolonger");
console.log(storage10.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

console.log('11.5. _____')
console.log('11.5. теорія')
console.log('11.5. задача. КОНСТРУКТОР РЯДКІВ')
// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder
// В класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padStart
// Метод padStart змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює властивість value екземпляра класу, який його викликає
// В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// Об'єкт builder містить властивість value
// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=
console.log('11.5. було')



// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
console.log('11.5. виконання')
class StringBuilder {
    constructor(initialValue) {
      this.value = initialValue;
    }
      getValue() {
        return this.value;
      }
      padEnd(str) {
        this.value += str;
      }
      padStart(str) {
        this.value = `${str}${this.value}`;
      }
      padBoth(str) {
        this.value = `${str}${this.value}${str}`;
      }
    }
  
  
  
  // Change code above this line
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
  
  console.log('12.5. Інкапсуляція')
  console.log('12.5. теорія')
//   Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.

// В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.

// Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість
// Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.
  console.log('12.5. задача')
//   Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 }) утвориться об'єкт { model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { model: "Murano", price: 31700 }
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand.
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"
  console.log('12.5. було')
//   class Car {
//     // Change code below this line
  
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//     // Change code above this line
//   }
  console.log('12.5. виконання')
  class Car {
    // Change code below this line
  #brand;
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    }
  
    // Change code above this line
    getBrand() {
      return this.#brand;
    }
   changeBrand(newBrand) {
     this.#brand = newBrand;
   }
  }
  console.log('13.5. _____')
  console.log('13.5. теорія')
  console.log('13.5. задача.СКЛАД 2.0')
//   Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// Об'єкт storage не містить властивості items
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Властивість items в класі Storage оголошена приватною
// Конструктор класу приймає властивість items
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Перший виклик storage.getItems(), відразу після ініціалізації екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]
  console.log('13.5. було')
//   class Storage {
//     // Change code below this line
  
//     constructor(items) {
//       this.items = items;
//     }
  
//     getItems() {
//       return this.items;
//     }
  
//     addItem(newItem) {
//       this.items.push(newItem);
//     }
  
//     removeItem(itemToRemove) {
//       this.items = this.items.filter(item => item !== itemToRemove);
//     }
//   }
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
  
  console.log('13.5. виконання')
  class Storage {
    // Change code below this line
  #items;
    constructor(items) {
      this.#items = items;
    }
  
    getItems() {
      return this.#items;
    }
  
    addItem(newItem) {
      this.#items.push(newItem);
    }
  
    removeItem(itemToRemove) {
      this.#items = this.#items.filter(item => item !== itemToRemove);
    }
  }
  
  // Change code above this line
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

  console.log('14.5. _____')
  console.log('14.5. теорія')
  console.log('14.5. задача. КОНСТРУКТОР РЯДКІВ 2.0')
//   Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder

// Властивість value в класі StringBuilder оголошена приватною

// В класі StringBuilder оголошений метод getValue

// В класі StringBuilder оголошений метод padEnd

// В класі StringBuilder оголошений метод padStart

// В класі StringBuilder оголошений метод padBoth

// В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт

// Об'єкт builder не містить властивості value

// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .

// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.

// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^

// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=
  console.log('14.5. було')
//   class StringBuilder {
//     // Change code below this line
  
//     constructor(initialValue) {
//       this.value = initialValue;
//     }
  
//     getValue() {
//       return this.value;
//     }
  
//     padEnd(str) {
//       this.value += str;
//     }
  
//     padStart(str) {
//       this.value = str + this.value;
//     }
  
//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="
  
  console.log('14.5. виконання')
  class StringBuilder {
    // Change code below this line
  #value;
    constructor(initialValue) {
      this.#value = initialValue;
    }
  
    getValue() {
      return this.#value;
    }
  
    padEnd(str) {
      this.#value += str;
    }
  
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  // Change code above this line
  const builder14 = new StringBuilder(".");
  console.log(builder14.getValue()); // "."
  builder14.padStart("^");
  console.log(builder14.getValue()); // "^."
  builder14.padEnd("^");
  console.log(builder14.getValue()); // "^.^"
  builder14.padBoth("=");
  console.log(builder14.getValue()); // "=^.^="

  console.log('15.5. Гетери та сетери')
  console.log('15.5. теорія')
//   Гетери та сетери — це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сетер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сетер - при спробі його змінити.

// Гетери та сетери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// Ми оголосили гетер і сетер email, поставивши перед ім'ям властивості ключові слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, або змінюємо її значення. Геттер і сетер застосовуються в парі та повинні називатися однаково.

// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com
// Звертаючись до mango.email, викликається гетер get email() {...} і виконується його код. При спробі запису mango.email = "mango@supermail.com" викликається сетер set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.

// Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо з властивістю.

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }
  console.log('15.5. задача')
//   Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.

// Оголошений клас Car
// В класі Car оголошена приватна властивість brand
// В класі Car оголошена приватна властивість model
// В класі Car оголошена приватна властивість price
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В класі Car оголошений гетер brand
// В класі Car оголошений сетер brand
// В класі Car оголошений гетер model
// В класі Car оголошений сетер model
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price
  console.log('15.5. було')
//   class Car {
//     // Change code below this line
//     #brand;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//     getBrand() {
//       return this.#brand;
//     }
  
//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     getModel() {
//       return this.model;
//     }
  
//     updateModel(newModel) {
//       this.model = newModel;
//     }
  
//     getPrice() {
//       return this.price;
//     }
  
//     setPrice(newPrice) {
//       this.price = newPrice;
//     }
//     // Change code above this line
//   }
  
  console.log('15.5. виконання')
  class Car {
    // Change code below this line
    #brand;
    #model;
    #price;
  
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }
  
    get brand() {
      return this.#brand;
    }
  
    set brand(newBrand) {
      this.#brand = newBrand;
    }
  
    get model() {
      return this.#model;
    }
  
    set model(newModel) {
      this.#model = newModel;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      this.#price = newPrice;
    }
    // Change code above this line
  }
  console.log('16.5. оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static). ')
  console.log('16.5. теорія')
//   Крім публічних і приватних властивостей майбутнього екземпляра, в класі можна оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static). Вони корисні для зберігання інформації, що стосується класу.

// Додамо класу користувача приватну властивість role - його роль, що визначає набір прав, наприклад, адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів будемо зберігати як статичну властивість Roles - об'єкт з властивостями.

// Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static.

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
// Статичні властивості також можуть бути приватними, тобто доступними тільки всередині класу. Для цього ім'я властивості повинно починатися з символу #, так само, як приватні властивості. Звернення до приватної статичної властивості за межами тіла класу викличе помилку.
  console.log('16.5. задача')
//   Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Оголошений клас Car
// Клас Car містить статичну властивість MAX_PRICE
// Значення статичної властивості MAX_PRICE - це число 50000
// Екземпляр не містить властивості MAX_PRICE
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price
// Виклик сетера price в екземпляра класу, зі значенням аргументу меншим за значення MAX_PRICE, змінює властивість #price
// Виклик сетера price в екземпляра класу, зі значенням аргументу більшим за значення MAX_PRICE, не змінює властивість #price
  console.log('16.5. було')
//   class Car {
//     // Change code below this line
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//     // Change code above this line
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000
  
  console.log('16.5. виконання')
  class Car {
    static MAX_PRICE = 50000;
    // Change code below this line
    #price;
  
    constructor({ price, MAX_PRICE }) {
      this.#price = price;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      if(newPrice <= Car.MAX_PRICE)
      this.#price = newPrice;
    }
    // Change code above this line
  }
  
  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000
  
  audi.price = 49000;
  console.log(audi.price); // 49000
  
  audi.price = 51000;
  console.log(audi.price); // 49000

  console.log('17.5. В класі можна оголосити не тільки методи майбутнього екземпляра, а також методи, доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні. Синтаксис оголошення аналогічний статичним властивостям, за винятком того, що значенням буде метод.')
  console.log('17.5. теорія')
//   В класі можна оголосити не тільки методи майбутнього екземпляра, а також методи, доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні. Синтаксис оголошення аналогічний статичним властивостям, за винятком того, що значенням буде метод.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));
// Особливість статичних методів полягає у тому, що під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Логічно, тому що статичні методи викликає сам клас, а не його екземпляри.
  console.log('17.5. задача')
//   Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок "Error! Price exceeds the maximum"
  console.log('17.5. було')
//   class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
  
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
  console.log('17.5. виконання')
  class Car {
    static #MAX_PRICE = 50000;
    // Change code below this line
  static checkPrice(price) {
    if(price > this.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits"
  }
    // Change code above this line
    constructor({ price }) {
      this.price = price;
    }
  }
  
  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });
  
  console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
  console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
  
  console.log('18.5. Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості та методи іншого класу (батьківського).')
  console.log('18.5. теорія')
//   Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості та методи іншого класу (батьківського).

// class Child extends Parent {
//   // ...
// }
// У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від батьківського класу Parent. Це означає, що ми можемо оголосити базовий клас, який зберігає загальні характеристики і методи для групи похідних класів, які наслідують властивості і методи батьківського, але також додають свої унікальні.

// Наприклад, у застосунку є користувачі з різними ролями — адміністратор, копірайтер, контент менеджер тощо. У кожного типу користувача є набір загальних характеристик, наприклад, пошта і пароль, але також є й унікальні.

// Створивши незалежні класи для кожного типу користувача, ми отримаємо дублювання загальних властивостей і методів, і, якщо необхідно змінити, наприклад, назву властивості, доведеться проходити по усіх класах, а це незручно і вимагає багато часу.

// Замість цього, можна створити загальний клас User, який буде зберігати набір загальних властивостей і методів, після чого, створити класи для кожного типу користувача, які наслідують цей набір від класу User. За потреби змінити щось спільне, достатньо буде змінити тільки код класу User.

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
// Клас ContentEditor наслідує від класу User його конструктор, гетер і сетер email, а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом.
  console.log('18.5. задача')
//   У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"
  console.log('18.5. було')
//   class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
  console.log('18.5. виконання')
  class User {
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  // Change code below this line
  class Admin extends User{
    static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"};
  }
  console.log('19.5. Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу. ')
  console.log('19.5. теорія')
//   Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу. В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, виникне помилка. Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
  console.log('19.5. задача')
//   Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Клас Admin містить метод constructor з параметром у вигляді об'єкта {email, accessLevel}
// В класі Admin в конструкторі для властивості email використовується звернення до конструктора батьківського класу
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"
  console.log('19.5. було')
//   class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
  console.log('19.5. виконання')
  class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends User {
    // Change code below this line
  
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
    static accessLevel;
  
    // Change code above this line
    constructor ({email, accessLevel}) {
      super(email);
      this.accessLevel = accessLevel
    }
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"

console.log('20.5. В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.')
console.log('20.5. теорія')
// В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

// // Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']
console.log('20.5. задача')
// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну властивість blacklistedEmails
// Клас Admin містить публічний метод blacklist
// Клас Admin містить публічний метод isBlacklisted
// Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
// Виклик mango.isBlacklisted("mango@mail.com") повертає false
// Виклик mango.isBlacklisted("poly@mail.com") повертає true
console.log('20.5. було')
// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
console.log('20.5. виконання')
class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line
    blacklistedEmails =[];
  
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({ email, accessLevel, blacklistedEmails}) {
      super(email);
      this.accessLevel = accessLevel;
    }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
    isBlacklisted(email) {
      return this.blacklistedEmails.includes(email);
    }
    // Change code above this line
  }
  
  const mango20 = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango20.email); // "mango@mail.com"
  console.log(mango20.accessLevel); // "superuser"
  
  mango.blacklist("poly@mail.com");
  console.log(mango20.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango20.isBlacklisted("mango@mail.com")); // false
  console.log(mango20.isBlacklisted("poly@mail.com")); // true
  
  