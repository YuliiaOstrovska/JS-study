console.log('Відкрити та закрити модалку');

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrope: document.querySelector('.js-backdrope'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrope.addEventListener('click', onCloseModal);

function onOpenModal () {
    window.addEventListener('keydown', onEscKeyPress); // 1. слухача подій window.addEventListener('keydown', onEscKeyPress); вішаємо лише тоді коли відкриваємо модалку.

    document.body.classList.add('show-modal');
};
function onCloseModal () {
    window.removeEventListener('keydown', onEscKeyPress); // 2. знімаємо, коли модалка закривається  window.removeEventListener('keydown', onEscKeyPress);

    document.body.classList.remove('show-modal');
};

function onBackdropeClick(event) {
    console.log('Клік по бедроб');
    console.log('event.currentTarget');  // event.currentTarget - показує місце на якому вказаний слуха подій, саме backdrope: document.querySelector('.js-backdrope'),
    console.log('event.target');  // event.target - ловить саме місце, по якому був клік. це може бути і р, модалка і сам бекдроп

    if(event.currentTarget === event.target) {  // якщо місце, на якому вказаний слухач подій та місце по якому здійснився клік співпадають, то викликаємо функцію onCloseModal();, яка знімає клас з body
        onCloseModal();  // виклик функції, що була прописана в 16 строці
    };
};

console.log('Закрити модалку при нажатії кнопки Esc');

// window.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(event) {
    if(event.code === 'Escape') {
        onCloseModal();
    };
};
// проблема такого піїходу в тому, що даже при закритій модалці ми прослуховуємо події
// 1. слухача подій window.addEventListener('keydown', onEscKeyPress); вішаємо лише тоді коли відкриваємо модалку.
// 2. знімаємо, коли модалка закривається  window.removeEventListener('keydown', onEscKeyPress);


console.log('Чистий код');

const refs1 = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrope: document.querySelector('.js-backdrope'),
};

refs1.openModalBtn.addEventListener('click', onOpenModal);
refs1.closeModalBtn.addEventListener('click', onCloseModal);
refs1.backdrope.addEventListener('click', onCloseModal);

function onOpenModal () {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
};
function onCloseModal () {
    window.removeEventListener('keydown', onEscKeyPress); 
    document.body.classList.remove('show-modal');
};

function onBackdropeClick(event) {
    console.log('Клік по бедроб');
    console.log('event.currentTarget');  
};

function onEscKeyPress(event) { 
    if(event.code === 'Escape') {
        onCloseModal();
    };
};


