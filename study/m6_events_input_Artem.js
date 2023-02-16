// Створити форму реєстрації користувача за допомогою js де буде 2 поля 
//     1. Поле логіна
//     2. Поле пароль
//     3. Захаркодити вірні логін і пароль в константах
//     4. Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
//             1. Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо **h2**  з написом **“Вхід успішний”**
//             2. Якщо логі і пароль не співпадають з даними з констант в пункті 3с - показуємо під формою помилку червоним кольором **“Логін або пароль не вірні”**


// В даному варіанті, ми вставляли розмітку для інпута в модалку. В частину, коли відкривається модалка і формується форма з 2 інпутами
// розмітка, виносимо в окрему формулу, (54 строка):
// const formElem = document.createElement('form');
//     const nameInput = document.createElement('input');
//     const passwordInput = document.createElement('input');

//     nameInput.name = 'name';
//     passwordInput.name = 'password';
//     passwordInput.type = 'password';

//     formElem.append(nameInput);
//     formElem.append(passwordInput);

//     modalContentElem.append(formElem);

const credentials = {
    correctLogin: 'admin',
    correctPassword: '123qwerty',
  };
//   це зміна, в якій зберігається коректний пароль, з яким ми будемо зрівнювати те що введе користувач. По умові задачі це - 3. Захаркодити вірні логін і пароль в константах

const btnElem3 = document.querySelector('#myBtn');
const modalElem3 = document.querySelector('#myModal'); 
const modalContentElem = document.querySelector('.modal-content'); 
const closeModalBtn3 = document.querySelector('.close');



class Modal {
    constructor (element) {
        this.element = element;
    };
    open () {
        this.element.style.display = 'block';  

    };

    close () {
        this.element.style.display = 'none'; 
        // btnElem3.removeEventListener('click', openModalHendler3);

    };

};
const modal = new Modal(modalElem3);

const createForm = () => {
    const formElem = document.createElement('form');
    const nameInput = document.createElement('input');
    const passwordInput = document.createElement('input');
    const formBtn = document.createElement('button');


    nameInput.name = 'login';
    passwordInput.name = 'password';
    passwordInput.type = 'password';
    formBtn.type = 'submit';
    formBtn.textContent = 'submit';


    formElem.append(nameInput);
    formElem.append(passwordInput); 
    formElem.append(formBtn);

    return formElem;
};

const openModalHendler3 = (event) => {
   
    modal.open();
} 

const closeModalHendler3 = (event) => {
    console.log(event.target); 
    console.log(event.currentTarget); 
    if(event.currentTarget === event.target) {  
        modal.close(); 
    };
};

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        modal.close(); 
    };
});

btnElem3.addEventListener('click', openModalHendler3); 
closeModalBtn3.addEventListener('click', closeModalHendler3);
modalElem3.addEventListener('click', closeModalHendler3); 

const modalForm = createForm();  // створюється форма з формули та апендиться в DOM
modalContentElem.append(modalForm);

// 3. Захаркодити вірні логін і пароль в константах
//     4. Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
//             1. Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо **h2**  з написом **“Вхід успішний”**
//             2. Якщо логі і пароль не співпадають з даними з констант в пункті 3с - показуємо під формою помилку червоним кольором **“Логін або пароль не вірні”**


// Вішаємо слухача на форму
modalForm.addEventListener('submit', (event) => { 
    event.preventDefault();   // відміняємо дефолтне поводження. Якщо на незаповненій формі клікнути на кнопку submit, то форма не буде закриватись

// console.log(event.currentTarget.elements.login.value);  // отримуємо значення введені користувачем - логін
// console.log(event.currentTarget.elements.password.value);  // отримуємо значення введені користувачем - пароль

// ці записи можемо деструктирозувати
const {
    elements: { login, password },
  } = event.currentTarget;


    console.log(login.value);
    console.log(password.value); 

    const data = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => (data[name] = value));

    if (
        data.login === credentials.correctLogin &&
        data.password === credentials.correctPassword
      ) {
        modalForm.remove();
        modalContentElem.insertAdjacentHTML(
          'beforeend',
          `<h2>Вхід успішний</h2>`
        );
      } else {
        modalForm.insertAdjacentHTML(
          'beforeend',
          `<p style="color: red">Логін або пароль не вірні</p>`
        );
      }

    
});



