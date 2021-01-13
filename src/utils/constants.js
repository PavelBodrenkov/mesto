export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const popupAddTypePhoto = document.querySelector('.popup_add_type-photo');
export const buttonTypeClose = document.querySelector('.button_type_close');
export const buttonTypeClosePhoto = document.querySelector('.button_type_close-photo');
export const buttonTypeEdit = document.querySelector('.button_type_edit');
export const profileName = document.querySelector('.profile__name');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const popupDataTypeName = document.querySelector('.popup__data_type_name');
export const popupDataTypeJob = document.querySelector('.popup__data_type_job');
export const buttonTypeAddCard = document.querySelector('.button_type_add-card');
export const formTypePhoto = document.querySelector('.form_type_photo');
export const formTypeEdit = document.querySelector('.form_type_edit');
export const popupDataTypeLocation = document.querySelector('.popup__data_type_location');
export const popupDataTypeLink = document.querySelector('.popup__data_type_link');
export const popapTypePhoto = document.querySelector('.popup_type_photo');
export const buttonTypeBigClose = document.querySelector('.button_type_big-close');
export const Esc = 27;
export const buttonTypeSaveEdit = document.querySelector('.button_type_save-edit');
export const elementContent = document.querySelector('.elements__content');
export const popupTypePhoto = document.querySelector('.popup_type_photo');
export const popupBigPhoto = document.querySelector('.popup__big-photo');
export const popupBigTitle = document.querySelector('.popup__big-title');
export const buttonTypeSaveAdd = document.querySelector('.button_type_save-add');
export const elementPhoto = document.querySelector('.element__photo');
export const elementSubtitle = document.querySelector('.element__subtitle');
export const elementAdd = document.querySelector('#element-add');
export const buttonTypeDelete = document.querySelector('.button_type_delete');
export const popupDelete = document.querySelector('.popup_delete');
export const popupAvatar = document.querySelector('.popup_avatar');
export const profileAvatarContainer = document.querySelector('.profile__avatar_container');
export const profileAvatar = document.querySelector('.profile__avatar');
export const formTypeAvatar = document.querySelector ('.form_type_avatar');
export const element = document.querySelector('.element');
export const formTypeDelete = document.querySelector('.form_type_delete')


export const initialCards = [
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

  export const validationConfig = {
    inputSelector: '.popup__data',
    submitButtonSelector: '.button',
    inputInvalidClass: 'popup__data_type_error',
    buttonInvalidClass: 'button_type_inactive',
    disableButtonInvalid: 'button_type_inactive'
  };
