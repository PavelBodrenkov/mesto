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
const buttonClose = popupTypeEdit.querySelector('.button_type_close');
const buttonTypeClosePhoto = document.querySelector('.button_type_close_add-photo');
const editButton = document.querySelector('.button_type_edit');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.popup__data_type_name');
const jobInput = formElement.querySelector('.popup__data_type_job');
const buttonTypeAddCard = document.querySelector('.button_type_add-card');
const formTypePhoto = document.querySelector('.form_type_photo');
const popupDataTypeLocation = document.querySelector('.popup__data_type_location');
const popupDataTypeLink = document.querySelector('.popup__data_type_link');
const popapTypePhoto = document.querySelector('.popup_type_photo');
const buttonTypeBigClose = document.querySelector('.button_type_big_close');



//Загружаем фото на страницу через массив
const elementTemplate = document.querySelector('#element-add').content;
const element = document.querySelector('.elements__content');

initialCards.map((el) => {
  const elementCard = elementTemplate.cloneNode(true);
  elementCard.querySelector('.element__photo').src = el.link;
  elementCard.querySelector('.element__subtitle').textContent = el.name;
  elementCard.querySelector('.button_type_delite').addEventListener('click', (event) => {
    const elemnt = event.target.closest('.element');
    if(elemnt) {
      elemnt.remove()
    }
  }) 

   element.append(elementCard);
});

//Добавляем карточки
function formAddPhoto(event) {
  event.preventDefault();
  const elementCard = elementTemplate.cloneNode(true);
  elementCard.querySelector('.element__photo').src = popupDataTypeLink.value;
  elementCard.querySelector('.element__subtitle').textContent = popupDataTypeLocation.value;
  element.prepend(elementCard);
  closeForm(popupAddTypePhoto);

  popupDataTypeLink.value = '';
  popupDataTypeLocation.value = '';
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
element.addEventListener('click', openPopapPhoto);
//

//Поставить лайк
const addLike = (event) => {
  const btnAddLike = event.target.classList.contains('button_type_like');
  if(btnAddLike) {
    event.target.classList.toggle('button_type_like_active')
  }
}
element.addEventListener('click', addLike);
//

//Удаляем карточки
const delitCard = (event) => {
  const btnDelitCard = event.target.classList.contains('button_type_delite');
  if(btnDelitCard) {
    event.target.closest('.element').remove();
  }
}
element.addEventListener('click', delitCard);
//

//добавляем данные в value со страницы
function setInputValue() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubtitle.textContent;
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
    profileName.textContent=nameInput.value;
    profileSubtitle.textContent=jobInput.value;
    closeForm(popupTypeEdit);
}




//Открываем попап//
editButton.addEventListener('click', function() {
  openForm(popupTypeEdit);
});
buttonTypeAddCard.addEventListener('click', function() {
  openForm(popupAddTypePhoto);
});

//Закрываем попап//
buttonClose.addEventListener('click', function () {
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









  
  



