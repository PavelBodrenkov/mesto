import {Esc} from './../utils/constants.js'
export default class Popup {
    constructor (popupElement) {
        this._popupElement = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeByOverlayClick = this._closeByOverlayClick.bind(this);
        this._closeByClickButton = this._closeByClickButton.bind(this);
    }

    open () {
      this._popupElement.classList.add('popup_opened');
       document.addEventListener('keydown', this._handleEscClose)
       this._popupElement.addEventListener('click', this._closeByOverlayClick)
    }



    close () {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
        this._popupElement.removeEventListener('click', this._closeByOverlayClick)
    }

    _handleEscClose (evt) {
        if(evt.keyCode === Esc){
           this.close();
        }
    }

    _closeByOverlayClick (evt) {
      if(evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    }

    _closeByClickButton (evt) {
      if(evt.target.classList.contains('button_type_close')) {
        this.close();
      }
    }

    setEventListeners () {
      this._popupElement.addEventListener('click', this._closeByClickButton)
    }
}
