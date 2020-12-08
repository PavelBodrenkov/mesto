//Открываем попап
export function openPopup(popapOpen) {
    popapOpen.classList.add('popup_opened'); 
  }
  //Закрываем попап
export function closePopup(popapClose) {
    popapClose.classList.remove('popup_opened');
  }