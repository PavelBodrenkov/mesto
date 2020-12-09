import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {openPopup, closePopup, closeByOverlayClick} from './utils.js';
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
const formValidateProfile = new FormValidator(validationConfig, '.form_type_edit');
formValidateProfile.enableValidation();

//Валидация формы фото
const formValidatePhoto = new FormValidator(validationConfig, '.form_type_photo');
formValidatePhoto.enableValidation();
  
//добавляем данные в value со страницы
function setInputValue() {
  popupDataTypeName.value = profileName.textContent;
  popupDataTypeJob.value = profileSubtitle.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent=popupDataTypeName.value;
  profileSubtitle.textContent=popupDataTypeJob.value;
  closePopup(popupTypeEdit);
}

//Открываем попап//
buttonTypeEdit.addEventListener('click', () => {
  formValidateProfile.removeDisabledButton (buttonTypeSaveEdit);
  formValidateProfile.resetForm (formTypeEdit);
  setInputValue();
  openPopup(popupTypeEdit);
});

buttonTypeAddCard.addEventListener('click', function() {
  openPopup(popupAddTypePhoto);
  formValidatePhoto.disabledButton(buttonTypeSaveAdd);
  formValidatePhoto.resetForm (formTypePhoto);
});

//Закрываем попап//
buttonTypeClose.addEventListener('click', function () {
  closePopup(popupTypeEdit);
});

buttonTypeClosePhoto.addEventListener('click', function() {
  formValidatePhoto.resetForm (formTypePhoto);
  formValidatePhoto.disabledButton(buttonTypeSaveAdd);
  closePopup(popupAddTypePhoto);
});

buttonTypeBigClose.addEventListener('click', function() {
  closePopup(popapTypePhoto);
});

//Слушатель кнопок
formTypeEdit.addEventListener('submit', handleFormSubmit);
formTypePhoto.addEventListener('submit',submitFormCard);
  
//Закрытие попап по фону
popupTypeEdit.addEventListener('click', closeByOverlayClick);
popupAddTypePhoto.addEventListener('click', closeByOverlayClick);
popapTypePhoto.addEventListener('click', closeByOverlayClick);






  
  



