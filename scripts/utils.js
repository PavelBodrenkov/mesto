  //Открываем попап
import {Esc} from './constants.js'
export function openPopup(popapOpen) {
    popapOpen.classList.add('popup_opened'); 
    document.addEventListener('keydown', closePopupEsc);
}
  //Закрываем попап
export function closePopup(popapClose) {
    popapClose.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

  //Закрываем по нажатию Esc
function closePopupEsc (evt) {
  if(evt.keyCode === Esc){
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

  // закрываем попап клик по фону
export function closeByOverlayClick (evt) {
  if(evt.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

  