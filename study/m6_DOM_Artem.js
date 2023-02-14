// Example 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
// Створити ul та li. В ul положити li, в яких будуть списки технологій
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const container = document.querySelector('#main-container');
const ulEl = document.createElement('ul');

// Перший варіант
// 1. пройтись по масиву і отримати з нього не просто рядки, а завернуті рядки в тег. 
// На кожній ітерації будемо отримувати назву технології в li <li>HTML</li>, <li>CSS</li>,<li>JavaScript</li>,<li>React</li>,<li>Node</li>

// const techElements = technologies.map(el => `<li>${el}</li>`).join('');
// 2.  До ul додаємо всі промапені лішки li <li>HTML</li>, <li>CSS</li>,<li>JavaScript</li>,<li>React</li>,<li>Node</li>

// ulEl.innerHTML = techElements;
// 3. До контейнерва додаємо наш ul
// container.append(ulEl);


// Другий варіант
// Щоб уникнути .join(''); можемо використати метод перебору reduce
// const techElements = technologies.reduce((acum, el) => acum += `<li>${el}</li>`, '');
// 2.  До ul додаємо всі промапені лішки li <li>HTML</li>, <li>CSS</li>,<li>JavaScript</li>,<li>React</li>,<li>Node</li>
// ulEl.innerHTML = techElements;
// 3. До контейнерва додаємо наш ul
// container.append(ulEl);


// Третій варіант
// Варіант з create

// technologies.forEach((technologyItem) => {   // Проходимось по масиву
//   const liEl = document.createElement('li');  // на кожній ітерації створюємо Li
//   liEl.textContent = technologyItem;// Кожній li дали властивість technologyItem, елемент з оригінального масиву. Можна і ткий варіант liEl.innerHTML = technologyItem;
//   ulEl.append(liEl);  // кожну Li вставляємо в ul
// })


// container.append(ulEl);

// Четвертий варіант
// шаблоний рядок та insertAdjacentHTML
technologies.forEach((technologyItem) => {   // Проходимось по масиву
  const liEl = `<li>${technologyItem}</li>`;  // на кожній ітерації створюємо Li зі шаблоним рядком, в який добавляємо наші технології
  ulEl.insertAdjacentHTML('afterbegin', liEl); // до ul додаємо afterbegin - після початку, кожну лішку

});
container.append(ulEl);




//Example 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// 1. Пройтись по масиву
// 2. На кожній інетрації створити кнопку
// 3. Кожній кнопці покласти текст
// 4. Кожній кнопці надати колір

const colors = [
  {
    label: 'red',
    color: '#FF0000',
  },
  {
    label: 'green',
    color: '#00FF00',
  },
  {
    label: 'blue',
    color: '#0000FF',
  },
  {
    label: 'yellow',
    color: '#FFFF00',
  },
];


