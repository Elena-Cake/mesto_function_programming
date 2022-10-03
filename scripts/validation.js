//_____________________________
//  ВАЛИДАЦИЯ
//_____________________________
// span ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationObject.errorClass);
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationObject.inputErrorClass);
    errorElement.classList.remove(validationObject.errorClass);
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
    const inputList = Array.from(formElement.querySelectorAll(validationObject.inputSelector));
    const buttonElement = formElement.querySelector(validationObject.submitButtonSelector);
    toggleButtonState(inputList,buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList,buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(validationObject.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      
      const fieldsetList = Array.from(formElement.querySelectorAll(validationObject.fieldSet));
      
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      }); 
    });
  };
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement)=>{
      return !inputElement.validity.valid;
    })
  }
  
  function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)){
      buttonElement.classList.add(validationObject.inactiveButtonClass)
    } else {
      buttonElement.classList.remove(validationObject.inactiveButtonClass)
    }
  }

  const validationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'btn-save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    fieldSet:'.popup__set'
  }

  enableValidation(validationObject);