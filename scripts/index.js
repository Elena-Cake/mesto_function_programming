//_____________________________
//  РАБОТА С ФОРМОЙ
//_____________________________

let formElement =  document.querySelector('.popup__form');
let btnSave = document.querySelector('.popup__save');
// находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
// находим значения profile
let titleName = document.querySelector('.profile__name');
let titleJob = document.querySelector('.profile__job');
// для вывода и скрытия попап в видимой зоне
let btnEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let btnClose = document.querySelector('.popup__close');

// скрываю форму при загрузке страницы
closePopup();

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
};

// нажатие кнопки редактирования
btnEdit.addEventListener('click', openPopup);

// обработчик «отправки» формы
function formSubmitHandler (event) {
    event.preventDefault(); 
    titleName.textContent = nameInput.value;
    titleJob.textContent = jobInput.value;
    closePopup();
};
btnSave.addEventListener('submit', formSubmitHandler); 

// нажатие крестика
btnClose.addEventListener('click', closePopup);

