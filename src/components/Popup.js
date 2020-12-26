import {Esc} from './../utils/constants.js'
export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector
    }

    open () {
        this._popupSelector.classList.add('popup_opened'); 
       document.addEventListener('keydown', (evt) => {
       this._handleEscClose(evt)
       })
       document.addEventListener('click', (evt) => {
        this._closeByOverlayClick(evt)
       })
    }

    close () {
        this._popupSelector.classList.remove('popup_opened');
    }

    _handleEscClose (evt) {
        if(evt.keyCode === Esc){
           this.close();
        }
    }

    _closeByOverlayClick (evt) {
        if(evt.target.classList.contains('popup_opened') || evt.target.classList.contains('button_type_close')) {
            this.close();
        }
    }

    setEventListeners () {
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
        document.removeEventListener('click', (evt) => {
            this._closeByOverlayClick(evt)
        })
    }
}