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
const popupAddTypePhoto = document.querySelector('.popup__add_type_photo');
const buttonTypeClose = popupTypeEdit.querySelector('.button__type_close');
const buttonTypeClosePhoto = document.querySelector('.button__type_close_add-photo');
const buttonTypeEdit = document.querySelector('.button__type_edit');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const popupDataTypeName = formElement.querySelector('.popup__data_type_name');
const popupDataTypeJob = formElement.querySelector('.popup__data_type_job');
const buttonTypeAddCard = document.querySelector('.button__type_add-card');
const formTypePhoto = document.querySelector('.form_type_photo');
const popupDataTypeLocation = document.querySelector('.popup__data_type_location');
const popupDataTypeLink = document.querySelector('.popup__data_type_link');
const popapTypePhoto = document.querySelector('.popup_type_photo');
const buttonTypeBigClose = document.querySelector('.button__type_big_close');



//Загружаем фото на страницу через массив
const elementTemplate = document.querySelector('#element-add').content;
const elementContent = document.querySelector('.elements__content');

initialCards.map((el) => {
  const elementCard = elementTemplate.cloneNode(true);
  elementCard.querySelector('.element__photo').src = el.link;
  elementCard.querySelector('.element__subtitle').textContent = el.name;
  elementCard.querySelector('.button__type_delite').addEventListener('click', (event) => {
    const elementContent = event.target.closest('.element');
    if(elementContent) {
      elementContent.remove()
    }
  }) 

  elementContent.append(elementCard);
});

//Добавляем карточки
function formAddPhoto(event) {
  event.preventDefault();
  const elementCard = elementTemplate.cloneNode(true);
  elementCard.querySelector('.element__photo').src = popupDataTypeLink.value;
  elementCard.querySelector('.element__subtitle').textContent = popupDataTypeLocation.value;
  elementContent.prepend(elementCard);
  popupDataTypeLink.value = '';
  popupDataTypeLocation.value = '';
  closeForm(popupAddTypePhoto);
}

//Открыть фото
const openPopapPhoto = (event) => {
  if (event.target.classList.contains('element__photo')) {
    const popupBigPhoto = document.querySelector('.popup__big-photo');
    popupBigPhoto.src = event.target.src;
    const popupBigTitle = document.querySelector('.popup__big-title');
    popupBigTitle.textContent = event.target.closest('.element').querySelector('.element__subtitle').textContent;
    openForm(popapTypePhoto);
  }
};
elementContent.addEventListener('click', openPopapPhoto);
//

//Поставить лайк
const addLike = (event) => {
  const btnAddLike = event.target.classList.contains('button__type_like');
  if(btnAddLike) {
    event.target.classList.toggle('button__type_like_active')
  }
}
elementContent.addEventListener('click', addLike);
//

//Удаляем карточки
const delitCard = (event) => {
  const btnDelitCard = event.target.classList.contains('button__type_delite');
  if(btnDelitCard) {
    event.target.closest('.element').remove();
  }
}
elementContent.addEventListener('click', delitCard);
//

//добавляем данные в value со страницы
function setInputValue() {
  popupDataTypeName.value = profileName.textContent;
  popupDataTypeJob.value = profileSubtitle.textContent;
}
//Открываем попап
function openForm(popapOpen) {
  popapOpen.classList.add('popup_opened');
    setInputValue();
}
//Закрываем попап
function closeForm(popapClose){
  popapClose.classList.remove('popup_opened'); 
}
//Функция закрывает форму клик по фону//
function popupClickHandler(evt) {
    if(evt.target.classList.contains('popup')) {
      closeForm(popupTypeEdit);
    }
}
function popupClosePhoto(evt) {
    if(evt.target.classList.contains('popup__add_type_photo')) {
      closeForm(popupAddTypePhoto);
    }
}
//
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent=popupDataTypeName.value;
    profileSubtitle.textContent=popupDataTypeJob.value;
    closeForm(popupTypeEdit);
}




//Открываем попап//
buttonTypeEdit.addEventListener('click', function() {
  openForm(popupTypeEdit);
});
buttonTypeAddCard.addEventListener('click', function() {
  openForm(popupAddTypePhoto);
});

//Закрываем попап//
buttonTypeClose.addEventListener('click', function () {
  closeForm(popupTypeEdit);
});
buttonTypeClosePhoto.addEventListener('click', function() {
  closeForm(popupAddTypePhoto);
});
buttonTypeBigClose.addEventListener('click', function() {
  closeForm(popapTypePhoto)});
//Слушатель кнопок
formElement.addEventListener('submit', formSubmitHandler);
formTypePhoto.addEventListener('submit', formAddPhoto);
//Закрытие попап по фону
popupTypeEdit.addEventListener('click', popupClickHandler);
popupAddTypePhoto.addEventListener('click', popupClosePhoto);









  
  



