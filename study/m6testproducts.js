import products from './data/products.js'
console.log(products);
// імпорт данних з іншого файла.
// 1. головне, щоб файл з якого експортуємо і файл в який імпортуємо були з типом type='module'
// 2. в файлі з якого експортуємо дані записуємо так, і там зберігається лише один масив( там можуть бути: масиви, формули, різні типи даних):
// export default [
//     {
//         name1: 'Сервоприводи',
//         discription: 'lorem10',
//         price: 2000,
//         available: true,
//         onSale: true,
//     },
//   ]
// 3. в файл який імпортуємо дані, З САМОГО ВЕРХУ, строка 1 прописуємо:
//  import імя змінної from (з відки) './data/products.js' (шлях файла, з якого імпортуємо)

console.log('---ПРАКТИКА---')
console.log('1. Створення колекції товарів.')
console.log('Є обєкт продукта і потрібно створити карточку продукта з даною розміткою')
console.log('По тим даним, що прийдуть з бєкенда потрібно створити елемент')
// Є обєкт продукта і потрібно створити карточку продукта з даною розміткою
console.log('Це обєкт')

// const product = {
//     name1: 'Сервоприводи',
//     discription: 'lorem10',
//     price: 200,
//     available: true,
//     onSale: true,
// }
// console.log('Це елемент в html розмітці')
// {/* <artical class="product">
//     <h2 class="product_name">Назва</h2>
//     <p class="product__descr">Опис</p>
//     <p class="product__price">Ціна:</p>
// </artical> */}
console.log('1. Пишимо розмітку, шаблоню Додаємо властивості. Типу конструктора. потім цю розмітку вставимо в функцію. пункт 2-й')
// 1. Пишимо розмітку, шаблоню Додаємо властивості. Типу конструктора
// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.classList.add('product_name');
// nameEl.textContent = product.name1;

// const descrEl = document.createElement('p');
// descrEl.classList.add('product__descr');
// descrEl.textContent = product.discription;

// const priceEl = document.createElement('p');
// priceEl.classList.add('product__price');
// priceEl.textContent = `Ціна: ${product.price} кредитів`;  // тут можна зробити шаблону строку, так як у нас в розмітці задано так: <p class="product__price">Ціна:</p>

// // 2. Зєднуємо в одну структуру
// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

// потім цю розмітку вставимо в функцію. пункт 3-й
console.log('2. пишемо функцію, яка буде отримувати 1 обєкт і буде створювати одку картку продукта')

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({name, discription, price}) =>{   // в дану формулу (const makeProductCart = product =>) приходить product  це данні. деструктиризуємо в ({name, discription, price})
    const productEl = document.createElement('article');
    productEl.classList.add('product');
    
    const nameEl = document.createElement('h2');
    nameEl.classList.add('product_name');
    nameEl.textContent = name;
    
    const descrEl = document.createElement('p');
    descrEl.classList.add('product__descr');
    descrEl.textContent = discription;
    
    const priceEl = document.createElement('p');
    priceEl.classList.add('product__price');
    priceEl.textContent = `Ціна: ${price} кредитів`;

    productEl.append(nameEl, descrEl, priceEl);  // збираємо все в одну кучу

    return productEl; // повертаємо з функції один обєкт
}

console.log(makeProductCard(products[1]));

console.log('3. Створ.ємо багато таких карточок')

const elements = products.map(makeProductCard); // в метод map передаємо як масив функцію. функція створює розмітку, а map її маштабує. в данній функції, передача функції makeProductCard - є звичайний коллбек
console.log(elements);

console.log('4. Наші карточки вішаємо в розмітку в html')

// виконуємо пошук елемента з класом js-products, що був в html. Строка 62

// після чого, вставляємо в розмітку
productsContainerEl.append(...elements);
