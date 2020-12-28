import Popup from './../components/Popup.js';

export default class PopupWithImage extends Popup{
    constructor (popupSelector) {
        super(popupSelector)
        this._popupSelector = popupSelector;
    }

    open (data) {
        super.open()
        this.bigPhoto =  this._popupSelector.querySelector('.popup__big-photo')
        this.bigTitle =  this._popupSelector.querySelector('.popup__big-title')
        this.bigPhoto.src = data.link
        this.bigTitle.textContent = data.name
        this.bigPhoto.alt = `${data.name}`
    }
}
