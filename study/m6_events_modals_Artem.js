/**
 * Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
 * Модальне вікно має закриватися при кліку на напівпрозорий оверлей,
 * та на іконку хрестика всередині модалки
 */

// 1. на кнопку myBtn вішаємо eventLisnere щоб відкрити модальне вікно

// const openModalHendler = (event) => {    // прописуємо функцію для modalHendler
//     console.log('button clicked', event); // в функціїї внесли event і законсолили - цей шаг в консолі виведе яка подія відбулась 
//     modalElem.style.display = 'block';   //  функція змінить стиль display.none на display.block, тим самим відкриє модалку
//     closeModalBtn.addEventListener('click', closeModalHendler); // це рішення, коли потрібно подію на закриття повісити в момент відкриття модалки, але можна і окремо повісити в кінці коду
// };


// const closeModalHendler = (event) => {
//     console.log(event.target); // target - показує елемент на якому відбулась подія
//     console.log(event.currentTarget); // currentTarget - показує елемент на який подія була повішана, в нашому випадку то - modalElem
//     if(event.currentTarget === event.target) {   // тут не зовсім зрозуміло механізм
//         modalElem.style.display = 'none'; 
//     };
        // btnElem1.removeEventListener('click', openModalHendler1); // якщо у нас одноразова модалка і при першому відкриті та закриті потрібно щоб вона не відкривалась більше. Вішаємо видалення події
// };

// const btnElem = document.querySelector('#myBtn'); // звязки з кнопкою відкрити модалку html
// btnElem.addEventListener('click', openModalHendler);   // додаємо ліснера

// // 2. Отримуємо ссилку на модалку

// const modalElem = document.querySelector('#myModal'); // звязки з модалкою html

// //  3. строка 11 в функції    openModalHendler прописуємо дію  modalElem.style.display = 'block'; - тобто: при кліку на кнопку (btnElem.addEventListener('click', modalHendler); функція виконає зміну стилю з display 'none' на display = 'block')
    
// // 4. При кліку на хрестик в модалці - закривалась модалка

// const closeModalBtn = document.querySelector('.close');
// // 5. Вішаємо подію
// closeModalBtn.addEventListener('click', closeModalHendler); // можна повісити в функцію відкриття модалки, але так не спрацює в тій ситуаціїї якщо модалка буде відкриватись не кнопкою, а при перезагрузці браузера. При такій ситуації у нас не відпрацьовує у функції перша дія  modalElem.style.display = 'block'; і браузер ніяк не може дійти до другої дії

// // 6. Закриття модалки при кліку на напівпрозорий оверлей

// modalElem.addEventListener('click', closeModalHendler); 

// // вішаємо подію закриття на саму модалку (const modalElem = document.querySelector('#myModal');), але тут проблема в тому, що коли клікаємо на модалку - то вона закривається, а потрібно щоб лише при сірому оверлей закривалось, а на модалку ні


// // 7. Подія на Esc/p. Закритя при любій клавіші, наприклад Escape

// document.addEventListener('keydown', (event) => {
//     if(event.key === 'Escape') {
//         modalElem.style.display = 'none';
//     }
// })

// // При методі keydown подію ставимо не на елемент, а на весь документ document
// // функція:
// // на весь документ додаємо слухача(('при натискані на кнопку', (подія) => {
//     // якщо(відбулась подія.і вона відповідає нажатію кнопки, і ця кнопка === рівна кнопці Escape) {
// //         то виконай заміну стилю на модальному віклю з display.block на display.none
// //     }
// // }

// document.addEventListener('keydown', (event) => {
//     if(event.key === 'p') {
//         modalElem.style.display = 'none';
//     };
// });

// Ітого, послідовність запису коду
const btnElem1 = document.querySelector('#myBtn');
const modalElem1 = document.querySelector('#myModal'); 
const closeModalBtn1 = document.querySelector('.close');

const openModalHendler1 = (event) => {    
    console.log('button clicked', event); 
    modalElem1.style.display = 'block';   
    closeModalBtn1.addEventListener('click', closeModalHendler1); 
};


const closeModalHendler1 = (event) => {
    console.log(event.target); 
    console.log(event.currentTarget); 
    if(event.currentTarget === event.target) {  
        modalElem1.style.display = 'none'; 
    };
    btnElem1.removeEventListener('click', openModalHendler1); // якщо у нас одноразова модалка і при першому відкриті та закриті потрібно щоб вона не відкривалась більше. Вішаємо видалення події
};

document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape') {
            modalElem1.style.display = 'none';
        }
    })

btnElem1.addEventListener('click', openModalHendler1); 
closeModalBtn1.addEventListener('click', closeModalHendler1);
modalElem1.addEventListener('click', closeModalHendler1); 




console.log('Рефакторинг коду відкриття та закриття модалки на класи')



// const btnElem3 = document.querySelector('#myBtn');
// const modalElem3 = document.querySelector('#myModal'); 
// const closeModalBtn3 = document.querySelector('.close');
// // 1 створюємо клас і прописуємо йому методи
// class Modal {
//     constructor (element) {
//         this.element = element;
//     };
//     open () {
//         this.element.style.display = 'block';  

//     };

//     close () {
//         this.element.style.display = 'none'; 
//         btnElem3.removeEventListener('click', openModalHendler3);

//     };

// };
// const modal = new Modal(modalElem3)

// const openModalHendler3 = (event) => modal.open();

// const closeModalHendler3 = (event) => {
//     console.log(event.target); 
//     console.log(event.currentTarget); 
//     if(event.currentTarget === event.target) {  
//         modal.close(); 
//     };
// };

// document.addEventListener('keydown', (event) => {
//     if(event.key === 'Escape') {
//         modal.close(); 
//     };
// });

// btnElem3.addEventListener('click', openModalHendler3); 
// closeModalBtn3.addEventListener('click', closeModalHendler3);
// modalElem3.addEventListener('click', closeModalHendler3); 
