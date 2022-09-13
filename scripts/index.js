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
// карточки
const cardsContainer = document.querySelector('.elements')

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

// обработчик «отправки» формы
function formSubmitHandler (event) { 
    event.preventDefault(); 
    titleName.textContent = nameInput.value; 
    titleJob.textContent = jobInput.value; 
    closePopup();
} 
// formElement.addEventListener('submit', formSubmitHandler);  

 // нажатие крестика
// btnClose.addEventListener('click', closePopup);

 
//_____________________________
//  РАБОТА С КАРТОЧКАМИ
//_____________________________

// карточки по умолчанию
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

// ф-ция добавления карточки
  function addCard(name, link) {
    const cardsTemplate = document.querySelector('#cards').content;
    const cardElement = cardsTemplate.querySelector('.element').cloneNode(true);
  
    cardElement.querySelector('.element__name').textContent = name;
    cardElement.querySelector('.element__foto').src = link;
    // лайк
    cardElement.querySelector('.element__btnLike').addEventListener ('click', function (evt) {
        evt.target.classList.toggle('element__btnLike_active')
      });
    //   удаляем карточку
    cardElement.querySelector('.element__btnTrash').addEventListener ('click', () => cardElement.closest('.element').remove());

    cardsContainer.prepend(cardElement)
  }

// добавляю массив фоток
  initialCards.forEach(item => addCard(item.name , item.link))


// добавление по кнопке + попап




