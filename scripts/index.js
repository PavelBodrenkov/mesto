import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupAddTypePhoto = document.querySelector('.popup_add_type-photo');
const buttonTypeClose = popupTypeEdit.querySelector('.button_type_close');
const buttonTypeClosePhoto = document.querySelector('.button_type_close-photo');
const buttonTypeEdit = document.querySelector('.button_type_edit');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const popupDataTypeName = formElement.querySelector('.popup__data_type_name');
const popupDataTypeJob = formElement.querySelector('.popup__data_type_job');
const buttonTypeAddCard = document.querySelector('.button_type_add-card');
const formTypePhoto = document.querySelector('.form_type_photo');
const popupDataTypeLocation = document.querySelector('.popup__data_type_location');
const popupDataTypeLink = document.querySelector('.popup__data_type_link');
const popapTypePhoto = document.querySelector('.popup_type_photo');
const buttonTypeBigClose = document.querySelector('.button_type_big-close');
const formEditReset = document.querySelector('#form_reset');
const Esc = 27;
const buttonTypeSaveEdit = document.querySelector('.button_type_save-edit');
const elementContent = document.querySelector('.elements__content');

// Добавляем новую карточку
const submitFormCard = (e) => {
  e.preventDefault();
  const data = {}
  data.name = popupDataTypeLocation.value
  data.link = popupDataTypeLink.value
  const card = new Card(data, '#element-add')
  elementContent.prepend(card.generateCard())
  resetForm(formTypePhoto);
  closePopup(popupAddTypePhoto);
}

formTypePhoto.addEventListener('submit', submitFormCard)
 
// Добавляем все карточки
initialCards.forEach((item) => {
  const card = new Card (item, '#element-add') //Передаем объект как аргумент
  const cardElement = card.generateCard()
  elementContent.append(cardElement)
})

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.popup__data',
  submitButtonSelector: '.button',
  inputInvalidClass: 'popup__data_type_error',
  buttonInvalidClass: 'button_type_inactive',
  disableButtonInvalid: 'button_type_inactive'
};

//Валидация формы профиля
const FormValidateProfile = new FormValidator(validationConfig, '.form_type_edit')
FormValidateProfile.enableValidation();

//Валидация формы фото
const FormValidatePhoto = new FormValidator(validationConfig, '.form_type_photo')
FormValidatePhoto.enableValidation();
  


//Открываем попап
function popupOpen(popapOpen) {
  popapOpen.classList.add('popup_opened'); 
}

//Закрываем попап
function closePopup(popapClose) {
  popapClose.classList.remove('popup_opened');
}

//добавляем данные в value со страницы
function setInputValue() {
  popupDataTypeName.value = profileName.textContent;
  popupDataTypeJob.value = profileSubtitle.textContent;
}

// Сбрасываем форму
function resetForm(element) {
  element.reset();
  element.querySelectorAll('.popup__data-error').forEach((span) => {
    span.textContent ='';
  })
  element.querySelectorAll('.popup__data').forEach((input) => {
   input.classList.remove('popup__data_type_error');
  })
}

//Функция закрывает форму клик по фону//
function handlePopupClick(evt) {
  if(evt.target.classList.contains('popup')) {
    resetForm(formEditReset)
    closePopup(popupTypeEdit);
  }
}
function closePopupPhoto(evt) {
  if(evt.target.classList.contains('popup_add_type-photo')) {
    resetForm(formTypePhoto);
    closePopup(popupAddTypePhoto);
  }
}
function closePopupBigPhoto(evt) {
  if(evt.target.classList.contains('popup_type_photo')) {
    closePopup(popapTypePhoto);
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
    resetForm(formEditReset);
    resetForm(formTypePhoto);
    const popupActive = document.querySelector('.popup_opened')
    closePopup(popupActive)
    }
  }

//Открываем попап//
buttonTypeEdit.addEventListener('click', () => {
  setInputValue();
  FormValidateProfile.removeDisabledButton (buttonTypeSaveEdit)
  popupOpen(popupTypeEdit);
});

buttonTypeAddCard.addEventListener('click', function() {
 popupOpen(popupAddTypePhoto);
});

//Закрываем попап//
buttonTypeClose.addEventListener('click', function () {
  resetForm(formEditReset);
  closePopup(popupTypeEdit);
});

buttonTypeClosePhoto.addEventListener('click', function() {
  resetForm(formTypePhoto);
  closePopup(popupAddTypePhoto);
});

buttonTypeBigClose.addEventListener('click', function() {
  closePopup(popapTypePhoto);
});

//Слушатель кнопок
formElement.addEventListener('submit', handleFormSubmit);
formTypePhoto.addEventListener('submit',submitFormCard)
  
//Закрытие попап по фону
popupTypeEdit.addEventListener('click', handlePopupClick);
popupAddTypePhoto.addEventListener('click', closePopupPhoto);
popapTypePhoto.addEventListener('click', closePopupBigPhoto);

// Закрытие попап Esc
document.addEventListener('keydown',closePopupEsc);





  
  



