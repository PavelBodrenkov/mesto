import './index.css';

import PopupWithImage from './../components/PopupWithImage.js';
import Popup from './../components/Popup.js';
import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import {popupTypeEdit, popupAddTypePhoto, buttonTypeEdit, profileName, profileSubtitle, popupDataTypeName,
        popupDataTypeJob, buttonTypeAddCard, formTypePhoto, formTypeEdit,
        buttonTypeSaveEdit, elementContent, buttonTypeSaveAdd, popupTypePhoto, } from './../utils/constants.js';
import {initialCards} from './../utils/constants.js';
import UserInfo from './../components/UserInfo.js';
import PopupWithForm from './../components/PopupWithForm.js';

// Создаем карточки
const cardList = new Section (initialCards, renderer, elementContent)
function renderer (item) {
  const card = new Card({data: item, handleCardClick: () => {
    const popupWithImage = new PopupWithImage (item, popupTypePhoto);
    popupWithImage.open();
    console.log('handle click card')
  }}, '#element-add')
  const cardElement = card.generateCard();
  cardList.addItem(cardElement, true)
}
cardList.renderItems();

//Открытие попапа профиля
const popupProfile = new Popup (popupTypeEdit);
popupProfile.setEventListeners();
buttonTypeEdit.addEventListener('click', () => {
  formValidateProfile.removeDisabledButton (buttonTypeSaveEdit);
  formValidateProfile.resetForm (formTypeEdit);
  // Добавление данных в инпуты
  const currentUserInfo = userInfoProfile.getUserInfo();
  popupDataTypeName.value = currentUserInfo.name;
  popupDataTypeJob.value = currentUserInfo.info;
  popupProfile.open();
})

// Открытие попапа карточки
const popupPhoto = new Popup (popupAddTypePhoto);
buttonTypeAddCard.addEventListener('click', () => {
  formValidatePhoto.disabledButton(buttonTypeSaveAdd);
  formValidatePhoto.resetForm (formTypePhoto);
  popupPhoto.setEventListeners()
  popupPhoto.open();
})

// Добавление данных в профиль
const userInfoProfile = new UserInfo ({SelectorName: profileName, SelectorProfession: profileSubtitle})
const popupEditForm = new PopupWithForm ({popupSelector:popupTypeEdit, handleEditSubmit: (item) => {
  console.log(item)
  userInfoProfile.setUserInfo({name:item['name'], info:item['profession']});
}
})
popupEditForm.setEventListeners()

// Новая карточка
const popupPhotoForm = new PopupWithForm ({popupSelector:popupAddTypePhoto, handleFormSubmit: (item) => {
  console.log(item)
  const card = new Card({data:{name:item['point'], link:item['photo']}, handleCardClick: () => {
    const popupWithImage = new PopupWithImage ({name:item['point'], link:item['photo']}, popupTypePhoto);
        popupWithImage.open();
    }}, '#element-add')
  const cardElement = card.generateCard();
  cardList.addItem(cardElement, false)
}
})
popupPhotoForm.setEventListeners()

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











