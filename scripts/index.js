
// значения profile
const titleName = document.querySelector('.profile__name');
const titleJob = document.querySelector('.profile__job');

// попап редактирования профиля
const popupEdit = document.querySelector('.popup-edit');
const buttonEdit = document.querySelector('.profile__btn-edit');

const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_job');
const formElementEdit =  popupEdit.querySelector('.popup__form');
const buttonCloseEdit = popupEdit.querySelector('.popup__btn-close');

// попап добавления фото
const popupAddCard = document.querySelector('.popup-add-card');
const buttonAddCard = document.querySelector('.profile__btn-add');

const buttonCloseAddFoto = popupAddCard.querySelector('.popup__btn-close');
const nameFotoInput = popupAddCard.querySelector('.popup__input_type_name');
const linkFotoInput = popupAddCard.querySelector('.popup__input_type_job');
const formElementAddFoto = popupAddCard.querySelector('.popup__form');

// попап просмотра фото
const popupFoto = document.querySelector('.popup-foto');

const imgFoto = popupFoto.querySelector('.popup__foto');
const buttonCloseFoto = popupFoto.querySelector('.popup__btn-close');
const nameFoto = popupFoto.querySelector('.popup__name');

// карточки
const cardsContainer = document.querySelector('.elements');

//_____________________________
//  ПОПАП
//_____________________________

// показать попап
function openPopup(p) {
    p.classList.add('popup_opened');
};

// скрыть попап
function closePopup(p) {
    p.classList.remove('popup_opened');
};

//_____________________________
//  РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//_____________________________

// нажатие кнопки редактирования
buttonEdit.addEventListener('click', ()=>{
    openPopup(popupEdit);
    // присвоение значения title инпутам
    nameInput.value = titleName.textContent;
    jobInput.value = titleJob.textContent;
    nameInput.focus();
} );

// обработчик «отправки» формы редактирования профиля
function submitHandler (evt) { 
    evt.preventDefault();
    titleName.textContent = nameInput.value; 
    titleJob.textContent = jobInput.value; 
    closePopup(popupEdit);
} 
formElementEdit.addEventListener('submit', submitHandler);  

// закрытие попапа редактирования
buttonCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit); 
  formElementEdit.reset()
});

//_____________________________
//  ДОБАВЛЕНИЕ КАРТОЧКИ
//_____________________________

// ф-ция добавления карточки
  function createCard(name, link) {
    const cardsTemplate = document.querySelector('.elements__list').content;
    const cardElement = cardsTemplate.querySelector('.element').cloneNode(true);
    const cardFoto =  cardElement.querySelector('.element__foto');
  
    cardElement.querySelector('.element__name').textContent = name;
    cardFoto.src = link;
    cardFoto.alt = `${name} на фотографии`;
    // нажатие лайка
    cardElement.querySelector('.element__btn-like').addEventListener ('click', function (evt) {
        evt.target.classList.toggle('element__btn-like_active')
      });
    // удаление карточки
    cardElement.querySelector('.element__btn-trash').addEventListener ('click', () => cardElement.closest('.element').remove());
        
    // открытие попапа фото
    cardFoto.addEventListener ('click', ()=> openFoto (name, link));
    
    return cardElement;
  }

 // открытие попапа фото  
 function openFoto (name, link) {
    openPopup(popupFoto);
    imgFoto.src = link;
    imgFoto.alt = `${name} на фотографии`;
    nameFoto.textContent = name;
 }

// закрытие попапа фото
buttonCloseFoto.addEventListener('click', () => {
  closePopup(popupFoto);
  imgFoto.src = '';
}); 

// добавление массив фотографий
  initialCards.forEach(item => {
    const card = createCard(item.name , item.link);
    addElementInContainer(card ,cardsContainer)
  });

// добавление кода в html элемент
function addElementInContainer(element,container) { 
  container.prepend(element);
} 

//_____________________________
//  ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
//_____________________________

buttonAddCard.addEventListener('click', ()=>openPopup(popupAddCard) )

// обработчик «отправки» формы добавления фото
function submitHandlerFoto (evt) { 
  evt.preventDefault();
  // создание и добавление корточки
  card = createCard(nameFotoInput.value, linkFotoInput.value);
  addElementInContainer(card, cardsContainer);

  formElementAddFoto.reset();
  closePopup(popupAddCard);
} 
formElementAddFoto.addEventListener('submit', submitHandlerFoto);  

// закрытие попапа
buttonCloseAddFoto.addEventListener('click', () => {
  closePopup(popupAddCard); 
  formElementAddFoto.reset();
});

//_____________________________
//  ВАЛИДАЦИЯ
//_____________________________
// span ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

// проверка на валидность
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__btn-save');
  toggleButtonState(inputList,buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList,buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    }); 
  });
};
enableValidation();

function hasInvalidInput(inputList) {
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
  })
}

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add('btn-save_inactive')
  } else {
    buttonElement.classList.remove('btn-save_inactive')
  }
}