
// работа с формой

let formElement =  document.querySelector('.popup__form');
let btnSave = document.querySelector('.popup__save');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
//Находим значения profile
let titleName = document.querySelector('.profile__name');
let titleJob = document.querySelector('.profile__job');
//для вывода и скрытия попап в видимой зоне
let btnEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let btnClose = document.querySelector('.popup__close');

// Скрываю форму при загрузке страницы
closePopup();

//добавляем и удаляем попап из видимой части
function addPopup() {
     popup.classList.add('popup_opened');
    //присвоим значения title инпутам
    nameInput.value = titleName.textContent;
    jobInput.value = titleJob.textContent;
    nameInput.focus();
};
function closePopup() {
    popup.classList.remove('popup_opened');
};

//нажатие кнопки редактирования
btnEdit.addEventListener('click', addPopup);

//нажатие крестика
btnClose.addEventListener('click', closePopup);


// Обработчик «отправки» формы
function formSubmitHandler (event) {
    event.preventDefault(); 
    if (nameInput.value !== '') {
    titleName.textContent = nameInput.value;
    };
    titleJob.textContent = jobInput.value;
    closePopup();

}
btnSave.addEventListener('click', formSubmitHandler); 

