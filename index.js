
// работа с формой

let formElement =  document.querySelector('.edit__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.edit__input-name');
let jobInput = document.querySelector('.edit__input-job');
//Находим значения profile
let titleName = document.querySelector('.profile__name');
let titleJob = document.querySelector('.profile__job');

//присвоим значения title инпутам
nameInput.placeholder = titleName.textContent;
jobInput.placeholder = titleJob.textContent;


//нажатие кнопки редактирования
let editButton = document.querySelector('.profile__edit');
let page = document.querySelector('.page');
let edit = document.querySelector('.edit');


editButton.addEventListener('click', ()=> {
    page.classList.add('page__edit');
    edit.style.display = 'block';
});


//нажатие крестика
let closeButton = document.querySelector('.edit__close')
closeButton.addEventListener('click', ()=> {
    page.classList.remove('page__edit')
    edit.style.display = 'none';
});


// Обработчик «отправки» формы
function formSubmitHandler (event) {
    event.preventDefault(); 

    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;
    edit.style.display = 'none';

}
formElement.addEventListener('submit', formSubmitHandler); 

