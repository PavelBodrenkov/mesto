import './index.css';

import PopupWithImage from './../components/PopupWithImage.js';
import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import {popupTypeEdit, popupAddTypePhoto, buttonTypeEdit, profileName, profileSubtitle, popupDataTypeName,
        popupDataTypeJob, buttonTypeAddCard, formTypePhoto, formTypeEdit,
        buttonTypeSaveEdit, elementContent, buttonTypeSaveAdd, popupTypePhoto, initialCards, elementAdd, validationConfig,
        popupDelete, popupAvatar, profileAvatarContainer, formTypeAvatar, profileAvatar, element, formTypeDelete} from './../utils/constants.js';
import UserInfo from './../components/UserInfo.js';
import PopupWithForm from './../components/PopupWithForm.js';
import PopupWidthFormSubmit from './../components/PopupWidthFormSubmit.js'
import Api from './../components/Api.js'



const bigPhoto = new PopupWithImage (popupTypePhoto)
bigPhoto.setEventListeners()

// Функция создания карточек
function createCard (item) {
  const card = new Card({data: item, handleCardClick: () => {
    console.log(item)
    bigPhoto.open(item)
  }}, elementAdd)
  const cardElement = card.generateCard();
  return cardElement;
}

// Создаем карточки из массива
 const cardList = new Section ({}, elementContent)


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
  api.pathEditProfile({name:item['name'], about:item['profession']})
}})
popupEditForm.setEventListeners()

// Новая карточка
const popupPhotoForm = new PopupWithForm ({popupElement: popupAddTypePhoto, handleFormSubmit: (item) => {
  console.log(item)
  api.postAddCard({name:item.point, link:item.photo})
  createCard ({name:item.point, link:item.photo})
  const element = createCard({name:item.point, link:item.photo})
  cardList.addItem(element, false)




  const popupWidthFormSubmit = new PopupWidthFormSubmit ({popupElement: popupDelete, element:deliteButon})

  popupWidthFormSubmit.setEventListeners()
}})
popupPhotoForm.setEventListeners()



// Фото Аватара
const popupOpenAvatar = new PopupWithForm({popupElement: popupAvatar, handleFormSubmit: (item) => {
  api.addAvatar({avatar:item.photoAvatar})
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

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: '175e5d69-964d-4046-a547-a053671ab7db',
    'Content-Type': 'application/json'
  }
})

api.getInitialCards()
.then ((item) => {
  //  console.log(item)
    const cardList = new Section ({items:item, renderer: (item) =>{
    createCard (item)
    const element = createCard(item)
    cardList.addItem(element, true)
  }}, elementContent)
  cardList.renderItems();

//   const idCard = {
//     _id: '0ab9e035a96b4c33f93c1a9c'
//   }
//   const result = item.forEach((item) =>{
//     if (item.owner._id === idCard._id){
//       console.log('Привет')
//       const deliteButon = document.createElement('button')
//       deliteButon.className = 'button button_type_delete';
//       document.querySelector('.element').prepend(deliteButon)
//       return result
//     }
//   })
//   if(result) {
//     console.log('Привет')
//     const deliteButon = document.createElement('button')
//     deliteButon.className = 'button button_type_delete';
//     document.querySelector('.element').prepend(deliteButon)
//      element.prepend
//   }else {
//    console.log(false)
//   }
 })

.catch((err) => {
  console.log(err)
})

//Получаем данные профиля
api.getInitialProfile()
.then((result) => {
  userInfoProfile.setUserInfo({name:result.name, info:result.about});
  profileAvatar.src = result.avatar
})

const ttt = [{
  name:'',
  
}]
console.log(result._id)





// console.log(userId)

// api.deleteAddCard()









