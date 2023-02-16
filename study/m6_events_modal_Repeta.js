console.log('Відкрити та закрити модалку');

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-moda"]'),
    backdrope: document.querySelector('.js-backdrope'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal () {
    document.body.classList.add('show-modal');
};