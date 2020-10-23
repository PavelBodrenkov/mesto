let popup = document.querySelector('.popup');
let buttonClose = popup.querySelector('.popup__button-close');
let profileInfo = document.querySelector('.profile__info');
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');

//Открываем попап
editButton.addEventListener('click', openForm);
function openForm() {
    popup.classList.add('popup_opened');
}

//Закрываем попап
buttonClose.addEventListener('click', closeForm);
function closeForm(){
    popup.classList.remove('popup_opened');
}

//Функция закрывает форму клик по фону
function popupClickHandler(event) {
    if(event.target.classList.contains('popup')) {
        closeForm();
    }
}

let formElement = document.querySelector('.form');
function formSubmitHandler (evt) {
    evt.preventDefault();//убираем базовый функционал кнопки
    let nameInput = formElement.querySelector('.popup__data');
    let jobInput = formElement.querySelector('.popup__name');
    profileName.textContent=nameInput.value;
    profileSubtitle.textContent=jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 
formElement.addEventListener('submit', closeForm);
popup.addEventListener('click', popupClickHandler);
