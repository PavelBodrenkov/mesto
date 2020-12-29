import Popup from './../components/Popup.js';

export default class PopupWithImage extends Popup{
    constructor (popupElement) {
        super(popupElement)
        this._popupElement = popupElement;
    }

    open (data) {
        super.open()
        this.bigPhoto =  this._popupElement.querySelector('.popup__big-photo')
        this.bigTitle =  this._popupElement.querySelector('.popup__big-title')
        this.bigPhoto.src = data.link
        this.bigTitle.textContent = data.name
        this.bigPhoto.alt = `${data.name}`
    }
}
