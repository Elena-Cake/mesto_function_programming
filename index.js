
// работа с формой

let formElement =  document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
//Находим значения profile
let titleName = document.querySelector('.profile__name');
let titleJob = document.querySelector('.profile__job');

//присвоим значения title инпутам
nameInput.placeholder = titleName.textContent;
jobInput.placeholder = titleJob.textContent;


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
    if (nameInput.value !== '') {
        titleName.textContent = nameInput.value;
    };
    if (jobInput.value !== '') {
    titleJob.textContent = jobInput.value;
    };
    popup.classList.remove('popup_opened');

}
formElement.addEventListener('submit', formSubmitHandler); 

