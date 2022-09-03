//_____________________________
//  РАБОТА С ФОРМОЙ
//_____________________________

const formElement =  document.querySelector('.popup__form');
const btnSave = document.querySelector('.popup__btn-save');
// находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
// находим значения profile
const titleName = document.querySelector('.profile__name');
const titleJob = document.querySelector('.profile__job');
// для вывода и скрытия попап в видимой зоне
const btnEdit = document.querySelector('.profile__btn-edit');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__btn-close');

// добавляем попап
function openPopup() {
     popup.classList.add('popup_opened');
    //присвоим значения title инпутам
    nameInput.value = titleName.textContent;
    jobInput.value = titleJob.textContent;
    nameInput.focus();
};
// скрываем попап
function closePopup() {
    popup.classList.remove('popup_opened');
    formElement.reset();
};

// нажатие кнопки редактирования
btnEdit.addEventListener('click', openPopup);

// // обработчик «отправки» формы
function formSubmitHandler (event) { 
    event.preventDefault(); 
    titleName.textContent = nameInput.value; 
    titleJob.textContent = jobInput.value; 
    closePopup();
} 
formElement.addEventListener('submit', formSubmitHandler);  

 // нажатие крестика
btnClose.addEventListener('click', closePopup);

 