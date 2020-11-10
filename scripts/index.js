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
const popupBigPhoto = document.querySelector('.popup__big-photo');
const popupBigTitle = document.querySelector('.popup__big-title');


//Загружаем фото на страницу через массив
const elementTemplate = document.querySelector('#element-add').content;
const elementContent = document.querySelector('.elements__content');

initialCards.forEach((el) => {
  createCard(el.link, el.name);
});

//Загружаем фото на страницу через массив
function createCard (link, name) {
  const elementCard = elementTemplate.cloneNode(true);
  elementCard.querySelector('.element__photo').src = link;
  elementCard.querySelector('.element__subtitle').textContent = name;
  elementCard.querySelector('.button_type_delete').addEventListener('click', (event) => {
    const elementContent = event.target.closest('.element');
    if(elementContent) {
      elementContent.remove();
    }
});
  elementContent.prepend(elementCard);
  return elementCard;
}

//Добавляем карточки
function addPhotoForm(event) {
  createCard (popupDataTypeLink.value, popupDataTypeLocation.value)
  event.preventDefault();
  popupDataTypeLink.value = '';
  popupDataTypeLocation.value = '';
  closePopup(popupAddTypePhoto);
}

//Открыть фото
const openPopupPhoto = (event) => {
  if (event.target.classList.contains('element__photo')) {
    popupBigPhoto.src = event.target.src;
    const elementSubtitle = event.target.closest('.element').querySelector('.element__subtitle');
    popupBigTitle.textContent = elementSubtitle.textContent;
    popupOpen(popapTypePhoto);
  }
};
elementContent.addEventListener('click', openPopupPhoto);
//

//Поставить лайк
const addLike = (event) => {
  const btnAddLike = event.target.classList.contains('button_type_like');
  if(btnAddLike) {
    event.target.classList.toggle('button_type_like_active');
  }
};
elementContent.addEventListener('click', addLike);
//

//Удаляем карточки
const delitCard = (event) => {
  const btnDelitCard = event.target.classList.contains('button_type_delete');
  if(btnDelitCard) {
    event.target.closest('.element').remove();
  }
};
elementContent.addEventListener('click', delitCard);
//

//добавляем данные в value со страницы
function setInputValue() {
  popupDataTypeName.value = profileName.textContent;
  popupDataTypeJob.value = profileSubtitle.textContent;
}
//Открываем попап
function popupOpen(popapOpen) {
  popapOpen.classList.add('popup_opened');  
}
//Закрываем попап
function closePopup(popapClose){
  popapClose.classList.remove('popup_opened'); 
}
//Функция закрывает форму клик по фону//
function HandlerpopupClick(evt) {
  if(evt.target.classList.contains('popup')) {
    closePopup(popupTypeEdit);
  }
}
function ClosePopupPhoto(evt) {
  if(evt.target.classList.contains('popup__add_type_photo')) {
    closePopup(popupAddTypePhoto);
  }
}
//
function handlerFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent=popupDataTypeName.value;
  profileSubtitle.textContent=popupDataTypeJob.value;
  closePopup(popupTypeEdit);
}
//Открываем попап//
buttonTypeEdit.addEventListener('click', function() {
  popupOpen(popupTypeEdit);
  setInputValue();
});
buttonTypeAddCard.addEventListener('click', function() {
  popupOpen(popupAddTypePhoto);
});

//Закрываем попап//
buttonTypeClose.addEventListener('click', function () {
  closePopup(popupTypeEdit);
});
buttonTypeClosePhoto.addEventListener('click', function() {
  closePopup(popupAddTypePhoto);
});
buttonTypeBigClose.addEventListener('click', function() {
  closePopup(popapTypePhoto);
});
//Слушатель кнопок
formElement.addEventListener('submit', handlerFormSubmit);
formTypePhoto.addEventListener('submit', function(event) {
  if(!popupDataTypeLink.value && !popupDataTypeLocation.value) {
    event.preventDefault();
    alert('Поля не могут быть пустыми');
    return false;
 }else if(!popupDataTypeLink.value) {
    event.preventDefault();
    alert('Поле "Ссылка на картинку" пустое');
    return false;
 }else if (!popupDataTypeLocation.value){
   event.preventDefault();
   alert('Поле "Название" пустое');
   return false;
 }else {
   addPhotoForm(event);
 }
});
//Закрытие попап по фону
popupTypeEdit.addEventListener('click', HandlerpopupClick);
popupAddTypePhoto.addEventListener('click', ClosePopupPhoto);









  
  



