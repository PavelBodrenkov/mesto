import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {openPopup} from './utils.js';
import {closePopup} from './utils.js';
import {popupTypeEdit, popupAddTypePhoto, buttonTypeClose, buttonTypeClosePhoto, buttonTypeEdit, profileName, 
  profileSubtitle, popupDataTypeName, popupDataTypeJob, buttonTypeAddCard, formTypePhoto, formTypeEdit, popupDataTypeLocation,
  popupDataTypeLink, popapTypePhoto, buttonTypeBigClose, Esc, buttonTypeSaveEdit, elementContent, buttonTypeSaveAdd} from './constants.js';
import {initialCards} from './initialCards.js'

// Добавляем новую карточку
const submitFormCard = (e) => {
  e.preventDefault();
  const data = {}
  data.name = popupDataTypeLocation.value
  data.link = popupDataTypeLink.value
  elementContent.prepend(addCard(data))
  formValidatePhoto.resetForm (formTypePhoto)
  closePopup(popupAddTypePhoto);
}

// Создание карточки
function addCard (element)  {
  const card = new Card(element, '#element-add')
  card.generateCard();
  return card.generateCard();
}

// Добавляем все карточки
initialCards.forEach((item) => {
  elementContent.append(addCard(item))
})

const validationConfig = {
  inputSelector: '.popup__data',
  submitButtonSelector: '.button',
  inputInvalidClass: 'popup__data_type_error',
  buttonInvalidClass: 'button_type_inactive',
  disableButtonInvalid: 'button_type_inactive'
};

//Валидация формы профиля
const formValidateProfile = new FormValidator(validationConfig, '.form_type_edit')
formValidateProfile.enableValidation();

//Валидация формы фото
const formValidatePhoto = new FormValidator(validationConfig, '.form_type_photo')
formValidatePhoto.enableValidation();
  
//добавляем данные в value со страницы
function setInputValue() {
  popupDataTypeName.value = profileName.textContent;
  popupDataTypeJob.value = profileSubtitle.textContent;
}

// закрываем попап клик по фону
function closeByOverlayClick (evt) {
  if(evt.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened')
    formValidatePhoto.disabledButton(buttonTypeSaveAdd)
    formValidatePhoto.resetForm (formTypePhoto)
    closePopup(openedPopup);
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent=popupDataTypeName.value;
  profileSubtitle.textContent=popupDataTypeJob.value;
  closePopup(popupTypeEdit);
}


//Закрываем по нажатию Esc
function closePopupEsc (evt) {
  if(evt.keyCode === Esc){
    const popupActive = document.querySelector('.popup_opened')
    if(formTypeEdit) {
      formValidateProfile.resetForm (formTypeEdit)
    }
    if(formTypePhoto) {
      formValidatePhoto.resetForm (formTypePhoto)
      formValidatePhoto.disabledButton(buttonTypeSaveAdd)
    }  
    closePopup(popupActive)
    }
  }

//Открываем попап//
buttonTypeEdit.addEventListener('click', () => {
  setInputValue();
  formValidateProfile.removeDisabledButton (buttonTypeSaveEdit)
  openPopup(popupTypeEdit);
  document.addEventListener('keydown',closePopupEsc);
});

buttonTypeAddCard.addEventListener('click', function() {
  openPopup(popupAddTypePhoto);
  document.addEventListener('keydown',closePopupEsc);
});

//Закрываем попап//
buttonTypeClose.addEventListener('click', function () {
  formValidateProfile.resetForm (formTypeEdit)
  closePopup(popupTypeEdit);
  document.removeEventListener('keydown',closePopupEsc);
});

buttonTypeClosePhoto.addEventListener('click', function() {
  formValidatePhoto.resetForm (formTypePhoto)
  formValidatePhoto.disabledButton(buttonTypeSaveAdd)
  closePopup(popupAddTypePhoto);
  document.removeEventListener('keydown',closePopupEsc);
});

buttonTypeBigClose.addEventListener('click', function() {
  closePopup(popapTypePhoto);
});

//Слушатель кнопок
formTypeEdit.addEventListener('submit', handleFormSubmit);
formTypePhoto.addEventListener('submit',submitFormCard)
  
//Закрытие попап по фону
document.addEventListener('click', closeByOverlayClick);






  
  



