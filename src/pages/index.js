import './index.css';

import PopupWithImage from './../components/PopupWithImage.js';
import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import {popupTypeEdit, popupAddTypePhoto, buttonTypeEdit, profileName, profileSubtitle, popupDataTypeName,
        popupDataTypeJob, buttonTypeAddCard, formTypePhoto, formTypeEdit,
        buttonTypeSaveEdit, elementContent, buttonTypeSaveAdd, popupTypePhoto, initialCards, elementAdd, validationConfig,
        popupDelete, popupAvatar, profileAvatarContainer, formTypeAvatar, profileAvatar, element, formTypeDelete, userId, elementAddUser, buttonTypeDelete} from './../utils/constants.js';
import UserInfo from './../components/UserInfo.js';
import PopupWithForm from './../components/PopupWithForm.js';
import PopupWidthFormSubmit from './../components/PopupWidthFormSubmit.js'
import Api from './../components/Api.js'



const bigPhoto = new PopupWithImage (popupTypePhoto)
bigPhoto.setEventListeners()

function createCard ({data, handleCardClick, hendelDeleteClick, hendleAddLikeClick}, cardSelector) {
  const card = new Card ({data, handleCardClick, hendelDeleteClick, hendleAddLikeClick}, cardSelector)
  return card
}


// Функция создания карточек
// function createCard (item) {
//
//  const card = new Card(
//   const cardElement = card.generateCard();
//   return cardElement;
// }

// Создаем карточки из массива
const cardList = new Section ({renderer: (item) =>{
    const card = createCard ({data: item,
    handleCardClick: () => {
    console.log(item)
    bigPhoto.open(item)

    }, hendelDeleteClick: (item) => {
      const popupWidthFormSubmit = new PopupWidthFormSubmit ({popupElement: popupDelete})
      popupWidthFormSubmit.setEventListeners()
      formTypeDelete.addEventListener('submit', (evt) => {
      evt.preventDefault()
      api.deleteAddCard(item)
      .then(() => card.deleteCard())
      .catch(err => console.log('ошибка'))
      popupWidthFormSubmit.close()
      })

    }, hendleAddLikeClick: (cardId, isLiked, data) => {
      if(isLiked === false) {
        api.addLike(cardId)
        .then(res => {
          data(res)
        })
        .catch((err) => {
          console.log(err)
        });
      }else {
        api.deleteLike(cardId)
        .then(res => {
          data(res)
        })
        .catch((err) => {
          console.log(err)
        })
      }

    },

  }, elementAdd, userInfoProfile.getUserInfo().id)
  cardList.addItem(card.generateCard(), true)
  }

}, elementContent)



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
const userInfoProfile = new UserInfo (profileName,  profileSubtitle)
const popupEditForm = new PopupWithForm ({popupElement:popupTypeEdit, handleFormSubmit: (item) => {
  console.log(item)
  userInfoProfile.setData({name:item['name'], info:item['profession']});
  api.pathEditProfile({name:item['name'], about:item['profession']})
}})
popupEditForm.setEventListeners()
console.log(userInfoProfile.getUserInfo().id)
// Новая карточка
const popupPhotoForm = new PopupWithForm({
  popupElement: popupAddTypePhoto, handleFormSubmit: (item) => {
    console.log(item)
    api.postAddCard({ name: item.point, link: item.photo })
      .then((result) => {
        console.log(result)

        cardList.renderItems(result)
        cardList.addItem(card.generateCard(), false)
        })

}})
popupPhotoForm.setEventListeners()
console.log(userInfoProfile.getUserInfo().id)
// const popupWidthFormSubmit = new PopupWidthFormSubmit ({popupElement: popupDelete, element:buttonTypeDelete})
//   popupWidthFormSubmit.setEventListeners()

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
  address: 'https://mesto.nomoreparties.co/v1/cohort-19',
  token: '175e5d69-964d-4046-a547-a053671ab7db',
         'Content-Type': 'application/json'
})


const user = new UserInfo ()

//Получаем все карточки
api.getInitialCards()
.then (data => {
  cardList.renderItems(data)
 })
.catch((err) => {
  console.log(err)
})

//Получаем данные профиля
api.getInitialProfile()
.then((result) => {
  console.log(result._id)
  userInfoProfile.setUserInfo(result.name, result.about, result.avatar, result._id);
})
.catch((err) => {
  console.log(err)
})












