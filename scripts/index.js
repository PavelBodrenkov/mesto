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
// const span = formElement.querySelector('.popup__data_error');

//Загружаем фото на страницу через массив
const elementTemplate = document.querySelector('#element-add').content;
const elementContent = document.querySelector('.elements__content');

initialCards.forEach((el) => {
  elementContent.append(createCard(el.link, el.name));
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
  return elementCard;
}

const addPhoto = createCard(popupDataTypeLink.value, popupDataTypeLocation.value);

//Добавляем карточки
function addPhotoForm(event) {
  event.preventDefault();
  const addPhoto = createCard(popupDataTypeLink.value, popupDataTypeLocation.value);
  elementContent.prepend(addPhoto);
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
function handlePopupClick(evt) {
  if(evt.target.classList.contains('popup')) {
    resetForm();
    closePopup(popupTypeEdit);
  }
}
function closePopupPhoto(evt) {
  if(evt.target.classList.contains('popup_add_type-photo')) {
    popupDataTypeLink.value = '';
    popupDataTypeLocation.value = '';
    resetForm()
    closePopup(popupAddTypePhoto);
  }
}
function closePopupBigPhoto(evt) {
  if(evt.target.classList.contains('popup_type_photo')) {
    closePopup(popapTypePhoto);
  }
}

//
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent=popupDataTypeName.value;
  profileSubtitle.textContent=popupDataTypeJob.value;
  closePopup(popupTypeEdit);
}

//Закрываем по нажатию Esc
function closePopupEsc (e) {
 if(e.keyCode === 27 && popupTypeEdit.classList.contains('popup_opened')){
  resetForm();
  closePopup(popupTypeEdit);
 }else if(e.keyCode === 27 && popupAddTypePhoto.classList.contains('popup_opened')) {
  popupDataTypeLink.value = '';
  popupDataTypeLocation.value = '';
  resetForm();
  closePopup(popupAddTypePhoto);
 }else if(e.keyCode === 27 && popapTypePhoto.classList.contains('popup_opened')) {
  closePopup(popapTypePhoto);
 }
}

// Сбрасываем ошибку валидации
function resetForm() {
  document.querySelectorAll('.popup__data_error').forEach((span) => {
    span.textContent ='';
 })
 document.querySelectorAll('.popup__data').forEach((input) => {
  input.classList.remove('popup__data_type_error');
 })
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
  resetForm()
  closePopup(popupTypeEdit);
});
buttonTypeClosePhoto.addEventListener('click', function() {
  popupDataTypeLink.value = '';
  popupDataTypeLocation.value = '';
  resetForm();
  closePopup(popupAddTypePhoto);
});
buttonTypeBigClose.addEventListener('click', function() {
  closePopup(popapTypePhoto);
});
//Слушатель кнопок
formElement.addEventListener('submit', handleFormSubmit);
formTypePhoto.addEventListener('submit',addPhotoForm)
  
 
//Закрытие попап по фону
popupTypeEdit.addEventListener('click', handlePopupClick);
popupAddTypePhoto.addEventListener('click', closePopupPhoto);
popapTypePhoto.addEventListener('click', closePopupBigPhoto);

// Закрытие попап Esc
document.addEventListener('keydown', closePopupEsc);








  
  



