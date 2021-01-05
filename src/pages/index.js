import './index.css';

import PopupWithImage from './../components/PopupWithImage.js';
import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import {popupTypeEdit, popupAddTypePhoto, buttonTypeEdit, profileName, profileSubtitle, popupDataTypeName,
        popupDataTypeJob, buttonTypeAddCard, formTypePhoto, formTypeEdit,
        buttonTypeSaveEdit, elementContent, buttonTypeSaveAdd, popupTypePhoto, initialCards, elementAdd, validationConfig,
        popupDelete, popupAvatar, profileAvatarContainer, formTypeAvatar, profileAvatar, element} from './../utils/constants.js';
import UserInfo from './../components/UserInfo.js';
import PopupWithForm from './../components/PopupWithForm.js';


const bigPhoto = new PopupWithImage (popupTypePhoto)
bigPhoto.setEventListeners()

// Функция создания карточек
function createCard (item) {
  const card = new Card({data: item, handleCardClick: () => {
    console.log(item)
    bigPhoto.open(item)
  }}, elementAdd, popupDelete)
  const cardElement = card.generateCard();
  return cardElement;
}

// Создаем карточки из массива
const cardList = new Section ({items:initialCards, renderer: (item) =>{
  createCard (item)
  const element = createCard(item)
  cardList.addItem(element, true)
}}, elementContent)
cardList.renderItems();

//Открытие попапа профиля
buttonTypeEdit.addEventListener('click', () => {
  popupEditForm.open();
  formValidateProfile.removeDisabledButton (buttonTypeSaveEdit);
  formValidateProfile.resetForm (formTypeEdit);
  // Добавление данных в инпуты
  const currentUserInfo = userInfoProfile.getUserInfo();
  popupDataTypeName.value = currentUserInfo.name;
  popupDataTypeJob.value = currentUserInfo.info;
})

// Открытие попапа карточки
buttonTypeAddCard.addEventListener('click', () => {
  popupPhotoForm.open();
  formValidatePhoto.disabledButton(buttonTypeSaveAdd);
  formValidatePhoto.resetForm (formTypePhoto);
})

// Добавление данных в профиль
const userInfoProfile = new UserInfo ({selectorName: profileName, selectorProfession: profileSubtitle})
const popupEditForm = new PopupWithForm ({popupElement:popupTypeEdit, handleFormSubmit: (item) => {
  console.log(item)
  userInfoProfile.setUserInfo({name:item['name'], info:item['profession']});
}})
popupEditForm.setEventListeners()

// Новая карточка
const popupPhotoForm = new PopupWithForm ({popupElement: popupAddTypePhoto, handleFormSubmit: (item) => {
  console.log(item)
  createCard ({name:item.point, link:item.photo})
  const element = createCard({name:item.point, link:item.photo})
  cardList.addItem(element, false)
  const deliteButon = document.createElement('button')
  deliteButon.className = 'button button_type_delete';
  element.prepend(deliteButon)
  deliteButon.addEventListener('click', (evt) => {
    if(deliteButon) {
      evt.target.closest('.element').remove()

    }
  })
}})
popupPhotoForm.setEventListeners()



// Фото Аватара
const popupOpenAvatar = new PopupWithForm({popupElement: popupAvatar, handleFormSubmit: (item) => {
  console.log(item)
  profileAvatar.src = item.photoAvatar
}})
popupOpenAvatar.setEventListeners();

// Слушатель кнопки Аватара
profileAvatarContainer.addEventListener('click', () => {
  popupOpenAvatar.open()
  formValidateAvatar.resetForm(formTypeAvatar)
})


//Валидация формы профиля
const formValidateProfile = new FormValidator(validationConfig, formTypeEdit);
formValidateProfile.enableValidation();

//Валидация формы фото
const formValidatePhoto = new FormValidator(validationConfig, formTypePhoto);
formValidatePhoto.enableValidation();

// Валидация формы аватара
const formValidateAvatar = new FormValidator (validationConfig, formTypeAvatar)
formValidateAvatar.enableValidation();








