
// находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
// находим значения profile
const titleName = document.querySelector('.profile__name');
const titleJob = document.querySelector('.profile__job');
// попап редактирования профиля
const popup = document.querySelector('.popup')
const popupEdit = document.querySelector('.popupEdit');
const btnEdit = document.querySelector('.profile__btnEdit');
const btnClose = document.querySelector('.popup__btnClose');
const formElement =  document.querySelector('.popup__form');
const btnSave = document.querySelector('.popup__btnSave');
// попап добавления фото
const btnAddCard = document.querySelector('.profile__btnAdd')
const popupAddCard = document.querySelector('#popupAddCard');
// карточки
const cardsContainer = document.querySelector('.elements');
const page = document.querySelector('.page');

//_____________________________
//  ПОПАП
//_____________________________

// добавляем попап

// function openPopup() {
//     popup.classList.add('popup_opened');
// };

function openPopup(p) {
    p.classList.add('popup_opened');
};

// скрываем попап

function closePopup(p) {
    p.classList.remove('popup_opened');
    formElement.reset();
};

//_____________________________
//  РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//_____________________________

// нажатие кнопки редактирования
btnEdit.addEventListener('click', ()=>{
    openPopup(popupEdit);
    //присвоим значения title инпутам
    nameInput.value = titleName.textContent;
    jobInput.value = titleJob.textContent;
    nameInput.focus();
} );




// обработчик «отправки» формы
function formSubmitHandler (event) { 
    event.preventDefault();
    titleName.textContent = nameInput.value; 
    titleJob.textContent = jobInput.value; 
    closePopup();
} 
formElement.addEventListener('submit', formSubmitHandler);  

 // нажатие крестика
btnClose.addEventListener('click', () => openPopup(popupEdit) );

//_____________________________
//  РАБОТА С КАРТОЧКАМИ
//_____________________________

// ф-ция добавления карточки
  function addCard(name, link) {
    const cardsTemplate = document.querySelector('#cards').content;
    const cardElement = cardsTemplate.querySelector('.element').cloneNode(true);
    const cardFoto =  cardElement.querySelector('.element__foto');
  
    cardElement.querySelector('.element__name').textContent = name;
    cardFoto.src = link;
    cardFoto.alt = `${name} на фотографии`;
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

//_____________________________
//  ДОБАВЛЕНИЕ КАРТОЧКИ
//_____________________________


btnAddCard.addEventListener('click', ()=>openPopup(popupAddCard) )