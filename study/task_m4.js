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