import {Esc} from './../utils/constants.js'
export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeByOverlayClick = this._closeByOverlayClick.bind(this);
        this._buttonClose = this._buttonClose.bind(this);
    }

    open () {
        this._popupSelector.classList.add('popup_opened');
       document.addEventListener('keydown', this._handleEscClose)
       this._popupSelector.addEventListener('click', this._closeByOverlayClick)
    }



    close () {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
        this._popupSelector.removeEventListener('click', this._closeByOverlayClick)
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

    _buttonClose (evt) {
      if(evt.target.classList.contains('button_type_close')) {
        this.close();
      }
    }

    setEventListeners () {
      this._popupSelector.addEventListener('click', this._buttonClose)
    }
}
