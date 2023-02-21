const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    
];

console.log('Створює динамічну карточку по данній розмітці');

// // ШАГ 1 - створюємо динамічну розмітку карток кольорів
// // Не будемо використовувати createElemens, а створювати через шаблоні строки
// // через createElemens створюється швидше, але якщо не велика кількість елементів то швидше через шаблоні строки
// // масив map і виводимо з неї карточку для кожного масиву кольору
// // потім join щоб всі картки зібрати в один масив

// // ШАГ 2 - рендеримо нашу розмітку в html документ <div class="palette js-palette">
// // в аргументі функції передаємо "const markup = colors.map(color =>", але ми диструктиризуємо, так як будемо передавати назви властивостей в шаблоні строки "const markup = colors.map(({ hex, rgb }) =>"

// // ШАГ 3 - коли клікаємо на сам колір, тобто на <div class="color-swatch"> змінювався колір body
// // вішаємо делегування на контерйнер palette js-palette і будемо дивитись що він слухає і вибираємо лише <div class="color-swatch">
 
// // ШАГ 4 - вішаємо додатковий клас, який вже прописаний в CSS, на активку картку

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsmarkup(colors);  // записали в коротшу зміну куегкт з функції, що робить динамічні картки
// // для додавання в html розмітку вибрали спосіб insertAdjacentHTML, томущо ще будемо добавляти елементи, ми браузеру даємо один раз запит і він сам парсить і вставляє в розмітку і створює елементи.
// // appendChild - це якщо ми через createElement щось створюємо, просто вішаємо обєкти
// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsmarkup(colors) {
//     return colors
//         .map(({ hex, rgb }) => {
//             return `
//             <div class="color-card">
//                 <div 
//                     class="color-swatch"
//                     data-hex="${hex}"
//                     data-rgb="${rgb}"
//                     style="background-color: ${hex}"
//                 ></div>
//                 <div class="color-meta">
//                     <p>HEX: ${hex}</p>
//                     <p>RGB: ${rgb}</p>
//                 </div>
//             </div>
//             `;
//         })
//         .join('');
// };

// function onPaletteContainerClick(evt) {
//     const isColorSwatchEl = evt.target.classList.contains('color-swatch');  // перевірку виносимо в окрему зміну, для простоти читання коду
//     if (!isColorSwatchEl) {
//         return;
//     }
//     // і тепер ми можемо вибрати любу властивість, яка нам підходить: hex чи rgb
//     // console.log(evt.target.dataset.hex);

//     // шукаємо предка, батька з селектором is-activ
//     // вішаємо на нього клас іs-activ
//     // вибираються багато карт, а потрібно лише одну. Пишимо провірку на isActive і переносимо провірку перед присвоєнням класу 



//     const currentActiveCard = document.querySelector('.color-card.is-active'); // шукаємо елемент з класом is-active // комбінований селектор для пошуку. ми знаємо що у ми вже повісили на клас color-card ще один is-active. Тому для пошуку їх скомбінували і шукаємо саме наш

//     if (currentActiveCard) {
//         currentActiveCard.classList.remove('is-active');
//     }

//     const swatchEl = evt.target;
//     const parentColorCard = swatchEl.closest('.color-card');
//     parentColorCard.classList.add('is-active');  // вішаємо на нього клас s-activ
//     console.log(parentColorCard);

//     // console.log(swatchEl.dataset.hex); // отримуємо hex кольора на активному елементі

// // і ставимо на body зміну кольору, яку ми вибрати хочемо

//     document.body.style.backgroundColor = swatchEl.dataset.hex;
// };

// console.log('Ітого, всі шаги')
// // 1. Створили функцію, яка рендерить всю нашу розмітку createColorCardsmarkup
// // 1.1. У нас є масив обєктів (кольорів) його map, для кожного обєкту сгенерували картку, підставивши значення ключів масиву в те місце де потрібно. І з функціїї повернули одну строку
// // 2. Повісили цю строку у вже існуючий елемент в html розмітці paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// // 3. Повісили делегування на контейнер paletteContainer, щоб прослуховати кліки paletteContainer.addEventListener('click', onPaletteContainerClick);
// // 4. Реалізація в функції onPaletteContainerClick задач:
// // 4.1 Куди ми клацнули
// //  const isColorSwatchEl = evt.target.classList.contains('color-swatch');  // перевірку виносимо в окрему зміну, для простоти читання коду
// //     if (!isColorSwatchEl) {
// //         return;
// //     }

// // 4.2. Далі вішали та знімали клас s-active, що несе в собі дод візуалізацію. шукати через предків і тд
// // 5. Вішаємо вибраний колі на body

console.log('Код функції onPaletteContainerClick дуже багато робить і потрібно розбити на маленькі функції')

const paletteContainer1 = document.querySelector('.js-palette');
const cardsMarkup1 = createColorCardsmarkup1(colors);  

paletteContainer1.insertAdjacentHTML('beforeend', cardsMarkup1);
paletteContainer1.addEventListener('click', onPaletteContainerClick1);

function createColorCardsmarkup1(colors) {
    return colors
        .map(({ hex, rgb }) => {
            return `
            <div class="color-card">
                <div 
                    class="color-swatch"
                    data-hex="${hex}"
                    data-rgb="${rgb}"
                    style="background-color: ${hex}"
                ></div>
                <div class="color-meta">
                    <p>HEX: ${hex}</p>
                    <p>RGB: ${rgb}</p>
                </div>
            </div>
            `;
        })
        .join('');
};
// 1 Виносимо функцію зміни кольору body в окрему функцію


function onPaletteContainerClick1(evt) {
    const isColorSwatchEl = evt.target.classList.contains('color-swatch');  
    if (!isColorSwatchEl) {
        return;
    } 

    

    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');
      
    removeActiveCardClass(); 
    addActiveCardClass(parentColorCard);
    setBodyBgColor(swatchEl.dataset.hex);
};

// 1 Виносимо функцію зміни кольору body в окрему функцію
function setBodyBgColor(color) { 
    document.body.style.backgroundColor = color;
}

// 2. Функція видалення активного класу. Тут її прописуємо, в а функції onPaletteContainerClick1 ми її визиваємо (строка 138)

function removeActiveCardClass() {
const currentActiveCard = document.querySelector('.color-card.is-active'); 

    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }

}

// 3. Функція додавання активного класу

function addActiveCardClass(card) {
    // parentColorCard.classList.add('is-active'); // наша функція окрема і не знає змінної parentColorCard. Ми його передаємо як аргумент cardюі з функції onPaletteContainerClick1 передаємо аргументи (строка 144)
    card.classList.add('is-active'); // наша функція окрема і не знає змінної parentColorCard. Ми його передаємо як аргумент card

}


// і тепер в функції onPaletteContainerClick1 є сислки на 3 функції, з окремим функціоналом, в них можна окремо зайти і передивитись:
// removeActiveCardClass(); 
//     addActiveCardClass(parentColorCard);
//     setBodyBgColor(swatchEl.dataset.hex);


