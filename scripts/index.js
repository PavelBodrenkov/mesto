const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.button_type_close');
const editButton = document.querySelector('.button_type_edit');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.popup__data_name');
const jobInput = formElement.querySelector('.popup__data_job');


//добавляем данные в value со страницы
function setInputValue() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function openForm() {
    popup.classList.add('popup_opened');
    setInputValue();
}

function closeForm(){
    popup.classList.remove('popup_opened'); 
}
//Функция закрывает форму клик по фону//
function popupClickHandler(event) {
    if(event.target.classList.contains('popup')) {
        closeForm();
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent=nameInput.value;
    profileSubtitle.textContent=jobInput.value;
    closeForm();
}


//Открываем попап//
editButton.addEventListener('click', openForm);
//Закрываем попап//
buttonClose.addEventListener('click', closeForm);
formElement.addEventListener('submit', formSubmitHandler); 
popup.addEventListener('click', popupClickHandler);




