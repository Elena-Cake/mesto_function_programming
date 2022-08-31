
// работа с формой

let formElement =  document.querySelector('.popup__form');
let btnSave = document.querySelector('.popup__save');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
//Находим значения profile
let titleName = document.querySelector('.profile__name');
let titleJob = document.querySelector('.profile__job');

//присвоим значения title инпутам
nameInput.value = titleName.textContent;
jobInput.value = titleJob.textContent;


//нажатие кнопки редактирования
let popupButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');


popupButton.addEventListener('click', ()=> {
    popup.classList.add('popup_opened');
});


// Скрываю форму при загрузке страницы
    popup.classList.remove('popup_opened');


//нажатие крестика
let closeButton = document.querySelector('.popup__close')
closeButton.addEventListener('click', ()=> {
    popup.classList.remove('popup_opened')
});


// Обработчик «отправки» формы
function formSubmitHandler (event) {
    event.preventDefault(); 
    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened');

}
btnSave.addEventListener('click', formSubmitHandler); 

