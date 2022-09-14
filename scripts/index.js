

// значения profile
const titleName = document.querySelector('.profile__name');
const titleJob = document.querySelector('.profile__job');

// попап редактирования профиля
const popupEdit = document.querySelector('.popupEdit');
const btnEdit = document.querySelector('.profile__btnEdit');

const nameInp = popupEdit.firstElementChild.lastElementChild.children[1]; 
const jobInp = popupEdit.firstElementChild.lastElementChild.children[2];
const formElementEdit =  popupEdit.firstElementChild.lastElementChild;
const btnCloseEdit = popupEdit.firstElementChild.firstElementChild;

// попап добавления фото
const popupAddCard = document.querySelector('.popupAddCard');
const btnAddCard = document.querySelector('.profile__btnAdd');

const btnCloseAddFoto = popupAddCard.firstElementChild.firstElementChild;
const nameFotoInp = popupAddCard.firstElementChild.lastElementChild.children[1]; 
const linkFotoInp = popupAddCard.firstElementChild.lastElementChild.children[2];
const formElementAddFoto = popupAddCard.firstElementChild.lastElementChild;

//попап просмотра фото
const popupFoto = document.querySelector('.popupFoto');

const imgFoto = popupFoto.firstElementChild.firstElementChild;
const btnCloseFoto = popupFoto.firstElementChild.firstElementChild.nextElementSibling;
const nameFoto = popupFoto.firstElementChild.lastElementChild;

// карточки
const cardsContainer = document.querySelector('.elements');

//_____________________________
//  ПОПАП
//_____________________________

// добавляем попап
function openPopup(p) {
    p.classList.add('popup_opened');
};

// скрываем попап
function closePopup(p) {
    p.classList.remove('popup_opened');
};

//_____________________________
//  РЕДАКТИРОВАНИЕ ПРОФИЛЯ
//_____________________________

// нажатие кнопки редактирования
btnEdit.addEventListener('click', ()=>{
    openPopup(popupEdit);
    //присвоим значения title инпутам
    nameInp.value = titleName.textContent;
    jobInp.value = titleJob.textContent;
    nameInp.focus();
} );

// обработчик «отправки» формы редактирования профиля
function submitHandler (evt) { 
    evt.preventDefault();
    titleName.textContent = nameInp.value; 
    titleJob.textContent = jobInp.value; 
    closePopup(popupEdit);
} 
formElementEdit.addEventListener('submit', submitHandler);  

// нажатие крестика
btnCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit); 
  formElementEdit.reset()
});

//_____________________________
//  ДОБАВЛЕНИЕ КАРТОЧКИ
//_____________________________

// ф-ция добавления карточки
  function addCard(name, link) {
    const cardsTemplate = document.querySelector('.elements__list').content;
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
        
    //открыть попап фото
    cardFoto.addEventListener ('click', function () {
      openPopup(popupFoto);
      imgFoto.src = link;
      imgFoto.alt = `${name} на фотографии`;
      nameFoto.textContent = name;
      //закрыть попап фото
      btnCloseFoto.addEventListener('click', () => closePopup(popupFoto));
    });

    cardsContainer.prepend(cardElement)
  }

// добавляю массив фотографий
  initialCards.forEach(item => addCard(item.name , item.link))

//_____________________________
//  ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
//_____________________________

btnAddCard.addEventListener('click', ()=>openPopup(popupAddCard) )

// обработчик «отправки» формы добавления фото
function submitHandlerFoto (evt) { 
  evt.preventDefault();
  addCard(nameFotoInp.value, linkFotoInp.value);
  formElementAddFoto.reset();
  closePopup(popupAddCard);
} 
formElementAddFoto.addEventListener('submit', submitHandlerFoto);  

// нажатие крестика
btnCloseAddFoto.addEventListener('click', () => {
  closePopup(popupAddCard); 
  formElementAddFoto.reset();
});