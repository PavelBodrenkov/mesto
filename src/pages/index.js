import './index.css';

import PopupWithImage from './../components/PopupWithImage.js';
import Section from './../components/Section.js';
import Card from './../components/Card.js';
import FormValidator from './../components/FormValidator.js';
import {popupTypeEdit, popupAddTypePhoto, buttonTypeEdit, profileName, profileSubtitle, popupDataTypeName,
        popupDataTypeJob, buttonTypeAddCard, formTypePhoto, formTypeEdit,
        buttonTypeSaveEdit, elementContent, buttonTypeSaveAdd, popupTypePhoto, elementAdd, validationConfig,
        popupDelete, popupAvatar, profileAvatarContainer, formTypeAvatar, profileAvatar, buttonTypeSaveProfile} from './../utils/constants.js';
import UserInfo from './../components/UserInfo.js';
import PopupWithForm from './../components/PopupWithForm.js';
import PopupWidthFormSubmit from './../components/PopupWidthFormSubmit.js'
import Api from './../components/Api.js'


const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-19',
  token: '175e5d69-964d-4046-a547-a053671ab7db',
         'Content-Type': 'application/json'
})

//Получаем данные профиля
api.getInitialProfile()
.then((result) => {
  console.log(result.name)
  userInfoProfile.setUserInfo(result.name, result.about, result.avatar, result._id);
})
.catch((err) => {
  console.log(`ошибка:${err}`)
})

//Получаем все карточки
api.getInitialCards()
.then (data => {
  const isAppend = true
  cardList.renderItems(data, isAppend)
 })
.catch((err) => {
  console.log(`ошибка:${err}`)
})

const bigPhoto = new PopupWithImage (popupTypePhoto)
bigPhoto.setEventListeners()

function createCard ({data, handleCardClick, hendelDeleteClick, hendleAddLikeClick}, cardSelector, userId) {
  const card = new Card ({data, handleCardClick, hendelDeleteClick, hendleAddLikeClick}, cardSelector, userId)
  return card
}
//Добавляем UX
function renderLoading(isloading, element) {
  if (isloading) {
    element.textContent = 'Сохранение...'
  } else {
    element.textContent = element.value
  }
}

// Создаем карточки из массива
const popupWidthFormSubmit = new PopupWidthFormSubmit ({popupElement: popupDelete})
const cardList = new Section({
  renderer: (item, insert) => {
    const card = createCard({
      data: item,
      handleCardClick: () => {
        console.log(item)
        bigPhoto.open(item)
      },
      hendelDeleteClick: (item) => {
        popupWidthFormSubmit.open()
        popupWidthFormSubmit.setEventListeners()
        popupWidthFormSubmit.setSubmitAction(() => {
          api.deleteAddCard(item)
            .then(() => {
              card.deleteCard()
              popupWidthFormSubmit.close()
            })
            .catch(err => console.log(`ошибка:${err}`))
        })
      },
      hendleAddLikeClick: (cardId, isLiked, data) => {
        if (isLiked === false) {
          api.addLike(cardId)
            .then(res => {
              data(res)
            })
            .catch((err) => {
              console.log(`ошибка:${err}`)
            });
        } else {
          api.deleteLike(cardId)
            .then(res => {
              data(res)
            })
            .catch((err) => {
              console.log(`ошибка:${err}`)
            })
        }
      },
    }, elementAdd, userInfoProfile.getUserInfo().id)
    cardList.addItem(card.generateCard(), insert)
  }
}, elementContent)

//Добавление данных в профиль
const userInfoProfile = new UserInfo(profileName, profileSubtitle, profileAvatar)
const popupEditForm = new PopupWithForm({
  popupElement: popupTypeEdit, handleFormSubmit: (item) => {
    console.log(item)
    renderLoading(true, buttonTypeSaveEdit)
    api.pathEditProfile({ name: item['name'], about: item['profession'] })
      .then(result => userInfoProfile.setUserInfo(result.name, result.about, result.avatar, result._id))
      .catch(err => console.log(`ошибка:${err}`))
      .finally(() => {
        renderLoading(false, buttonTypeSaveEdit)
      })
  }
})
popupEditForm.setEventListeners()

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

// Новая карточка
const popupPhotoForm = new PopupWithForm({
  popupElement: popupAddTypePhoto, handleFormSubmit: (item) => {
    console.log(item)
    renderLoading(true, buttonTypeSaveAdd)
    api.postAddCard({ name: item.point, link: item.photo })
      .then((result) => {
        console.log(result)
        const isAppend = false
        cardList.renderItems(result, isAppend)

      })
      .catch(err => console.log(`ошибка:${err}`))
      .finally(() => {
        renderLoading(false, buttonTypeSaveAdd)
      })
}})
popupPhotoForm.setEventListeners()

// const popupWidthFormSubmit = new PopupWidthFormSubmit ({popupElement: popupDelete, element:buttonTypeDelete})
//   popupWidthFormSubmit.setEventListeners()

// Фото Аватара
const popupOpenAvatar = new PopupWithForm({popupElement: popupAvatar, handleFormSubmit: (item) => {
  renderLoading(true, buttonTypeSaveProfile)
  api.addAvatar({ avatar: item.photoAvatar })
    .then((result) => {
      profileAvatar.src = result.avatar
    })
    .catch(err => console.log(`ошибка:${err}`))
    .finally(() => {
      renderLoading(false, buttonTypeSaveProfile)
    })

}
})
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















